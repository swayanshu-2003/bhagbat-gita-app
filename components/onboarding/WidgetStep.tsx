// import { OnboardingData } from '@/types/OnboardingTypes';
// import { useEffect, useState } from 'react';
// import { StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
// import Animated, {
//     FadeInDown,
//     FadeInUp,
//     interpolate,
//     useAnimatedStyle,
//     useSharedValue,
//     withRepeat,
//     withTiming
// } from 'react-native-reanimated';

// interface WidgetStepProps {
//     onNext: () => void;
//     onPrev: () => void;
//     data: OnboardingData;
//     updateData: (key: keyof OnboardingData, value: any) => void;
//     currentStep: number;
//     totalSteps: number;
// }

// export default function WidgetStep({ onNext, onPrev, data, updateData, currentStep, totalSteps }: WidgetStepProps) {
//     const [widgetEnabled, setWidgetEnabled] = useState(false);
//     const [notificationsEnabled, setNotificationsEnabled] = useState(true);

//     // Animation values
//     const widgetScale = useSharedValue(1);
//     const notificationPulse = useSharedValue(0);

//     useEffect(() => {
//         // Widget preview animation
//         widgetScale.value = withRepeat(
//             withTiming(1.05, { duration: 2000 }),
//             -1,
//             true
//         );

//         // Notification bell animation
//         notificationPulse.value = withRepeat(
//             withTiming(1, { duration: 1500 }),
//             -1,
//             false
//         );
//     }, []);

//     const widgetAnimatedStyle = useAnimatedStyle(() => ({
//         transform: [{ scale: widgetScale.value }],
//     }));

//     const notificationAnimatedStyle = useAnimatedStyle(() => ({
//         opacity: interpolate(notificationPulse.value, [0, 0.5, 1], [0.6, 1, 0.6]),
//     }));

//     const handleNext = () => {
//         onNext();
//     };

//     // Progress dots (excluding welcome and complete steps)
//     const progressSteps = totalSteps - 2;
//     const currentProgressStep = currentStep - 1;

//     return (
//         <View style={styles.container}>
//             {/* Spiritual Background Elements */}
//             <View style={styles.backgroundElements}>
//                 <Text style={styles.backgroundSymbol1}>🪷</Text>
//                 <Text style={styles.backgroundSymbol2}>✨</Text>
//                 <Text style={styles.backgroundSymbol3}>🕉️</Text>
//             </View>

//             <View style={styles.content}>
//                 <Animated.View entering={FadeInUp.delay(300).duration(600)} style={styles.header}>
//                     <Text style={styles.title}>Enhance Your Daily Practice</Text>
//                     <Text style={styles.subtitle}>
//                         Customize your experience with widgets and notifications to stay connected to the Gita's wisdom.
//                     </Text>
//                 </Animated.View>

//                 <Animated.View entering={FadeInDown.delay(600).duration(600)} style={styles.optionsContainer}>
//                     <View style={styles.option}>
//                         <Animated.View style={[styles.iconContainer, widgetAnimatedStyle]}>
//                             <View style={styles.widgetPreview}>
//                                 <Text style={styles.widgetIcon}>📱</Text>
//                                 <View style={styles.widgetContent}>
//                                     <View style={styles.widgetLine} />
//                                     <View style={styles.widgetLineShort} />
//                                 </View>
//                             </View>
//                         </Animated.View>
//                         <View style={styles.optionContent}>
//                             <Text style={styles.optionTitle}>Add Widget to Home Screen</Text>
//                             <Text style={styles.optionDescription}>Keep teachings at your fingertips.</Text>
//                         </View>
//                         <Switch
//                             value={widgetEnabled}
//                             onValueChange={setWidgetEnabled}
//                             trackColor={{ false: '#E0E0E0', true: '#E67E22' }}
//                             thumbColor={widgetEnabled ? '#FFFFFF' : '#FFFFFF'}
//                         />
//                     </View>

//                     {/* <View style={styles.option}>
//                         <Animated.View style={[styles.iconContainer, notificationAnimatedStyle]}>
//                             <Text style={styles.optionIcon}>🔔</Text>
//                         </Animated.View>
//                         <View style={styles.optionContent}>
//                             <Text style={styles.optionTitle}>Allow Notifications</Text>
//                             <Text style={styles.optionDescription}>Receive daily verses and reminders.</Text>
//                         </View>
//                         <Switch
//                             value={notificationsEnabled}
//                             onValueChange={setNotificationsEnabled}
//                             trackColor={{ false: '#E0E0E0', true: '#E67E22' }}
//                             thumbColor={notificationsEnabled ? '#FFFFFF' : '#FFFFFF'}
//                         />
//                     </View> */}
//                 </Animated.View>

