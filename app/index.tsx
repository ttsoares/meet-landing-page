import { View, Text, Image, ScrollView, SafeAreaView, useWindowDimensions, ImageBackgroundComponent, ImageBackground } from "react-native"

import { StatusBar } from "expo-status-bar"

import ButtonPri from "./components/ButtonPri"
import ButtonSec from "./components/ButtonSec"
import Footer from "./components/Footer"

export default function App() {

  const { width } = useWindowDimensions()
  const imageSize = width > 768 ? width / 4 - 20 : width - 32

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style="dark" />
      <ScrollView className="flex-1">
        {/* Logo */}
        <Image
          source={require("@/assets/images/logo.svg")}
          className="w-20 h-32 m-auto my-20 hover:animate-bounce"
        />
        {/* Main Content */}
        {/* Profile Images */}
        {/* Desktop */}
        <View className="hidden lg:block">
          {/* Lest */}
          <View className="absolute w-fit -left-10 overflow-hidden top-3/4">
            <View className="relative">
              <Image
                source={require("@/assets/images/desktop/image-hero-left.png")}
                className="hover:animate-pulse"
              />
            </View>
          </View>
          {/* Right */}
          <View className="absolute w-fit -right-10 overflow-hidden top-3/4">
            <View className="relative">
              <Image
                source={require("@/assets/images/desktop/image-hero-right.png")}
                className="hover:animate-pulse"
              />
            </View>
          </View>
        </View>
        {/* Mobile */}
        <View className="block lg:hidden">
          <Image
            source={require("@/assets/images/tablet/image-hero.png")}
            className="-left-8 overflow-hidden"
          />
        </View>
        {/* Center Content */}
        <View className=" flex-col items-center mx-auto font-RedHat mt-10 lg:mt-0 mb-20">
          <Text className="text-3xl md:text-4xl lg:text-6xl font-RedHat font-bold text-c_stale_d mb-4 text-center">
            Group Chat
          </Text>
          <Text className="text-3xl md:text-4xl lg:text-6xl font-RedHat font-bold text-c_stale_d mb-4 text-center">for Everyone</Text>
          <Text className="text-gray-500 mb-10 max-w-md mx-auto font-RedHat text-center w-[90%]">
            Meet makes it easy to connect with others strong face-to-face virtually and collaborate across any device.
          </Text>
          <View className="flex-col sm:flex-row gap-4 items-center">
            <ButtonPri textPrim="Download" textSec="v1.3" />
            <ButtonSec textPrim="What is it?" />
          </View>
        </View>
        {/* Section Indicator */}
        <View className="relative items-center  mb-20">
          <View className="h-28 w-px bg-gray-300" />
          <View className="absolute bottom-0  w-10 h-10 rounded-full border border-gray-300 items-center justify-center bg-white">
            <Text className="text-gray-400 text-sm font-medium">01</Text>
          </View>
        </View>
        {/* ----------------------------------- */}
        {/* Section Two */}
        <View>
          {/* Image Grid */}
          <View className="flex flex-row justify-center mb-12 gap-4">
            <View className="w-[255px] aspect-square rounded-lg overflow-hidden flex items-center justify-center">
              <Image
                source={require("@/assets/images/desktop/image-woman-in-videocall.jpg")}
                className="aspect-square transition-transform duration-300 scale-[53%] opacity-80 hover:opacity-[100%]"
              />
            </View>
            <View className="w-[255px] aspect-square rounded-lg overflow-hidden flex items-center justify-center">
              <Image
                source={require("@/assets/images/desktop/image-women-videochatting.jpg")}
                className="aspect-square transition-transform duration-300 scale-[53%] opacity-80 hover:opacity-[100%]"
              />
            </View>
            <View className="w-[255px] aspect-square rounded-lg overflow-hidden flex items-center justify-center">
              <Image
                source={require("@/assets/images/desktop/image-men-in-meeting.jpg")}
                className="aspect-square transition-transform duration-300 scale-[53%] opacity-80 hover:opacity-[100%]"
              />
            </View>
            <View className="w-[255px] aspect-square rounded-lg overflow-hidden flex items-center justify-center">
              <Image
                source={require("@/assets/images/desktop/image-man-texting.jpg")}
                className="aspect-square transition-transform duration-300 scale-[53%] opacity-80 hover:opacity-[100%]"
              />
            </View>
          </View>
          {/* Content Section */}
          <View className="items-center px-4">
            <Text className="text-c_cyan_d font-RedHat font-bold text-sm tracking-widest mb-4">BUILT FOR MODERN USE</Text>
            <Text className="text-3xl md:text-4xl font-RedHat font-bold text-c_stale_d mb-6 text-center">
              Smarter meetings, all{"\n"}in one place
            </Text>
            <Text className="text-c_stale_n font-RedHat text-sm mb-16 text-center leading-6 w-[38%]">
              Send messages, share files, show your screen, and record your meetings — all in one workspace. Control who can join with invite-only team access, data encryption, and data export.
            </Text>

            {/* Section Indicator vertical line*/}
            <View className="items-center">
              <View className="h-24 w-px bg-slate-200" />
            </View>
          </View>
        </View>
        {/* Footer */}
        <ImageBackground
          source={require("@/assets/images/desktop/image-footer.jpg")}
          className="flex-1 bg-no-repeat bg-cover bg-center flex-row justify-center items-center relative ">
          {/* Section indicator number : 02 */}
          <View className="h-12 w-12 rounded-full border border-slate-200 items-center justify-center bg-white absolute -top-6 left-1/2 -translate-x-1/2 z-10">
            <Text className="text-slate-500 font-medium">02</Text>
          </View>
          <View className='w-full h-[312px] flex-1 flex-row justify-center items-center p-20 bg-c_cyan_d bg-blend-multiply opacity-90'>
            <View className='flex-1 flex-row justify-center items-center '>
              <Text className=' text-white text-4xl font-bold font-RedHat w-[80%]'>Experience more together</Text>
            </View>
            <View className='flex-1 justify-center items-center'>
              <Text className='text-white text-sm font-RedHat w-[85%]'>Stay connected with reliable HD meetings and unlimited one-on-one and group video sessions.</Text>
            </View>
            <View className='flex-1 justify-center items-center '>
              <ButtonSec textPrim="Download" textSec="v1.3" />
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  )
}
