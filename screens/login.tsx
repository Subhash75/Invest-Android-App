import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import Button from "../components/Button";
import Input from "../components/Input";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../routes";
import { RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";
import * as SecureStore from "expo-secure-store";
import { setUserDetails } from "../global-slice";

interface LoginScreenNavigationProp {
  navigation: NativeStackNavigationProp<RootStackParamList, "createAccount">;
}

const Login = ({ navigation }: LoginScreenNavigationProp) => {
  const [value, setValue] = useState({
    fullname: "",
    password: "",
  });

  const dispatch = useDispatch();

  const count = useSelector((state: RootState) => state.globalSlice.name);

  const handleChange = (value: string, id: string) => {
    setValue((prevValue) => ({ ...prevValue, [id]: value }));
  };

  const handleCreateAccountRedirection = () => {
    navigation.navigate("createAccount");
  };

  const handleLogIn = async () => {
    await SecureStore.setItemAsync("fullname", value.fullname);
    dispatch(setUserDetails(value.fullname))
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
            Log in
          </Text>
          <Text className="font-MontSemiBold  text-[#4F4F4F] mt-1 text-center">
            Invest and double your income now
          </Text>
        </View>
        <View className="flex-1 justify-center">
          <Text className="font-MontSemiBold text-2xl text-center">
            Enter Your Credentials
          </Text>
          <Input
            id="fullname"
            handleChange={handleChange}
            value={value.fullname}
            placeholder="Full name"
            extraStyles="mt-10"
          />
          <Input
            id="password"
            value={value.password}
            handleChange={handleChange}
            placeholder="Password"
            extraStyles="mt-5"
            secureTextEntry={true}
          />

          <Button text="Log In" onPress={handleLogIn} containerStyles="mt-10" />
          <View
            className={`mt-3 bg-white justify-center items-center h-12 rounded-2xl flex flex-row`}
          >
            <Text className={`text-black text-base font-MontSemiBold `}>
              Don't have an account?{" "}
            </Text>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={handleCreateAccountRedirection}
            >
              <Text className={`text-primary text-base font-MontSemiBold `}>
                Register
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;
