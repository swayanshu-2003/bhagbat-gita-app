import { BackgroundStyles } from '@/constants/BackgroundStyles';
import { Colors } from '@/constants/Colors';
import { CommonStyles } from '@/constants/Styles';
import { OnboardingData } from '@/types/OnboardingTypes';
import { ChevronLeft } from 'lucide-react-native';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import { Dimensions } from '../../constants/dimensions';

interface ReferralStepProps {
    onNext: () => void;
    onPrev: () => void;
    data: OnboardingData;
    updateData: (key: keyof OnboardingData, value: any) => void;
    currentStep: number;
    totalSteps: number;
}

const REFERRAL_SOURCES = [
    { id: 'social', title: 'Social Media' },
    { id: 'friend', title: 'Friend' },
    { id: 'search', title: 'Search' },
    { id: 'other', title: 'Other' },
];

export default function ReferralStep({ onNext, onPrev, data, updateData, currentStep, totalSteps }: ReferralStepProps) {
    const [selectedSource, setSelectedSource] = useState(data.referralSource);

    const handleNext = () => {
        if (selectedSource) {
            updateData('referralSource', selectedSource);
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
                <Text style={BackgroundStyles.backgroundSymbol1}>🙏</Text>
                <Text style={BackgroundStyles.backgroundSymbol2}>📿</Text>
                <Text style={BackgroundStyles.backgroundSymbol3}>✨</Text>
            </View>

            <Animated.View entering={FadeInUp.duration(600)} style={CommonStyles.header}>
                <TouchableOpacity style={CommonStyles.backButton} onPress={onPrev}>
                    <ChevronLeft size={24} color={Colors.textPrimary} />
                </TouchableOpacity>
                <View style={CommonStyles.placeholder} />
            </Animated.View>

            <View style={CommonStyles.content}>
                <Animated.View entering={FadeInDown.delay(300).duration(600)}>
                    <Text style={CommonStyles.title}>How did you hear about us?</Text>

                    <View style={styles.optionsContainer}>
                        {REFERRAL_SOURCES.map((source, index) => (
                            <Animated.View
                                key={source.id}
                                entering={FadeInDown.delay(400 + index * 100).duration(600)}
                            >
                                <TouchableOpacity
                                    style={[
                                        CommonStyles.optionCard,
                                        selectedSource === source.id && CommonStyles.selectedOptionCard,
                                    ]}
                                    onPress={() => setSelectedSource(source.id)}
                                >

                                    <View style={[
                                        CommonStyles.radioButton,
                                        selectedSource === source.id && CommonStyles.radioButtonSelected,
                                    ]}>
                                        {selectedSource === source.id && <View style={CommonStyles.radioButtonInner} />}
                                    </View>
                                    <Text style={styles.optionTitle}>{source.title}</Text>
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
                        style={[CommonStyles.primaryButton, !selectedSource && CommonStyles.disabledButton]}
                        onPress={handleNext}
                        disabled={!selectedSource}
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
        gap: Dimensions.spacing.md,
    },
    optionTitle: {
        fontSize: Dimensions.fontSize.lg,
        fontWeight: Dimensions.fontWeight.medium,
        color: Colors.textPrimary,
        marginLeft: 10
    },
});