import React from 'react';
import { View, StyleSheet, Text, } from 'react-native';

import { Button } from "@/components/Button";
import { Container } from '@/components/Container';
import { Link } from 'expo-router';


export default function Index() {


    return (
        <Container header boxContent>

            <Link href="/test">
                <Text style={styles.link}>teste</Text>
            </Link>

            <Link href="/instructions">
                <Text style={styles.link}>instruções</Text>
            </Link>

            <Link href="/loading">
                <Text style={styles.link}>loading</Text>
            </Link>

            <Link href="/diagnostic">
                <Text style={styles.link}>resultado</Text>
            </Link>

            <Link href="/terms">
                <Text style={styles.link}>termos</Text>
            </Link>

            <Link href="/start">
                <Text style={styles.link}>Start</Text>
            </Link>

        </Container>
    );
}

const styles = StyleSheet.create({

    link: {
        marginVertical: 70
    }
})

