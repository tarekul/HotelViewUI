import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import { gs, colors } from "../../../styles";

export default class About extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={gs.sectionTitle}> ABOUT ME </Text>
        <Text style={styles.about}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 32
  },
  about: {
    fontSize: 15,
    fontWeight: "500",
    color: colors.darkHl,
    marginTop: 8,
    lineHeight: 22
  }
});
