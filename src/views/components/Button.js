import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import COLORS from "../../consts/colors";

const PrimaryButton = ({ title, onPress = () => {} }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={style.btnContainer}>
        <Text style={style.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
const SecondaryButton = ({ title, onPress = () => {} }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={{ ...style.btnContainer, backgroundColor: COLORS.dark }}>
        <Text style={{ ...style.title, color: COLORS.white }}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  title: { color: COLORS.primary, fontWeight: "bold", fontSize: 18 },
  btnContainer: {
    backgroundColor: COLORS.white,
    width: 200,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});

export { PrimaryButton, SecondaryButton };
