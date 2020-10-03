import React, { Component } from "react";
import { Image, StyleSheet, Text, View, Platform, StatusBar, TouchableOpacity, FlatList} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const category = [
  { key: "1", name: "Mental Health", screen: "MentalScreen" },
  { key: "2", name: "CPR", screen: "CPRScreen" },
  { key: "3", name: "Shock", screen: "ShockScreen" },
  { key: "4", name: "Faint", screen: "FaintScreen" },
  { key: "5", name: "Choking", screen: "ChokingScreen" },
  { key: "6", name: "Drowning", screen: "DrowningScreen" },
  { key: "7", name: "Burn", screen: "BurnScreen" },
  { key: "8", name: "Nosebleed", screen: "NosebleedScreen" },
  { key: "9", name: "Snake Bite", screen: "SnakeBiteScreen" },
  { key: "10", name: "Jellyfish Sting", screen: "JellyfishStingScreen" },
  { key: "11", name: "Bee Sting", screen: "BeeStingScreen" },
  { key: "12", name: "Asthma", screen: "AsthmaScreen" },
  { key: "13", name: "Animal Bite", screen: "AnimalBiteScreen" },
];

function FirstAidScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Header -------------------------------*/}
      <View style={styles.header}>
        <View style={{ position: "absolute", top: 20, left: 25 }}>
          <Ionicons
            onPress={() => navigation.push("MainScreen")}
            name="md-arrow-back"
            color="#ff5c5c"
            size={40}
          />
        </View>
        <Image
          style={styles.logo}
          source={require("../assets/CategoriesLogo/FirstAidLogo.png")}
        />
      </View>
      {/* Sub Header ---------------------------*/}
      <View style={styles.subHeader}>
        <View style={{ marginTop: 15, alignItems: "center" }}>
          <Text style={styles.txtheader}>First Aid</Text>
        </View>

        {/* Contact List ------------------------*/}
        <View style={styles.body}>
          <FlatList
            data={category}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity
                activeOpacity={0.6}
                underlayColor="#ecf0f1"
                onPress={() => navigation.push(item.screen)}
              >
                <View style={[styles.viewButtons, styles.shadow]}>
                  <View>
                    <Text style={styles.txtName}>{item.name}</Text>
                  </View>
                  <View>
                    <Ionicons name="md-help-circle" color="#ff5c5c" size={37} />
                  </View>
                </View>
              </TouchableOpacity>
            )} // endrender
          />
        </View>
      </View>
    </View> // end Container
  );
}

{
  /* EXPORT ------------------------------------------*/
}
export default FirstAidScreen;

{
  /* Style ------------------------------------------*/
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  header: {
    flex: 0.2,
    width: "100%",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    top: 15,
    width: 125,
    height: 95,
  },

  subHeader: {
    flex: 1,
    width: "100%",
    backgroundColor: "#056674",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },

  txtheader: {
    color: "white",
    fontSize: 30,
    fontWeight: "700",
  },

  body: {
    flex: 1,
    width: "100%",
    top: 10,
    backgroundColor: "#e1f0ee",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    padding: 40,
    paddingTop: 2,
    paddingBottom: 15,
  },

  viewButtons: {
    flex: 1,
    width: "100%",
    marginTop: 13,
    padding: 20,
    paddingLeft: 38,
    paddingRight: 40,
    backgroundColor: "white",
    borderRadius: 50,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  viewListContent: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  txtName: {
    color: "#ed6663",
    fontSize: 25,
    fontWeight: "700",
  },

  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.99,
    shadowRadius: 20.46,
    elevation: 6,
  },
});
