import { Text, View, Image } from 'react-native'
import React from 'react'

export default function SectTwo() {
  return (
    <View>
      {/* Image Grid */}
      <View className="w-[311px] md:w-[680px] lg:w-full mx-auto md:mx-10 flex flex-wrap md:flex-nowrap flex-row justify-center mb-12 gap-4 ">
        <View className="w-[147px] md:w-[152px] lg:w-[255px] aspect-square rounded-lg overflow-hidden flex items-center justify-center">
          <Image
            source={require("@/assets/images/desktop/image-woman-in-videocall.jpg")}
            className="aspect-square transition-transform duration-300 scale-[28%] md:scale-[35%] lg:scale-[53%] opacity-80 hover:cursor-pointer hover:opacity-[100%]"
          />
        </View>
        <View className="w-[147px] md:w-[152px] lg:w-[255px] aspect-square rounded-lg overflow-hidden flex items-center justify-center">
          <Image
            source={require("@/assets/images/desktop/image-women-videochatting.jpg")}
            className="aspect-square transition-transform duration-300 scale-[28%] md:scale-[35%] lg:scale-[53%] opacity-80 hover:cursor-pointer hover:opacity-[100%]"
          />
        </View>
        <View className="w-[147px] md:w-[152px] lg:w-[255px] aspect-square rounded-lg overflow-hidden flex items-center justify-center">
          <Image
            source={require("@/assets/images/desktop/image-men-in-meeting.jpg")}
            className="aspect-square transition-transform duration-300 scale-[28%] md:scale-[35%] lg:scale-[53%] opacity-80 hover:cursor-pointer hover:opacity-[100%]"
          />
        </View>
        <View className="w-[147px] md:w-[152px] lg:w-[255px] aspect-square rounded-lg overflow-hidden flex items-center justify-center">
          <Image
            source={require("@/assets/images/desktop/image-man-texting.jpg")}
            className="aspect-square transition-transform duration-300 scale-[28%] md:scale-[35%] lg:scale-[53%] opacity-80 hover:cursor-pointer hover:opacity-[100%]"
          />
        </View>
      </View>
      {/* Content Section */}
      <View className="items-center px-4 ">
        <Text className="text-c_cyan_d font-RedHat font-bold text-sm tracking-widest mb-4">BUILT FOR MODERN USE</Text>
        <Text className="text-3xl md:text-4xl font-RedHat font-bold text-c_stale_d mb-6 text-center md:w-[70%] lg:w-[33%]">
          Smarter meetings, all in one place
        </Text>
        <Text className="text-c_stale_n font-RedHat text-sm mb-16 text-center leading-6 md:w-[78%] lg:w-[38%]">
          Send messages, share files, show your screen, and record your meetings — all in one workspace. Control who can join with invite-only team access, data encryption, and data export.
        </Text>

        {/* Section Indicator vertical line*/}
        <View className="items-center">
          <View className="h-24 w-px bg-slate-200" />
        </View>
      </View>
    </View>
  )
}