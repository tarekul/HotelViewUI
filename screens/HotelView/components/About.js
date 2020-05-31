import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { gs, colors } from "../../../styles";

const hotel = {
  name: "Mt. Catlin Hotel",
  price: "$967",
  location: "New York",
  about:
    "Step inside The Kimberly Hotel and feel as if you’ve found your very own pied-a-terre in Midtown New York City. Our intimate, classically styled lobby’s antique furnishings and circular salt-water aquarium provide a calming respite for families, corporate travelers and leisure guests seeking a unique and authentic alternative to a chain hotel."
};

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={gs.title}>{hotel.name}</Text>
      <Text style={styles.info}>
        {hotel.price} &#8226; {hotel.location}
      </Text>
      <View style={gs.divider} />
      <Text style={gs.sectionTitle}>About {hotel.name}</Text>
      <Text style={styles.about}>{hotel.about}</Text>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    ...gs.sectionContainer,
    backgroundColor: colors.darkBg
  },
  info: {
    color: colors.textSec,
    fontWeight: "600",
    marginTop: 4
  },
  about: {
    fontSize: 13,
    fontWeight: "600",
    color: colors.textSec,
    marginTop: 6,
    lineHeight: 20
  }
});
