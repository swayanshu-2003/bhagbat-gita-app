import { useFonts } from 'expo-font';
import { Stack } from "expo-router";
import { Text, View } from "react-native";

export default function RootLayout() {

  const [fontsLoaded] = useFonts({
    "Philosopher-Bold": require("../assets/fonts/Philosopher-Bold.ttf"),
    "Philosopher-Regular": require("../assets/fonts/Philosopher-Regular.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Merriweather": require("../assets/fonts/Merriweather-VariableFont_opsz,wdth,wght.ttf"),

  });

  console.log("Fonts loaded:", fontsLoaded);

  if (!fontsLoaded) {
    return <View><Text>Loading...</Text></View>;
  }

  return (
    <View style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen
          name="(onboarding)"
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
