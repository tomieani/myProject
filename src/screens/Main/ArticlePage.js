import { Box, Pressable, ScrollView, Text } from "native-base";
import React, { useState } from "react";
import { TextInput } from "react-native";
import SvgArticleIcon from "../../../assets/icons/ArticleIcon";
import HeadandContent from "../../components/HeadandContent";

export default function ArticlePage({ navigation }) {
  const [firstInput, setFirstInput] = useState("");
  const [secondInput, setSecondInput] = useState("");

  return (
    <Box>
      <HeadandContent navigation={navigation} />

      {/* content */}

      <ScrollView backgroundColor={"#343650"}>
        <Box
          style={{
            backgroundColor: "#E9EAEC",
            width: "100%",
            height: 800,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          }}
        >
          {/* makale üret box*/}
          <Box
            style={{
              marginTop: 20,
              backgroundColor: "#FFFFFF",
              width: "80%",
              height: 350,
              alignSelf: "center",
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
                flexDirection: "row",
                justifyContent: "center",
                paddingVertical: 12,
              }}
            >
              <Pressable
                style={{
                  backgroundColor: "#F3D252",
                  width: 45,
                  height: 45,
                  borderRadius: 30,
                  position: "absolute",
                  left: 20,
                  marginTop: 5,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <SvgArticleIcon fill={"white"} width={30} />
              </Pressable>

              <Text fontSize={20} fontWeight={"bold"}>
                Makale Üret
              </Text>
            </Box>

            {/* mavi */}
            <Box
              style={{
                backgroundColor: "#96ACC4",
                height: "100%",
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                borderTopWidth: 0.5,
              }}
            >
              {/* konu başlığı ve kelime sayısı input */}
              <Box
                style={{
                  paddingVertical: 30,
                  //backgroundColor: "pink",
                  alignSelf: "center",
                  width: "80%",
                }}
              >
                <Text fontSize={18} fontWeight={"bold"}>
                  Konu Başlığı Girin
                </Text>
                <Box
                  style={{
                    backgroundColor: "#FFFFFF",
                    height: 50,
                    borderRadius: 10,
                  }}
                >
                  <TextInput
                    placeholder="Konu başlığı girin"
                    placeholderTextColor={"grey"}
                    padding={15}
                    onChangeText={(text) => setFirstInput(text)}
                  />
                </Box>

                <Text fontSize={18} fontWeight={"bold"} marginTop={3}>
                  Kelime Sayısı Girin
                </Text>
                <Box
                  style={{
                    backgroundColor: "#FFFFFF",
                    height: 50,
                    borderRadius: 10,
                  }}
                >
                  <TextInput
                    placeholder="Kelime sayısı girin"
                    placeholderTextColor={"grey"}
                    padding={15}
                    onChangeText={(text) => setSecondInput(text)}
                  />
                </Box>

                <Pressable
                  style={{
                    marginTop: "30%",
                    backgroundColor: "#F3D252",
                    paddingVertical: 5,
                    paddingHorizontal: 10,
                    borderRadius: 5,
                    alignSelf: "center",
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 1 },
                    shadowOpacity: 0.4,
                    shadowRadius: 2,
                  }}
                  onPress={() => {
                    alert("Makaleniz hazırlanıyor.."),
                      setTimeout(() => {
                        navigation.goBack();
                      }, 2000);
                  }}
                >
                  <Text color={"white"} fontSize={18} fontWeight={"bold"}>
                    Makale Üret
                  </Text>
                </Pressable>
              </Box>
            </Box>
          </Box>
        </Box>
      </ScrollView>
    </Box>
  );
}
