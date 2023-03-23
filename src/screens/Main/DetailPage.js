import React from "react";
import { Box, ScrollView, Text } from "native-base";
import HeadandContent from "../../components/HeadandContent";

export default function DetailPage({ route }) {
  const title = "Kaydettiklerim";
  console.log(route.params.data.desc);
  console.log(route.params.data.title);
  return (
    <Box backgroundColor={"#343650"}>
      <HeadandContent title={title} />

      <ScrollView
        contentContainerStyle={{
          paddingBottom: "50%",
        }}
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
          {/* beyaz */}
          <Box
            style={{
              backgroundColor: "#FFFFFF",
              width: "80%",
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
                backgroundColor: "#FFFFFF",
                alignItems: "center",
                paddingVertical: 10,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                borderBottomWidth: 1,
              }}
            >
              <Text fontSize={20} fontWeight={"bold"}>
                {route.params.data.title}
              </Text>
            </Box>
            {/* mavi */}
            <Box
              style={{
                backgroundColor: "#96ACC4", //mavi
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                paddingHorizontal: 15,
                paddingVertical: 5,
              }}
            >
              <Text fontSize={18}>{route.params.data.desc}</Text>
            </Box>
          </Box>
        </Box>
      </ScrollView>
    </Box>
  );
}
