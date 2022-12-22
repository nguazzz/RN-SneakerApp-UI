import React from "react";
import { View, Text, StyleSheet, Animated } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5"; // and this

export default class extends React.Component {
  constructor(p) {
    super(p);
    this.state = {
      amin: new Animated.Value(0),
    };
  }
  componentDidMount() {
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.state.amin, {
          toValue: -1, // so i add the delay here
          duration: 100,
          delay: 800,
        }),
        Animated.timing(this.state.amin, {
          toValue: 1,
          duration: 100,
        }),
        Animated.timing(this.state.amin, {
          toValue: -1,
          duration: 100,
        }),
        Animated.timing(this.state.amin, {
          toValue: 1,
          duration: 100,
        }),
        Animated.timing(this.state.amin, {
          toValue: 0,
          duration: 100,
        }),
      ])
    ).start();
  }

  render = () => {
    const rotation = this.state.amin.interpolate({
      inputRange: [-1, 1], // left side to right side
      outputRange: ["-10deg", "10deg"], // before that we have to check now it's perfect
    });
    return (
      <View>
        <Animated.View
          style={{ alignSelf: "center", transform: [{ rotate: rotation }] }}
        >
          <Icon name="bell" style={{ fontSize: 40 }} />
        </Animated.View>
      </View>
    );
  };
}
