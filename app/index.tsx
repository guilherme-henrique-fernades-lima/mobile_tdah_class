import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { useRouter, useNavigation } from 'expo-router';
import { useFonts } from 'expo-font';
import * as Splash_Screen from 'expo-splash-screen';


import COLORS from "@/src/styles/tokens";

import { Button } from "@/components/Button";
import { Container } from '@/components/Container';
import { SplashScreen } from '@/components/SplashScreen';

export default function Index() {

    Splash_Screen.preventAutoHideAsync();

    const [fontsLoaded] = useFonts({
        'regular': require('../assets/fonts/Lato-Regular.ttf'),
        'bold': require('../assets/fonts/Lato-Bold.ttf'),
    });


    const router = useRouter();
    const navigation = useNavigation();

    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        navigation.addListener('beforeRemove', (e) => {
            e.preventDefault();
            //Comentar para permitir a volta pelo botão de votar físico do dispositivo
            //navigation.dispatch(e.data.action);
        });
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2500);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (fontsLoaded) {
            Splash_Screen.hideAsync();
        }
    }, [fontsLoaded]);

    const goToScreen = () => {
        router.push("/instructions")
    };

    if (!fontsLoaded) {
        // Enquanto as fontes estão carregando, retorne null ou algum indicador de carregamento
        return null;
    }

    return (

        <>{
            loading
                ?
                <SplashScreen />
                :
                <Container header boxContent onlyBrand>
                    <Text style={styles.title}>Termo de Uso e Condições</Text>

                    <ScrollView contentContainerStyle={styles.scrollContainer}>

                        <Text style={styles.bodyText}>
                            Ao utilizar este aplicativo, você, professor(a), concorda que a ferramenta foi desenvolvida para auxiliar na
                            identificação de possíveis sintomas de Transtorno do Déficit de Atenção e Hiperatividade (TDAH) entre os alunos,
                            sendo de fundamental compreensão que o resultado não substitui uma avaliação médica ou psicológica profissional.
                            O aplicativo serve como um recurso adicional para apoiar suas observações, mas os resultados não devem ser considerados
                            um diagnóstico definitivo.
                        </Text>

                        <Text style={styles.bodyText}>As informações inseridas no aplicativo e os resultados obtidos são mantidos em total confidencialidade, onde nenhum
                            dado relacionado ao aluno será salvo ou armazenado no aplicativo, garantindo que todas as interações sejam anônimas e protegidas.</Text>

                        <Text style={styles.bodyText}>O professor se compromete a utilizar o aplicativo de maneira ética e responsável, respeitando a privacidade dos alunos e
                            utilizando as informações exclusivamente para o fim educacional proposto e melhor percepção sobre os discentes.</Text>

                        <Text style={styles.bodyText}>Ao continuar, você concorda em respeitar as diretrizes de uso, compreendendo as limitações do aplicativo e
                            assumindo o compromisso com a ética e a confidencialidade dos dados tratados.</Text>

                    </ScrollView>

                    <View style={{ marginBottom: 40 }} />

                    <Button title="Aceitar e Continuar" onPress={goToScreen} />
                </Container>
        }</>



    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        color: '#292929',
        marginBottom: 30,
        textAlign: 'left',
        width: '100%',
        fontFamily: 'bold'
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

})

