import React, { Component } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";

import { gs, colors } from "../../../styles";

export default class Location extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ backgroundColor: colors.pink, borderRadius: 18 }}>
          <Entypo name="location-pin" size={36} color={colors.text} />
        </View>
        <View style={{ marginLeft: 8, flex: 1 }}>
          <View>
            <Text style={gs.sectionTitle}>Switzerland</Text>
          </View>
          <View>
            <Text style={styles.distance}>237km away</Text>
          </View>
        </View>
        <Entypo name="chevron-right" size={24} color={colors.darkHl} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...gs.sectionContainer,
    ...gs.rowCenter
  },
  distance: {
    ...gs.smallText,
    color: colors.darkHl,
    textTransform: "uppercase"
  }
});
