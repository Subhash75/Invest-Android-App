import React from 'react'
import { Text, View } from 'react-native'
import { HistoryDataTypes } from '../constants'

const History = (props: HistoryDataTypes) => {
    const {id, rp, stockName, date} = props 
  return (
    <View className='py-4 border-b border-[#C4C4C4]'>
      <Text className={`mb-1 font-MontBold text-lg ${id % 2 === 0 ? 'text-primary' : 'text-black' }`}>Rp {rp}</Text>
      <View className='flex-row justify-between'>
        <Text className='text-[#B3B3B3] font-MontMedium'>Buy "{stockName}" Stock</Text>
        <Text className='text-[#B3B3B3] font-MontMedium'>{date}</Text>
      </View>
    </View>
  )
}

export default History