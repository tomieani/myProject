import React, { useState } from "react";
import { Box, Pressable, Text } from "native-base";
import SvgBackIconn from "../../../assets/icons/BackIconn";
import { TextInput } from "react-native";
import SvgPasswordIcon from "../../../assets/icons/PasswordIcon";

export default function ChangePasswordPage({ navigation, title }) {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [consfirmPassword, setConfirmPassword] = useState("");

  return (
    <Box style={{ backgroundColor: "#E9EAEC", flex: 1 }}>
      <Box
        style={{
          //backgroundColor: "red",
          width: "100%",
          //height: 120,
          justifyContent: "center",
          paddingVertical: 50,
          paddingHorizontal: 30,
        }}
      >
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
          onPress={() => navigation.goBack()}
        >
          <SvgBackIconn fill={"white"} />
        </Pressable>

        {/* content */}
        <Box
          style={{
            marginTop: 20,
            backgroundColor: "#FFFFFF",
            width: "80%",
            height: 400,
            alignSelf: "center",
            borderRadius: 20,
            //shadow
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.4,
            shadowRadius: 2,
          }}
        >
          <Box style={{ alignSelf: "center", paddingVertical: 12 }}>
            <Text fontSize={20} fontWeight={"bold"}>
              Profili Düzenle
            </Text>
          </Box>

          <Box
            style={{
              backgroundColor: "#96ACC4", //mavi
              borderTopWidth: 1,
              height: "100%",
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
            }}
          >
            {/* content */}
            <Box
              style={{
                //backgroundColor: "pink",
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
                <SvgPasswordIcon fill={"white"} />
              </Box>
              <Text fontSize={20} fontWeight={"bold"} color={"white"}>
                Şifreni Değiştir
              </Text>

              {/* first */}
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
                  placeholder="Mevcut şifre"
                  padding={10}
                  placeholderTextColor={"grey"}
                  onChangeText={(text) => setPassword(text)}
                />
              </Box>

              {/* second */}
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
                  placeholder="Yeni şifre"
                  padding={10}
                  placeholderTextColor={"grey"}
                  onChangeText={(text) => setNewPassword(text)}
                />
              </Box>

              {/* third */}
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
                  placeholder="Yeni şifre tekrar"
                  padding={10}
                  placeholderTextColor={"grey"}
                  onChangeText={(text) => setConfirmPassword(text)}
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
                  alert("Şifreniz kaydedildi.."),
                    setTimeout(() => {
                      navigation.goBack();
                    }, 2000),
                    console.log(newPassword);
                }}
              >
                <Text fontSize={18} fontWeight={"bold"} color={"white"}>
                  Kaydet
                </Text>
              </Pressable>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
