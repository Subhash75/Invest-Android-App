import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { SimpleLineIcons } from "@expo/vector-icons";

type SummaryFieldsTypes = {
  label: string;
  value: string;
};

const summaryFields: SummaryFieldsTypes[] = [
  {
    label: "Name",
    value: "Subhash Ghosh",
  },
  {
    label: "Birthdate",
    value: "11 January 1999",
  },
  {
    label: "Gender",
    value: "Male",
  },
  {
    label: "Email",
    value: "subhash.ghosh@gmail.com",
  },
  {
    label: "Phone Number",
    value: "9876543210",
  },
  {
    label: "Address",
    value: "-",
  },
];

const Summary = ({ label, value }: SummaryFieldsTypes) => {
  return (
    <View className="border-b border-black py-1 mt-5 relative justify-center">
      <Text className="font-MontMedium">{label}</Text>
      <Text className="mt-2 font-MontMedium text-base">{value}</Text>
      <Text className="absolute text-primary right-5 font-MontMedium">
        Change
      </Text>
    </View>
  );
};

const Contact = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      className="flex-1"
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <View className="min-h-full px-5 bg-white">
        <View className="my-5 justify-center items-center relative">
          <View
            className="w-36 h-36 rounded-full absolute bg-black z-10"
            style={{ opacity: 0.4 }}
          ></View>
          <Image
            source={require("../assets/images/user.png")}
            className="w-36 h-36"
            resizeMode="contain"
          />
          <SimpleLineIcons
            name="pencil"
            size={24}
            color="white"
            style={{ position: "absolute", zIndex: 20 }}
          />
        </View>

        <View className="mt-5">
          {summaryFields.map((value) => (
            <Summary key={value.label} {...value} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Contact;