//                 <Animated.View entering={FadeInUp.delay(900).duration(600)} style={styles.bottomContainer}>
//                     <View style={styles.progressContainer}>
//                         {Array.from({ length: progressSteps }, (_, index) => (
//                             <View
//                                 key={index}
//                                 style={[
//                                     styles.progressDot,
//                                     index === currentProgressStep && styles.activeDot,
//                                 ]}
//                             />
//                         ))}
//                     </View>

//                     <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
//                         <Text style={styles.nextButtonText}>Continue</Text>
//                     </TouchableOpacity>
//                 </Animated.View>
//             </View>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#ffe8d1',
//     },
//     backgroundElements: {
//         position: 'absolute',
//         width: '100%',
//         height: '100%',
//     },
//     backgroundSymbol1: {
//         position: 'absolute',
//         top: 120,
//         right: 30,
//         fontSize: 40,
//         opacity: 0.08,
//         transform: [{ rotate: '15deg' }],
//     },
//     backgroundSymbol2: {
//         position: 'absolute',
//         top: 300,
//         left: 40,
//         fontSize: 35,
//         opacity: 0.1,
//         transform: [{ rotate: '-20deg' }],
//     },
//     backgroundSymbol3: {
//         position: 'absolute',
//         bottom: 250,
//         right: 50,
//         fontSize: 45,
//         opacity: 0.08,
//         transform: [{ rotate: '25deg' }],
//     },
//     content: {
//         flex: 1,
//         paddingHorizontal: 24,
//         paddingTop: 80,
//         paddingBottom: 60,
//         justifyContent: 'space-between',
//     },
//     header: {
//         marginBottom: 40,
//     },
//     title: {
//         fontSize: 28,
//         fontWeight: '700',
//         color: '#2D2D2D',
//         textAlign: 'center',
//         marginBottom: 16,
//     },
//     subtitle: {
//         fontSize: 16,
//         color: '#666666',
//         textAlign: 'center',
//         lineHeight: 24,
//     },
//     optionsContainer: {
//         gap: 20,
//     },
//     option: {
//         backgroundColor: '#FFFFFF',
//         borderRadius: 20,
//         padding: 20,
//         flexDirection: 'row',
//         alignItems: 'center',
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.1,
//         shadowRadius: 8,
//         elevation: 3,
//     },
//     iconContainer: {
//         width: 50,
//         height: 50,
//         borderRadius: 12,
//         backgroundColor: '#FFF8F0',
//         alignItems: 'center',
//         justifyContent: 'center',
//         marginRight: 16,
//     },
//     widgetPreview: {
//         flexDirection: 'row',
//         alignItems: 'center',
//     },
//     widgetIcon: {
//         fontSize: 20,
//         marginRight: 4,
//     },
//     widgetContent: {
//         gap: 2,
//     },
//     widgetLine: {
//         width: 12,
//         height: 2,
//         backgroundColor: '#E67E22',
//         borderRadius: 1,
//     },
//     widgetLineShort: {
//         width: 8,
//         height: 2,
//         backgroundColor: '#E67E22',
//         borderRadius: 1,
//         opacity: 0.6,
//     },
//     optionIcon: {
//         fontSize: 24,
//     },
//     optionContent: {
//         flex: 1,
//     },
//     optionTitle: {
//         fontSize: 16,
//         fontWeight: '600',
//         color: '#2D2D2D',
//         marginBottom: 4,
//     },
//     optionDescription: {
//         fontSize: 14,
//         color: '#666666',
//     },
//     bottomContainer: {
//         alignItems: 'center',
//     },
//     progressContainer: {
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginBottom: 24,
//         gap: 8,
//     },
//     progressDot: {
//         width: 8,
//         height: 8,
//         borderRadius: 4,
//         backgroundColor: '#E0E0E0',
//     },
//     activeDot: {
//         backgroundColor: '#E67E22',
//     },
//     nextButton: {
//         backgroundColor: '#E67E22',
//         paddingVertical: 18,
//         borderRadius: 25,
//         width: '100%',
//     },
//     nextButtonText: {
//         color: '#FFFFFF',
//         fontSize: 16,
//         fontWeight: '600',
//         textAlign: 'center',
//     },
// });


import { BackgroundStyles } from '@/constants/BackgroundStyles';
import { Colors } from '@/constants/Colors';
import { Dimensions } from '@/constants/dimensions';
import { CommonStyles } from '@/constants/Styles';
import { OnboardingData } from '@/types/OnboardingTypes';
import { ChevronLeft } from 'lucide-react-native';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated, {
    FadeInDown,
    FadeInUp,
    interpolate,
    useAnimatedStyle,
    useSharedValue,
    withDelay,
    withRepeat,
    withSequence,
    withTiming
} from 'react-native-reanimated';

