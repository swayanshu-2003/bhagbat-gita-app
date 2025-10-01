import { BackgroundStyles } from '@/constants/BackgroundStyles';
import { Colors } from '@/constants/Colors';
import { Dimensions } from '@/constants/dimensions';
import { CommonStyles } from '@/constants/Styles';
import { OnboardingData } from '@/types/OnboardingTypes';
import { ChevronLeft } from 'lucide-react-native';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';

interface UseStepProps {
    onNext: () => void;
    onPrev: () => void;
    data: OnboardingData;
    updateData: (key: keyof OnboardingData, value: any) => void;
    currentStep: number;
    totalSteps: number;
}

const USE_CASES = [
    {
        id: 'calm',
        title: 'Calm / Stress Relief',
        description: 'Find peace and manage stress.',
        icon: '🧘‍♀️',
    },
    {
        id: 'duty',
        title: 'Duty / Karma',
        description: 'Understand your responsibilities.',
        icon: '⚖️',
    },
    {
        id: 'devotion',
        title: 'Devotion / Bhakti',
        description: 'Deepen your spiritual connection.',
        icon: '🤲',
    },
];

export default function UseStep({ onNext, onPrev, data, updateData, currentStep, totalSteps }: UseStepProps) {
    const [selectedUse, setSelectedUse] = useState(data.useCase);

    const handleNext = () => {
        if (selectedUse) {
            updateData('useCase', selectedUse);
            onNext();
        }
    };

    // Progress dots (excluding welcome and complete steps)
    const progressSteps = totalSteps - 2;
    const currentProgressStep = currentStep - 1;

    return (
        <View style={CommonStyles.container}>
            {/* Spiritual Background Elements */}
            <View style={CommonStyles.backgroundElements}>
                <Text style={BackgroundStyles.backgroundSymbol1}>🕉️</Text>
                <Text style={BackgroundStyles.backgroundSymbol2}>📿</Text>
                <Text style={BackgroundStyles.backgroundSymbol3}>🪷</Text>
                <Text style={BackgroundStyles.backgroundSymbol4}>✨</Text>
            </View>

            <Animated.View entering={FadeInUp.duration(600)} style={CommonStyles.header}>
                <TouchableOpacity style={CommonStyles.backButton} onPress={onPrev}>
                    <ChevronLeft size={24} color={Colors.textPrimary} />
                </TouchableOpacity>
                <Text style={CommonStyles.headerTitle}>Purpose</Text>
                <View style={CommonStyles.placeholder} />
            </Animated.View>

            <View style={CommonStyles.content}>
                <Animated.View entering={FadeInDown.delay(300).duration(600)}>
                    <Text style={CommonStyles.title}>What brings you here?</Text>

                    <View style={styles.optionsContainer}>
                        {USE_CASES.map((useCase, index) => (
                            <Animated.View
                                key={useCase.id}
                                entering={FadeInDown.delay(400 + index * 100).duration(600)}
                            >
                                <TouchableOpacity
                                    style={[
                                        CommonStyles.optionCard,
                                        selectedUse === useCase.id && CommonStyles.selectedOptionCard,
                                    ]}
                                    onPress={() => setSelectedUse(useCase.id)}
                                >
                                    <Text style={styles.optionIcon}>{useCase.icon}</Text>
                                    <View style={styles.optionContent}>
                                        <Text style={styles.optionTitle}>{useCase.title}</Text>
                                        <Text style={styles.optionDescription}>{useCase.description}</Text>
                                    </View>
                                </TouchableOpacity>
                            </Animated.View>
                        ))}
                    </View>
                </Animated.View>

                <Animated.View entering={FadeInUp.delay(800).duration(600)} style={CommonStyles.bottomContainer}>
                    <View style={CommonStyles.progressContainer}>
                        {Array.from({ length: progressSteps }, (_, index) => (
                            <View
                                key={index}
                                style={[
                                    CommonStyles.progressDot,
                                    index === currentProgressStep && CommonStyles.activeDot,
                                ]}
                            />
                        ))}
                    </View>

                    <TouchableOpacity
                        style={[CommonStyles.primaryButton, !selectedUse && CommonStyles.disabledButton]}
                        onPress={handleNext}
                        disabled={!selectedUse}
                    >
                        <Text style={CommonStyles.primaryButtonText}>Continue</Text>
                    </TouchableOpacity>
                </Animated.View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    optionsContainer: {
        gap: Dimensions.spacing.lg,
    },
    optionIcon: {
        fontSize: 24,
        marginRight: Dimensions.spacing.lg,
    },
    optionContent: {
        flex: 1,
    },
    optionTitle: {
        fontSize: Dimensions.fontSize.lg,
        fontWeight: Dimensions.fontWeight.semibold,
        color: Colors.textPrimary,
        marginBottom: Dimensions.spacing.xs,
    },
    optionDescription: {
        fontSize: Dimensions.fontSize.md,
        color: Colors.textSecondary,
    },
});