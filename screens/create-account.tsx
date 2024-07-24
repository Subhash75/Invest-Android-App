import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import Button from "../components/Button";
import Input from "../components/Input";
import { RootStackParamList } from "../routes";

interface CreateAccountScreenNavigationProp {
  navigation: NativeStackNavigationProp<RootStackParamList, "createAccount">;
}

const CreateAccount = ({ navigation }: CreateAccountScreenNavigationProp) => {
  const [value, setValue] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const handleChange = (value: string, id: string) => {
    setValue((prevValue) => ({ ...prevValue, [id]: value }));
  };

  const handleLoginRedirection = () => {
    navigation.navigate('login')
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      className="flex-1"
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <View className="min-h-full px-5 bg-white">
        <View>
          <Text className="font-MontBold tracking-widest text-3xl text-center">
            Create an account
          </Text>
          <Text className="font-MontSemiBold  text-[#4F4F4F] mt-1 text-center">
            Invest and double your income now
          </Text>
        </View>
        <View className="flex-1 justify-center">
          <Text className="font-MontSemiBold text-2xl text-center">
            Enter Your Details
          </Text>
          <Input
            id="fullname"
            handleChange={handleChange}
            value={value.fullname}
            placeholder="Full name"
            extraStyles="mt-10"
          />
          <Input
            id="email"
            handleChange={handleChange}
            value={value.email}
            placeholder="Email Address"
            extraStyles="mt-5"
          />
          <Input
            id="password"
            value={value.password}
            handleChange={handleChange}
            placeholder="Password"
            extraStyles="mt-5"
            secureTextEntry={true}
          />

          <Button
            text="Create Account"
            onPress={() => {}}
            containerStyles="mt-10"
          />
          <Button
            text="Already have an account?"
            onPress={handleLoginRedirection}
            containerStyles="mt-3 bg-white"
            textStyles=" text-primary"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default CreateAccount;
