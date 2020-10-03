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

function DrowningScreen({ navigation }) {
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
          <Text style={styles.txtheader}>DROWNING</Text>
        </View>
      </View>

      {/* Body ------------------------*/}
      <View style={styles.body}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Before ------------------------*/}
          <View style={[styles.boxOuter, styles.shadow]}>
            <Text style={styles.txtBoxHead}>WHAT IS DROWNING?</Text>
            <View style={styles.boxInner}>
              <Image
                style={{ width: "100%", height: 160 }}
                source={require("../../assets/FirstAid/Drowning/drowning.jpg")}
              />

              <Text style={styles.txtBoxDesc}>
                Drowning is when someone has difficulty breathing because their
                nose and mouth are submerged in a liquid. When someone's
                drowning, it may not always look like the distressed call for
                help that most people expect from watching TV. They may go
                unnoticed, even if friends or family are nearby.
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
                source={require("../../assets/FirstAid/Drowning/border.jpg")}
              />
            </View>
          </View>

          {/* STEP 1 ------------------------*/}
          <View style={[styles.boxOuter, styles.shadow]}>
            <Text style={styles.txtBoxHead}>STEP 1</Text>
            <View style={styles.boxInner}>
              <Image
                style={{ width: "100%", height: 190 }}
                source={require("../../assets/FirstAid/Drowning/help.jpeg")}
              />

              <Text style={styles.txtBoxDesc}>
                1. Do not put yourself in danger when trying to rescue a
                casualty.
              </Text>
            </View>
          </View>

          {/* STEP 2 ------------------------*/}
          <View style={[styles.boxOuter, styles.shadow]}>
            <Text style={styles.txtBoxHead}>STEP 2</Text>
            <View style={styles.boxInner}>
              <Image
                style={{ width: "100%", height: 190 }}
                source={require("../../assets/FirstAid/Drowning/rescue.jpg")}
              />

              <Text style={styles.txtBoxDesc}>
                2. When the casualty is rescued from the water, you should first
                perform a primary survey. If this establishes that they are
                unresponsive and not breathing, you should ask a helper to call
                911 for emergency help while you start CPR. Ask a helper to find
                and bring a defibrillator, if available. If you are on your own,
                use the hands-free speaker on a phone so you can start CPR while
                speaking to ambulance control. Do not leave the casualty to look
                for a defibrillator yourself, the ambulance will bring one.
              </Text>
            </View>
          </View>

          {/* STEP 3 ------------------------*/}
          <View style={[styles.boxOuter, styles.shadow]}>
            <Text style={styles.txtBoxHead}>STEP 3</Text>
            <View style={styles.boxInner}>
              <Image
                style={{ width: "100%", height: 190 }}
                source={require("../../assets/FirstAid/Drowning/compression.jpg")}
              />

              <Text style={styles.txtBoxDesc}>
                3. Start performing chest compressions. Kneel by the casualty
                and put the heel of your hand in the middle of their chest. Put
                your other hand on top of the first. Interlock your fingers
                making sure they don't touch the ribs. Keep your arms straight
                and lean over the casualty. Press down hard, to a depth of about
                5-6cm before releasing the pressure, allowing the chest to come
                back up. Do this at a rate of 100-120 compressions per minute.
                The beat of the song ‘Staying Alive’ can help you keep the right
                rate.
              </Text>
            </View>
          </View>

          {/* STEP 4 ------------------------*/}
          <View style={[styles.boxOuter, styles.shadow]}>
            <Text style={styles.txtBoxHead}>STEP 4</Text>
            <View style={styles.boxInner}>
              <Image
                style={{ width: "100%", height: 190 }}
                source={require("../../assets/FirstAid/Drowning/cpr.jpg")}
              />

              <Text style={styles.txtBoxDesc}>
                4. Continue to perform CPR until:   Emergency help arrives and
                takes over   the person starts showing signs of life and starts
                to breathe normally you are too exhausted to continue (if there
                is a helper, you can change over every one-to-two minutes, with
                minimal interruptions to chest compressions) or a defibrillator
                is ready to be used (if the helper returns with a defibrillator,
                ask them to switch it on and follow the voice prompts while you
                continue with CPR).
              </Text>
            </View>
          </View>

          {/* STEP 5 ------------------------*/}
          <View style={[styles.boxOuter, styles.shadow]}>
            <Text style={styles.txtBoxHead}>STEP 5</Text>
            <View style={styles.boxInner}>
              <Text style={styles.txtBoxDesc}>
                5. Beware, many casualties that drown may bring up stomach
                contents, so be prepared to roll them onto their side to clear
                their airway.
              </Text>
            </View>
          </View>

          {/* STEP 6 ------------------------*/}
          <View style={[styles.boxOuter, styles.shadow]}>
            <Text style={styles.txtBoxHead}>STEP 6</Text>
            <View style={styles.boxInner}>
              <Image
                style={{ width: "100%", height: 190 }}
                source={require("../../assets/FirstAid/Drowning/defib.jpeg")}
              />

              <Text style={styles.txtBoxDesc}>
                6. If the casualty shows signs of becoming responsive such as
                coughing, opening eyes, speaking, and starts to breathe
                normally, put them in the recovery position. You may also need
                to treat them for hypothermia covering them with warm clothes
                and blankets. If possible, replace the wet clothes with dry
                clothes.
              </Text>
            </View>
          </View>

          {/* STEP 7 ------------------------*/}
          <View style={[styles.boxOuter, styles.shadow]}>
            <Text style={styles.txtBoxHead}>STEP 7</Text>
            <View style={styles.boxInner}>
              <Text style={styles.txtBoxDesc}>
                7. Monitor the casualty's level of response and prepare to give
                CPR again if necessary. If you have used a defibrillator, leave
                it attached.
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
export default DrowningScreen;

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
