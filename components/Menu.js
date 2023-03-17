import {  Text, View, StyleSheet, Pressable } from "react-native";
// linking //
import  {Link} from "expo-router";
// icons //
import {
    MaterialCommunityIcons,
    AntDesign,
  } from "@expo/vector-icons";
  

const Menu = ({item}) => {
  return (
    <Link href={item.href} asChild>
       <Pressable style={styles.homeFeature}>
      <MaterialCommunityIcons name={item.icon} size={28} color="#B9F3E4" />
      <Text style={styles.homeFeatureText}>{item.name}</Text>
      <AntDesign
        name="right"
        size={24}
        color="#B9F3E4"
        style={{ marginLeft: "auto" }}
      />
    </Pressable>
    </Link>
  );
};

export default Menu;

const styles = StyleSheet.create({
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
  