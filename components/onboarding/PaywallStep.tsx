import { OnboardingData } from '@/types/OnboardingTypes';
import { X } from 'lucide-react-native';
import { useState } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';

interface PaywallStepProps {
    onNext: () => void;
    onPrev: () => void;
    data: OnboardingData;
    updateData: (key: keyof OnboardingData, value: any) => void;
    currentStep: number;
    totalSteps: number;
}

const SUBSCRIPTION_PLANS = [
    {
        id: 'weekly',
        title: 'Weekly',
        price: '$2.99',
        period: 'per week',
        description: 'Perfect for trying out',
    },
    {
        id: 'monthly',
        title: 'Monthly',
        price: '$9.99',
        period: 'per month',
        description: 'Most popular choice',
        popular: true,
    },
    {
        id: 'yearly',
        title: 'Yearly',
        price: '$79.99',
        period: 'per year',
        description: 'Best value - Save 33%',
        savings: true,
    },
];

export default function PaywallStep({ onNext, onPrev, data, updateData, currentStep, totalSteps }: PaywallStepProps) {
    const [selectedPlan, setSelectedPlan] = useState('monthly');

    const handleSubscribe = () => {
        Alert.alert('Subscription', `You selected ${selectedPlan} plan`);
        updateData('hasSubscription', true);
        onNext();
    };

    const handleSkip = () => {
        updateData('hasSubscription', false);
        onNext();
    };

    // Progress dots (excluding welcome and complete steps)
    const progressSteps = totalSteps - 2;
    const currentProgressStep = currentStep - 1;

    return (
        <View style={styles.container}>
            {/* Spiritual Background Elements */}
            <View style={styles.backgroundElements}>
                <Text style={styles.backgroundSymbol1}>🪷</Text>
                <Text style={styles.backgroundSymbol2}>🕉️</Text>
                <Text style={styles.backgroundSymbol3}>✨</Text>
            </View>

            <Animated.View entering={FadeInUp.duration(600)} style={styles.skipButton}>
                <TouchableOpacity onPress={handleSkip}>
                    <X size={24} color="#2D2D2D" />
                </TouchableOpacity>
            </Animated.View>

            <View style={styles.content}>
                <Animated.View entering={FadeInDown.delay(300).duration(600)} style={styles.header}>
                    <Text style={styles.title}>Unlock Premium Features</Text>
                    <Text style={styles.subtitle}>
                        Get unlimited access to all verses, personalized guidance, and ad-free experience
                    </Text>
                </Animated.View>

                <Animated.View entering={FadeInDown.delay(600).duration(600)} style={styles.featuresContainer}>
                    <View style={styles.feature}>
                        <Text style={styles.featureIcon}>📚</Text>
                        <Text style={styles.featureText}>Full access to all 700 verses</Text>
                    </View>
                    <View style={styles.feature}>
                        <Text style={styles.featureIcon}>🎯</Text>
                        <Text style={styles.featureText}>Personalized daily guidance</Text>
                    </View>
                    <View style={styles.feature}>
                        <Text style={styles.featureIcon}>🚫</Text>
                        <Text style={styles.featureText}>Ad-free experience</Text>
                    </View>
                    <View style={styles.feature}>
                        <Text style={styles.featureIcon}>📱</Text>
                        <Text style={styles.featureText}>Sync across all devices</Text>
                    </View>
                </Animated.View>

                <Animated.View entering={FadeInDown.delay(900).duration(600)} style={styles.plansContainer}>
                    {SUBSCRIPTION_PLANS.map((plan, index) => (
                        <Animated.View
                            key={plan.id}
                            entering={FadeInDown.delay(1000 + index * 100).duration(600)}
                        >
                            <TouchableOpacity
                                style={[
                                    styles.plan,
                                    selectedPlan === plan.id && styles.selectedPlan,
                                    plan.popular && styles.popularPlan,
                                ]}
                                onPress={() => setSelectedPlan(plan.id)}
                            >
                                {plan.popular && (
                                    <View style={styles.popularBadge}>
                                        <Text style={styles.popularBadgeText}>MOST POPULAR</Text>
                                    </View>
                                )}
                                <View style={styles.planHeader}>
                                    <Text style={styles.planTitle}>{plan.title}</Text>
                                    <Text style={styles.planPrice}>{plan.price}</Text>
                                </View>
                                <Text style={styles.planPeriod}>{plan.period}</Text>
                                <Text style={styles.planDescription}>{plan.description}</Text>
                            </TouchableOpacity>
                        </Animated.View>
                    ))}
                </Animated.View>

                <Animated.View entering={FadeInUp.delay(1300).duration(600)} style={styles.bottomContainer}>
                    <TouchableOpacity style={styles.subscribeButton} onPress={handleSubscribe}>
                        <Text style={styles.subscribeButtonText}>Start Free Trial</Text>
                    </TouchableOpacity>

                    <Text style={styles.trialText}>
                        3-day free trial, then {SUBSCRIPTION_PLANS.find(p => p.id === selectedPlan)?.price} {SUBSCRIPTION_PLANS.find(p => p.id === selectedPlan)?.period}
                    </Text>

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
        top: 120,
        left: 30,
        fontSize: 40,
        opacity: 0.08,
        transform: [{ rotate: '15deg' }],
    },
    backgroundSymbol2: {
        position: 'absolute',
        top: 300,
        right: 40,
        fontSize: 45,
        opacity: 0.1,
        transform: [{ rotate: '-20deg' }],
    },
    backgroundSymbol3: {
        position: 'absolute',
        bottom: 250,
        left: 50,
        fontSize: 30,
        opacity: 0.08,
        transform: [{ rotate: '25deg' }],
    },
    skipButton: {
        position: 'absolute',
        top: 60,
        left: 24,
        zIndex: 1,
        padding: 8,
    },
    content: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 120,
        paddingBottom: 60,
    },
    header: {
        marginBottom: 30,
    },
    title: {
        fontSize: 28,
        fontWeight: '700',
        color: '#2D2D2D',
        textAlign: 'center',
        marginBottom: 12,
    },
    subtitle: {
        fontSize: 16,
        color: '#666666',
        textAlign: 'center',
        lineHeight: 22,
    },
    featuresContainer: {
        marginBottom: 30,
    },
    feature: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    featureIcon: {
        fontSize: 20,
        marginRight: 12,
    },
    featureText: {
        fontSize: 16,
        color: '#2D2D2D',
    },
    plansContainer: {
        marginBottom: 30,
        gap: 12,
    },
    plan: {
        backgroundColor: '#FFFFFF',
        borderWidth: 2,
        borderColor: '#E0E0E0',
        borderRadius: 16,
        padding: 20,
        position: 'relative',
    },
    selectedPlan: {
        borderColor: '#E67E22',
        backgroundColor: '#FFF8F0',
    },
    popularPlan: {
        borderColor: '#E67E22',
        backgroundColor: '#FFF8F0',
    },
    popularBadge: {
        position: 'absolute',
        top: -8,
        left: 20,
        backgroundColor: '#E67E22',
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 8,
    },
    popularBadgeText: {
        color: '#FFFFFF',
        fontSize: 10,
        fontWeight: '700',
    },
    planHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 4,
    },
    planTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#2D2D2D',
    },
    planPrice: {
        fontSize: 24,
        fontWeight: '700',
        color: '#2D2D2D',
    },
    planPeriod: {
        fontSize: 14,
        color: '#666666',
        marginBottom: 4,
    },
    planDescription: {
        fontSize: 14,
        color: '#999999',
    },
    bottomContainer: {
        alignItems: 'center',
    },
    subscribeButton: {
        backgroundColor: '#E67E22',
        paddingVertical: 18,
        borderRadius: 25,
        marginBottom: 16,
        width: '100%',
    },
    subscribeButtonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
    },
    trialText: {
        fontSize: 12,
        color: '#999999',
        textAlign: 'center',
        marginBottom: 24,
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