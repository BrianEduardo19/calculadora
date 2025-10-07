import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

export function HistoryScreen() {
    const navigation = useNavigation();
    const route = useRoute();
    const { history = [] } = route.params || {};

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.backButton}>← Atrás</Text>
                </TouchableOpacity>
                <Text style={styles.title}>Historial</Text>
            </View>

            <ScrollView style={styles.historyList}>
                {history.length === 0 ? (
                    <Text style={styles.emptyText}>No hay cálculos en el historial</Text>
                ) : (
                    history.map((item, index) => (
                        <View key={index} style={styles.historyItem}>
                            <Text style={styles.historyText}>{item}</Text>
                        </View>
                    ))
                )}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1a1a1a',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 50,
        paddingHorizontal: 20,
        paddingBottom: 20,
        backgroundColor: '#252525',
    },
    backButton: {
        fontSize: 18,
        color: '#4CAF50',
        marginRight: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
    historyList: {
        flex: 1,
        padding: 20,
    },
    historyItem: {
        backgroundColor: '#333',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
    },
    historyText: {
        fontSize: 18,
        color: '#fff',
    },
    emptyText: {
        fontSize: 18,
        color: '#888',
        textAlign: 'center',
        marginTop: 50,
    },
});