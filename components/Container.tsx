import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { StatusBar } from 'expo-status-bar';

import COLORS from "@/src/styles/tokens";

//Icons
import Entypo from '@expo/vector-icons/Entypo';



interface ContainerProps {
    header: boolean;
    children?: React.ReactNode;
    boxContent: boolean;
}

export const Container: React.FC<ContainerProps> = ({ header = true, boxContent, children }) => {
    return (
        <View style={styles.container}>
            <StatusBar style="dark" backgroundColor="#f6f8fb" />
            <View style={styles.header}>
                <TouchableOpacity style={styles.buttonGoToBegin}>
                    <Entypo name="home" size={18} color={COLORS.primary} />
                    <Text style={styles.headerBeginText}>Início</Text>
                </TouchableOpacity>

                <Image source={require('../assets/images/logo-texto.jpeg')} style={styles.image} resizeMode="contain" />
            </View>

            {
                boxContent
                    ?
                    <View style={styles.boxContent}>
                        {children}
                    </View>
                    :
                    <>{children}</>
            }

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f6f8fb',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: 12,
        paddingBottom: 30
    },
    boxContent: {
        flexDirection: 'column',
        width: '100%',
        flex: 1,
        paddingHorizontal: 30,
        paddingVertical: 40,
        backgroundColor: '#fff',
        borderTopStartRadius: 8,
        borderBottomStartRadius: 8,
        borderTopEndRadius: 8,
        borderBottomEndRadius: 8,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 28,
        width: '100%'
    },
    headerBeginText: {
        fontSize: 12,
        marginLeft: 10,
        fontWeight: 'bold',
        color: COLORS.primary
    },
    buttonGoToBegin: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 120,
        height: 14,

    }
});
