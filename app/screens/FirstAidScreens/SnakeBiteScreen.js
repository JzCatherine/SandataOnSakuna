import React, { Component } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  ScrollView,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

function SnakeBiteScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Header -------------------------------*/}
      <View style={styles.header}>
        <View style={{ position: "absolute", top: 20, left: 25 }}>
          <Ionicons
            onPress={() => navigation.navigate("FirstAidScreen")}
            name="md-arrow-back"
            color="white"
            size={40}
          />
        </View>
        <View style={styles.txtContainer}>
          <Text style={styles.txtheader}>SNAKEBITE</Text>
        </View>
      </View>

      {/* Body ------------------------*/}
      <View style={styles.body}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Burn ------------------------*/}
          <View style={[styles.boxOuter, styles.shadow]}>
            <Text style={styles.txtBoxHead}>WHAT IS SNAKEBITE?</Text>
            <View style={styles.boxInner}>
              <Image
                style={{ width: "100%", height: 160 }}
                source={require("../../assets/FirstAid/Snake/snake.jpg")}
              />

              <Text style={styles.txtBoxDesc}>
                A bite from a venomous snake is rarely deadly — about 6
                fatalities are reported every year — but it should always be
                treated as a medical emergency.
                {"\n"}
                {"\n"}
                Even a bite from a harmless snake can be serious, leading to an
                allergic reaction or an infection. Venomous snake bites can
                produce an array of symptoms, including localized pain and
                swelling, convulsions, nausea, and even paralysis.
              </Text>
            </View>
          </View>

          {/* Identifying  -----------------------------*/}
          <View style={[styles.boxOuter1, styles.shadow]}>
            <Text style={styles.txtBoxHead}>IDENTIFYING VENOMOUS SNAKES</Text>
          </View>

          {/* Rattle Snake ------------------------*/}
          <View style={[styles.boxOuter, styles.shadow]}>
            <Text style={styles.txtBoxHead}>RATTLE SNAKE</Text>
            <View style={styles.boxInner}>
              <Image
                style={{ width: "100%", height: 200 }}
                source={require("../../assets/FirstAid/Snake/rattlesnake.jpg")}
              />
              <Text style={styles.txtBoxDesc}>
                They have rings at the end of their tails that shake when they
                feel threatened. This makes a rattling sound and is a warning
                for you to back away.
                {"\n"}
                {"\n"}
                These snakes can be found in nearly any habitat across the
                country. They like open areas where they can rest in the sun
                such as rocks, and logs.
              </Text>
            </View>
            <Text style={styles.txtBoxHead}>SYMPTOMS</Text>
            <View style={styles.boxInner}>
              <Text style={styles.txtBoxDesc}>
                Severe pain
                {"\n"}
                {"\n"}
                Drooping eyelids
                {"\n"}
                {"\n"}
                Low Blood Pressure
                {"\n"}
                {"\n"}
                Thirst
                {"\n"}
                {"\n"}
                Tiredness
              </Text>
            </View>
          </View>

          {/* WATER MOCCASINS  ------------------------*/}
          <View style={[styles.boxOuter, styles.shadow]}>
            <Text style={styles.txtBoxHead}>
              WATER MOCCASINS OR COTTONMOUTHS
            </Text>
            <View style={styles.boxInner}>
              <Image
                style={{ width: "100%", height: 225 }}
                source={require("../../assets/FirstAid/Snake/water.png")}
              />
              <Text style={styles.txtBoxDesc}>
                The water moccasin is another type of pit viper. This snake is
                also known as a cottonmouth, because the inside of its mouth is
                lined with a white, cottony material.
                {"\n"}
                {"\n"}
                The water moccasin’s average size is between 50 to 55 inches.
                Adults have dark tan to black skin with faint dark brown or
                black crossbands. Young snakes have brown or orange crossbands
                with a yellow tail.
              </Text>
            </View>
            <Text style={styles.txtBoxHead}>SYMPTOMS</Text>
            <View style={styles.boxInner}>
              <Text style={styles.txtBoxDesc}>
                Immediate pain and symptoms
                {"\n"}
                {"\n"}
                Change in skin color
                {"\n"}
                {"\n"}
                Shock
                {"\n"}
                {"\n"}
                Low blood pressure
                {"\n"}
                {"\n"}
                Weakness
              </Text>
            </View>
          </View>

          {/* COPPER  ------------------------*/}
          <View style={[styles.boxOuter, styles.shadow]}>
            <Text style={styles.txtBoxHead}>COPPERHEAD SNAKE</Text>
            <View style={styles.boxInner}>
              <Image
                style={{ width: "100%", height: 225 }}
                source={require("../../assets/FirstAid/Snake/copper.jpg")}
              />
              <Text style={styles.txtBoxDesc}>
                Copperheads are reddish or gold in color with hourglass-shaped
                bands. This snake is typically 18 to 36 inches in length.
                {"\n"}
                {"\n"}
                Copperheads are mostly found in forests, swamps, rocky areas,
                and rivers in the eastern states (as far as Texas). They are not
                aggressive. Most copperhead bites occur if you accidentally step
                on or near one.
              </Text>
            </View>
            <Text style={styles.txtBoxHead}>SYMPTOMS</Text>
            <View style={styles.boxInner}>
              <Text style={styles.txtBoxDesc}>
                Immediate pain and symptoms
                {"\n"}
                {"\n"}
                Change in skin color
                {"\n"}
                {"\n"}
                Shock
                {"\n"}
                {"\n"}
                Low blood pressure
                {"\n"}
                {"\n"}
                Weakness
              </Text>
            </View>
          </View>

          {/* CORAL  ------------------------*/}
          <View style={[styles.boxOuter, styles.shadow]}>
            <Text style={styles.txtBoxHead}>CORAL SNAKE</Text>
            <View style={styles.boxInner}>
              <Image
                style={{ width: "100%", height: 225 }}
                source={require("../../assets/FirstAid/Snake/coral.jpg")}
              />
              <Text style={styles.txtBoxDesc}>
                CCoral snakes have black, yellow, and red banding and are often
                confused with non-venomous king snakes.
                {"\n"}
                {"\n"}
                You can distinguish a coral snake by the fact that the red bands
                touch the yellow bands. They live in the woods, marshes, and
                sandy areas of the South. Coral snakes typically hide
                underground and in leaf piles.
              </Text>
            </View>
            <Text style={styles.txtBoxHead}>SYMPTOMS</Text>
            <View style={styles.boxInner}>
              <Text style={styles.txtBoxDesc}>
                Convulsions
                {"\n"}
                {"\n"}
                Drooping eyelids
                {"\n"}
                {"\n"}
                Stomach pain
                {"\n"}
                {"\n"}
                Difficulty swallowing
                {"\n"}
                {"\n"}
                Headache
                {"\n"}
                {"\n"}
                Shock
                {"\n"}
                {"\n"}
                Paralysis
                {"\n"}
                {"\n"}
                Change in skin color
              </Text>
            </View>
          </View>

          {/* Image -----------------------------*/}
          <View style={[styles.boxOuter, styles.shadow]}>
            <View style={styles.boxInner}>
              <Image
                style={{
                  width: "100%",
                  height: 250,
                  resizeMode: "contain",
                  alignSelf: "center",
                }}
                source={require("../../assets/FirstAid/Snake/border.jpg")}
              />
            </View>
          </View>

          {/* First Aid ------------------------*/}
          <View style={[styles.boxOuter, styles.shadow]}>
            <View style={styles.boxInner}>
              <Image
                style={{ width: "100%", height: 300 }}
                source={require("../../assets/FirstAid/Snake/aid.jpg")}
              />

              <Text style={styles.txtBoxDesc}>
                1. Call 911 immediately.
                {"\n"}
                {"\n"}
                2. Note the time of the bite.
                {"\n"}
                {"\n"}
                3. Keep calm and still as movement can cause the venom to travel
                more quickly through the body.
                {"\n"}
                {"\n"}
                4. Remove constricting clothing or jewelry because the area
                surrounding the bite will likely swell.
                {"\n"}
                {"\n"}
                5. Don’t allow the victim to walk. Carry or transport them by
                vehicle.
                {"\n"}
                {"\n"}
                6. Do not kill or handle the snake. Take a picture if you can
                but don’t waste time hunting it down.
              </Text>
            </View>
          </View>

          {/* End Info ------------------------*/}
        </ScrollView>
      </View>
    </View> // end Container
  );
}

