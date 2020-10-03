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

function AnimalBiteScreen({ navigation }) {
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
          <Text style={styles.txtheader}>ANIMAL BITE</Text>
        </View>
      </View>

      {/* Body ------------------------*/}
      <View style={styles.body}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Before ------------------------*/}
          <View style={[styles.boxOuter, styles.shadow]}>
            <Text style={styles.txtBoxHead}>WHAT IS AN ANIMAL BITE?</Text>
            <View style={styles.boxInner}>
              <Image
                style={{ width: "100%", height: 250 }}
                source={require("../../assets/FirstAid/Animal/animal.jpg")}
              />

              <Text style={styles.txtBoxDesc}>
                An animal bite is a wound, usually a puncture or laceration,
                caused by the teeth. An animal bite usually results in a break
                in the skin but also includes contusions from the excessive
                pressure on body tissue from the bite. The contusions can occur
                without a break in the skin. Bites can be provoked or
                unprovoked.
                {"\n"}
                {"\n"}
                Other bite attacks may be apparently unprovoked. Biting is a
                physical action not only describing an attack but it is a normal
                response in an animal as it eats, carries objects, softens and
                prepares food for its young, removes ectoparasites from its body
                surface, removes plant seeds attached to its fur or hair,
                scratching itself, and grooming other animals.
                {"\n"}
                {"\n"}
                Animal bites often result in serious infections and mortality.
                Animal bites not only include injuries from the teeth of
                reptiles, mammals, but fish, and amphibians. Arthropods can also
                bite and leave injuries.
              </Text>
            </View>
          </View>

          {/* Image -----------------------------*/}
          <View style={[styles.boxOuter, styles.shadow]}>
            <View style={styles.boxInner}>
              <Image
                style={{
                  width: "100%",
                  height: 225,
                  resizeMode: "contain",
                  alignSelf: "center",
                }}
                source={require("../../assets/FirstAid/Animal/border.jpg")}
              />
            </View>
          </View>

          {/* STEP 1 ------------------------*/}
          <View style={[styles.boxOuter, styles.shadow]}>
            <Text style={styles.txtBoxHead}>1. Wash the Wound</Text>
            <View style={styles.boxInner}>
              <Image
                style={{ width: "100%", height: 190 }}
                source={require("../../assets/FirstAid/Animal/wash.jpg")}
              />

              <Text style={styles.txtBoxDesc}>
                Wash the wound thoroughly with soap and warm water to reduce the
                risk of infection being transferred from the animal.
              </Text>
            </View>
          </View>

          {/* STEP 2 ------------------------*/}
          <View style={[styles.boxOuter, styles.shadow]}>
            <Text style={styles.txtBoxHead}>2. Raise and Support</Text>
            <View style={styles.boxInner}>
              <Image
                style={{ width: "100%", height: 190 }}
                source={require("../../assets/FirstAid/Animal/wash.jpg")}
              />

              <Text style={styles.txtBoxDesc}>
                Raise and support the wound and pat it dry, preferably with
                clean gauze from your first aid kit. Then cover it with a
                sterile wound dressing.
                {"\n"}
                {"\n"}
                If the wound is large or deep, treat the bleeding, and call 911
                for emergency help. If the casualty is not sure if they’ve had a
                tetanus jab or the wound is dirty, advise them to seek medical
                help straight away.
              </Text>
            </View>
          </View>

          {/* STEP 3 ------------------------*/}
          <View style={[styles.boxOuter, styles.shadow]}>
            <Text style={styles.txtBoxHead}>WHEN DO YOU NEED A DOCTOR</Text>
            <View style={styles.boxInner}>
              <Image
                style={{ width: "100%", height: 190 }}
                source={require("../../assets/FirstAid/Animal/ambu.jpg")}
              />

              <Text style={styles.txtBoxDesc}>
                If you think there’s a risk of rabies, 911 for emergency help. 
                If the bite is from another human, there’s also a small risk of
                getting hepatitis or the HIV/AIDS virus. Advise the casualty to
                seek medical help straight away.
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
export default AnimalBiteScreen;

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
