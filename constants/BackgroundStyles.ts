import { Colors } from '@/constants/Colors';
import { StyleSheet } from 'react-native';
// import { Dimensions } from '../constants/dimensions';

export const BackgroundStyles = StyleSheet.create({
    // Spiritual Background Symbols
    backgroundSymbol1: {
        position: 'absolute',
        top: 120,
        left: 30,
        fontSize: 45,
        opacity: 0.08,
        transform: [{ rotate: '15deg' }],
        color: Colors.spiritualSymbol,
    },

    backgroundSymbol2: {
        position: 'absolute',
        top: 250,
        right: 30,
        fontSize: 35,
        opacity: 0.1,
        transform: [{ rotate: '-20deg' }],
        color: Colors.spiritualSymbolLight,
    },

    backgroundSymbol3: {
        position: 'absolute',
        bottom: 300,
        left: 40,
        fontSize: 40,
        opacity: 0.08,
        transform: [{ rotate: '25deg' }],
        color: Colors.spiritualSymbol,
    },

    backgroundSymbol4: {
        position: 'absolute',
        bottom: 200,
        right: 50,
        fontSize: 30,
        opacity: 0.1,
        transform: [{ rotate: '-15deg' }],
        color: Colors.spiritualSymbolLight,
    },

    backgroundSymbol5: {
        position: 'absolute',
        top: 350,
        left: 50,
        fontSize: 35,
        opacity: 0.08,
        transform: [{ rotate: '20deg' }],
        color: Colors.spiritualSymbol,
    },

    // Welcome Screen Specific
    welcomeSymbol1: {
        position: 'absolute',
        top: 100,
        left: 30,
        fontSize: 40,
        opacity: 0.1,
        transform: [{ rotate: '15deg' }],
        color: Colors.spiritualSymbol,
    },

    welcomeSymbol2: {
        position: 'absolute',
        top: 200,
        right: 50,
        fontSize: 35,
        opacity: 0.08,
        transform: [{ rotate: '-20deg' }],
        color: Colors.spiritualSymbolLight,
    },

    welcomeSymbol3: {
        position: 'absolute',
        bottom: 300,
        left: 50,
        fontSize: 30,
        opacity: 0.1,
        transform: [{ rotate: '25deg' }],
        color: Colors.spiritualSymbol,
    },

    welcomeSymbol4: {
        position: 'absolute',
        bottom: 200,
        right: 40,
        fontSize: 25,
        opacity: 0.08,
        transform: [{ rotate: '-15deg' }],
        color: Colors.spiritualSymbolLight,
    },

    // Complete Screen Specific
    completeSymbol1: {
        position: 'absolute',
        top: 100,
        left: 20,
        fontSize: 50,
        opacity: 0.08,
        transform: [{ rotate: '15deg' }],
        color: Colors.spiritualSymbol,
    },

    completeSymbol2: {
        position: 'absolute',
        top: 200,
        right: 30,
        fontSize: 40,
        opacity: 0.1,
        transform: [{ rotate: '-20deg' }],
        color: Colors.spiritualSymbolLight,
    },

    completeSymbol3: {
        position: 'absolute',
        top: 350,
        left: 40,
        fontSize: 35,
        opacity: 0.08,
        transform: [{ rotate: '25deg' }],
        color: Colors.spiritualSymbol,
    },

    completeSymbol4: {
        position: 'absolute',
        bottom: 300,
        right: 50,
        fontSize: 30,
        opacity: 0.1,
        transform: [{ rotate: '-15deg' }],
        color: Colors.spiritualSymbolLight,
    },

    completeSymbol5: {
        position: 'absolute',
        bottom: 150,
        left: 30,
        fontSize: 35,
        opacity: 0.08,
        transform: [{ rotate: '20deg' }],
        color: Colors.spiritualSymbol,
    },
});