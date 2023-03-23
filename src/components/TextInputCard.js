import { Box, Pressable, Text } from "native-base";
import React from "react";
import { TextInput } from "react-native";

import SvgSecurityIcon from "../../assets/icons/SecurityIcon";

export default function TextInputCard(props) {
  return (
    <Box
      style={{
        backgroundColor: "pink",
        width: "90%",
        height: "100%",
        alignSelf: "center",
        alignItems: "center",
        paddingVertical: 20,
      }}
    >
      <Box
        style={{
          backgroundColor: "#F3D252",
          width: 80,
          height: 80,
          borderRadius: 40,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SvgSecurityIcon />
      </Box>
      <Text fontSize={20} fontWeight={"bold"} color={"white"}>
        {props.title}
      </Text>

      <Box
        style={{
          marginTop: 10,
          backgroundColor: "white",
          width: "90%",
          height: 40,
          borderRadius: 10,
          //shadow
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.4,
          shadowRadius: 2,
        }}
      >
        <TextInput
          placeholder="Yeni ad"
          padding={10}
          placeholderTextColor={"grey"}
          onChangeText={(text) => setNewName(text)}
        />
      </Box>

      {/* save button */}
      <Pressable
        style={{
          backgroundColor: "#F3D252",
          paddingVertical: 5,
          paddingHorizontal: 30,
          borderRadius: 5,
          position: "absolute",
          bottom: 20,
          //shadow
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.4,
          shadowRadius: 2,
        }}
        onPress={() => {
          alert("Adınız kaydedildi.."),
            setTimeout(() => {
              navigation.goBack();
            }, 2000),
            console.log(newName);
        }}
      >
        <Text fontSize={18} fontWeight={"bold"} color={"white"}>
          Kaydet
        </Text>
      </Pressable>
    </Box>
  );
}
