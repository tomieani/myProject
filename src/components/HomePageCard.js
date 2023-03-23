import { Box, Pressable, Text } from "native-base";
import React from "react";

export default function HomePageCard(props) {
  console.log(props);

  return (
    <Pressable
      onPress={props.onPress}
      _pressed={{ shadow: 5 }}
      style={{
        marginTop: 20,
        backgroundColor: "#FFFFFF",
        width: "80%",
        height: props.title === "Makale Üret" ? 200 : 60,
        borderRadius: 20,
        alignSelf: "center",
      }}
    >
      {/* içerik buton&text */}
      <Box
        style={{
          flexDirection: "row",
          justifyContent: "left",
          marginLeft: 15,
          marginTop: props.title === "Makale Üret" ? 10 : 5,
        }}
      >
        <Box
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#F3D252",
            width: props.title === "Makale Üret" ? 60 : 50,
            height: props.title === "Makale Üret" ? 60 : 50,
            borderRadius: 30,
          }}
        >
          {props.icon}
        </Box>
        <Box marginTop={3} marginLeft={2}>
          <Text
            fontSize={20}
            textAlign={"center"}
            color={"black"}
            fontWeight={"bold"}
          >
            {props.title}
          </Text>
        </Box>
      </Box>
    </Pressable>
  );
}
