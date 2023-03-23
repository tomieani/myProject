import { Box, Image, ScrollView, Text } from "native-base";
import React from "react";

import EarnTokenCard from "../../components/EarnTokenCard";
import HeadandContent from "../../components/HeadandContent";

export default function EarnTokenPage() {
  const title = "Token Kazan";

  const data = [
    {
      id: 1,
      token: "20",
      image: (
        <Image
          alt="image"
          width={"100%"}
          height={125}
          borderRadius={20}
          source={require("../../../assets/png/advert.jpeg")}
        />
      ),
    },
    {
      id: 2,
      token: "40",
      image: (
        <Image
          alt="image"
          width={"100%"}
          height={125}
          borderRadius={20}
          source={require("../../../assets/png/advert.jpeg")}
        />
      ),
    },
    {
      id: 3,
      token: "30",
      image: (
        <Image
          alt="image"
          width={"100%"}
          height={125}
          borderRadius={20}
          source={require("../../../assets/png/advert.jpeg")}
        />
      ),
    },
    {
      id: 4,
      token: "30",
      image: (
        <Image
          alt="image"
          width={"100%"}
          height={125}
          borderRadius={20}
          source={require("../../../assets/png/advert.jpeg")}
        />
      ),
    },
  ];
  return (
    <Box backgroundColor={"#343650"}>
      <HeadandContent title={title} />
      <ScrollView
        contentContainerStyle={{ paddingBottom: "70%" }}
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
            marginTop: 10,
            width: "80%",
            alignSelf: "center",
          }}
        >
          <Text fontSize={20} fontWeight={"bold"}>
            Video İzle
          </Text>

          {/* component */}
          {data.map((item) => (
            <EarnTokenCard token={item.token} image={item.image} />
          ))}
        </Box>
      </ScrollView>
    </Box>
  );
}
