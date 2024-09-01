import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import COLORS from '@/src/styles/tokens';

export function SplashScreen() {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/images/logo-splash.jpeg')} style={styles.image} resizeMode="contain" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.brand
    },
    image: {
        width: '100%',
    }
})

