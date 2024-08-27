import React from 'react';
import { View, StyleSheet, Text, Image, ImageBackground } from 'react-native';

import { Button } from "@/components/Button";

import { ContainerTransitionScreen } from '@/components/ContainerTransitionScreen';

export default function Loading() {
    return (
        <ContainerTransitionScreen>

            <Image source={require('../../assets/images/logo-texto-branco.png')} style={styles.image} resizeMode="contain" />

            <View style={styles.wrapperImgTitle}>
                <Image source={require('../../assets/images/message-img.png')} style={styles.imageCenter} resizeMode="contain" />
                <Text style={styles.title}>Vamos iniciar o{"\n"}questionário?</Text>
            </View>
            <Button title="Iniciar" />

        </ContainerTransitionScreen>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 160,
        height: 40
    },
    imageCenter: {
        width: 200,
        height: 200
    },
    title: {
        fontSize: 40,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    wrapperImgTitle: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    }
})

