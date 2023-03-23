import { useNavigation } from "@react-navigation/native";
import { Box, Pressable, Text } from "native-base";
import React from "react";
import SvgContinueIcon from "../../assets/icons/ContinueIcon";

export default function SavedPageCard({ title, desc, onPress }) {
  return (
    <Box
      style={{
        backgroundColor: "#FFFFFF",
        width: "80%",
        height: 200,
        borderRadius: 20,
        //shadow
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
      }}
    >
      <Box
        style={{
          backgroundColor: "#FFFFFF",
          alignItems: "center",
          paddingVertical: 10,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderBottomWidth: 1,
        }}
      >
        <Text fontSize={20} fontWeight={"bold"}>
          {title}
        </Text>
      </Box>

      <Box
        style={{
          backgroundColor: "#96ACC4", //mavi
          height: "75%",
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
      >
        <Box
          style={{
            //backgroundColor: "red",
            height: "60%",
            paddingHorizontal: 10,
            paddingVertical: 4,
          }}
        >
          <Text fontSize={18}>{desc}</Text>
        </Box>

        {/* button */}
        <Pressable
          style={{
            backgroundColor: "#F3D252",
            width: 50,
            height: 50,
            borderRadius: 30,
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "flex-end",
            right: 15,
            //shadow
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.4,
            shadowRadius: 2,
          }}
          onPress={onPress}
        >
          <SvgContinueIcon fill={"white"} />
        </Pressable>
      </Box>
    </Box>
  );
}
