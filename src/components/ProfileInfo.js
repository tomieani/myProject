import { Box, Image, Text } from "native-base";
import React from "react";

export default function ProfileInfo({ user }) {
  return (
    <Box
      style={{
        //backgroundColor: "red",
        height: 150,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      {/* image box'ı */}
      <Box
        style={{
          marginLeft: 30,
          marginTop: 30,
          width: 75,
          height: 75,
          borderRadius: 40,
          backgroundColor: "#E9EAEC",

          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image source={user.imageURL} alt="image" width={60} height={60} />
      </Box>

      <Box marginTop={30} marginLeft={2}>
        <Text
          fontSize={20}
          textAlign={"center"}
          color={"white"}
          fontWeight={"bold"}
        >
          {`${user.name} ${user.surname}`}
        </Text>
      </Box>
    </Box>
  );
}
