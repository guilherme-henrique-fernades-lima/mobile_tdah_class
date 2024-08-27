import React from 'react';
import { View, StyleSheet, Text, } from 'react-native';

import { Button } from "@/components/Button";
import { Container } from '@/components/Container';
import { ResultDiagnostic } from '@/components/ResultDiagnostic';

export default function Diagnostic() {
    return (
        <Container header boxContent>
            <ResultDiagnostic type='danger' />
        </Container>
    );
}
