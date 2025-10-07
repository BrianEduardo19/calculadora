import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function CalculatorScreen() {
    const navigation = useNavigation();
    const [display, setDisplay] = useState('0');
    const [history, setHistory] = useState([]);
    const [currentOperation, setCurrentOperation] = useState(null);
    const [previousValue, setPreviousValue] = useState(null);
    const [waitingForOperand, setWaitingForOperand] = useState(false);

    const handleNumber = (num) => {
        if (waitingForOperand) {
            setDisplay(String(num));
            setWaitingForOperand(false);
        } else {
            setDisplay(display === '0' ? String(num) : display + num);
        }
    };

    const handleOperator = (operator) => {
        const inputValue = parseFloat(display);

        if (previousValue === null) {
            setPreviousValue(inputValue);
        } else if (currentOperation) {
            const result = performOperation(previousValue, inputValue, currentOperation);
            setDisplay(String(result));
            setPreviousValue(result);
        }

        setWaitingForOperand(true);
        setCurrentOperation(operator);
    };

    const performOperation = (prev, current, operation) => {
        switch (operation) {
            case '+': return prev + current;
            case '-': return prev - current;
            case '×': return prev * current;
            case '÷': return prev / current;
            default: return current;
        }
    };

    const handleEqual = () => {
        const inputValue = parseFloat(display);

        if (currentOperation && previousValue !== null) {
            const result = performOperation(previousValue, inputValue, currentOperation);
            const calculation = `${previousValue} ${currentOperation} ${inputValue} = ${result}`;
            
            setHistory([calculation, ...history]);
            setDisplay(String(result));
            setPreviousValue(null);
            setCurrentOperation(null);
            setWaitingForOperand(true);
        }
    };

    const handleClear = () => {
        setDisplay('0');
        setPreviousValue(null);
        setCurrentOperation(null);
        setWaitingForOperand(false);
    };

    const handleDelete = () => {
        if (display.length > 1) {
            setDisplay(display.slice(0, -1));
        } else {
            setDisplay('0');
        }
    };

    const handleDecimal = () => {
        if (!display.includes('.')) {
            setDisplay(display + '.');
        }
    };

    return (
        <View style={styles.container}>
            {/* Header con botones */}
            <View style={styles.header}>
                <TouchableOpacity 
                    style={styles.headerButton}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={styles.headerButtonText}>←</Text>
                </TouchableOpacity>
                
                <Text style={styles.headerTitle}>Calculadora</Text>
                
                <View style={styles.headerRight}>
                    <TouchableOpacity 
                        style={styles.headerButton}
                        onPress={() => navigation.navigate('HistoryScreen', { history })}
                    >
                        <Text style={styles.headerButtonText}>📋</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity 
                        style={styles.headerButton}
                        onPress={() => navigation.navigate('SettingsScreen')}
                    >
                        <Text style={styles.headerButtonText}>⚙️</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Display */}
            <View style={styles.displayContainer}>
                <Text style={styles.displayText}>{display}</Text>
            </View>

            {/* Botones */}
            <View style={styles.buttonsContainer}>
                <View style={styles.row}>
                    <TouchableOpacity style={[styles.button, styles.functionButton]} onPress={handleClear}>
                        <Text style={styles.functionButtonText}>C</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.functionButton]} onPress={handleDelete}>
                        <Text style={styles.functionButtonText}>⌫</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.functionButton]} onPress={() => handleOperator('÷')}>
                        <Text style={styles.functionButtonText}>÷</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.row}>
                    <TouchableOpacity style={styles.button} onPress={() => handleNumber(7)}>
                        <Text style={styles.buttonText}>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => handleNumber(8)}>
                        <Text style={styles.buttonText}>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => handleNumber(9)}>
                        <Text style={styles.buttonText}>9</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.operatorButton]} onPress={() => handleOperator('×')}>
                        <Text style={styles.operatorButtonText}>×</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.row}>
                    <TouchableOpacity style={styles.button} onPress={() => handleNumber(4)}>
                        <Text style={styles.buttonText}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => handleNumber(5)}>
                        <Text style={styles.buttonText}>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => handleNumber(6)}>
                        <Text style={styles.buttonText}>6</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.operatorButton]} onPress={() => handleOperator('-')}>
                        <Text style={styles.operatorButtonText}>-</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.row}>
                    <TouchableOpacity style={styles.button} onPress={() => handleNumber(1)}>
                        <Text style={styles.buttonText}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => handleNumber(2)}>
                        <Text style={styles.buttonText}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => handleNumber(3)}>
                        <Text style={styles.buttonText}>3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.operatorButton]} onPress={() => handleOperator('+')}>
                        <Text style={styles.operatorButtonText}>+</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.row}>
                    <TouchableOpacity style={[styles.button, styles.zeroButton]} onPress={() => handleNumber(0)}>
                        <Text style={styles.buttonText}>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={handleDecimal}>
                        <Text style={styles.buttonText}>.</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.equalsButton]} onPress={handleEqual}>
                        <Text style={styles.equalsButtonText}>=</Text>
                    </TouchableOpacity>
                </View>
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
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 50,
        paddingHorizontal: 20,
        paddingBottom: 10,
        backgroundColor: '#252525',
    },
    headerButton: {
        padding: 10,
    },
    headerButtonText: {
        fontSize: 24,
        color: '#fff',
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    headerRight: {
        flexDirection: 'row',
    },
    displayContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 20,
    },
    displayText: {
        fontSize: 60,
        color: '#fff',
        fontWeight: '300',
    },
    buttonsContainer: {
        padding: 10,
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    button: {
        flex: 1,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#333',
        margin: 5,
        borderRadius: 20,
    },
    zeroButton: {
        flex: 2,
    },
    buttonText: {
        fontSize: 28,
        color: '#fff',
    },
    functionButton: {
        backgroundColor: '#505050',
    },
    functionButtonText: {
        fontSize: 28,
        color: '#fff',
    },
    operatorButton: {
        backgroundColor: '#FF9500',
    },
    operatorButtonText: {
        fontSize: 32,
        color: '#fff',
    },
    equalsButton: {
        backgroundColor: '#4CAF50',
    },
    equalsButtonText: {
        fontSize: 32,
        color: '#fff',
    },
});