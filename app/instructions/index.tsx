import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useRouter, useNavigation } from 'expo-router';

import COLORS from "@/src/styles/tokens";

import { Button } from "@/components/Button";
import { Container } from '@/components/Container';

import Swiper from 'react-native-swiper'

export default function Instructions() {

    const router = useRouter();
    const navigation = useNavigation();

    const [disableButton, setDisableButton] = useState(true);

    useEffect(() => {
        navigation.addListener('beforeRemove', (e) => {
            e.preventDefault();
            //Comentar para permitir a volta pelo botão de votar físico do dispositivo
            //navigation.dispatch(e.data.action);
        });
    }, []);

    const handleIndexChanged = (index: number) => {
        if (index === 2) {
            setDisableButton(false);
        }
    };

    const handleContinue = () => {
        router.push("/start")
    };

    return (
        <Container header boxContent onlyBrand>
            <Text style={styles.title}>Instruções de uso</Text>

            <Swiper style={styles.wrapper} loop={false} showsButtons={false} onIndexChanged={handleIndexChanged}>
                <View style={styles.slide1}>
                    <Text style={styles.text}>Para utilizar o aplicativo, basta clicar em uma das opções de resposta: <Text style={styles.highlightedText}>“Nunca”</Text>, <Text style={styles.highlightedText}>“Às vezes”</Text>, <Text style={styles.highlightedText}>"Frequentemente"</Text>, <Text style={styles.highlightedText}>"Muito frequentemente"</Text>, para cada pergunta, baseando-se nos sinais e sintomas observados individualmente em cada aluno.
                        {"\n"}{"\n"}Ao final do questionário, o aplicativo gerará um resultado que corresponde à somatória das respostas dadas.</Text>
                </View>
                <View style={styles.slide2}>
                    <Text style={styles.text}>Este resultado servirá como um indicativo para apoiar suas observações em sala de aula e tem como referência escalas já validadas para auxiliar na identificação de crianças com TDAH.</Text>
                </View>
                <View style={styles.slide3}>
                    <Text style={styles.text}>É indicado considerar que:{"\n"}{"\n"}<Text style={styles.highlightedText}>“Nunca”</Text> corresponde a apenas um ou nenhum episódio por semana.{"\n"}{"\n"}<Text style={styles.highlightedText}>“Às vezes”</Text>, se refere a dois ou três episódios semanais.{"\n"}{"\n"}<Text style={styles.highlightedText}>“Frequentemente”</Text>, deve ser considerado quando há episódios durante todos os dias da semana.{"\n"}{"\n"}<Text style={styles.highlightedText}>“Muito frequentemente”</Text>, se aplica a sinais e/ou sintomas que persistem todos os dias e ocorrem mais de uma vez por dia.</Text>
                </View>
            </Swiper>

            <Button title="Continuar" disabled={disableButton} onPress={handleContinue} />
        </Container>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        color: '#292929',
        fontFamily: 'bold',
        marginBottom: 30,
        textAlign: 'left',
        width: '100%'
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bodyText: {
        fontSize: 14,
        color: COLORS.secondary,
        textAlign: 'left',
        width: '100%',
        marginVertical: 10,
        fontFamily: 'regular'
    },
    wrapper: {},

    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#8493AC',
        fontSize: 12,
        textAlign: 'left',
        fontFamily: 'regular'
    },
    highlightedText: {
        color: COLORS.primary,
        fontFamily: 'bold'
    }
})

