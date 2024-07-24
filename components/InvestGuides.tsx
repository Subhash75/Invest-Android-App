import { View, Text, Image } from "react-native";
import React from "react";
import { InvestGuidesDataTypes } from "../constants";

const InvestGuides = (props: InvestGuidesDataTypes) => {
  const { title, subtext,image } = props;
  return (
    <View className="flex-row py-5 border-b items-center justify-between border-[#C4C4C4]">
      <View className="w-[82%]">
        <Text className="text-[#4F4F4F] font-MontBold text-xl mb-1" numberOfLines={1}>
          {title}
        </Text>
        <Text numberOfLines={2} className="font-MontMedium">
         {subtext}
        </Text>
      </View>
      <View className="w-[14%]">
        <Image
          className="w-12 h-12"
          resizeMode="contain"
          source={image}
        />
      </View>
    </View>
  );
};

export default InvestGuides;
