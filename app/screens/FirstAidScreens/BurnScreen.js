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

function BurnScreen({ navigation }) {
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
          <Text style={styles.txtheader}>BURN</Text>
        </View>
      </View>

      {/* Body ------------------------*/}
      <View style={styles.body}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Burn ------------------------*/}
          <View style={[styles.boxOuter, styles.shadow]}>
            <Text style={styles.txtBoxHead}>WHAT IS A BURN?</Text>
            <View style={styles.boxInner}>
              <Image
                style={{ width: "100%", height: 160 }}
                source={require("../../assets/FirstAid/Burn/burn.jpg")}
              />

              <Text style={styles.txtBoxDesc}>
                A burn is damage to your body's tissues caused by heat,
                chemicals, electricity, sunlight, or radiation. Scalds from hot
                liquids and steam, building fires and flammable liquids and
                gases are the most common causes of burns. Another kind is an
                inhalation injury, caused by breathing smoke.
              </Text>
            </View>
          </View>

          {/* Major Burn ------------------------*/}
          <View style={[styles.boxOuter, styles.shadow]}>
            <Text style={styles.txtBoxHead}>WHAT IS A MAJOR BURN?</Text>
            <View style={styles.boxInner}>
              <Image
                style={{ width: "100%", height: 160 }}
                source={require("../../assets/FirstAid/Burn/major.png")}
              />

              <Text style={styles.txtBoxDesc}>
                Major burns can be recognized by four primary characteristics:
                deep result in dry, leathery skin larger than 3 inches in
                diameter or cover the face, hands, feet, buttocks, groin, or a
                major joint have a charred appearance or patches of black,
                brown, or white.
              </Text>
            </View>
            <Text style={styles.txtBoxHead}>FIRST AID FOR MAJOR BURNS</Text>
            <View style={styles.boxInner}>
              <Text style={styles.txtBoxDesc}>
                The first step in treating a major burn is to call 911 or seek
                emergency medical care. Steps to take until emergency arrives
                include:
                {"\n"}
                {"\n"}
                1. Make sure you and the person who’s burned are safe and out of
                harm’s way. Move them away from the source of the burn. If it’s
                an electrical burn, turn off the power source before touching
                them.
                {"\n"}
                {"\n"}
                2. Check to see if they’re breathing. If needed, start rescue
                breathing if you’ve been trained.
                {"\n"}
                {"\n"}
                3. Remove restrictive items from their body, such as belts and
                jewelry in or near the burned areas. Burned areas typically
                swell quickly.
                {"\n"}
                {"\n"}
                4. Cover the burned area. Use a clean cloth or bandage that’s
                moistened with cool, clean water.
                {"\n"}
                {"\n"}
                5. Separate fingers and toes. If hands and feet are burned,
                separate the fingers and toes with dry and sterile, nonadhesive
                bandages.
                {"\n"}
                {"\n"}
                6. Remove clothing from burned areas, but don’t try to remove
                clothing that’s stuck to the skin.
                {"\n"}
                {"\n"}
                7. Avoid immersing the person or burned body parts in water.
                Hypothermia (severe loss of body heat) can occur if you immerse
                large, severe burns in water.
                {"\n"}
                {"\n"}
                8. Raise the burned area. If possible, elevate the burned area
                above their heart.
                {"\n"}
                {"\n"}
                9. Watch for shock. Signs and symptoms of shock include shallow
                breathing, pale complexion, and fainting.
              </Text>
            </View>
          </View>

          {/* Minor Burn ------------------------*/}
          <View style={[styles.boxOuter, styles.shadow]}>
            <Text style={styles.txtBoxHead}>WHAT IS A MAJOR BURN?</Text>
            <View style={styles.boxInner}>
              <Image
                style={{ width: "100%", height: 160 }}
                source={require("../../assets/FirstAid/Burn/minor.jpg")}
              />

              <Text style={styles.txtBoxDesc}>
                What is a minor burn? Minor burns are recognized by the
                following characteristics: less than 3 inches in diameter
                surface redness (like a sunburn) skin blistering pain.
              </Text>
            </View>
            <Text style={styles.txtBoxHead}>FIRST AID FOR MINOR BURNS</Text>
            <View style={styles.boxInner}>
              <Text style={styles.txtBoxDesc}>
                1. Cool down the burn. After holding the burn under cool,
                running water, apply cool, wet compresses until the pain
                subsides.
                {"\n"}
                {"\n"}
                2. Remove tight items, such as rings, from the burned area. Be
                gentle, but move quickly before swelling starts.
                {"\n"}
                {"\n"}
                3. Avoid breaking blisters. Blisters with fluid protect the area
                from infection. If a blister breaks, clean the area and gently
                apply an antibiotic ointment.
                {"\n"}
                {"\n"}
                4. Apply a moisturizing lotion, such as one with aloe vera.
                After the burned area has been cooled, apply a lotion to provide
                relief and to keep the area from drying out.
                {"\n"}
                {"\n"}
                5. Loosely bandage the burn. Use sterile gauze. Avoid fluffy
                cotton that could shed and get stuck to the healing area. Also
                avoid putting too much pressure on the burned skin.
                {"\n"}
                {"\n"}
                6. Take an over-the-counter pain reliever if necessary. Consider
                acetaminophen (Tylenol), ibuprofen (Advil), or naproxen (Aleve).
              </Text>
            </View>
          </View>

          {/* TYPES -----------------------------*/}
          <View style={[styles.boxOuter, styles.shadow]}>
            <View style={styles.boxInner}>
              <Image
                style={{
                  width: "100%",
                  height: 225,
                  resizeMode: "contain",
                  alignSelf: "center",
                }}
                source={require("../../assets/FirstAid/Burn/type.png")}
              />
            </View>
          </View>

          {/* 1 ------------------------*/}
          <View style={[styles.boxOuter, styles.shadow]}>
            <Text style={styles.txtBoxHead}>THERMAL BURN</Text>
            <View style={styles.boxInner}>
              <Image
                style={{ width: "100%", height: 300 }}
                source={require("../../assets/FirstAid/Burn/thermal.jpeg")}
              />

              <Text style={styles.txtBoxDesc}>
                Thermal burns occur when you come in contact with something hot.
                Typically, you will suffer a thermal burn when you touch: Flames
                or fire Hot, molten liquid or steam (referred to as a scald) Hot
                objects, such as cooking pans, irons, or heated appliances.
              </Text>
            </View>
          </View>

          {/* 2 ------------------------*/}
          <View style={[styles.boxOuter, styles.shadow]}>
            <Text style={styles.txtBoxHead}>CHEMICAL BURN</Text>
            <View style={styles.boxInner}>
              <Image
                style={{ width: "100%", height: 250 }}
                source={require("../../assets/FirstAid/Burn/chemical.jpg")}
              />

              <Text style={styles.txtBoxDesc}>
                You may receive a chemical burn if your skin and/or eyes come in
                contact with a harsh irritant, such as acid. Substances that
                cause chemical burns include: Chlorine Ammonia Bleach Battery
                acid Strong or harsh cleaners
              </Text>
            </View>
          </View>

          {/* 3 ------------------------*/}
          <View style={[styles.boxOuter, styles.shadow]}>
            <Text style={styles.txtBoxHead}>ELECTRICAL BURN</Text>
            <View style={styles.boxInner}>
              <Image
                style={{ width: "100%", height: 250 }}
                source={require("../../assets/FirstAid/Burn/electrical.jpg")}
              />

              <Text style={styles.txtBoxDesc}>
                Electrical burns happen when the body comes in contact with an
                electric current. Our internal systems are not resistant to
                electricity, so you may be injured if a strong jolt enters your
                body. The most common cause of electrical burn is coming in
                contact with an extension cord where the insulation material has
                worn away.
              </Text>
            </View>
          </View>

          {/* 4 ------------------------*/}
          <View style={[styles.boxOuter, styles.shadow]}>
            <Text style={styles.txtBoxHead}>FRICTION BURN</Text>
            <View style={styles.boxInner}>
              <Image
                style={{ width: "100%", height: 225 }}
                source={require("../../assets/FirstAid/Burn/friction.jpg")}
              />

              <Text style={styles.txtBoxDesc}>
                A friction burn can occur when skin repeatedly rubs against
                another surface or is scraped against a hard surface. Like other
                burns, friction burns are categorized into degrees. Many
                friction burns are first degree and often heal on their own
                within three to six days. You can use moisturizing cream at home
                to care for it.
              </Text>
            </View>
          </View>

          {/* 5 ------------------------*/}
          <View style={[styles.boxOuter, styles.shadow]}>
            <Text style={styles.txtBoxHead}>RADIATION BURN</Text>
            <View style={styles.boxInner}>
              <Image
                style={{ width: "100%", height: 250 }}
                source={require("../../assets/FirstAid/Burn/radiation.jpg")}
              />

              <Text style={styles.txtBoxDesc}>
                Cancer patients undergoing radiation therapy may suffer from an
                injury known as radiation burn. High-energy radiation is used to
                shrink or kill cancerous cells, and when it passes through the
                body, skin cells may be damaged. If you’re frequently receiving
                radiation treatments, your skin cells may not have enough time
                to regenerate, and sores or ulcers may develop. The term “burn”
                is a misnomer for these wounds, because skin has not actually
                been burned. However, the wounds can look and feel like burns.
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
export default BurnScreen;

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
