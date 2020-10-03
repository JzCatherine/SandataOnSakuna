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
          <Text style={styles.txtheader}>SHOCK</Text>
        </View>
      </View>

      {/* Body ------------------------*/}
      <View style={styles.body}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Before ------------------------*/}
          <View style={[styles.boxOuter, styles.shadow]}>
            <Text style={styles.txtBoxHead}>WHAT IS SHOCK?</Text>
            <View style={styles.boxInner}>
              <Image
                style={{ width: "100%", height: 280 }}
                source={require("../../assets/FirstAid/Shock/shock.jpg")}
              />

              <Text style={styles.txtBoxDesc}>
                Shock is a critical condition brought on by the sudden drop in
                blood flow through the body. Shock may result from trauma,
                heatstroke, blood loss, an allergic reaction, severe infection,
                poisoning, severe burns or other causes.
                {"\n"}
                {"\n"}
                When a person is in shock, his or her organs aren't getting
                enough blood or oxygen. If untreated, this can lead to permanent
                organ damage or even death.
                {"\n"}
                {"\n"}
                Shock can be caused by anything that reduces the flow of blood,
                such as: severe internal or external bleeding heart problems,
                such as a heart attack, or heart failure loss of body fluids,
                from dehydration, diarrhoea, vomiting, or burns severe allergic
                reactions and overwhelming infection (septic shock) spinal cord
                injury.
              </Text>
            </View>
          </View>

          {/* Image -----------------------------*/}
          <View style={[styles.boxOuter, styles.shadow]}>
            <View style={styles.boxInner}>
              <Image
                style={{
                  width: "100%",
                  height: 150,
                  resizeMode: "contain",
                  alignSelf: "center",
                }}
                source={require("../../assets/FirstAid/Shock/basic.png")}
              />
            </View>
          </View>

          {/* Septic ------------------------*/}
          <View style={[styles.boxOuter, styles.shadow]}>
            <Text style={styles.txtBoxHead}>1. SEPTIC SHOCK</Text>
            <View style={styles.boxInner}>
              <Image
                style={{ width: "100%", height: 190 }}
                source={require("../../assets/FirstAid/Shock/septic.jpg")}
              />

              <Text style={styles.txtBoxDesc}>
                Septic shock results from bacteria multiplying in the blood and
                releasing toxins. Common causes of this are pneumonia, urinary
                tract infections, skin infections (cellulitis), intra-abdominal
                infections (such as a ruptured appendix), and meningitis.
              </Text>
            </View>
          </View>

          {/* ANAPHYLACTIC ------------------------*/}
          <View style={[styles.boxOuter, styles.shadow]}>
            <Text style={styles.txtBoxHead}>2. ANAPHYLACTIC SHOCK</Text>
            <View style={styles.boxInner}>
              <Image
                style={{ width: "100%", height: 190 }}
                source={require("../../assets/FirstAid/Shock/anaphylactic.jpg")}
              />

              <Text style={styles.txtBoxDesc}>
                Anaphylactic shock is a type of severe hypersensitivity or
                allergic reaction. Causes include allergy to insect stings,
                medicines, or foods (nuts, berries, seafood), etc.
              </Text>
            </View>
          </View>

          {/* CARDIOGENIC  ------------------------*/}
          <View style={[styles.boxOuter, styles.shadow]}>
            <Text style={styles.txtBoxHead}>3. CARDIOGENIC SHOCK</Text>
            <View style={styles.boxInner}>
              <Image
                style={{ width: "100%", height: 190 }}
                source={require("../../assets/FirstAid/Shock/cardiogenic.jpg")}
              />

              <Text style={styles.txtBoxDesc}>
                Cardiogenic shock happens when the heart is damaged and unable
                to supply sufficient blood to the body. This can be the end
                result of a heart attack or congestive heart failure.
              </Text>
            </View>
          </View>

          {/* HYPOVOLEMIC  ------------------------*/}
          <View style={[styles.boxOuter, styles.shadow]}>
            <Text style={styles.txtBoxHead}>4.HYPOVOLEMIC SHOCK</Text>
            <View style={styles.boxInner}>
              <Image
                style={{ width: "100%", height: 190 }}
                source={require("../../assets/FirstAid/Shock/hypovolemic.jpg")}
              />

              <Text style={styles.txtBoxDesc}>
                Hypovolemic shock is caused by severe blood and fluid loss, such
                as from traumatic bodily injury, which makes the heart unable to
                pump enough blood to the body, or severe anemia where there is
                not enough blood to carry oxygen through the body.
              </Text>
            </View>
          </View>

          {/* NEUROGENIC ------------------------*/}
          <View style={[styles.boxOuter, styles.shadow]}>
            <Text style={styles.txtBoxHead}>5. NEUROGENIC SHOCK</Text>
            <View style={styles.boxInner}>
              <Image
                style={{ width: "100%", height: 190 }}
                source={require("../../assets/FirstAid/Shock/neurogenic.jpeg")}
              />

              <Text style={styles.txtBoxDesc}>
                Neurogenic shock is caused by spinal cord injury, usually as a
                result of a traumatic accident or injury.
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
                1. Call 911 for immediate medical attention any time a person
                has symptoms of shock. Do not wait for symptoms to worsen before
                calling for help. Stay with the person until help arrives, and
                if possible, stay on the line with the 911 dispatcher because
                they may have specific instructions for you.
                {"\n"}
                {"\n"}
                2. While waiting for help or on the way to the emergency room,
                check the person's airway, breathing and circulation (the ABCs).
                Administer CPR if you are trained. If the person is breathing on
                his or her own, continue to check breathing every 2 minutes
                until help arrives.
                {"\n"}
                {"\n"}
                3. Do NOT move a person who has a known or suspected spinal
                injury (unless they are in imminent danger of further injury).
                {"\n"}
                {"\n"}
                4. Have the person lie down on his or her back with the feet
                elevated above the head (if raising the legs causes pain or
                injury, keep the person flat) to increase blood flow to vital
                organs. Do not raise the head.
                {"\n"}
                {"\n"}
                5. Keep the person warm and comfortable. Loosen tight clothing
                and cover them with a blanket.
                {"\n"}
                {"\n"}
                6. Do not give fluids by mouth, even if the person complains of
                thirst. There is a choking risk in the event of sudden loss of
                consciousness.
                {"\n"}
                {"\n"}
                7. Give appropriate first aid for any injuries.
                {"\n"}
                {"\n"}
                8. Direct pressure should be applied to any wounds that are
                bleeding significantly.
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