interface WidgetStepProps {
    onNext: () => void;
    onPrev: () => void;
    data: OnboardingData;
    updateData: (key: keyof OnboardingData, value: any) => void;
    currentStep: number;
    totalSteps: number;
}

const GITA_QUOTES = [
    "You are what you believe in. You become that which you believe you can become.",
    "The mind is restless and difficult to restrain, but it is subdued by practice.",
    "A person can rise through the efforts of his own mind; or draw himself down, in the same manner.",
    "Set thy heart upon thy work, but never on its reward.",
];

export default function WidgetStep({ onNext, onPrev, data, updateData, currentStep, totalSteps }: WidgetStepProps) {
    const [currentQuote, setCurrentQuote] = useState(0);

    // Animation values
    const phoneScale = useSharedValue(0.8);
    const widgetPulse = useSharedValue(0);
    const plusButtonRotate = useSharedValue(0);
    const widgetOpacity = useSharedValue(0);
    const quoteOpacity = useSharedValue(0);

    useEffect(() => {
        // Phone entrance animation
        phoneScale.value = withTiming(1, { duration: 800 });

        // Widget pulse animation
        widgetPulse.value = withDelay(
            1000,
            withRepeat(
                withTiming(1, { duration: 3000 }),
                -1,
                true
            )
        );

        // Plus button rotation
        plusButtonRotate.value = withDelay(
            500,
            withRepeat(
                withSequence(
                    withTiming(360, { duration: 2000 }),
                    withTiming(0, { duration: 0 })
                ),
                -1,
                false
            )
        );

        // Widget fade in
        widgetOpacity.value = withDelay(1200, withTiming(1, { duration: 600 }));

        // Quote animation
        quoteOpacity.value = withDelay(1500, withTiming(1, { duration: 800 }));

        // Quote rotation timer
        const quoteInterval = setInterval(() => {
            setCurrentQuote(prev => (prev + 1) % GITA_QUOTES.length);
            quoteOpacity.value = withSequence(
                withTiming(0, { duration: 300 }),
                withTiming(1, { duration: 300 })
            );
        }, 4000);

        return () => clearInterval(quoteInterval);
    }, []);

    const phoneAnimatedStyle = useAnimatedStyle(() => ({
        transform: [{ scale: phoneScale.value }],
    }));

    const widgetAnimatedStyle = useAnimatedStyle(() => ({
        transform: [{
            scale: interpolate(widgetPulse.value, [0, 1], [1, 1.02])
        }],
        opacity: widgetOpacity.value,
    }));

    const plusButtonAnimatedStyle = useAnimatedStyle(() => ({
        transform: [{ rotate: `${plusButtonRotate.value}deg` }],
    }));

    const quoteAnimatedStyle = useAnimatedStyle(() => ({
        opacity: quoteOpacity.value,
    }));

    const handleInstallWidget = () => {
        onNext();
    };

    const handleRemindLater = () => {
        onNext();
    };

    // Progress dots (excluding welcome and complete steps)
    const progressSteps = totalSteps - 2;
    const currentProgressStep = currentStep - 1;

    return (
        <View style={CommonStyles.container}>
            {/* Spiritual Background Elements */}
            <View style={CommonStyles.backgroundElements}>
                <Text style={BackgroundStyles.backgroundSymbol1}>🪷</Text>
                <Text style={BackgroundStyles.backgroundSymbol2}>🕉️</Text>
                <Text style={BackgroundStyles.backgroundSymbol3}>✨</Text>
                <Text style={BackgroundStyles.backgroundSymbol4}>📿</Text>
                <Text style={BackgroundStyles.backgroundSymbol5}>🙏</Text>
            </View>

            <Animated.View entering={FadeInUp.duration(600)} style={CommonStyles.header}>
                <TouchableOpacity style={CommonStyles.backButton} onPress={onPrev}>
                    <ChevronLeft size={24} color={Colors.textPrimary} />
                </TouchableOpacity>
                <View style={CommonStyles.placeholder} />
            </Animated.View>

            <View style={CommonStyles.content}>
                <Animated.View entering={FadeInDown.delay(300).duration(600)} style={styles.headerContainer}>
                    <Text style={CommonStyles.title}>Add a widget to your Home Screen</Text>
                    <Text style={CommonStyles.subtitle}>
                        On your phone's Home Screen, touch and hold an empty area and then select the Bhagvad Gita widget from the list
                    </Text>
                </Animated.View>

                <Animated.View
                    entering={FadeInDown.delay(600).duration(800)}
                    style={[styles.phoneContainer, phoneAnimatedStyle]}
                >
                    {/* iPhone Mockup */}
                    <View style={styles.phone}>
                        {/* Status Bar */}
                        <View style={styles.statusBar}>
                            <Text style={styles.time}>9:41</Text>
                            <View style={styles.statusIcons}>
                                <View style={styles.signalBars}>
                                    <View style={[styles.bar, { height: 3 }]} />
                                    <View style={[styles.bar, { height: 5 }]} />
                                    <View style={[styles.bar, { height: 7 }]} />
                                    <View style={[styles.bar, { height: 9 }]} />
                                </View>
                                <View style={styles.wifi}>
                                    <View style={styles.wifiIcon} />
                                </View>
                                <View style={styles.battery}>
                                    <View style={styles.batteryLevel} />
                                </View>
                            </View>
                        </View>

                        {/* Home Screen Content */}
                        <View style={styles.homeScreen}>
                            {/* Edit Mode Buttons */}
                            <View style={styles.editModeButtons}>
                                <Animated.View style={[styles.plusButton, plusButtonAnimatedStyle]}>
                                    <Text style={styles.plusText}>+</Text>
                                </Animated.View>
                                <View style={styles.okButton}>
                                    <Text style={styles.okText}>Done</Text>
                                </View>
                            </View>

                            {/* Widget Area */}
                            <View style={styles.widgetArea}>
                                <Animated.View style={[styles.widget, widgetAnimatedStyle]}>
                                    {/* Widget Header */}
                                    <View style={styles.widgetHeader}>
                                        <View style={styles.widgetTitleContainer}>
                                            <Text style={styles.widgetIcon}>🪷</Text>
                                            <Text style={styles.widgetTitle}>Gita Wisdom</Text>
                                        </View>
                                        <TouchableOpacity style={styles.closeButton}>
                                            <Text style={styles.closeText}>×</Text>
                                        </TouchableOpacity>
                                    </View>

                                    {/* Quote Content */}
                                    <Animated.View style={[styles.quoteContainer, quoteAnimatedStyle]}>
                                        <Text style={styles.quote}>"{GITA_QUOTES[currentQuote]}"</Text>
                                        <Text style={styles.quoteSource}>- Bhagavad Gita</Text>
                                    </Animated.View>

                                    {/* Widget Footer */}
                                    <View style={styles.widgetFooter}>
                                        <View style={styles.readMoreButton}>
                                            <Text style={styles.readMoreText}>Read More</Text>
                                        </View>
                                    </View>
                                </Animated.View>
                            </View>

                            {/* App Icons Grid */}
                            {/* <View style={styles.appGrid}>
                                <View style={styles.appRow}>
                                    <View style={[styles.appIcon, { backgroundColor: '#007AFF' }]} />
                                    <View style={[styles.appIcon, { backgroundColor: '#34C759' }]} />
                                    <View style={[styles.appIcon, { backgroundColor: '#FF9500' }]} />
                                    <View style={[styles.appIcon, { backgroundColor: '#FF3B30' }]} />
                                </View>
                                <View style={styles.appRow}>
                                    <View style={[styles.appIcon, { backgroundColor: '#5856D6' }]} />
                                    <View style={[styles.appIcon, { backgroundColor: '#AF52DE' }]} />
                                    <View style={[styles.appIcon, { backgroundColor: '#FF2D92' }]} />
                                    <View style={[styles.appIcon, { backgroundColor: '#A2845E' }]} />
                                </View>
                            </View> */}

                            {/* Dock */}
                            {/* <View style={styles.dock}>
                                <View style={[styles.dockIcon, { backgroundColor: '#007AFF' }]} />
                                <View style={[styles.dockIcon, { backgroundColor: '#34C759' }]} />
                                <View style={[styles.dockIcon, { backgroundColor: '#FF9500' }]} />
                                <View style={[styles.dockIcon, { backgroundColor: '#FF3B30' }]} />
                            </View> */}
                        </View>
                    </View>
                </Animated.View>

                <Animated.View entering={FadeInUp.delay(1200).duration(600)} style={CommonStyles.bottomContainer}>
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

                    <TouchableOpacity style={CommonStyles.primaryButton} onPress={handleInstallWidget}>
                        <Text style={CommonStyles.primaryButtonText}>Install widget</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.remindButton} onPress={handleRemindLater}>
                        <Text style={styles.remindButtonText}>Remind me later</Text>
                    </TouchableOpacity>
                </Animated.View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        marginBottom: Dimensions.spacing.huge,
    },
    title: {
        fontSize: Dimensions.fontSize.huge,
        fontWeight: Dimensions.fontWeight.bold,
        color: Colors.textPrimary,
        marginBottom: Dimensions.spacing.lg,
        lineHeight: 34,
    },
    subtitle: {
        fontSize: Dimensions.fontSize.md,
        color: Colors.textSecondary,
        lineHeight: 22,
    },
    phoneContainer: {
        alignItems: 'center',
        marginBottom: Dimensions.spacing.huge,
    },
    phone: {
        width: 280,
        height: 340,
        backgroundColor: '#000000',
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        overflow: 'hidden',
        shadowColor: Colors.shadow,
        shadowOffset: { width: 0, height: 12 },
        shadowOpacity: 0.25,
        shadowRadius: 25,
        elevation: 15,
    },
    statusBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 12,
        paddingBottom: 8,
        backgroundColor: Colors.backgroundLight,
    },
    time: {
        fontSize: 16,
        fontWeight: Dimensions.fontWeight.semibold,
        color: Colors.textPrimary,
    },
    statusIcons: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    signalBars: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        gap: 2,
    },
    bar: {
        width: 3,
        backgroundColor: Colors.textPrimary,
        borderRadius: 1,
    },
    wifi: {
        width: 16,
        height: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    wifiIcon: {
        width: 12,
        height: 8,
        backgroundColor: Colors.textPrimary,
        borderRadius: 2,
    },
    battery: {
        width: 24,
        height: 12,
        borderWidth: 1,
        borderColor: Colors.textPrimary,
        borderRadius: 2,
        padding: 1,
    },
    batteryLevel: {
        flex: 1,
        backgroundColor: '#34C759',
        borderRadius: 1,
    },
    homeScreen: {
        flex: 1,
        backgroundColor: '#F2F2F7',
        padding: 20,
    },
    editModeButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
    },
    plusButton: {
        width: 60,
        height: 32,
        backgroundColor: Colors.primary,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    plusText: {
        color: Colors.textWhite,
        fontSize: 20,
        fontWeight: Dimensions.fontWeight.bold,
    },
    okButton: {
        paddingHorizontal: 16,
        height: 32,
        backgroundColor: '#E5E5EA',
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    okText: {
        color: Colors.textPrimary,
        fontSize: 14,
        fontWeight: Dimensions.fontWeight.semibold,
    },
    widgetArea: {
        alignItems: 'center',
        marginBottom: 30,
    },
    widget: {
        width: 240,
        height: 200,
        backgroundColor: Colors.backgroundLight,
        borderRadius: 20,
        padding: 16,
        shadowColor: Colors.shadow,
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.15,
        shadowRadius: 12,
        elevation: 8,
    },
    widgetHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    widgetTitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    widgetIcon: {
        fontSize: 18,
        marginRight: 8,
    },
    widgetTitle: {
        fontSize: 14,
        fontWeight: Dimensions.fontWeight.semibold,
        color: Colors.textPrimary,
    },
    closeButton: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: '#F2F2F7',
        alignItems: 'center',
        justifyContent: 'center',
    },
    closeText: {
        color: Colors.textSecondary,
        fontSize: 16,
        fontWeight: Dimensions.fontWeight.bold,
    },
    quoteContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingVertical: 8,
    },
    quote: {
        fontSize: 13,
        color: Colors.textPrimary,
        lineHeight: 18,
        textAlign: 'center',
        marginBottom: 8,
        fontStyle: 'italic',
    },
    quoteSource: {
        fontSize: 11,
        color: Colors.primary,
        textAlign: 'center',
        fontWeight: Dimensions.fontWeight.semibold,
    },
    widgetFooter: {
        alignItems: 'center',
    },
    readMoreButton: {
        backgroundColor: Colors.primary,
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 15,
    },
    readMoreText: {
        color: Colors.textWhite,
        fontSize: 12,
        fontWeight: Dimensions.fontWeight.semibold,
    },
    appGrid: {
        marginBottom: 30,
    },
    appRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
    appIcon: {
        width: 45,
        height: 45,
        borderRadius: 12,
    },
    dock: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.8)',
        borderRadius: 25,
        paddingVertical: 12,
        marginHorizontal: 10,
    },
    dockIcon: {
        width: 50,
        height: 50,
        borderRadius: 14,
    },
    remindButton: {
        marginTop: Dimensions.spacing.lg,
    },
    remindButtonText: {
        color: Colors.textSecondary,
        fontSize: Dimensions.fontSize.lg,
        fontWeight: Dimensions.fontWeight.medium,
        textAlign: 'center',
    },
});