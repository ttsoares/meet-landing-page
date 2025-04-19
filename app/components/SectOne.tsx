import { View, Text, Image } from 'react-native'
import React from 'react'

import ButtonPri from "./ButtonPri"
import ButtonSec from "./ButtonSec"

export default function SectionOne() {
  return (
    <View>
      <View className="hidden lg:block">
        {/* Left */}
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
      <View className="flex justify-center items-center lg:hidden ">
        <View className="left-0 md:-left-3 overflow-hidden ">
          <Image
            source={require("@/assets/images/tablet/image-hero.png")}
            className=" sm:scale-[50%] md:scale-[100%]"
          />
        </View>
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
        <View className="flex-col md:flex-row gap-4 items-center">
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
    </View>
  )
}