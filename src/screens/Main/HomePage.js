import { Box, Image, ScrollView, Text } from "native-base";
import React from "react";
import SvgArticleIcon from "../../../assets/icons/ArticleIcon";
import SvgBuyTokenIcon from "../../../assets/icons/BuyTokenIcon";
import SvgEarnTokenIcon from "../../../assets/icons/EarnTokenIcon";
import SvgSaveIcon from "../../../assets/icons/SaveIcon";
import HomePageCard from "../../components/HomePageCard";
import ProfileInfo from "../../components/ProfileInfo";

const data = [
  {
    title: "Makale Üret",
    icon: <SvgArticleIcon fill={"white"} />,
    key: "ArticlePage",
  },
  {
    title: "Kaydettiklerim",
    icon: <SvgSaveIcon fill={"white"} />,
    key: "SavedPage",
  },
  {
    title: "Token Satın Al",
    icon: <SvgBuyTokenIcon fill={"white"} />,
    key: "BuyTokenPage",
  },
  {
    title: "Token Kazan",
    icon: <SvgEarnTokenIcon fill={"white"} />,
    key: "EarnTokenPage",
  },
];
const user = {
  id: 12313,
  imageURL: require("../../../assets/png/avatar2.png"),
  name: "Aytaç",
  surname: "Kara",
};

export default function HomePage({ navigation }) {
  return (
    <Box style={{ backgroundColor: "#343650", flex: 1 }}>
      <ProfileInfo user={user} />

      {/* beyaz kısım */}
      <ScrollView>
        <Box
          style={{
            height: "200%",
            backgroundColor: "#E9EAEC",
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            width: "100%",
          }}
        >
          <Box>
            {data.map((item, index) => (
              <HomePageCard
                key={item.key}
                title={item.title}
                icon={item.icon}
                onPress={() => navigation.navigate(item.key)}
              />
            ))}
          </Box>
        </Box>
      </ScrollView>
    </Box>
  );
}
