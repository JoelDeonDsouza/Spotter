import { StyleSheet, Text, View, Image } from "react-native";
// icons //
import {
  FontAwesome5,
  Entypo,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";

// wallpaper //
import home from "../assets/home.png";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Home</Text>
          <Text style={styles.subtitle}>Active</Text>
        </View>
        <FontAwesome5 name="house-user" size={30} color="#F6F1F1" />
      </View>
      <Image source={home} style={styles.imageWall} resizeMode="contain" />
      <View style={styles.homeControl}>
        <Entypo name="key" size={26} color="#F6F1F1" />
        <MaterialCommunityIcons name="remote-tv" size={32} color="#F6F1F1" />
        <Entypo name="documents" size={28} color="#F6F1F1" />
        <Entypo name="switch" size={28} color="#F6F1F1" />
      </View>
      {/* Home Options */}
      <View style={styles.homeFeature}>
        <MaterialCommunityIcons name="home-search" size={28} color="#B9F3E4" />
        <Text style={styles.homeFeatureText}>Finder</Text>
        <AntDesign
          name="right"
          size={24}
          color="#B9F3E4"
          style={{ marginLeft: "auto" }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#00235B",
    flex: 1,
    padding: 24,
  },
  header: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#F6F1F1",
    marginBottom: 8,
  },
  subtitle: {
    color: "#FFDD83",
    fontWeight: "600",
  },
  imageWall: {
    width: "100%",
    height: 300,
  },
  homeControl: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  homeFeature: {
    flexDirection: "row",
    marginVertical: 20,
    alignItems: "center",
  },
  homeFeatureText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#F6F1F1",
    fontWeight: "bold",
    marginLeft: 10,
  },
});
