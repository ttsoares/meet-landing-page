import { Text, View } from 'react-native'
import React from 'react'

export default function ButtonSec({ textPrim, textSec }: { textPrim: string; textSec?: string }) {
  return (
    <View className='bg-c_purp_d py-3 px-8 rounded-full hover:bg-c_purp_hv'>
      <Text className='text-white font-bold text-xs font-RedHat'>{textPrim}
        {textSec && <Text className='font-RedHat font-boldml-2 ml-2 text-c_purp_l text-xs'>{textSec}</Text>}
      </Text>
    </View>
  )
}