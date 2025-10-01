import { Colors } from '@/constants/Colors';
import { Dimensions } from '@/constants/dimensions';
import { StyleSheet } from 'react-native';

export const CommonStyles = StyleSheet.create({
    // Container Styles
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },

    safeContainer: {
        flex: 1,
        backgroundColor: Colors.background,
        paddingHorizontal: Dimensions.spacing.xxl,
    },

    centeredContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.background,
    },

    // Header Styles
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: Dimensions.spacing.xxl,
        paddingTop: Dimensions.spacing.massive,
        paddingBottom: Dimensions.spacing.xl,
    },

    headerTitle: {
        fontSize: Dimensions.fontSize.xl,
        // fontWeight: Dimensions.fontWeight.semibold,
        fontFamily: "Merriweather",
        color: Colors.textPrimary,
    },

    backButton: {
        padding: Dimensions.spacing.sm,
    },

    placeholder: {
        width: Dimensions.spacing.huge,
    },

    // Content Styles
    content: {
        flex: 1,
        paddingHorizontal: Dimensions.spacing.xxl,
        justifyContent: 'space-between',
        paddingBottom: Dimensions.spacing.massive,
    },

    scrollContent: {
        flexGrow: 1,
        paddingHorizontal: Dimensions.spacing.xxl,
        paddingBottom: Dimensions.spacing.massive,
    },

    // Text Styles
    title: {
        fontSize: Dimensions.fontSize.huge,
        // fontWeight: Dimensions.fontWeight.bold,
        fontFamily: "Philosopher-Bold",
        color: Colors.textPrimary,
        marginBottom: Dimensions.spacing.huge,
    },

    titleCentered: {
        fontSize: Dimensions.fontSize.huge,
        fontWeight: Dimensions.fontWeight.bold,
        fontFamily: "Philosopher-Bold",
        color: Colors.textPrimary,
        textAlign: 'center',
        marginBottom: Dimensions.spacing.lg,
    },

    subtitle: {
        fontSize: Dimensions.fontSize.lg,
        fontFamily: "Merriweather",
        // fontFamily: "Poppins-Regular",
        color: Colors.textSecondary,
        textAlign: 'center',
        lineHeight: 26,
    },

    description: {
        fontSize: Dimensions.fontSize.md,
        fontFamily: "Poppins-Regular",
        color: Colors.textSecondary,
        lineHeight: 22,
    },

    // Button Styles
    primaryButton: {
        backgroundColor: Colors.buttonPrimary,
        paddingVertical: Dimensions.spacing.xl,
        borderRadius: Dimensions.borderRadius.xxl,
        width: '100%',
        borderColor: "#ffce7eff",
        borderStyle: "solid",
        borderWidth: 4,
    },

    secondaryButton: {
        backgroundColor: Colors.buttonSecondary,
        paddingVertical: Dimensions.spacing.xl,
        borderRadius: Dimensions.borderRadius.xxl,
        width: '100%',
    },

    disabledButton: {
        backgroundColor: Colors.buttonDisabled,
    },

    primaryButtonText: {
        color: Colors.textWhite,
        fontSize: Dimensions.fontSize.xl,
        // fontWeight: Dimensions.fontWeight.semibold,
        fontFamily: "Philosopher-Regular",
        textAlign: 'center',

    },

    secondaryButtonText: {
        color: Colors.textPrimary,
        fontSize: Dimensions.fontSize.lg,
        fontWeight: Dimensions.fontWeight.semibold,
        textAlign: 'center',
    },

    // Input Styles
    input: {
        backgroundColor: Colors.backgroundLight,
        borderWidth: 2,
        borderColor: Colors.border,
        borderRadius: Dimensions.borderRadius.xxl,
        paddingVertical: Dimensions.spacing.xl,
        paddingHorizontal: Dimensions.spacing.xxl,
        fontSize: Dimensions.fontSize.lg,
        color: Colors.textPrimary,
    },

    inputFocused: {
        borderColor: Colors.borderActive,
    },

    // Card Styles
    card: {
        backgroundColor: Colors.backgroundCard,
        borderRadius: Dimensions.borderRadius.xl,
        padding: Dimensions.spacing.xl,
        shadowColor: Colors.shadow,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
    },

    optionCard: {
        backgroundColor: Colors.backgroundCard,
        borderWidth: 2,
        borderColor: Colors.border,
        borderRadius: Dimensions.borderRadius.xl,
        padding: Dimensions.spacing.xl,
        flexDirection: 'row',
        alignItems: 'center',
    },

    selectedOptionCard: {
        borderColor: Colors.borderActive,
        backgroundColor: Colors.backgroundSelected,
    },

    // Progress Styles
    progressContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: Dimensions.spacing.xxl,
        gap: Dimensions.progressDot.spacing,

    },

    progressDot: {
        width: Dimensions.progressDot.size,
        height: Dimensions.progressDot.size,
        borderRadius: Dimensions.progressDot.size / 2,
        backgroundColor: Colors.progressInactive,
    },

    activeDot: {
        backgroundColor: Colors.progressActive,
    },

    // Icon Container Styles
    iconContainer: {
        width: 50,
        height: 50,
        borderRadius: Dimensions.borderRadius.md,
        backgroundColor: Colors.backgroundSelected,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: Dimensions.spacing.lg,
    },

    // Radio Button Styles
    radioButton: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: Colors.border,
        alignItems: 'center',
        justifyContent: 'center',
    },

    radioButtonSelected: {
        borderColor: Colors.borderActive,
    },

    radioButtonInner: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: Colors.primary,
    },

    // Background Elements
    backgroundElements: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },

    backgroundSymbol: {
        position: 'absolute',
        opacity: 0.08,
        color: Colors.spiritualSymbol,
    },

    // Bottom Container
    bottomContainer: {
        alignItems: 'center',
    },

    // End of StyleSheet styles
});

export const Spacing = {
    marginTop: {
        xs: { marginTop: Dimensions.spacing.xs },
        sm: { marginTop: Dimensions.spacing.sm },
        md: { marginTop: Dimensions.spacing.md },
        lg: { marginTop: Dimensions.spacing.lg },
        xl: { marginTop: Dimensions.spacing.xl },
        xxl: { marginTop: Dimensions.spacing.xxl },
    },
    marginBottom: {
        xs: { marginBottom: Dimensions.spacing.xs },
        sm: { marginBottom: Dimensions.spacing.sm },
        md: { marginBottom: Dimensions.spacing.md },
        lg: { marginBottom: Dimensions.spacing.lg },
        xl: { marginBottom: Dimensions.spacing.xl },
        xxl: { marginBottom: Dimensions.spacing.xxl },
    },
    padding: {
        xs: { padding: Dimensions.spacing.xs },
        sm: { padding: Dimensions.spacing.sm },
        md: { padding: Dimensions.spacing.md },
        lg: { padding: Dimensions.spacing.lg },
        xl: { padding: Dimensions.spacing.xl },
        xxl: { padding: Dimensions.spacing.xxl },
    },
};

