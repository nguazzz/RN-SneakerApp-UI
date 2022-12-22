import { Text, StyleSheet, View, Image, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS from "../../consts/colors";
import { PrimaryButton } from "../components/Button";

const OnBoardScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={{ uri: "https://wallpaperaccess.com/full/1231742.png" }}
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <View
          style={{
            marginTop: 200,
            height: "70%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={style.textContainer}>
            <View
              style={{
                borderRadius: 15,
                backgroundColor: COLORS.pink,
                padding: 5,
              }}
            >
              <Text
                style={{
                  fontSize: 42,
                  fontWeight: "bold",
                  textAlign: "center",
                  color: COLORS.dark,
                }}
              >
                Sneaker Head
              </Text>
            </View>

            <View
              style={{
                alignItems: "center",
              }}
            >
              <PrimaryButton
                onPress={() => navigation.navigate("Home")}
                title="Explore"
                style={{
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const style = StyleSheet.create({
  textContainer: {
    flex: 1,
    paddingHorizontal: 50,
    justifyContent: "space-between",
    paddingBottom: 40,
  },
});

export default OnBoardScreen;
