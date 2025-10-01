import { BackgroundStyles } from '@/constants/BackgroundStyles';
import { Dimensions } from '@/constants/dimensions';
import { CommonStyles } from '@/constants/Styles';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';

interface WelcomeStepProps {
    onNext: () => void;
}

export default function WelcomeStep({ onNext }: WelcomeStepProps) {
    return (
        <View style={CommonStyles.container}>
            {/* Spiritual Background Elements */}
            <View style={CommonStyles.backgroundElements}>
                <Text style={BackgroundStyles.welcomeSymbol1}>🕉️</Text>
                <Text style={BackgroundStyles.welcomeSymbol2}>🪷</Text>
                <Text style={BackgroundStyles.welcomeSymbol3}>🙏</Text>
                <Text style={BackgroundStyles.welcomeSymbol4}>✨</Text>
            </View>

            <View style={styles.content}>
                <Animated.View
                    entering={FadeInUp.delay(300).duration(800)}
                    style={styles.headerContainer}
                >
                    <Text style={styles.mainTitle}>Begin your Bhagvad Gita Journey</Text>
                    <Text style={CommonStyles.subtitle}>
                        A guide to inner peace, purpose and devotion
                    </Text>
                </Animated.View>

                {/* <Animated.View
                    entering={FadeInDown.delay(600).duration(800)}
                    style={styles.iconContainer}
                >
                    <Text style={styles.icon}>🕉️</Text>
                </Animated.View> */}

                <Animated.View
                    entering={FadeInUp.delay(900).duration(800)}
                    style={CommonStyles.bottomContainer}
                >
                    <TouchableOpacity style={CommonStyles.primaryButton} onPress={onNext}>
                        <Text style={CommonStyles.primaryButtonText}>Get Started</Text>
                    </TouchableOpacity>
                </Animated.View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'space-between',
        paddingHorizontal: Dimensions.spacing.xxl,
        paddingTop: 120,
        paddingBottom: Dimensions.spacing.giant,
    },
    headerContainer: {
        alignItems: 'center',
    },
    mainTitle: {
        fontSize: Dimensions.fontSize.giant,
        // fontWeight: Dimensions.fontWeight.bold,
        fontFamily: "Philosopher-Bold",
        color: "#D35400",
        // color: Colors.textPrimary,
        textAlign: 'center',
        marginBottom: Dimensions.spacing.lg,
        letterSpacing: -0.5,
        lineHeight: 42,
    },
    iconContainer: {
        alignItems: 'center',
        marginVertical: Dimensions.spacing.huge,
    },
    icon: {
        fontSize: 120,
        textAlign: 'center',
    },
});