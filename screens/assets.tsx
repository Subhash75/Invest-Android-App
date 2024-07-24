import React from "react";
import {
  FlatList,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ModalStateTypes } from "../hooks/useHomeScreen";
import { StatusBar } from "expo-status-bar";
import { Entypo, AntDesign } from "@expo/vector-icons";
import AssetPlans from "../components/AssetPlans";
import History from "../components/History";
import { PlansDataTypes, historyData } from "../constants";

interface AssetsPropsTypes {
  modalState: ModalStateTypes;
  handleModalState: (id: number) => void;
  filteredPlan: PlansDataTypes;
}

const Assets = ({
  modalState,
  handleModalState,
  filteredPlan,
}: AssetsPropsTypes) => {
  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalState.isOpen}
        onRequestClose={() => {
          handleModalState(modalState.planId);
        }}
      >
        <View className="bg-violet-50 flex-1 justify-center items-center">
          <View className="w-[90%] h-[95%] rounded-3xl bg-gray-50 absolute"></View>
          <View className="mt-12 w-full flex-1 rounded-tl-3xl rounded-tr-3xl bg-white shadow-2xl shadow-gray-900 pt-5">
            <ScrollView showsVerticalScrollIndicator={false}>
              <View className="px-5">
                <View className="flex-row relative justify-center items-center">
                  <Text className="text-center font-MontBold text-2xl">
                    My Asset
                  </Text>
                  <TouchableOpacity
                    activeOpacity={0.1}
                    hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
                    className="absolute right-1"
                    onPress={() => {
                      handleModalState(modalState.planId);
                    }}
                  >
                    <Entypo
                      name="circle-with-cross"
                      size={30}
                      color="#B3B3B3"
                    />
                  </TouchableOpacity>
                </View>

                <View className="py-5 justify-center mt-5 ">
                  <Text className="text-[#B3B3B3] text-lg font-MontMedium">
                    Your total asset portfolio
                  </Text>
                  <View className="flex-row mt-2 items-center">
                    <Text className="text-3xl font-MontSemiBold tracking-widest">
                      N203,935
                    </Text>
                    <View className="ml-10 flex-row">
                      <Entypo name="arrow-up" size={20} color="#31A062" />
                      <Text className="text-primary text-sm font-MontSemiBold">
                        +2%
                      </Text>
                    </View>
                  </View>
                </View>

                <View className="mt-5">
                  <Text className=" font-MontBold text-2xl">Current Plans</Text>
                  <AssetPlans {...filteredPlan} />
                  <View className="flex-row justify-center mt-5 items-center gap-x-1">
                    <Text className="text-secondary font-MontMedium text-base">
                      See All Plans
                    </Text>
                    <AntDesign
                      name="arrowright"
                      size={16}
                      color="#FE555D"
                      style={{ marginTop: 3 }}
                    />
                  </View>
                </View>

                <View className="mt-5">
                  <Text className=" font-MontBold text-2xl">History</Text>
                  <FlatList
                    data={historyData}
                    renderItem={({ item }) => <History {...item} />}
                    keyExtractor={(item) => String(item.id)}
                    scrollEnabled={false}
                  />
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
      <StatusBar style="auto" />
    </>
  );
};

export default Assets;
