import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Button";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../routes";

interface SignUpScreenNavigationProp {
  navigation: NativeStackNavigationProp<RootStackParamList, 'signUp'>;
}

const SignUp = ({ navigation }: SignUpScreenNavigationProp) => {
  const handleCreateAccountRedirection = () => {
    navigation.navigate('createAccount')
  };

  const handleLoginRedirection = () => {
    navigation.navigate('login')
  };

  return (
    <>
      <SafeAreaView className="flex-1 bg-white">
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="min-h-screen px-5">
            <View className="h-1/2 justify-center items-center">
              <Image
                source={require("../assets/images/sign-up-image.jpg")}
                className="w-64 h-64"
                resizeMode="contain"
              />
            </View>
            <View>
              <Text className="font-MontBold text-2xl text-center">
                Stay on top of your
              </Text>
              <Text className="font-MontBold text-2xl text-center">
                finance with us.
              </Text>
              <Text className="font-MontMedium text-[#4F4F4F] text-center mt-5">
                We are your new financial advisors
              </Text>
              <Text className="font-MontMedium text-[#4F4F4F] text-center">
                to recommend the best investments for
              </Text>
              <Text className="font-MontMedium text-[#4F4F4F] text-center">
                you.
              </Text>

              <Button
                text="Create Account"
                onPress={handleCreateAccountRedirection}
                containerStyles="mt-10"
              />
              <Button
                text="Login"
                onPress={handleLoginRedirection}
                containerStyles="mt-3 bg-white"
                textStyles=" text-primary"
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      <StatusBar style="auto" />
    </>
  );
};

export default SignUp;
