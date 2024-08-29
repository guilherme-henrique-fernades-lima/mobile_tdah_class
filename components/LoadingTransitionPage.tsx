import React from 'react';
import { View, StyleSheet, Text, Image, ActivityIndicator } from 'react-native';
import { ContainerTransitionScreen } from '@/components/ContainerTransitionScreen';

export function LoadingTransitionPage() {
    return (
        <ContainerTransitionScreen>
            <Image source={require('../assets/images/logo-texto-branco.png')} style={styles.image} resizeMode="contain" />
            <View>
                <ActivityIndicator size={70} color="#1FB1FF" />
                <Text style={styles.text}>Carregando suas{"\n"}respostas</Text>
            </View>
            <View />
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
    },
    text: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        marginTop: 30
    }
})

