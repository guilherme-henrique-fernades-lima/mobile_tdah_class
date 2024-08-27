import React from 'react';
import { View, StyleSheet, Text, } from 'react-native';

import { Button } from "@/components/Button";
import { Container } from '@/components/Container';
import { Link } from 'expo-router';


export default function Index() {
    return (
        <Container header boxContent>

            <Text style={styles.titleQuestion}>Questionário</Text>


            <Link href="/diagnostic">
                <Text style={styles.link}>resultado</Text>
            </Link>

            <Link href="/terms">
                <Text style={styles.link}>termos</Text>
            </Link>

            <Link href="/start">
                <Text style={styles.link}>Start</Text>
            </Link>

            <Button title='Continuar' />
            <View style={styles.buttonActions}>
                <Button title='Voltar' size='small' />
                <Button title='Próximo' size='small' />
            </View>
        </Container>
    );
}

const styles = StyleSheet.create({
    buttonActions: {
        flexDirection: 'row',
        width: '100%',
        marginVertical: 20,
        justifyContent: "space-between"
    },
    titleQuestion: {
        fontSize: 24,
        color: '#0088F2',
        fontWeight: 'bold',
        marginBottom: 30
    },
    link: {
        marginVertical: 50
    }
})

