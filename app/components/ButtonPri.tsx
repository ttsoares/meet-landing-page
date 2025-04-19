import { Text, View } from 'react-native'
import React from 'react'

export default function ButtonPri({ textPrim, textSec }: { textPrim: string; textSec?: string }) {
  return (
    <View className="bg-c_cyan_d py-3 px-8 rounded-full hover:bg-c_cyan_hv">
      <Text className="text-white font-bold text-xs font-RedHat">
        {textPrim}
        {textSec && <Text className="font-RedHat font-bold ml-2 text-c_cyan_l text-xs">{textSec}</Text>}
      </Text>
    </View>
  )
}
