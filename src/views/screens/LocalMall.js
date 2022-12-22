import React from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  FlatList,
  TextInput,
  TouchableHighlight,
} from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS from "../../consts/colors";
import categories from "../../consts/categories";
import branch from "../../consts/branch";

const { width } = Dimensions.get("screen");
const cardWidth = width / 2 - 20;

const LocalMall = ({ navigation }) => {
  const Card = ({ branch }) => {
    return (
      <TouchableHighlight
        underlayColor={COLORS.white}
        activeOpacity={0.9}
        onPress={() => navigation.navigate("BranchScreen", branch)}
      >
        <View style={style.card}>
          <View style={{ alignItems: "center" }}>
            <Image
              source={branch.image}
              style={{ height: 150, width: 150, resizeMode: "contain" }}
            />
          </View>
          <View style={{ marginHorizontal: 20, alignItems: "center" }}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              {branch.name}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View
        style={{
          marginTop: 20,
          flexDirection: "row",
          paddingHorizontal: 20,
        }}
      >
        <View style={style.inputContainer}>
          <Icon name="search" size={28} />
          <TextInput
            style={{ flex: 1, fontSize: 18 }}
            placeholder="Search branch..."
          />
        </View>
        <View style={style.sortBtn}>
          <Icon name="tune" size={28} color={COLORS.white} />
        </View>
      </View>
      <View
        style={{
          justifyContent: "center",
          paddingLeft: 20,
          paddingTop: 15,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Popular branch</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={categories}
        renderItem={({ item }) => <Card branch={item} />}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  inputContainer: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    flexDirection: "row",
    backgroundColor: COLORS.light,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  sortBtn: {
    width: 50,
    height: 50,
    marginLeft: 10,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    height: 200,
    width: cardWidth,
    marginHorizontal: 10,
    marginTop: 10,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: COLORS.white,
    borderWidth: 3,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default LocalMall;
