import AgeStep from '@/components/onboarding/AgeStep';
import AuthStep from '@/components/onboarding/AuthStep';
import CompleteStep from '@/components/onboarding/CompleteStep';
import NameStep from '@/components/onboarding/NameStep';
import PaywallStep from '@/components/onboarding/PaywallStep';
import ReferralStep from '@/components/onboarding/ReferralStep';
import UseStep from '@/components/onboarding/UseStep';
import WelcomeStep from '@/components/onboarding/WelcomeStep';
import WidgetStep from '@/components/onboarding/WidgetStep';
import { OnboardingData } from '@/types/OnboardingTypes';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
    SlideInRight,
    SlideOutLeft
} from 'react-native-reanimated';



export default function OnboardingFlow() {
    const [currentStep, setCurrentStep] = useState(0);
    const [onboardingData, setOnboardingData] = useState<OnboardingData>({
        name: '',
        age: '',
        useCase: '',
        referralSource: '',
        hasCompletedAuth: false,
        hasSubscription: false,
    });

    const steps = [
        WelcomeStep,
        NameStep,
        AgeStep,
        UseStep,
        ReferralStep,
        WidgetStep,
        AuthStep,
        PaywallStep,
        CompleteStep,
    ];

    const CurrentStepComponent = steps[currentStep];

    const nextStep = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const updateData = (key: keyof OnboardingData, value: any) => {
        setOnboardingData(prev => ({ ...prev, [key]: value }));
    };

    return (
        <View style={styles.container}>
            <Animated.View
                key={currentStep}
                entering={SlideInRight.duration(300)}
                exiting={SlideOutLeft.duration(300)}
                style={styles.stepContainer}
            >

                <CurrentStepComponent
                    onNext={nextStep}
                    onPrev={prevStep}
                    data={onboardingData}
                    updateData={updateData}
                    currentStep={currentStep}
                    totalSteps={steps.length}
                />
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    stepContainer: {
        flex: 1,
    },
});