import React, { useState } from "react";
import {
  Box,
  FlatList,
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  Text,
} from "native-base";
import HeadandContent from "../../components/HeadandContent";
import BuyTokenCard from "../../components/BuyTokenCard";
import { StyleSheet, TextInput } from "react-native";
import RNDateTimePicker from "@react-native-community/datetimepicker";

export default function BuyTokenPage({ navigation }) {
  const onPressHandler = () => {
    if (!name || !number || !date || !cvv) {
      alert("Alanları boş bırakma!");
    } else {
      alert("Ödemeniz alındı."),
        setTimeout(() => {
          navigation.goBack();
        }, 2000),
        console.log(name, number, date, cvv);
    }
  };

  const [name, setName] = useState(null);
  const [number, setNumber] = useState(null);
  const [date, setDate] = useState(new Date());
  const [cvv, setCvv] = useState(null);
  const data = [
    {
      title: "50 Token",
      price: "9.99 TL",
    },
    {
      title: "150 Token",
      price: "24.99 TL",
    },
    {
      title: "250 Token",
      price: "39.99 TL",
    },
    {
      title: "1000 Token",
      price: "129.99 TL",
    },
  ];

  const title = "Token Satın Al";
  return (
    <Box backgroundColor={"#343650"}>
      <HeadandContent title={title} />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={{ paddingBottom: "90%" }}
          style={{
            backgroundColor: "#E9EAEC",
            width: "100%",
            height: "100%",
            borderTopLeftRadius: 30,
            borderTopEndRadius: 30,
          }}
        >
          <Box height={310}>
            <FlatList
              numColumns={2}
              columnWrapperStyle={{ justifyContent: "space-evenly" }}
              data={data}
              renderItem={({ item }) => (
                <BuyTokenCard title={item.title} price={item.price} />
              )}
            />
          </Box>

          {/* payment */}
          <Box alignSelf={"center"} mt={10} width={"75%"}>
            <Text fontSize={20} fontWeight={"light"}>
              Kart Üzerindeki İsim
            </Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => setName(text)}
            />
            <Text fontSize={20} fontWeight={"light"} mt={2}>
              Kart Numarası
            </Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => setNumber(text)}
              keyboardType={"number-pad"}
              maxLength={16}
              autoCorrect={false}
            />

            <Box
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Text fontSize={20} fontWeight={"light"} mt={2}>
                  Tarih
                </Text>
                <RNDateTimePicker
                  mode="date"
                  value={new Date()}
                  maximumDate={new Date(2030, 10, 20)}
                  minimumDate={new Date(1950, 0, 1)}
                />
              </Box>

              <Box>
                <Text fontSize={20} fontWeight={"light"} mt={2}>
                  CVV
                </Text>
                <TextInput
                  style={styles.input2}
                  onChangeText={(text) => setCvv(text)}
                  placeholder="---"
                  keyboardType={"number-pad"}
                  autoCorrect={false}
                  maxLength={3}
                />
              </Box>
            </Box>
          </Box>

          {/* satın al butonu */}
          <Box>
            <Pressable
              style={{
                marginTop: 25,
                backgroundColor: "#F3D252",
                paddingHorizontal: 30,
                paddingVertical: 8,
                borderRadius: 5,
                alignSelf: "center",
                //shadow
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.4,
                shadowRadius: 1,
              }}
              onPress={onPressHandler}
            >
              <Text fontSize={22} fontWeight={"bold"} color={"white"}>
                Satın Al
              </Text>
            </Pressable>
          </Box>
        </ScrollView>
      </KeyboardAvoidingView>
    </Box>
  );
}

const styles = StyleSheet.create({
  input: {
    fontSize: 16,
    backgroundColor: "#FFFFFF",
    width: "100%",
    height: 50,
    borderRadius: 10,
    paddingLeft: 10,

    //shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 1,
  },
  input2: {
    fontSize: 16,
    backgroundColor: "#FFFFFF",
    width: 150,
    height: 50,
    borderRadius: 10,
    paddingLeft: 10,
    //shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 1,
  },
});
