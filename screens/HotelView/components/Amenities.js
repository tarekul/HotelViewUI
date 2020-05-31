import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Feather, Ionicons, FontAwesome5, Entypo } from "@expo/vector-icons";
import { gs, colors } from "../../../styles";

const Amenities = () => {
  return (
    <View style={gs.sectionContainer}>
      <Text style={gs.sectionTitle}>Amenities</Text>

      <View style={styles.amenitiesContainer}>
        <View style={styles.amenityContainer}>
          <View style={styles.amenity}>
            <Feather name="wifi" size={24} color={colors.lightHl} />
          </View>
          <Text style={styles.amenityName}>WI-FI</Text>
        </View>

        <View style={styles.amenityContainer}>
          <View style={styles.amenity}>
            <Ionicons name="md-restaurant" size={24} color={colors.lightHl} />
          </View>
          <Text style={styles.amenityName}>Hotel Restaurant</Text>
        </View>

        <View style={styles.amenityContainer}>
          <View style={styles.amenity}>
            <FontAwesome5 name="swimmer" size={20} color={colors.lightHl} />
          </View>
          <Text style={styles.amenityName}>Swimming Pool</Text>
        </View>

        <View style={styles.amenityContainer}>
          <View style={styles.amenity}>
            <Entypo name="drink" size={24} color={colors.lightHl} />
          </View>
          <Text style={styles.amenityName}>Bar</Text>
        </View>

        <View style={styles.amenityContainer}>
          <View style={styles.amenity}>
            <Ionicons name="ios-car" size={24} color={colors.lightHl} />
          </View>
          <Text style={styles.amenityName}>Parking Spot</Text>
        </View>

        <View style={styles.amenityContainer}>
          <View style={styles.amenity}>
            <Feather name="speaker" size={24} color={colors.lightHl} />
          </View>
          <Text style={styles.amenityName}>Night Club</Text>
        </View>
      </View>
    </View>
  );
};

export default Amenities;

const styles = StyleSheet.create({
  amenitiesContainer: {
    marginTop: 16,
    marginHorizontal: 16,
    ...gs.rowBetween,
    flexWrap: "wrap"
  },
  amenityContainer: {
    alignItems: "center",
    width: 75,
    marginVertical: 12
  },
  amenity: {
    width: 48,
    height: 48,
    borderRadius: 48 / 2,
    ...gs.center,
    backgroundColor: "#444"
  },
  amenityName: {
    color: colors.lightHl,
    fontSize: 12,
    fontWeight: "600",
    marginTop: 6,
    textAlign: "center"
  }
});
