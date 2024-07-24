import { AntDesign, Feather, FontAwesome } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { FlatList, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import InvestGuides from "../components/InvestGuides";
import Plans from "../components/Plans";
import plansData, { investGuidesData } from "../constants";
import useHomeScreen from "../hooks/useHomeScreen";
import Assets from "./assets";
import { RootStackParamList } from "../routes";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

interface HomeScreenNavigationProp {
  navigation: NativeStackNavigationProp<RootStackParamList, "home">;
}

const Home = ({ navigation }: HomeScreenNavigationProp) => {
  const { modalState, handleModalState, filteredPlan } = useHomeScreen();

  const handleNotificationRedirection = () => {
    navigation.navigate("notification");
  };

  return (
    <>
      <SafeAreaView className="flex-1">
        <ScrollView>
          <View className="px-5">
            <View className="mt-8 flex-row justify-between">
              <FontAwesome name="reorder" size={30} color="black" />
              <Pressable onPress={handleNotificationRedirection}>
                <Feather name="bell" size={30} color="black" />
              </Pressable>
            </View>

            <Text className="font-MontSemiBold tracking-wide text-3xl mt-5">
              Welcome, Subhash
            </Text>

            <View className="bg-primary rounded-2xl p-5 justify-center mt-5 shadow-2xl shadow-primary">
              <Text className="text-white text-lg font-MontMedium">
                Your total asset portfolio
              </Text>
              <View className="flex-row justify-between mt-3 items-center">
                <Text className="text-white text-3xl font-MontSemiBold tracking-widest">
                  N203,935
                </Text>
                <View className="bg-white justify-center items-center rounded-2xl h-10 w-36">
                  <Text className="text-base text-primary font-MontMedium">
                    Invest Now
                  </Text>
                </View>
              </View>
            </View>

            <View className="mt-8">
              <View className="flex-row justify-between items-center">
                <Text className=" font-MontBold text-2xl">Best Plans</Text>
                <View className="flex-row justify-between items-center gap-x-3">
                  <Text className="text-secondary font-MontMedium text-base">
                    See All
                  </Text>
                  <AntDesign name="arrowright" size={20} color="#FE555D" />
                </View>
              </View>

              <View className="mt-6">
                <FlatList
                  data={plansData}
                  renderItem={({ item }: any) => (
                    <Plans {...item} handleModalState={handleModalState} />
                  )}
                  keyExtractor={(item) => String(item.id)}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  ItemSeparatorComponent={() => <View className="h-full w-5" />}
                />
              </View>
            </View>

            <View className="mt-8">
              <Text className=" font-MontBold text-2xl">Investment Guide</Text>
              <FlatList
                data={investGuidesData}
                renderItem={({ item }) => <InvestGuides {...item} />}
                keyExtractor={(item) => String(item.id)}
                scrollEnabled={false}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>

      <Assets
        modalState={modalState}
        handleModalState={handleModalState}
        filteredPlan={filteredPlan[0]}
      />
      <StatusBar style="auto" />
    </>
  );
};

export default Home;
