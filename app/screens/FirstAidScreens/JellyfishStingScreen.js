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

function JellyfishStingScreen({ navigation }) {
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
          <Text style={styles.txtheader}>JELLYFISH STING</Text>
        </View>
      </View>

      {/* Body ------------------------*/}
      <View style={styles.body}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Burn ------------------------*/}
          <View style={[styles.boxOuter, styles.shadow]}>
            <Text style={styles.txtBoxHead}>JELLYFISH STING</Text>
            <View style={styles.boxInner}>
              <Image
                style={{ width: "100%", height: 200 }}
                source={require("../../assets/FirstAid/Jellyfish/jelly.jpg")}
              />

              <Text style={styles.txtBoxDesc}>
                Jellyfish stings are relatively common problems for people
                swimming, wading or diving in seawaters. The long tentacles
                trailing from the jellyfish body can inject you with venom from
                thousands of microscopic barbed stingers.
                {"\n"}
                {"\n"}
                Jellyfish stings vary greatly in severity. Most often they
                result in immediate pain and red, irritated marks on the skin.
                Some jellyfish stings may cause more whole-body (systemic)
                illness. And in rare cases jellyfish stings are
                life-threatening. Most jellyfish stings get better with home
                treatment. Severe reactions require emergency medical care.
              </Text>
            </View>
          </View>

          {/* SYMPTOMS ------------------------*/}
          <View style={[styles.boxOuter, styles.shadow]}>
            <Text style={styles.txtBoxHead}>JELLYFISH STING SYMPTOMS</Text>
            <View style={styles.boxInner}>
              <Image
                style={{ width: "100%", height: 200 }}
                source={require("../../assets/FirstAid/Jellyfish/sting.jpg")}
              />
              <Text style={styles.txtBoxDesc}>
                Jellyfish are a common sea creature found in every ocean. There
                are many species of jellyfish, all of them with tentacles.
                {"\n"}
                {"\n"}
                Some carry poisonous venom in their tentacles as a method of
                self-defense against predators. It’s this venom that makes a
                jellyfish sting so painful.
              </Text>
            </View>
            <Text style={styles.txtBoxHead}>COMMON SYMPTOMS</Text>
            <View style={styles.boxInner}>
              <Text style={styles.txtBoxDesc}>
                1. A burning, stinging sensation on your skin
                {"\n"}
                {"\n"}
                2. A tingling or numbness where the sting occurred
                {"\n"}
                {"\n"}
                3. The skin in the area where the jellyfish stung turning red or
                purple
                {"\n"}
                {"\n"}
                Thirst
                {"\n"}
                {"\n"}
                Tiredness
              </Text>
            </View>
            <Text style={styles.txtBoxHead}>SEVERE SYMPTOMS</Text>
            <View style={styles.boxInner}>
              <Text style={styles.txtBoxDesc}>
                1. Nausea
                {"\n"}
                {"\n"}
                2. Dizziness
                {"\n"}
                {"\n"}
                3. Vomitting
                {"\n"}
                {"\n"}
                4. Difficulty in Breathing
                {"\n"}
                {"\n"}
                The severity of your symptoms will depend on what kind of
                jellyfish you encountered, and how much of your skin is affected
                by its venom.
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
                source={require("../../assets/FirstAid/Jellyfish/border.jpg")}
              />
            </View>
          </View>

          {/* First Aid  ------------------------*/}
          <View style={[styles.boxOuter, styles.shadow]}>
            <Text style={styles.txtBoxHead}>Immediate relief treatment</Text>
            <View style={styles.boxInner}>
              <Image
                style={{ width: "100%", height: 225 }}
                source={require("../../assets/FirstAid/Jellyfish/hot.jpg")}
              />
              <Text style={styles.txtBoxDesc}>
                Most jellyfish stings can be treated right away with a salt
                water or hot water rinse. This will help decrease the burning
                sensation from the sting.
                {"\n"}
                {"\n"}
                It may also help to take a hot shower as soon as possible. A
                recent study by Trusted Source concluded that jellyfish stings
                are treated more effectively by hot water than by ice packs.
              </Text>
            </View>
          </View>

          <View style={[styles.boxOuter, styles.shadow]}>
            <Text style={styles.txtBoxHead}>Over-the-Counter Medicines</Text>
            <View style={styles.boxInner}>
              <Image
                style={{ width: "100%", height: 225 }}
                source={require("../../assets/FirstAid/Jellyfish/cream.jpg")}
              />
              <Text style={styles.txtBoxDesc}>
                If you’re in a lot of pain, you can try applying a topical
                painkiller such as lidocaine (LMX 4, AneCream). A pain reliever
                such as ibuprofen (Advil) could also lessen the effect of the
                sting. You may find out you are allergic to jellyfish stings
                after you’ve been stung by one.
                {"\n"}
                {"\n"}
                If you’re having an allergic reaction, such as hives, an
                over-the-counter antihistamine cream will help bring relief.
              </Text>
            </View>
          </View>

          <View style={[styles.boxOuter, styles.shadow]}>
            <Text style={styles.txtBoxHead}>Home Remedies</Text>
            <View style={styles.boxInner}>
              <Image
                style={{ width: "100%", height: 250 }}
                source={require("../../assets/FirstAid/Jellyfish/vinb.jpg")}
              />
              <Text style={styles.txtBoxDesc}>
                Some people believe that applying a baking soda paste to the
                sting area will soothe their skin and draw out the jellyfish’s
                venom. Vinegar is also a popular remedy for jellyfish stings.
                But the effectiveness of both of these remedies is inconclusive.
                Using a vinegar rinse may help in the case of some jellyfish
                species, but not others.
              </Text>
            </View>
          </View>

          <View style={[styles.boxOuter, styles.shadow]}>
            <Text style={styles.txtBoxHead}>
              Medicines for severe reactions
            </Text>
            <View style={styles.boxInner}>
              <Image
                style={{ width: "100%", height: 225 }}
                source={require("../../assets/FirstAid/Jellyfish/anti.jpg")}
              />
              <Text style={styles.txtBoxDesc}>
                A reaction to a more dangerous species of jellyfish will need to
                be treated with antivenin. This is a special drug formulated to
                combat the venom of a specific breed of animal. Antivenin for
                jellyfish stings can only be found in hospitals.
              </Text>
            </View>
          </View>

          <View style={[styles.boxOuter, styles.shadow]}>
            <Text style={styles.txtBoxHead}>When to see a Doctor</Text>
            <View style={styles.boxInner}>
              <Image
                style={{ width: "100%", height: 225 }}
                source={require("../../assets/FirstAid/Jellyfish/doc.jpg")}
              />
              <Text style={styles.txtBoxDesc}>
                Most jellyfish stings won’t have any long-term effect on your
                health. If you’re stung by a jellyfish and start to feel dizzy
                or nauseous, pay close attention. Jellyfish sting symptoms,
                especially from more dangerous species, can escalate quickly.
                {"\n"}
                {"\n"}
                If you lose feeling in the limb that was stung, have difficulty
                breathing, or experience heart palpitations after being stung,
                go to the emergency room.
                {"\n"}
                {"\n"}
                Being stung by a jellyfish in an area known to have dangerous
                breeds such as lion’s mane and box jellyfish, is also cause for
                concern. As well, if you’re stung by a jellyfish multiple times,
                you should see a doctor.
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
export default JellyfishStingScreen;

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
