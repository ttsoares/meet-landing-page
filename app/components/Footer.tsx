import { Text, View } from 'react-native'
import React from 'react'
import ButtonSec from './ButtonSec'

export default function Footer() {
  return (
    <View className="w-full h-[321px] bg-no-repeat bg-cover bg-center fle flex-row" style={{ backgroundImage: 'url(../../assets/images/image-footer.jpg)' }}>

      <View className='w-1/ flex justify-center items-center'>
        <Text className='text-white text-2xl font-bold font-RedHat'>Experience more together</Text>
      </View>
      <View className='w-1/ flex justify-center items-center'>
        <Text className='text-c_stale_n text-sm font-RedHat'>Stay connected with reliable HD meetings and unlimited one-on-one and group video sessions.</Text>
        <View className='w-1/ flex justify-center items-center'>
          <ButtonSec textPrim="Download" textSec="v1.3" />
        </View>
      </View>
    </View>
  )
}
