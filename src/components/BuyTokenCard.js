import { Box, Text } from "native-base";
import React from "react";
import SvgBuyTokenIcon from "../../assets/icons/BuyTokenIcon";

export default function BuyTokenCard({ title, price }) {
  return (
    <Box>
      <Box
        style={{
          marginTop: 20,
          backgroundColor: "#FFFFFF",
          width: 140,
          height: 130,
          borderRadius: 20,
          //shadow
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.4,
          shadowRadius: 1,
        }}
      >
        {/* icon box */}
        <Box
          style={{
            marginTop: 15,
            backgroundColor: "#F3D252",
            width: 45,
            height: 45,
            borderRadius: 30,
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center",
          }}
        >
          <SvgBuyTokenIcon fill={"white"} />
        </Box>
        {/* title */}
        <Box style={{ alignItems: "center" }}>
          <Text fontSize={18} fontWeight="bold">
            {title}
          </Text>
          <Text fontSize={18} fontWeight="bold">
            {price}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
