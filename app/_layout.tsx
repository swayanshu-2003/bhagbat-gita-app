// import Constants from "expo-constants";
import AppWidgetModule from '@/modules/app-widget/src/AppWidgetModule';
import { useFonts } from 'expo-font';
import { Stack } from "expo-router";
import { useEffect, useState } from 'react';
import { Text, View } from "react-native";
const fetchQuote=()=>{
  const quote = "THis is the quote text";
AppWidgetModule.saveValue(quote);
} 
export default function RootLayout() {
  const [quote,setQuote] = useState<any>("This is a very good quote")
  useEffect(()=>{
    setQuote(AppWidgetModule.getValue())
},[])
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
