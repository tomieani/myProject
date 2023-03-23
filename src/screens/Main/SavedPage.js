import React from "react";
import HeadandContent from "../../../src/components/HeadandContent";
import { Box, ScrollView, Text } from "native-base";
import SavedPageCard from "../../components/SavedPageCard";

export default function SavedPage({ navigation }) {
  const title = "Kaydettiklerim";
  const data = [
    {
      title: "Veri Madenciliği",
      desc: "It is a long established fact that a reader will be distracted by thereadable content of a page when looking at its layout.It is a longestablished fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by thereadable content of a page when looking at its layout.It is a longestablished fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by thereadable content of a page when looking at its layout.It is a longestablished fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by thereadable content of a page when looking at its layout.It is a longestablished fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by thereadable content of a page when looking at its layout.It is a longestablished fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by thereadable content of a page when looking at its layout.It is a longestablished fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by thereadable content of a page when looking at its layout.It is a longestablished fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by thereadable content of a page when looking at its layout.It is a longestablished fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by thereadable content of a page when looking at its layout.It is a longestablished fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by thereadable content of a page when looking at its layout.It is a longestablished fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by thereadable content of a page when looking at its layout.It is a longestablished fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by thereadable content of a page when looking at its layout.It is a longestablished fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      key: "DetailPage",
    },
    {
      title: "Makine Öğrenmesi",
      desc: "It is a long established fact that a reader will be distracted by thereadable content of a page when looking at its layout.It is a longestablished fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      key: "DetailPage",
    },
    {
      title: "Yapay Zeka",
      desc: "It is a long established fact that a reader will be distracted by thereadable content of a page when looking at its layout.It is a longestablished fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      key: "DetailPage",
    },
    {
      title: "Robotik Kodlama",
      desc: "It is a long established fact that a reader will be distracted by thereadable content of a page when looking at its layout.It is a longestablished fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      key: "DetailPage",
    },
  ];
  return (
    <Box backgroundColor={"#343650"}>
      <HeadandContent title={title} />

      {/* content */}
      <ScrollView
        contentContainerStyle={{ paddingBottom: data.length * 50 }}
        showsVerticalScrollIndicator={false}
        style={{
          backgroundColor: "#E9EAEC",
          width: "100%",
          height: "100%",
          borderTopLeftRadius: 30,
          borderTopEndRadius: 30,
        }}
      >
        <Box
          style={{
            alignItems: "center",
            marginTop: 20,
          }}
        >
          {/* component */}
          {data.map((item, index) => (
            <Box mt={3}>
              <SavedPageCard
                key={item.key}
                onPress={() =>
                  navigation.navigate(item.key, { data: data[index] })
                }
                title={item.title}
                desc={item.desc}
              />
            </Box>
          ))}
        </Box>
      </ScrollView>
    </Box>
  );
}
