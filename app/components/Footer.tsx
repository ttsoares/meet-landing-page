import { ImageBackground, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import ButtonSec from './ButtonSec'

export default function Footer() {

  const { width } = useWindowDimensions()

  let imageSrc = require("@/assets/images/desktop/image-footer.jpg");

  if (width < 768) {
    imageSrc = require("@/assets/images/mobile/image-footer.jpg");
  }

  if (width >= 768 && width < 1024) {
    imageSrc = require("@/assets/images/tablet/image-footer.jpg");
  }

  return (
    <View className="flex-1">
      <ImageBackground
        source={imageSrc}
        className='h-[380px] md:h-[330px] lg:h-[320px]'
      >
        {/* Section indicator number : 02 */}
        <View className="h-12 w-12 rounded-full border border-slate-300 items-center justify-center bg-white absolute -top-6 left-1/2 -translate-x-1/2 z-10">
          <Text className="text-slate-500 font-medium">02</Text>
        </View>
        {/* Footer */}
        <View className='flex-1 flex-col lg:flex-row space-y-8 justify-center items-center bg-c_cyan_d bg-blend-multiply opacity-90 '>
          <View className='flex-1 flex-row justify-center items-center mt-8'>
            <Text className=' text-c_white text-[1.8rem]  md:text-4xl font-bold font-RedHat lg:w-[80%] text-center lg:text-left'>Experience more together</Text>
          </View>
          <View className='flex-1 justify-center items-center'>
            <Text className='text-c_white text-sm text-center font-RedHat w-[80%] md:w-[75%] lg:w-[85%]'>Stay connected with reliable HD meetings and unlimited one-on-one and group video sessions.</Text>
          </View>
          <View className='flex-1 justify-center items-center '>
            <ButtonSec textPrim="Download" textSec="v1.3" />
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}