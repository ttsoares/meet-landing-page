import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function test() {
  return (
    <ImageBackground
      source={require("@/assets/images/mobile/image-footer.jpg")}
      resizeMode="cover"
      className='md:h-[320px]'
    >
      {/* Footer */}
      <View className='w-full flex-1 space-y-8 md:flex-col lg:flex-row justify-center items-center p-14 md:p-20 bg-c_cyan_d bg-blend-multiply opacity-90 '>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({})