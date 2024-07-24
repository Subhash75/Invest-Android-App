import React from "react";
import { Text, TouchableOpacity } from "react-native";

interface ButtonProps {
  text: string;
  onPress: () => void,
  containerStyles?: string;
  textStyles?: string;
}

const Button = ({ text, onPress, containerStyles, textStyles }: ButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      className={`bg-primary justify-center items-center h-12 rounded-2xl ${containerStyles}`}
    >
      <Text className={`text-white text-base font-MontSemiBold ${textStyles}`}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
