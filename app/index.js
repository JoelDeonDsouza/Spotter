import { StyleSheet, Text, View, Image, FlatList } from "react-native";
// icons //
import { FontAwesome5 } from "@expo/vector-icons";

// wallpaper //
import home from "../assets/img/home.png";
// satic data //
import data from "../assets/data.js";
// component //
import Controls from "../components/Controls";
import Menu from "../components/Menu";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>SPOTTER</Text>
          <Text style={styles.subtitle}>Active</Text>
        </View>
        <FontAwesome5 name="house-user" size={30} color="#F6F1F1" />
      </View>
      <Image source={home} style={styles.imageWall} resizeMode="contain" />
      {/* Controls */}
      <Controls />
      {/* Controls */}
      {/* Home Options */}
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={Menu}
      />
      {/* Home Options */}
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
});
