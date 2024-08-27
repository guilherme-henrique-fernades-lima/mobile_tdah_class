import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, ImageBackground } from "react-native";
import { StatusBar } from 'expo-status-bar';

import COLORS from "@/src/styles/tokens";

interface ContainerProps {
    children: React.ReactNode
}

export const ContainerTransitionScreen: React.FC<ContainerProps> = ({ children }) => {
    return (
        <ImageBackground
            source={require('../assets/images/bg-vetor.png')}
            style={styles.background}
            resizeMode="cover"
        >
            <StatusBar style="light" backgroundColor={COLORS.brand} />

            {/* Use um View centralizado para o conteúdo */}
            <View style={styles.container}>
                {children}
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.brand
    },
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 52,
        paddingVertical: 70,
    },
});
