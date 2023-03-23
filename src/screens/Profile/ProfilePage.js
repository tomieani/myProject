import React from "react";
import { Box, ScrollView, Text } from "native-base";
import ProfileInfo from "../../components/ProfileInfo";
import ProfilePageCard from "../../components/ProfilePageCard";

const profileActions = [
  {
    title: "Adını Değiştir",
    key: "ChangeNamePage",
  },
  {
    title: "Şifreni Değiştir",
    key: "ChangePasswordPage",
  },
  {
    title: "E-postanı Değiştir",
    key: "ChangeMailPage",
  },
];

const user = {
  id: 12313,
  imageURL: require("../../../assets/png/avatar2.png"),
  name: "Aytaç",
  surname: "Kara",
};

export default function ProfilePage({ navigation }) {
  return (
    <Box style={{ backgroundColor: "#343650", flex: 1 }}>
      <ProfileInfo user={user} />

      <ScrollView>
        <Box
          style={{
            backgroundColor: "#E9EAEC",
            width: "100%",
            height: "300%",
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          }}
        >
          <Box
            style={{
              marginTop: 20,
              backgroundColor: "#FFFFFF",
              width: "80%",
              height: 300,
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
                backgroundColor: "#96ACC4",
                borderTopWidth: 1,
                height: "100%",
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                justifyContent: "center",
              }}
            >
              {profileActions.map((item) => (
                <Box
                  key={item.key}
                  style={{
                    width: "80%",
                    alignSelf: "center",
                    paddingVertical: 10,
                    borderBottomWidth: 0.5,
                  }}
                >
                  <ProfilePageCard
                    title={item.title}
                    onPress={() => navigation.navigate(item.key)}
                  />
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </ScrollView>
    </Box>
  );
}
