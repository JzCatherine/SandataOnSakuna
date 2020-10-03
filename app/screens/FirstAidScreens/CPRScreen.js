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

function CPRScreen({ navigation }) {
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
          <Text style={styles.txtheader}>C P R</Text>
        </View>
      </View>

      {/* Body ------------------------*/}
      <View style={styles.body}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Before ------------------------*/}
          <View style={[styles.boxOuter, styles.shadow]}>
            <Text style={styles.txtBoxHead}>WHAT IS CPR?</Text>
            <View style={styles.boxInner}>
              <Image
                style={{ width: "100%", height: 160 }}
                source={require("../../assets/FirstAid/CPR/cprcover.jpg")}
              />

              <Text style={styles.txtBoxDesc}>
                Cardio-pulmonary resuscitation (CPR) is a lifesaving technique
                useful is various emergency situations such as a cardiac arrest,
                heart attack or near drowning.
                {"\n"}
                {"\n"}
                This technique often includes a combination of chest compression
                and artificial ventilation. It helps to preserve intact brain
                function and restore the blood circulation and breathing to the
                vital organs of the patient’s body. CPR is very useful for those
                who become unresponsive with no breathing or abnormal breathing.
                {"\n"}
                {"\n"}
                CPR is very useful for those who become unresponsive with no
                breathing or abnormal breathing.
              </Text>
            </View>
          </View>
          {/* Image -----------------------------*/}
          <View style={[styles.boxOuter, styles.shadow]}>
            <View style={styles.boxInner}>
              <Image
                style={{
                  width: "100%",
                  height: 305,
                  resizeMode: "contain",
                  alignSelf: "center",
                }}
                source={require("../../assets/FirstAid/CPR/steps.jpg")}
              />
            </View>
          </View>

          {/* STEP 1 ------------------------*/}
          <View style={[styles.boxOuter, styles.shadow]}>
            <Text style={styles.txtBoxHead}>1. Position your hand (above)</Text>
            <View style={styles.boxInner}>
              <Image
                style={{ width: "100%", height: 190 }}
                source={require("../../assets/FirstAid/CPR/step1.jpg")}
              />

              <Text style={styles.txtBoxDesc}>
                Make sure the patient is lying on his back on a firm surface.
                Kneel beside him and place the heel of your hand on the centre
                of the chest.
              </Text>
            </View>
          </View>

          {/* STEP 2 ------------------------*/}
          <View style={[styles.boxOuter, styles.shadow]}>
            <Text style={styles.txtBoxHead}>2. Interlock fingers (above)</Text>
            <View style={styles.boxInner}>
              <Image
                style={{ width: "100%", height: 190 }}
                source={require("../../assets/FirstAid/CPR/step2.jpg")}
              />

              <Text style={styles.txtBoxDesc}>
                Keeping your arms straight, cover the first hand with the heel
                of your other hand and interlock the fingers of both hands
                together. Keep your fingers raised so they do not touch the
                patient’s chest or rib cage.
              </Text>
            </View>
          </View>

          {/* STEP 3 ------------------------*/}
          <View style={[styles.boxOuter, styles.shadow]}>
            <Text style={styles.txtBoxHead}>
              3. Give chest compressions (above)
            </Text>
            <View style={styles.boxInner}>
              <Image
                style={{ width: "100%", height: 190 }}
                source={require("../../assets/FirstAid/CPR/step3.jpg")}
              />

              <Text style={styles.txtBoxDesc}>
                Lean forward so that your shoulders are directly over the
                patient’s chest and press down on the chest about two inches.
                Release the pressure, but not your hands, and let the chest come
                back up. Repeat to give 30 compressions at a rate of 100
                compressions per minute.
              </Text>
            </View>
          </View>

          {/* STEP 4 ------------------------*/}
          <View style={[styles.boxOuter, styles.shadow]}>
            <Text style={styles.txtBoxHead}>4. Open the airway (above).</Text>
            <View style={styles.boxInner}>
              <Image
                style={{ width: "100%", height: 190 }}
                source={require("../../assets/FirstAid/CPR/step4.jpg")}
              />

              <Text style={styles.txtBoxDesc}>
                Move to the patient’s head. Tilt his head and lift his chin to
                open the airway again. Let his mouth fall open slightly.
              </Text>
            </View>
          </View>

          {/* STEP 5 ------------------------*/}
          <View style={[styles.boxOuter, styles.shadow]}>
            <Text style={styles.txtBoxHead}>
              5. Give rescue breaths (above)
            </Text>
            <View style={styles.boxInner}>
              <Image
                style={{ width: "100%", height: 190 }}
                source={require("../../assets/FirstAid/CPR/step5.jpg")}
              />

              <Text style={styles.txtBoxDesc}>
                Pinch the nostrils closed with the hand that was on the forehead
                and support the patient’s chin with your other hand. Take a
                normal breath, put your mouth over the patient’s, and blow until
                you can see his chest rise.
              </Text>
            </View>
          </View>

          {/* STEP 6 ------------------------*/}
          <View style={[styles.boxOuter, styles.shadow]}>
            <Text style={styles.txtBoxHead}>6. Watch chest fall</Text>
            <View style={styles.boxInner}>
              <Image
                style={{ width: "100%", height: 190 }}
                source={require("../../assets/FirstAid/CPR/step6.jpg")}
              />

              <Text style={styles.txtBoxDesc}>
                Remove your mouth from the patient’s and look along the chest,
                watching the chest fall. Repeat steps five and six once.
              </Text>
            </View>
          </View>

          {/* STEP 7 ------------------------*/}
          <View style={[styles.boxOuter, styles.shadow]}>
            <Text style={styles.txtBoxHead}>7. Repeat</Text>
            <View style={styles.boxInner}>
              <Image
                style={{ width: "100%", height: 190 }}
                source={require("../../assets/FirstAid/CPR/step7.jpg")}
              />

              <Text style={styles.txtBoxDesc}>
                Repeat chest compressions and rescue breaths. Place your hands
                on the chest again and repeat the cycle of 30 chest
                compressions, followed by two rescue breaths. Continue the
                cycle.
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
export default CPRScreen;

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
