import { Box, Pressable, Text } from "native-base";
import React from "react";
import SvgPlayIcon from "../../assets/icons/PlayIcon";

export default function EarnTokenCard({ token, image }) {
  return (
    <Pressable onPress={() => console.log("tıklandı")}>
      <Box
        style={{
          marginTop: 20,
          backgroundColor: "#FFFFFF",
          width: "100%",
          height: 125,
          borderRadius: 20,
          borderWidth: 1,
          justifyContent: "center",
          //shadow
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.4,
          shadowRadius: 1,
        }}
      >
        {image}
        <Box position={"absolute"} alignSelf={"center"}>
          <SvgPlayIcon fill={"white"} />
        </Box>
      </Box>
      <Box
        style={{
          marginTop: 10,
          backgroundColor: "#FFFFFF",
          width: "100%",
          height: 35,
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "center",
          //shadow
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.4,
          shadowRadius: 1,
        }}
      >
        <Text fontSize={16} fontWeight={"bold"}>
          Video izle {token} Token Kazan!
        </Text>
      </Box>
    </Pressable>
  );
}
