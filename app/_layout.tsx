// import Constants from "expo-constants";
import { useFonts } from 'expo-font';
import { Stack } from "expo-router";
import { Text, View } from "react-native";
// import Preferences from "react-native-shared-group-preferences";

// const groupId = `group.${Constants.expoConfig?.ios?.bundleIdentifier}.widget`;

// const quotesArray = [
//   "The soul is neither born, and nor does it die.",
//   "You have a right to perform your duties, but not to the fruits of your actions.",
//   "Change is the law of the universe.",
//   "Set thy heart upon thy work, but never on its reward.",
//   "The mind is restless and difficult to restrain, but it is subdued by practice.",
//   "Man is made by his belief. As he believes, so he is.",
//   "Perform your obligatory duty, because action is indeed better than inaction.",
//   "Even a little effort toward spiritual awareness will protect you from the greatest fear.",
//   "When meditation is mastered, the mind is unwavering like the flame of a lamp in a windless place.",
//   "One who sees inaction in action, and action in inaction, is intelligent."
// ];

// async function saveQuotesToWidget() {
//   try {
//     await Preferences.setItem("quotes", JSON.stringify(quotesArray), groupId);
//     console.log("✅ Quotes saved to App Group");
//   } catch (e) {
//     console.error("❌ Failed to save quotes:", e);
//   }
// }

export default function RootLayout() {
  // useEffect(() => {
  //   saveQuotesToWidget(); // Runs once on launch
  // }, []);

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
