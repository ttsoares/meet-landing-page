import { Image, ScrollView, SafeAreaView } from "react-native"

import { StatusBar } from "expo-status-bar"

import SectionOne from "./components/SectOne"
import SectTwo from "./components/SectTwo"
import Footer from "./components/Footer"

export default function App() {

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style="dark" />
      <ScrollView className="flex-1">
        {/* Logo */}
        <Image
          source={require("@/assets/images/logo.svg")}
          className="w-20 h-32 mx-auto mt-16 md:mt-10 md:my-20 hover:animate-bounce"
        />
        {/* Section One */}
        <SectionOne />
        {/* Section Two */}
        <SectTwo />
        {/* Footer */}
        <Footer />
      </ScrollView>
    </SafeAreaView>
  )
}
