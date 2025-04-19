import { Slot } from "expo-router";
import { SafeAreaView } from "react-native";

import '@/global.css';

export default function RootLayout() {

  return (
    <SafeAreaView className="flex-1">

      <Slot />

    </SafeAreaView>
  );
}
