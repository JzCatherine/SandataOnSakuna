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

function NosebleedScreen({ navigation }) {
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
          <Text style={styles.txtheader}>NOSEBLEED</Text>
        </View>
      </View>

      {/* Body ------------------------*/}
      <View style={styles.body}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Before ------------------------*/}
          <View style={[styles.boxOuter, styles.shadow]}>
            <Text style={styles.txtBoxHead}>WHAT IS NOSEBLEED?</Text>
            <View style={styles.boxInner}>
              <Image
                style={{ width: "100%", height: 280 }}
                source={require("../../assets/FirstAid/Nosebleed/nosebleed.jpg")}
              />

              <Text style={styles.txtBoxDesc}>
                The definition of a nosebleed is simply bleeding from the blood
                vessels in the nose. The medical term for nosebleed is
                epistaxis.
                {"\n"}
                {"\n"}
                Nosebleeds are common due to the location of the nose on the
                face, and the large amount of blood vessels in the nose.
                {"\n"}
                {"\n"}
                The most common causes of nosebleeds are drying of the nasal
                membranes and nose picking (digital trauma), which can be
                prevented with proper lubrication of the nasal passages and not
                picking the nose.
                {"\n"}
                {"\n"}
                Most nosebleeds can be stopped at home. Consult a doctor for a
                nosebleed if bleeding cannot be stopped, there is a large amount
                of blood lost, or you feel weak or faint.
              </Text>
            </View>
          </View>

          {/* Causes ------------------------*/}
          <View style={[styles.boxOuter, styles.shadow]}>
            <Text style={styles.txtBoxHead}>WHAT CAUSES NOSEBLEED?</Text>
            <View style={styles.boxInner}>
              <Text style={styles.txtBoxDesc1}>INFECTION</Text>
              <Image
                style={{ width: "100%", height: 250 }}
                source={require("../../assets/FirstAid/Nosebleed/infection.jpg")}
              />

              <Text style={styles.txtBoxDesc1}>PHYSICAL TRAUMA</Text>
              <Image
                style={{ width: "100%", height: 250 }}
                source={require("../../assets/FirstAid/Nosebleed/nose.jpg")}
              />

              <Text style={styles.txtBoxDesc1}>RHINITIS</Text>
              <Image
                style={{ width: "100%", height: 250 }}
                source={require("../../assets/FirstAid/Nosebleed/rhinitis.jpg")}
              />

              <Text style={styles.txtBoxDesc1}>HYPERTENSION</Text>
              <Image
                style={{ width: "100%", height: 250 }}
                source={require("../../assets/FirstAid/Nosebleed/hyper.jpg")}
              />

              <Text style={styles.txtBoxDesc1}>USE OF BLOOD THINNING MEDS</Text>
              <Image
                style={{ width: "100%", height: 250 }}
                source={require("../../assets/FirstAid/Nosebleed/meds.jpg")}
              />

              <Text style={styles.txtBoxDesc1}>
                HORMONAL CHANGES during PREGNANCY
              </Text>
              <Image
                style={{ width: "100%", height: 250 }}
                source={require("../../assets/FirstAid/Nosebleed/hormone.jpg")}
              />

              <Text style={styles.txtBoxDesc1}>TUMORS</Text>
              <Image
                style={{ width: "100%", height: 250 }}
                source={require("../../assets/FirstAid/Nosebleed/inherited.jpg")}
              />

              <Text style={styles.txtBoxDesc1}>ALCOHOL ABUSE</Text>
              <Image
                style={{ width: "100%", height: 250 }}
                source={require("../../assets/FirstAid/Nosebleed/abuse.jpg")}
              />
            </View>
          </View>

          {/* First Aid ------------------------*/}
          <View style={[styles.boxOuter, styles.shadow]}>
            <View style={styles.boxInner}>
              <Image
                style={{ width: "100%", height: 250 }}
                source={require("../../assets/FirstAid/Faint/border.jpg")}
              />

              <Text style={styles.txtBoxDesc}>
                1. Lean forward slightly with the head tilted forward. Leaning
                back or tilting the head back allows the blood to run back into
                the sinuses and throat, and can cause gagging or inhaling of
                blood.
                {"\n"}
                {"\n"}
                2. Spit out any blood that may collect in your mouth and throat.
                It may cause nausea, vomiting, or diarrhea if swallowed. Gently,
                blow any blood clots out of your nose. The nosebleed may worsen
                slightly when you do this but this is expected.
                {"\n"}
                {"\n"}
                3. Pinch all the soft parts of the nose together between the
                thumb and index finger.
                {"\n"}
                {"\n"}
                4. Press firmly toward the face - compressing the pinched parts
                of the nose against the bones of the face. Breathe through your
                mouth as you do this.
                {"\n"}
                {"\n"}
                5. Hold the nose for at least five minutes. Repeat as necessary
                until the nose has stopped bleeding.
                {"\n"}
                {"\n"}
                6. Sit quietly, keeping the head higher than the level of the
                heart. Do not lay flat or put your head between your legs.
                {"\n"}
                {"\n"}
                7. Apply ice (wrapped in a towel) to nose and cheeks afterwards.
                {"\n"}
                {"\n"}
                8. Oxymetazoline (Afrin), phenylephrine hydrochloride
                (Neo-Synephrine, Neofrin), or phenylephrine-DM-guaifenesin
                (Duravent) nasal spray can be used short-term to help with
                congestion and minor bleeding if you do not have high blood
                pressure.
                {"\n"}
                {"\n"}
                However, these sprays should not be used for more than a few
                days at a time, as they can make congestion and nosebleeds
                worse.
                {"\n"}
                {"\n"}
                Stuffing cotton or tissue into your nose is not recommended.
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
export default NosebleedScreen;

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
    fontSize: 18,
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
