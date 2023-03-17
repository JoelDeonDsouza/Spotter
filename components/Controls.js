import { View, StyleSheet } from "react-native";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";

const Controls = () => {
  return (
    <View style={styles.homeControl}>
      <Entypo name="key" size={26} color="#F6F1F1" />
      <MaterialCommunityIcons name="remote-tv" size={32} color="#F6F1F1" />
      <Entypo name="documents" size={28} color="#F6F1F1" />
      <Entypo name="switch" size={28} color="#F6F1F1" />
    </View>
  );
};

export default Controls;

const styles = StyleSheet.create({
  homeControl: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
});
