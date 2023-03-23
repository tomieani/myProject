import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Box } from "native-base";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "../screens/Main/HomePage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfilePage from "../screens/Profile/ProfilePage";
import ArticlePage from "../screens/Main/ArticlePage";
import ChangeNamePage from "../screens/Profile/ChangeNamePage";
import ChangePasswordPage from "../screens/Profile/ChangePasswordPage";
import ChangeMailPage from "../screens/Profile/ChangeMailPage";
import SvgHomeIcon from "../../assets/icons/HomeIcon";
import SvgProfileIcon from "../../assets/icons/ProfileIcon";
import SavedPage from "../screens/Main/SavedPage";
import DetailPage from "../screens/Main/DetailPage";
import BuyTokenPage from "../screens/Main/BuyTokenPage";
import EarnTokenPage from "../screens/Main/EarnTokenPage";

export default function HomeStack() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  function TabNavigator() {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            position: "absolute",
            bottom: 25,
            left: 20,
            right: 20,

            backgroundColor: "white",
            borderRadius: 20,
            height: 80,
            shadowColor: "#000",
            shadowOffset: {
              width: 1,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
          },
        }}

        // screenOptions={{
        //   activeTintColor: "red", // Seçili sekmelerin rengi
        //   inactiveTintColor: "gray", // Seçili olmayan sekmelerin rengi
        // }}
      >
        <Tab.Screen
          name="Home"
          component={HomePage}
          options={{
            tabBarLabel: "",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Box
                backgroundColor={focused ? "#F3D252" : "white"}
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 30,
                  width: 60,
                  height: 60,
                  position: "absolute",
                  top: 7,
                }}
                //shadowColor="black"
                //shadowOffset={{ width: 0, height: 4 }} // add shadow offset for iOS
                //shadowOpacity={0.1} // add shadow opacity for iOS
                //shadowRadius={5} // add shadow radius for iOS
              >
                <SvgHomeIcon fill={focused ? "white" : "black"} />
              </Box>
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfilePage}
          options={{
            tabBarLabel: "",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Box
                backgroundColor={focused ? "#F3D252" : "white"}
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 30,
                  width: 60,
                  height: 60,
                  position: "absolute",
                  top: 7,
                }}
              >
                <SvgProfileIcon fill={focused ? "white" : "black"} />
              </Box>
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProfilePage"
          component={ProfilePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ArticlePage"
          component={ArticlePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ChangeNamePage"
          component={ChangeNamePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ChangePasswordPage"
          component={ChangePasswordPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ChangeMailPage"
          component={ChangeMailPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SavedPage"
          component={SavedPage}
          options={{ headerShown: false, title: "AwesomeApp" }}
        />
        <Stack.Screen
          name="DetailPage"
          component={DetailPage}
          options={{ headerShown: false, title: "AwesomeApp" }}
        />
        <Stack.Screen
          name="BuyTokenPage"
          component={BuyTokenPage}
          options={{ headerShown: false, title: "AwesomeApp" }}
        />
        <Stack.Screen
          name="EarnTokenPage"
          component={EarnTokenPage}
          options={{ headerShown: false, title: "AwesomeApp" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
