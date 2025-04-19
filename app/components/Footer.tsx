import { ImageBackground, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import ButtonSec from './ButtonSec'

export default function Footer() {

  const { width } = useWindowDimensions()
  const imageSrc = width < 768 ?
    require("@/assets/images/mobile/image-footer.jpg")
    : require("@/assets/images/desktop/image-footer.jpg")

  return (
    <View>
      <ImageBackground
        source={imageSrc}
        className='md:h-[320px]'
      >
        {/* Section indicator number : 02 */}
        <View className="h-12 w-12 rounded-full border border-slate-300 items-center justify-center bg-white absolute -top-6 left-1/2 -translate-x-1/2 z-10">
          <Text className="text-slate-500 font-medium">02</Text>
        </View>
        {/* Footer */}
        <View className='w-full flex-1 space-y-8 md:flex-col lg:flex-row justify-center items-center p-14 md:p-20 bg-c_cyan_d bg-blend-multiply opacity-90 '>
          <View className='flex-1 flex-row justify-center items-center mt-8'>
            <Text className=' text-white text-[1.8rem] text-center md:text-4xl font-bold font-RedHat lg:w-[80%]'>Experience more together</Text>
          </View>
          <View className='flex-1 justify-center items-center'>
            <Text className='text-white text-sm text-center font-RedHat md:w-[95%] lg:w-[85%]'>Stay connected with reliable HD meetings and unlimited one-on-one and group video sessions.</Text>
          </View>
          <View className='flex-1 justify-center items-center '>
            <ButtonSec textPrim="Download" textSec="v1.3" />
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}