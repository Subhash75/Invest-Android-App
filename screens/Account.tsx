import {
  AntDesign,
  Fontisto,
  FontAwesome6,
  FontAwesome,
  Ionicons,
} from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootStackParamList } from "../routes";
import { MaterialIcons, Entypo } from "@expo/vector-icons";

interface AccountScreenNavigationProp {
  navigation: NativeStackNavigationProp<RootStackParamList, "account">;
}

const Account = ({ navigation }: AccountScreenNavigationProp) => {
  return (
    <>
      <SafeAreaView className="flex-1" style={{ backgroundColor: "#F6F6F9" }}>
        <ScrollView>
          <View className="px-5 mt-5">
            <Pressable onPress={() => navigation.goBack()}>
              <AntDesign name="left" size={24} color="black" />
            </Pressable>
            <Text className="font-MontBold tracking-widest text-3xl mt-5 ml-2">
              Profile
            </Text>

            <View className="my-5 justify-center items-center">
              <Image
                source={require("../assets/images/user.png")}
                className="w-36 h-36"
                resizeMode="contain"
              />
              <Text className="font-MontBold text-xl mt-3">Subhash Ghosh</Text>
              <Text className="text-base font-MontMedium">Expert</Text>
            </View>

            <View className="mt-3">
              <Pressable onPress={() => navigation.navigate('contact')} className="bg-white rounded-2xl mb-5 px-5 py-3 flex-row items-center justify-between">
                <MaterialIcons
                  name="perm-contact-cal"
                  size={24}
                  color="#333333"
                />
                <Text className="text-[#333333] font-MontSemiBold text-xl">
                  Contact Info
                </Text>
                <Entypo name="chevron-small-right"    size={30} color="#333333" />
              </Pressable>

              <View className="bg-white rounded-2xl mb-5 px-5 py-3 flex-row items-center justify-between">
                <FontAwesome6
                  name="money-check-dollar"
                  size={24}
                  color="#333333"
                />
                <Text className="text-[#333333] font-MontSemiBold text-xl">
                  Source of Funding Info
                </Text>
                <Entypo name="chevron-small-right" size={30} color="#333333" />
              </View>

              <View className="bg-white rounded-2xl mb-5 px-5 py-3 flex-row items-center justify-between">
                <FontAwesome name="bank" size={24} color="#333333" />
                <Text className="text-[#333333] font-MontSemiBold text-xl">
                  Bank Account Info
                </Text>
                <Entypo name="chevron-small-right" size={30} color="#333333" />
              </View>

              <View className="bg-white rounded-2xl mb-5 px-5 py-3 flex-row items-center justify-between">
                <Ionicons name="document" size={24} color="#333333" />
                <Text className="text-[#333333] font-MontSemiBold text-xl">
                  Document Info
                </Text>
                <Entypo name="chevron-small-right" size={30} color="#333333" />
              </View>

              <View className="bg-white rounded-2xl mb-5 px-5 py-3 flex-row items-center justify-between">
                <Fontisto name="player-settings" size={24} color="#333333" />
                <Text className="text-[#333333] font-MontSemiBold text-xl">
                  Settings
                </Text>
                <Entypo name="chevron-small-right" size={30} color="#333333" />
              </View>

            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      <StatusBar style="auto" />
    </>
  );
};

export default Account;
