import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

//Components
import { Container } from '@/components/Container';
import { ResultDiagnostic } from '@/components/ResultDiagnostic';
import { LoadingTransitionPage } from '@/components/LoadingTransitionPage';

type Answer = {
    answer: string;
    id: number;
    score: number;
    type: string;
};

type Result = {
    [key: string]: number;
};

export default function Diagnostic() {

    const [loading, setLoading] = useState(true)
    const [result, setResult] = useState<Result>({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await AsyncStorage.getItem('answers');
                const parsedData = data ? JSON.parse(data) : [];
                calculateScores(parsedData)

            } catch (error) {
                console.error('Error fetching data from AsyncStorage:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])

    const calculateScores = (answers: Answer[]): void => {
        const result: Result = {};

        answers.forEach(answer => {
            if (!result[answer.type]) {
                result[answer.type] = 0;
            }
            result[answer.type] += answer.score;
        });

        setResult(result)
    };

    const determineAlertLevel = (result: Result): 'danger' | 'warning' | 'success' => {
        const desatencaoScore = result['Desatenção'] || 0;
        const hiperatividadeScore = result['Hiperatividade'] || 0;

        if (desatencaoScore >= 13 && hiperatividadeScore >= 13) {
            return 'danger';
        } else if ((desatencaoScore >= 13 && hiperatividadeScore < 13) ||
            (desatencaoScore < 13 && hiperatividadeScore >= 13)) {
            return 'warning';
        } else {
            return 'success';
        }
    };

    return (
        <>
            {loading
                ?
                <LoadingTransitionPage />
                :
                <Container header boxContent onlyBrand>
                    <ResultDiagnostic type={determineAlertLevel(result)} />
                </Container>}
        </>
    );
}
