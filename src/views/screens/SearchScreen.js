import React from "react";
import {
  Button,
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
import nike from "../../consts/nike";

const SearchScreen = ({ navigation }) => {
  const SearchCard = ({ item }) => {
    return (
      <View style={style.searchCard}>
        <Image
          source={item.image}
          style={{ height: 60, width: 80, resizeMode: "contain" }}
        />
        <View
          style={{
            height: 100,
            marginLeft: 10,
            paddingVertical: 20,
            flex: 1,
            justifyContent: "center",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>{item.name}</Text>
          <Text style={{ fontSize: 13, color: COLORS.grey }}>{item.type}</Text>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
      <View
        style={{
          marginTop: 20,
          flexDirection: "row",
          paddingHorizontal: 20,
          alignItems: "center",
        }}
      >
        <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack} />
        <View style={style.inputContainer}>
          <Icon name="search" size={28} />
          <TextInput
            style={{ flex: 1, fontSize: 18 }}
            placeholder="Search..."
          />
        </View>
        <View style={style.sortBtn}>
          <Icon name="tune" size={28} color={COLORS.white} />
        </View>
      </View>
      <TouchableHighlight
        underlayColor={COLORS.black}
        activeOpacity={0.9}
        onPress={() => navigation.navigate("DetailsScreen", nike)}
      >
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 40 }}
          data={nike}
          renderItem={({ item }) => <SearchCard item={item} />}
          ListFooterComponentStyle={{ paddingHorizontal: 20, marginTop: 20 }}
          ListFooterComponent={() => (
            <View style={{}}>
              <Button title="Xem thêm" color="#000" />
            </View>
          )}
        />
      </TouchableHighlight>
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
  searchCard: {
    height: 80,
    elevation: 10,
    backgroundColor: COLORS.white,
    marginVertical: 2,
    marginHorizontal: 15,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default SearchScreen;
