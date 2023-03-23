import { useNavigation } from "@react-navigation/native";
import { Box, Image, Pressable, Text } from "native-base";
import React from "react";
import SvgBackIconn from "../../assets/icons/BackIconn";

export default function HeadandContent({ title }) {
  const navigation = useNavigation();

  return (
    <Box>
      {/* head */}
      <Box
        style={{
          backgroundColor: "#343650",
          //backgroundColor: "pink",
          height: 150,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* button */}
        <Pressable
          style={{
            backgroundColor: "#F3D252",
            width: 50,
            height: 50,
            borderRadius: 30,
            position: "absolute",
            left: 30,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Box>
            <SvgBackIconn fill={"white"} />
          </Box>
        </Pressable>
        {/* title box */}
        <Box
          style={{
            //backgroundColor: "pink",
            paddingVertical: 2,
          }}
        >
          <Text fontSize={26} fontWeight={"bold"} color={"white"}>
            {title}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
