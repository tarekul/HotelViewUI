import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import { colors } from "../../styles";
import Header from "../HotelView/components/Header";
import Bookmark from "../HotelView/components/Bookmark";
import About from "../HotelView/components/About";
import Stats from "../HotelView/components/Stats";
import Amenities from "../HotelView/components/Amenities";
import Address from "../HotelView/components/Address";

const index = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Header />
      <View>
        <Bookmark />
        <About />
        <Stats />
        <Amenities />
        <Address />
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBg
  }
});
