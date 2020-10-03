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

function ShockScreen({ navigation }) {
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
          <Text style={styles.txtheader}>FAINT</Text>
        </View>
      </View>

      {/* Body ------------------------*/}
      <View style={styles.body}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Before ------------------------*/}
          <View style={[styles.boxOuter, styles.shadow]}>
            <Text style={styles.txtBoxHead}>WHAT IS FAINT?</Text>
            <View style={styles.boxInner}>
              <Image
                style={{ width: "100%", height: 280 }}
                source={require("../../assets/FirstAid/Faint/faint.jpg")}
              />

              <Text style={styles.txtBoxDesc}>
                Unconsciousness is when a person suddenly becomes unable to
                respond to stimuli and appears to be asleep. A person may be
                unconscious for a few seconds — as in fainting — or for longer
                periods of time.
                {"\n"}
                {"\n"}
                People who become unconscious don’t respond to loud sounds or
                shaking. They may even stop breathing or their pulse may become
                faint. This calls for immediate emergency attention. The sooner
                the person receives emergency first aid, the better their
                outlook will be.
              </Text>
            </View>
          </View>

          {/* Causes ------------------------*/}
          <View style={[styles.boxOuter, styles.shadow]}>
            <Text style={styles.txtBoxHead}>CAUSES OF UNCONSCIOUSNESS</Text>
            <View style={styles.boxInner}>
              <Image
                style={{ width: "100%", height: 190 }}
                source={require("../../assets/FirstAid/Faint/carAcc.jpg")}
              />
              <Text style={styles.txtBoxDesc1}>CAR ACCIDENT</Text>

              <Image
                style={{ width: "100%", height: 190 }}
                source={require("../../assets/FirstAid/Faint/blood.jpg")}
              />
              <Text style={styles.txtBoxDesc1}>SEVERE BLOOD LOSS</Text>

              <Image
                style={{ width: "100%", height: 190 }}
                source={require("../../assets/FirstAid/Faint/drug.jpg")}
              />
              <Text style={styles.txtBoxDesc1}>DRUG OVERDOSE</Text>

              <Image
                style={{ width: "100%", height: 190 }}
                source={require("../../assets/FirstAid/Faint/alcohol.png")}
              />
              <Text style={styles.txtBoxDesc1}>ALCOHOL POISONING</Text>
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
                source={require("../../assets/FirstAid/Faint/border.jpg")}
              />
            </View>
          </View>

          {/* First Aid ------------------------*/}
          <View style={[styles.boxOuter, styles.shadow]}>
            <View style={styles.boxInner}>
              <Image
                style={{ width: "100%", height: 250 }}
                source={require("../../assets/FirstAid/Faint/shout.jpg")}
              />

              <Text style={styles.txtBoxDesc}>
                1. Check whether the person is breathing. If they’re not
                breathing, have someone call 911 or your local emergency
                services immediately and prepare to begin CPR. If they’re
                breathing, position the person on their back.
                {"\n"}
                {"\n"}
                2. Raise their legs at least 12 inches above the ground.
                {"\n"}
                {"\n"}
                3. Loosen any restrictive clothing or belts. If they don’t
                regain consciousness within one minute, call 911 or your local
                emergency services.
                {"\n"}
                {"\n"}
                4. Check their airway to make sure there’s no obstruction.
                {"\n"}
                {"\n"}
                5. Check again to see if they’re breathing, coughing, or moving.
                These are signs of positive circulation. If these signs are
                absent, perform CPR until emergency personnel arrive.
                {"\n"}
                {"\n"}
                6. If there’s major bleeding occurring, place direct pressure on
                the bleeding area or apply a tourniquet above the bleeding area
                until expert help arrives.
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
export default ShockScreen;

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
