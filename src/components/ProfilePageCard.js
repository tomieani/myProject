import { Box, Pressable, Text } from "native-base";
import React from "react";
import SvgContinueIcon from "../../assets/icons/ContinueIcon";

export default function ProfilePageCard({ title, onPress }) {
  return (
    <Box
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box>
        <Text fontSize={20} fontWeight={"bold"} color={"white"}>
          {title}
        </Text>
      </Box>

      <Pressable
        style={{
          backgroundColor: "#F3D252",
          width: 50,
          height: 50,
          borderRadius: 30,
          alignItems: "center",
          justifyContent: "center",
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
  );
}
