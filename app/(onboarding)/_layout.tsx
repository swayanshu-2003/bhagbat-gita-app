import { Stack } from "expo-router";
import { View } from "react-native";

export default function OnboardingLayout() {
    return (
        <View style={{ flex: 1 }}>
            <Stack>

                <Stack.Screen
                    name="index"
                    options={{
                        headerShown: false,
                        animation: "fade",
                        contentStyle: { backgroundColor: "#fff" },

                    }}

                />
            </Stack>
        </View>
    );
}
