import { View, Text, StyleSheet, Image } from "react-native";
import { Link } from 'expo-router';

import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
//Tokens
import COLORS from "@/src/styles/tokens";

//Components
import { Button } from "./Button";
import React from "react";

interface ResultProps {
    type?: 'warning' | 'danger' | 'success';
}

interface Content {
    icon?: React.ReactNode,
    title: string;
    bodyText: string;
    buttonType: "primary" | "warning" | "danger" | "success";
    titleColor: string;
}

export const ResultDiagnostic: React.FC<ResultProps> = ({ type = "success" }) => {

    // Define the content based on the type prop
    const content: Record<'danger' | 'warning' | 'success', Content> = {
        danger: {
            title: 'Alta\nProbabilidade',
            bodyText: 'A somatória das respostas indica uma alta probabilidade de TDAH para Desatenção e Hiperatividade.\n\nO aluno apresenta muitos sinais consistentes com o TDAH. Recomenda-se uma avaliação mais aprofundada por um profissional de saúde especializado para confirmar e orientar o manejo adequado.',
            buttonType: 'danger',
            titleColor: COLORS.danger,
        },
        warning: {
            title: 'Moderada\nProbabilidade',
            bodyText: 'A somatória das respostas sugere uma moderada probabilidade de TDAH.\n\nEste resultado indica que é importante monitorar o comportamento do aluno e considerar uma avaliação adicional para uma compreensão mais detalhada.',
            buttonType: 'warning',
            titleColor: COLORS.warning,
        },
        success: {
            title: 'Baixa\nProbabilidade',
            bodyText: 'A somatória das respostas indica uma baixa probabilidade de TDAH para Desatenção e Hiperatividade.\n\nO aluno não apresenta sinais significativos de TDAH com base nas respostas fornecidas. No entanto, esse resultado não descarta totalmente a possibilidade de diagnóstico, e a consulta com profissionais capacitados ainda pode ser necessária.',
            buttonType: 'success',
            titleColor: COLORS.success,
        },
    };

    const { icon, title, bodyText, buttonType, titleColor } = content[type];

    return (
        <View style={styles.content}>

            <View style={[styles.icon, { borderColor: titleColor }]}>
                <FontAwesome5 name="clipboard-list" size={80} color={titleColor} />
            </View>


            <Text style={[styles.title, { color: titleColor }]}>{title}</Text>
            <Text style={styles.bodyText}>{bodyText}</Text>

            <Button title="Início" type={buttonType} />
        </View>
    );
};

const styles = StyleSheet.create({
    content: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around"
    },
    title: {
        textAlign: "center",
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
    },
    bodyText: {
        textAlign: "center",
        color: COLORS.secondary,
        marginBottom: 20,
        fontSize: 14
    },
    icon: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 4,
        borderRadius: 100,
        width: 130,
        height: 130,
    }
});
