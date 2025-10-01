import { BackgroundStyles } from '@/constants/BackgroundStyles';
import { Colors } from '@/constants/Colors';
import { CommonStyles } from '@/constants/Styles';
import { ChevronLeft } from 'lucide-react-native';
import { useEffect, useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import { OnboardingData } from '../../types/OnboardingTypes';

interface AgeStepProps {
    onNext: () => void;
    onPrev: () => void;
    data: OnboardingData;
    updateData: (key: keyof OnboardingData, value: any) => void;
    currentStep: number;
    totalSteps: number;
}

export default function AgeStep({ onNext, onPrev, data, updateData, currentStep, totalSteps }: AgeStepProps) {
    const [age, setAge] = useState(data.age);
    const [keyboardVisible, setKeyboardVisible] = useState(false);

    useEffect(() => {
        const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
            setKeyboardVisible(true);
        });
        const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
            setKeyboardVisible(false);
        });

        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };
    }, []);


    const handleNext = () => {
        if (age.trim() && !isNaN(Number(age)) && Number(age) > 0) {
            updateData('age', age.trim());
            onNext();
        }
    };

    const isValidAge = age.trim() && !isNaN(Number(age)) && Number(age) > 0 && Number(age) < 150;

    // Progress dots (excluding welcome and complete steps)
    const progressSteps = totalSteps - 2;
    const currentProgressStep = currentStep - 1;

    return (
        <KeyboardAvoidingView
            style={CommonStyles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            {/* Spiritual Background Elements */}
            <View style={CommonStyles.backgroundElements}>
                <Text style={BackgroundStyles.backgroundSymbol1}>📿</Text>
                <Text style={BackgroundStyles.backgroundSymbol2}>🪷</Text>
                <Text style={BackgroundStyles.backgroundSymbol3}>✨</Text>
            </View>

            <Animated.View entering={FadeInUp.duration(600)} style={CommonStyles.header}>
                <TouchableOpacity style={CommonStyles.backButton} onPress={onPrev}>
                    <ChevronLeft size={24} color={Colors.textPrimary} />
                </TouchableOpacity>
                <Text style={CommonStyles.headerTitle}>About You</Text>
                <View style={CommonStyles.placeholder} />
            </Animated.View>

            <View style={CommonStyles.content}>
                <Animated.View entering={FadeInDown.delay(300).duration(600)} style={styles.inputContainer}>
                    <Text style={CommonStyles.title}>What is your age?</Text>
                    <TextInput
                        style={CommonStyles.input}
                        placeholder="Your Age"
                        placeholderTextColor={Colors.textPlaceholder}
                        value={age}
                        onChangeText={setAge}
                        autoFocus
                        keyboardType='number-pad'
                    />
                </Animated.View>

                <Animated.View entering={FadeInUp.delay(600).duration(600)} style={CommonStyles.bottomContainer}>

                    <View style={{ ...CommonStyles.progressContainer, display: keyboardVisible ? "none" : "flex" }}>
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
                        style={[CommonStyles.primaryButton, !isValidAge && CommonStyles.disabledButton]}
                        onPress={handleNext}
                        disabled={!isValidAge}
                    >
                        <Text style={CommonStyles.primaryButtonText}>Next</Text>
                    </TouchableOpacity>


                </Animated.View>
            </View>
        </KeyboardAvoidingView>
    );
}


const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 50,
    },
});