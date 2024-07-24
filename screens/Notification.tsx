import React from "react";
import {
  Image,
  ImageSourcePropType,
  ScrollView,
  Text,
  View,
} from "react-native";

interface NotificationType {
  id: number;
  message: string;
  time: string;
  image: ImageSourcePropType;
}

const notifications: NotificationType[] = [
  {
    id: 1,
    message: "Apple stocks just increased Check it out now.",
    time: "15 mins ago",
    image: require("../assets/images/notify1.png"),
  },
  {
    id: 2,
    message: "New email received from John Doe.",
    time: "5 mins ago",
    image: require("../assets/images/notify2.png"),
  },
  {
    id: 3,
    message: "Reminder: Meeting with the client tomorrow at 10 AM. Don't forget to prepare the presentation.",
    time: "1 hour ago",
    image: require("../assets/images/notify3.png"),
  },
  {
    id: 4,
    message: "You have a new friend request.",
    time: "10 mins ago",
    image: require("../assets/images/notify4.jpg"),
  },
  {
    id: 5,
    message: "System update scheduled for tonight at 11 PM. Please save your work and log out before that time.",
    time: "2 hours ago",
    image: require("../assets/images/notify5.png"),
  },
];

const NotificationCard = ({ message, time, image }: NotificationType) => {
  return (
    <View className="border-b border-black w-full py-5 flex-row items-center">
      <Image
        source={image}
        className="w-16 h-16 rounded-3xl"
        resizeMode="contain"
      />
      <Text
        className="w-[60%] ml-3 font-MontSemiBold text-base"
        numberOfLines={2}
      >
        {message}
      </Text>
      <Text className="w-[25%] self-start text-[12px] font-MontMedium">
        {time}
      </Text>
    </View>
  );
};

const Notification = () => {
  return (
    <ScrollView >
      <View className="px-5 bg-[#F6F6F9] flex-1">
        <View>
          {notifications.map(value => (<NotificationCard key={value.id} {...value} />))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Notification;
