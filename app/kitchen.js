import { StyleSheet, Text, View, Image, FlatList, Pressable } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
// img //
import kitchen from "../assets/img/kicthen.png";
// router //
import {useRouter} from "expo-router"
// controls //
import Controls from "../components/Controls";

const KitchenHomePage = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Kitchen</Text>
          <Text style={styles.subtitle}>Active</Text>
        </View>
        <Pressable onPress={() => router.back()}>
        <FontAwesome5 name="house-user" size={30} color="#F6F1F1" />
        </Pressable>
      </View>
      <Image source={kitchen} style={styles.imageWall} resizeMode="contain" />
      {/* Controls */}
      <Controls />
    </View>
  )
}

export default KitchenHomePage;

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