{
  /* EXPORT ------------------------------------------*/
}
export default SnakeBiteScreen;

{
  /* Style ------------------------------------------*/
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e1f0ee",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  header: {
    flex: 0.1,
    width: "100%",
    backgroundColor: "#056674",
    padding: 5,
    flexDirection: "row",
  },
  txtContainer: {
    alignSelf: "center",
    justifyContent: "center",
    width: "100%",
  },

  txtheader: {
    color: "white",
    fontSize: 27,
    fontWeight: "700",
    textAlign: "center",
    alignSelf: "center",
  },

  body: {
    flex: 1,
    width: "100%",
    padding: 15,
    paddingTop: 1,
    paddingBottom: 10,
  },

  boxOuter: {
    flex: 1,
    backgroundColor: "#494848",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderRadius: 10,
    margin: 10,
    marginTop: 13,
  },

  boxOuter1: {
    flex: 1,
    backgroundColor: "#494848",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderRadius: 30,
    margin: 30,
    marginTop: 35,
  },

  boxInner: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderRadius: 10,
  },

  txtBoxHead: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
  },

  txtBoxDesc: {
    textAlign: "justify",
    color: "black",
    fontFamily: "sans-serif-medium",
    fontSize: 18,
    padding: 20,
  },

  txtBoxDesc1: {
    textAlign: "center",
    color: "black",
    fontFamily: "sans-serif-medium",
    fontSize: 25,
    padding: 20,
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
