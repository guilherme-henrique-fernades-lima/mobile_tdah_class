import React, { useEffect } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { useRouter, useNavigation } from 'expo-router';

import { Button } from "@/components/Button";

import { ContainerTransitionScreen } from '@/components/ContainerTransitionScreen';

export default function Start() {

    const router = useRouter();
    const navigation = useNavigation();

    useEffect(() => {
        navigation.addListener('beforeRemove', (e) => {
            e.preventDefault();

            //Comentar para evitar a volta pelo botão de votar físico do dispositivo
            //navigation.dispatch(e.data.action);
        });
    }, []);

    const goToPage = () => {
        router.push("/test")
    };

    return (
        <ContainerTransitionScreen>

            <Image source={require('../../assets/images/logo-texto-branco.png')} style={styles.image} resizeMode="contain" />

            <View style={styles.wrapperImgTitle}>
                <Image source={require('../../assets/images/message-img.png')} style={styles.imageCenter} resizeMode="contain" />
                <Text style={styles.title}>Vamos iniciar o{"\n"}questionário?</Text>
            </View>
            <Button title="Iniciar" onPress={goToPage} />

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
        width: 160,
        height: 160
    },
    title: {
        fontSize: 32,
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

