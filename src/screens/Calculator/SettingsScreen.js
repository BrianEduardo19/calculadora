import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function SettingsScreen() {
    const navigation = useNavigation();
    const [darkMode, setDarkMode] = useState(true);
    const [vibration, setVibration] = useState(true);
    const [sound, setSound] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.backButton}>← Atrás</Text>
                </TouchableOpacity>
                <Text style={styles.title}>Configuración</Text>
            </View>

            <View style={styles.settingsList}>
                <View style={styles.settingItem}>
                    <Text style={styles.settingText}>Modo Oscuro</Text>
                    <Switch
                        value={darkMode}
                        onValueChange={setDarkMode}
                        trackColor={{ false: '#767577', true: '#4CAF50' }}
                        thumbColor={darkMode ? '#fff' : '#f4f3f4'}
                    />
                </View>

                <View style={styles.settingItem}>
                    <Text style={styles.settingText}>Vibración</Text>
                    <Switch
                        value={vibration}
                        onValueChange={setVibration}
                        trackColor={{ false: '#767577', true: '#4CAF50' }}
                        thumbColor={vibration ? '#fff' : '#f4f3f4'}
                    />
                </View>

                <View style={styles.settingItem}>
                    <Text style={styles.settingText}>Sonido</Text>
                    <Switch
                        value={sound}
                        onValueChange={setSound}
                        trackColor={{ false: '#767577', true: '#4CAF50' }}
                        thumbColor={sound ? '#fff' : '#f4f3f4'}
                    />
                </View>

                <TouchableOpacity style={styles.settingItem}>
                    <Text style={styles.settingText}>Acerca de</Text>
                    <Text style={styles.settingValue}>v1.0.0</Text>
                </TouchableOpacity>
            </View>
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
    settingsList: {
        padding: 20,
    },
    settingItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#333',
        padding: 20,
        borderRadius: 10,
        marginBottom: 15,
    },
    settingText: {
        fontSize: 18,
        color: '#fff',
    },
    settingValue: {
        fontSize: 16,
        color: '#888',
    },
});