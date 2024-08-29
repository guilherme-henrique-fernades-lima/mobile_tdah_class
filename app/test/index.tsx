import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useRouter, useNavigation } from 'expo-router';
import { Container } from '@/components/Container';
import { Button } from '@/components/Button';

import COLORS from '@/src/styles/tokens';
import QUESTIONS from '@/assets/json/questions.json';

const options = [
    { label: 'Nunca', value: 'nunca', score: 0 },
    { label: 'Às vezes', value: 'as_vezes', score: 1 },
    { label: 'Frequentemente', value: 'frequentemente', score: 2 },
    { label: 'Muito frequentemente', value: 'muito_frequentemente', score: 3 },
];

export default function Test() {

    const router = useRouter();
    const navigation = useNavigation();

    useEffect(() => {
        navigation.addListener('beforeRemove', (e) => {
            e.preventDefault();
            //Comentar para evitar a volta pelo botão de votar físico do dispositivo
            //navigation.dispatch(e.data.action);
        });
    }, []);

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState<Array<{ id: number; answer: string | null; type: string; score: number | null }>>(
        Array.from({ length: QUESTIONS.length }, (_, index) => ({
            id: index,
            answer: null,
            type: QUESTIONS[index].type,
            score: null
        }))
    );

    const goToScreen = async () => {
        await AsyncStorage.setItem('answers', JSON.stringify(answers));
        router.push('/diagnostic')
    };

    const handleAnswerSelection = (value: string) => {
        const selectedOption = QUESTIONS[currentQuestion].options.find(option => option.value === value);
        const updatedAnswers = answers.map((answer) =>
            answer.id === currentQuestion
                ? { ...answer, answer: value, type: QUESTIONS[currentQuestion].type, score: selectedOption?.score || 0 }
                : answer
        );
        setAnswers(updatedAnswers);
    };

    const goToNextQuestion = () => {
        if (currentQuestion < QUESTIONS.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            goToScreen();
        }
    };

    const goToPreviousQuestion = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    // Verifica se a resposta para a questão atual é nula
    const isNextDisabled = answers[currentQuestion].answer === null;

    return (
        <Container header boxContent>
            <View style={styles.container}>
                <View style={styles.containerQuestion}>
                    <Text style={styles.headerTitle}>Questionário</Text>
                    <View style={styles.containerTitleQuestion}>
                        <Text style={styles.indexText}>{currentQuestion + 1}.</Text>
                        <Text style={styles.questionTitle}>
                            {QUESTIONS[currentQuestion].question}
                        </Text>
                    </View>

                    <View style={styles.radioButtonGroup}>
                        {QUESTIONS[currentQuestion].options.map((option) => (
                            <TouchableOpacity
                                key={option.value}
                                style={styles.radioButtonItem}
                                onPress={() => handleAnswerSelection(option.value)}
                                activeOpacity={1}
                            >
                                <View style={styles.radioButtonCircle}>
                                    {answers[currentQuestion].answer === option.value && (
                                        <View style={styles.radioButtonSelected} />
                                    )}
                                </View>

                                <Text
                                    style={[
                                        styles.radioButtonLabel,
                                        answers[currentQuestion].answer === option.value && styles.radioButtonLabelSelected,
                                    ]}
                                >
                                    {option.label}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                <View style={styles.buttonActions}>
                    <Button title="Voltar" size="small" onPress={goToPreviousQuestion} disabled={currentQuestion === 0 ? true : false} />
                    <Button title="Próximo" size="small" onPress={goToNextQuestion} disabled={isNextDisabled} />
                </View>
            </View>
        </Container>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
    buttonActions: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
    },
    headerTitle: {
        fontSize: 24,
        color: COLORS.primary,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    containerQuestion: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: '100%',
    },
    questionTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'left',
    },
    containerTitleQuestion: {
        flexDirection: 'row',
        width: '100%',
        height: 100,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    indexText: {
        marginRight: 5,
        fontWeight: 'bold'
    },
    radioButtonGroup: {
        marginHorizontal: 20,
        width: '100%',
    },
    radioButtonItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 12,
    },
    radioButtonCircle: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: COLORS.primary,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    radioButtonSelected: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: '#0088F2',
    },
    radioButtonLabel: {
        fontSize: 16,
        color: '#B7B7B7',
    },
    radioButtonLabelSelected: {
        color: COLORS.primary,
        fontWeight: 'bold'
    },
});
