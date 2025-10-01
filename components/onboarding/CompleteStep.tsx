import { OnboardingData } from '@/types/OnboardingTypes';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';

interface CompleteStepProps {
    data: OnboardingData;
}

export default function CompleteStep({ data }: CompleteStepProps) {
    const handleGetStarted = () => {
        console.log('Navigate to main app');
    };

    return (
        <View style={styles.container}>
            {/* Spiritual Background Elements */}
            <View style={styles.backgroundElements}>
                <Text style={styles.backgroundSymbol1}>🕉️</Text>
                <Text style={styles.backgroundSymbol2}>🪷</Text>
                <Text style={styles.backgroundSymbol3}>🙏</Text>
                <Text style={styles.backgroundSymbol4}>✨</Text>
                <Text style={styles.backgroundSymbol5}>📿</Text>
            </View>

            <View style={styles.content}>
                <Animated.View entering={FadeInUp.delay(300).duration(800)} style={styles.header}>
                    <Text style={styles.celebration}>🎉</Text>
                    <Text style={styles.title}>Welcome, {data.name}!</Text>
                    <Text style={styles.subtitle}>
                        Your spiritual journey begins now. May you find peace, purpose, and divine connection.
                    </Text>
                </Animated.View>

                <Animated.View entering={FadeInDown.delay(600).duration(800)} style={styles.summaryContainer}>
                    <Text style={styles.summaryTitle}>Your Journey Setup:</Text>
                    <View style={styles.summaryItem}>
                        <Text style={styles.summaryLabel}>Focus:</Text>
                        <Text style={styles.summaryValue}>{data.useCase}</Text>
                    </View>
                    <View style={styles.summaryItem}>
                        <Text style={styles.summaryLabel}>Account:</Text>
                        <Text style={styles.summaryValue}>
                            {data.hasCompletedAuth ? 'Signed In' : 'Guest Mode'}
                        </Text>
                    </View>
                    <View style={styles.summaryItem}>
                        <Text style={styles.summaryLabel}>Premium:</Text>
                        <Text style={styles.summaryValue}>
                            {data.hasSubscription ? 'Active' : 'Free Version'}
                        </Text>
                    </View>
                </Animated.View>

                <Animated.View entering={FadeInUp.delay(900).duration(800)} style={styles.inspirationContainer}>
                    <Text style={styles.inspirationQuote}>
                        "You are what you believe in. You become that which you believe you can become."
                    </Text>
                    <Text style={styles.inspirationSource}>- Bhagavad Gita 7.21</Text>
                </Animated.View>

                <Animated.View entering={FadeInUp.delay(1200).duration(800)} style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.startButton} onPress={handleGetStarted}>
                        <Text style={styles.startButtonText}>Begin My Journey</Text>
                    </TouchableOpacity>
                </Animated.View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffe8d1',
    },
    backgroundElements: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    backgroundSymbol1: {
        position: 'absolute',
        top: 100,
        left: 20,
        fontSize: 50,
        opacity: 0.08,
        transform: [{ rotate: '15deg' }],
    },
    backgroundSymbol2: {
        position: 'absolute',
        top: 200,
        right: 30,
        fontSize: 40,
        opacity: 0.1,
        transform: [{ rotate: '-20deg' }],
    },
    backgroundSymbol3: {
        position: 'absolute',
        top: 350,
        left: 40,
        fontSize: 35,
        opacity: 0.08,
        transform: [{ rotate: '25deg' }],
    },
    backgroundSymbol4: {
        position: 'absolute',
        bottom: 300,
        right: 50,
        fontSize: 30,
        opacity: 0.1,
        transform: [{ rotate: '-15deg' }],
    },
    backgroundSymbol5: {
        position: 'absolute',
        bottom: 150,
        left: 30,
        fontSize: 35,
        opacity: 0.08,
        transform: [{ rotate: '20deg' }],
    },
    content: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 80,
        paddingBottom: 60,
        justifyContent: 'space-between',
    },
    header: {
        alignItems: 'center',
    },
    celebration: {
        fontSize: 60,
        marginBottom: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: '700',
        color: '#2D2D2D',
        textAlign: 'center',
        marginBottom: 16,
    },
    subtitle: {
        fontSize: 18,
        color: '#666666',
        textAlign: 'center',
        lineHeight: 26,
    },
    summaryContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
    },
    summaryTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#2D2D2D',
        marginBottom: 16,
    },
    summaryItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    summaryLabel: {
        fontSize: 16,
        color: '#666666',
    },
    summaryValue: {
        fontSize: 16,
        color: '#2D2D2D',
        fontWeight: '500',
    },
    inspirationContainer: {
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    inspirationQuote: {
        fontSize: 16,
        color: '#2D2D2D',
        textAlign: 'center',
        lineHeight: 24,
        marginBottom: 12,
        fontStyle: 'italic',
    },
    inspirationSource: {
        fontSize: 14,
        color: '#E67E22',
        fontWeight: '600',
    },
    buttonContainer: {
        alignItems: 'center',
    },
    startButton: {
        backgroundColor: '#E67E22',
        paddingVertical: 20,
        borderRadius: 25,
        shadowColor: '#E67E22',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 12,
        elevation: 8,
        width: '100%',
    },
    startButtonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
    },
});