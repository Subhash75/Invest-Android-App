import { View, Text, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { PlansDataTypes } from "../constants";

const AssetPlans = (props: PlansDataTypes) => {
  const { name, returnValue, image, gradientColours } = props;

  return (
    <View className="mt-5">
      <LinearGradient
        colors={gradientColours}
        className="w-full rounded-2xl h-48 pl-8 pt-8 relative overflow-hidden"
      >
        <Text className=" font-MontSemiBold text-2xl">{name}</Text>
        <Text className=" font-MontRegular text-lg">{returnValue}% Return</Text>
        <Image
          source={image}
          resizeMode="contain"
          className="w-72 h-72 absolute -right-10 -bottom-10"
        />
      </LinearGradient>
    </View>
  );
};

export default AssetPlans;
