import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { PlansDataTypes } from "../constants";

const Plans = (props: PlansDataTypes & { handleModalState: (id: number) => void }) => {
  const { id, name, returnValue, image, gradientColours, handleModalState } = props;
  return (
    <Pressable
      className="rounded-2xl w-36 h-48 overflow-hidden relative"
      onPress={() => handleModalState(id)}
    >
      <LinearGradient colors={gradientColours} className="w-40 h-48">
        <View className="flex-1 pt-6 pl-6">
          <Text className="text-white font-MontSemiBold text-xl">{name}</Text>
          <Text className="text-white font-MontRegular text-base">
            {returnValue}% Return
          </Text>
          <Image
            source={image}
            className="h-[130px] w-[130px] absolute -right-3 -bottom-2"
            resizeMode="contain"
          />
        </View>
      </LinearGradient>
    </Pressable>
  );
};

export default Plans;
