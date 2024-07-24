import React, { useState } from "react";
import { TextInput, View } from "react-native";

interface InputProps {
  id: string;
  value: string;
  handleChange: (value: string, id: string) => void;
  placeholder: string;
  secureTextEntry?: boolean;
  extraStyles?: string;
}

const Input = ({
  id,
  value,
  handleChange,
  placeholder = "Enter value",
  secureTextEntry = false,
  extraStyles,
}: InputProps) => {
  return (
    <View>
      <TextInput
        value={value}
        placeholder={placeholder}
        onChangeText={(value) => handleChange(value, id)}
        secureTextEntry={secureTextEntry}
        className={`w-full border border-[#828282] rounded-2xl px-4 h-14 font-MontMedium text-base ${extraStyles}`}
      />
    </View>
  );
};

export default Input;
