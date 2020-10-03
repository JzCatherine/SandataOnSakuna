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

function BeeStingScreen({ navigation }) {
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
          <Text style={styles.txtheader}>BEE STING</Text>
        </View>
      </View>

      {/* Body ------------------------*/}
      <View style={styles.body}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Burn ------------------------*/}
          <View style={[styles.boxOuter, styles.shadow]}>
            <Text style={styles.txtBoxHead}>WHAT IS BEE STING?</Text>
            <View style={styles.boxInner}>
              <Image
                style={{ width: "100%", height: 200 }}
                source={require("../../assets/FirstAid/Bee/beesting.png")}
              />

              <Text style={styles.txtBoxDesc}>
                A bee sting is a wound caused by the stinger from a bee (honey
                bee, bumblebee, sweat bee, etc.) being injected into one's
                flesh. The stings of most of these species can be quite painful,
                and are therefore keenly avoided by many people.
                {"\n"}
                {"\n"}
                Bee stings differ from insect bites, and the venom or toxin of
                stinging insects is quite different. Therefore, the body's
                reaction to a bee sting may differ significantly from one
                species to another.
                {"\n"}
                {"\n"}
                In particular, bee stings are acidic, whereas wasp stings are
                alkaline, so the body's reaction to a bee sting may be very
                different from its reaction to a wasp sting.
                {"\n"}
                {"\n"}
                Although for most people a bee sting is painful but otherwise
                relatively harmless, in people with insect sting allergy, stings
                may trigger a dangerous anaphylactic reaction that is
                potentially deadly. Additionally, honey bee stings release
                pheromones that prompt other nearby bees to attack.
              </Text>
            </View>
          </View>

          {/* Header  -----------------------------*/}
          <View style={[styles.boxOuter1, styles.shadow]}>
            <Text style={styles.txtBoxHead}>BEE STING SYMPTOMS</Text>
          </View>

          {/* SYMPTOMS ------------------------*/}
          <View style={[styles.boxOuter, styles.shadow]}>
            <Text style={styles.txtBoxHead}>MILD REACTION SYMPTOMS</Text>
            <View style={styles.boxInner}>
              <Image
                style={{ width: "100%", height: 300 }}
                source={require("../../assets/FirstAid/Bee/sting.jpg")}
              />
              <Text style={styles.txtBoxDesc}>
                1. Instant, sharp burning pain at the sting site
                {"\n"}
                {"\n"}
                2. A red welt at the sting area
                {"\n"}
                {"\n"}
                3. Slight swelling around the sting area
                {"\n"}
                {"\n"}
                In most people, the swelling and pain go away within a few
                hours.
              </Text>
            </View>
          </View>

          {/* SYMPTOMS ------------------------*/}
          <View style={[styles.boxOuter, styles.shadow]}>
            <Text style={styles.txtBoxHead}>MODERATE REACTION SYMPTOMS</Text>
            <View style={styles.boxInner}>
              <Image
                style={{ width: "100%", height: 300 }}
                source={require("../../assets/FirstAid/Bee/sting1.jpg")}
              />
              <Text style={styles.txtBoxDesc}>
                1. Extreme redness
                {"\n"}
                {"\n"}
                2. Swelling at the site of the sting that gradually enlarges
                over the next day or two
                {"\n"}
                {"\n"}
                Moderate reactions tend to resolve over five to 10 days. Having
                a moderate reaction doesn't mean you'll have a severe allergic
                reaction the next time you're stung.
                {"\n"}
                {"\n"}
                But some people develop similar moderate reactions each time
                they're stung.
                {"\n"}
                {"\n"}
                If this happens to you, talk to your doctor about treatment and
                prevention, especially if the reaction becomes more severe each
                time.
              </Text>
            </View>
          </View>

          {/* SYMPTOMS ------------------------*/}
          <View style={[styles.boxOuter, styles.shadow]}>
            <Text style={styles.txtBoxHead}>SEVERE ALERGIC REACTION</Text>
            <View style={styles.boxInner}>
              <Image
                style={{ width: "100%", height: 300 }}
                source={require("../../assets/FirstAid/Bee/sting2.jpg")}
              />
              <Text style={styles.txtBoxDesc}>
                1. Skin reactions, including hives and itching and flushed or
                pale skin
                {"\n"}
                {"\n"}
                2. Difficulty breathing
                {"\n"}
                {"\n"}
                3. Swelling of the throat and tongue
                {"\n"}
                {"\n"}
                4. A weak, rapid pulse
                {"\n"}
                {"\n"}
                5. Nausea, vomiting or diarrhea
                {"\n"}
                {"\n"}
                6. Dizziness or fainting
                {"\n"}
                {"\n"}
                7. Loss of consciousness
              </Text>
            </View>
          </View>

          {/* First Aid ------------------------*/}
          <View style={[styles.boxOuter, styles.shadow]}>
            <View style={styles.boxInner}>
              <Image
                style={{ width: "100%", height: 250 }}
                source={require("../../assets/FirstAid/Shock/border.jpg")}
              />

              <Text style={styles.txtBoxDesc}>
                1. Move to a safe area to avoid more bites or stings.
                {"\n"}
                {"\n"}
                2. If needed, remove the stinger.
                {"\n"}
                {"\n"}
                3. Wash the area with soap and water.
                {"\n"}
                {"\n"}
                4. Apply a cool compress. Use a cloth dampened with cold water
                or filled with ice. This helps reduce pain and swelling. If the
                injury is on an arm or leg, elevate it.
                {"\n"}
                {"\n"}
                5. Apply 0.5 or 1 percent hydrocortisone cream, calamine lotion
                or a baking soda paste to the bite or sting several times daily
                until your symptoms go away.
                {"\n"}
                {"\n"}
                6. Take an antihistamine (Benadryl, others) to reduce itching.
              </Text>
            </View>
            <Text style={styles.txtBoxHead}>WHEN TO SEE A DOCTOR</Text>
            <View style={styles.boxInner}>
              <Text style={styles.txtBoxDesc}>
                1. Difficulty breathing
                {"\n"}
                {"\n"}
                2. Swelling of the lips, eyelids or throat
                {"\n"}
                {"\n"}
                3. Dizziness, faintness or confusion
                {"\n"}
                {"\n"}
                4. Rapid heartbeat
                {"\n"}
                {"\n"}
                5. Hives
                {"\n"}
                {"\n"}
                6. Nausea, cramps or vomiting
                {"\n"}
                {"\n"}
                7. A scorpion sting and is a child
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
export default BeeStingScreen;

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
