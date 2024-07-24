import {
  AntDesign,
  Entypo,
  FontAwesome,
  FontAwesome5,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Pressable, Text } from "react-native";
import { useSelector } from "react-redux";
import Account from "./screens/Account";
import Products from "./screens/Products";
import Transaction from "./screens/Transaction";
import Contact from "./screens/contact";
import CreateAccount from "./screens/create-account";
import Home from "./screens/home";
import Login from "./screens/login";
import SignUp from "./screens/sign-up";
import { RootState } from "./store";
import Notification from "./screens/Notification";

export type RootStackParamList = {
  navigationContainer: undefined;
  signUp: undefined;
  createAccount: undefined;
  login: undefined;
  home: undefined;
  product: undefined;
  transaction: undefined;
  account: undefined;
  contact: undefined;
  notification: undefined
};

const TabNavigationComponent = () => {
  const Tab = createBottomTabNavigator<RootStackParamList>();

  return (
    <Tab.Navigator
      backBehavior="history"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          if (route.name === "home") {
            if (focused) {
              return <Entypo name="home" size={24} color="#31A062" />;
            } else {
              return <AntDesign name="home" size={24} color="#999999" />;
            }
          } else if (route.name === "product") {
            if (focused) {
              return <FontAwesome name="search" size={24} color="#31A062" />;
            } else {
              return <AntDesign name="search1" size={24} color="#999999" />;
            }
          } else if (route.name === "transaction") {
            if (focused) {
              return (
                <FontAwesome5 name="money-bill" size={24} color="#31A062" />
              );
            } else {
              return (
                <FontAwesome5 name="money-bill-alt" size={24} color="#999999" />
              );
            }
          } else if (route.name === "account") {
            if (focused) {
              return <FontAwesome name="user" size={24} color="#31A062" />;
            } else {
              return <AntDesign name="user" size={24} color="#999999" />;
            }
          } else {
            return <Text>Pls Configure</Text>;
          }
        },
        tabBarActiveTintColor: "#31A062",
        tabBarInactiveTintColor: "#999999",
        tabBarLabelStyle: {
          fontFamily: "MontBold",
          letterSpacing: 0.5,
          paddingBottom: 3,
        },
        tabBarStyle: {
          height: 55,
          backgroundColor: route.name === "account" ? "#F6F6F9" : "#fff",
        },
      })}
    >
      <Tab.Screen
        name="home"
        component={Home}
        options={{ headerShown: false, title: "Home" }}
      />
      <Tab.Screen
        name="product"
        component={Products}
        options={{ headerShown: false, title: "Product" }}
      />
      <Tab.Screen
        name="transaction"
        component={Transaction}
        options={{ headerShown: false, title: "Transaction" }}
      />
      <Tab.Screen
        name="account"
        component={Account}
        options={{ headerShown: false, title: "Account" }}
      />
    </Tab.Navigator>
  );
};

const Routes = () => {
  const isLoggedIn = useSelector((state: RootState) => state.globalSlice.name);
  const Stack = createNativeStackNavigator<RootStackParamList>();
  const navigation = useNavigation();

  return (
    <>
      {isLoggedIn ? (
        <Stack.Navigator>
          <Stack.Screen
            name="navigationContainer"
            component={TabNavigationComponent}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="contact"
            component={Contact}
            options={{
              title: "Contact Info",
              headerShadowVisible: false,
              headerTitleAlign: "center",
              headerTitleStyle: { fontFamily: "MontBold" },
              headerLeft: () => (
                <Pressable
                  onPress={() => navigation.goBack()}
                  hitSlop={{ top: 5, right: 5, bottom: 5, left: 5 }}
                >
                  <AntDesign name="left" size={24} color="black" />
                </Pressable>
              ),
            }}
          />
          <Stack.Screen
            name="notification"
            component={Notification}
            options={{
              title: "",
              headerShadowVisible: false,
              headerStyle: {
                backgroundColor: '#F6F6F9'
              },
              headerLeft: () => (
                <Pressable
                  onPress={() => navigation.goBack()}
                  hitSlop={{ top: 5, right: 5, bottom: 5, left: 5 }}
                >
                  <AntDesign name="left" size={24} color="black" />
                </Pressable>
              ),
            }}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="signUp"
            component={SignUp}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="createAccount"
            component={CreateAccount}
            options={{
              headerTitle: "",
              headerShadowVisible: false,
              headerLeft: () => (
                <Pressable
                  onPress={() => navigation.goBack()}
                  hitSlop={{ top: 5, right: 5, bottom: 5, left: 5 }}
                >
                  <AntDesign name="left" size={24} color="black" />
                </Pressable>
              ),
            }}
          />
          <Stack.Screen
            name="login"
            component={Login}
            options={{
              headerTitle: "",
              headerShadowVisible: false,
              headerLeft: () => (
                <Pressable
                  onPress={() => navigation.goBack()}
                  hitSlop={{ top: 5, right: 5, bottom: 5, left: 5 }}
                >
                  <AntDesign name="left" size={24} color="black" />
                </Pressable>
              ),
            }}
          />
        </Stack.Navigator>
      )}
    </>
  );
};

export default Routes;
