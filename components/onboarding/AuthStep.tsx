import { OnboardingData } from '@/types/OnboardingTypes';
import { Info } from 'lucide-react-native';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';

interface AuthStepProps {
    onNext: () => void;
    onPrev: () => void;
    data: OnboardingData;
    updateData: (key: keyof OnboardingData, value: any) => void;
    currentStep: number;
    totalSteps: number;
}

export default function AuthStep({ onNext, onPrev, data, updateData, currentStep, totalSteps }: AuthStepProps) {
    const handleAppleSignIn = () => {
        Alert.alert('Apple Sign In', 'Apple Sign In would be implemented here');
        updateData('hasCompletedAuth', true);
        onNext();
    };

    const handleGoogleSignIn = () => {
        Alert.alert('Google Sign In', 'Google Sign In would be implemented here');
        updateData('hasCompletedAuth', true);
        onNext();
    };

    // Progress dots (excluding welcome and complete steps)
    const progressSteps = totalSteps - 2;
    const currentProgressStep = currentStep - 1;

    return (
        <View style={styles.container}>
            {/* Spiritual Background Elements */}
            <View style={styles.backgroundElements}>
                <Text style={styles.backgroundSymbol1}>🙏</Text>
                <Text style={styles.backgroundSymbol2}>🕉️</Text>
                <Text style={styles.backgroundSymbol3}>✨</Text>
                <Text style={styles.backgroundSymbol4}>📿</Text>
            </View>

            <Animated.View entering={FadeInUp.duration(600)} style={styles.infoButton}>
                <View style={styles.infoIconContainer}>
                    <Info size={20} color="#E67E22" />
                </View>
            </Animated.View>

            <View style={styles.content}>
                <Animated.View entering={FadeInDown.delay(300).duration(600)} style={styles.header}>
                    <Text style={styles.title}>Create Your Sacred Space</Text>
                </Animated.View>

                <Animated.View entering={FadeInDown.delay(600).duration(600)} style={styles.authContainer}>
                    <TouchableOpacity style={styles.appleButton} onPress={handleAppleSignIn}>
                        <Text style={styles.appleIcon}>🍎</Text>
                        <Text style={styles.appleButtonText}>Sign in with Apple</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.googleButton} onPress={handleGoogleSignIn}>
                        <Text style={styles.googleIcon}>G</Text>
                        <Text style={styles.googleButtonText}>Sign in with Google</Text>
                    </TouchableOpacity>
                </Animated.View>

                <Animated.View entering={FadeInUp.delay(900).duration(600)} style={styles.bottomContainer}>
                    <View style={styles.progressContainer}>
                        {Array.from({ length: progressSteps }, (_, index) => (
                            <View
                                key={index}
                                style={[
                                    styles.progressDot,
                                    index === currentProgressStep && styles.activeDot,
                                ]}
                            />
                        ))}
                    </View>
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
        top: 150,
        left: 30,
        fontSize: 40,
        opacity: 0.1,
        transform: [{ rotate: '20deg' }],
    },
    backgroundSymbol2: {
        position: 'absolute',
        top: 250,
        right: 40,
        fontSize: 45,
        opacity: 0.08,
        transform: [{ rotate: '-15deg' }],
    },
    backgroundSymbol3: {
        position: 'absolute',
        bottom: 300,
        left: 50,
        fontSize: 30,
        opacity: 0.1,
        transform: [{ rotate: '25deg' }],
    },
    backgroundSymbol4: {
        position: 'absolute',
        bottom: 200,
        right: 30,
        fontSize: 35,
        opacity: 0.08,
        transform: [{ rotate: '-20deg' }],
    },
    infoButton: {
        position: 'absolute',
        top: 60,
        right: 24,
        zIndex: 1,
    },
    infoIconContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#FFF8F0',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        flex: 1,
        paddingHorizontal: 24,
        justifyContent: 'space-between',
        paddingBottom: 60,
    },
    header: {
        alignItems: 'center',
        marginTop: 200,
    },
    title: {
        fontSize: 32,
        fontWeight: '700',
        color: '#2D2D2D',
        textAlign: 'center',
        lineHeight: 40,
    },
    authContainer: {
        gap: 16,
    },
    appleButton: {
        backgroundColor: '#E67E22',
        borderRadius: 25,
        paddingVertical: 18,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    appleIcon: {
        fontSize: 20,
        marginRight: 12,
    },
    appleButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    },
    googleButton: {
        backgroundColor: '#F0E6D6',
        borderRadius: 25,
        paddingVertical: 18,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    googleIcon: {
        fontSize: 20,
        fontWeight: '700',
        color: '#4285F4',
        marginRight: 12,
    },
    googleButtonText: {
        color: '#2D2D2D',
        fontSize: 16,
        fontWeight: '600',
    },
    bottomContainer: {
        alignItems: 'center',
    },
    progressContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
    },
    progressDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#E0E0E0',
    },
    activeDot: {
        backgroundColor: '#E67E22',
    },
});