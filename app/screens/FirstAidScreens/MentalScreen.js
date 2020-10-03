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

function MentalScreen({ navigation }) {
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
          <Text style={styles.txtheader}>MENTAL HEALTH</Text>
        </View>
      </View>

      {/* Body ------------------------*/}
      <View style={styles.body}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* What ------------------------*/}
          <View style={[styles.boxOuter, styles.shadow]}>
            <Text style={styles.txtBoxHead}>WHAT IS MENTAL HEALTH?</Text>
            <View style={styles.boxInner}>
              <Image
                style={{ width: "100%", height: 280 }}
                source={require("../../assets/FirstAid/Mental/mental.jpg")}
              />

              <Text style={styles.txtBoxDesc}>
                Mental health includes our emotional, psychological, and social
                well-being. It affects how we think, feel, and act. It also
                helps determine how we handle stress, relate to others, and make
                choices.
                {"\n"}
                {"\n"}
                Mental health is important at every stage of life, from
                childhood and adolescence through adulthood.
                {"\n"}
                {"\n"}
                Over the course of your life, if you experience mental health
                problems, your thinking, mood, and behavior could be affected.
                Many factors contribute to mental health problems, including:
                {"\n"}
                {"\n"}
                {"\u2022"} Biological factors, such as genes or brain chemistry
                {"\n"}
                {"\u2022"} Life experiences, such as trauma or abuse
                {"\n"}
                {"\u2022"} Family history of mental health problems
                {"\n"}
                {"\n"}
                Mental health problems are common but help is available. People
                with mental health problems can get better and many recover
                completely.
              </Text>
            </View>
          </View>

          {/* Image -----------------------------*/}
          <View style={[styles.boxOuter, styles.shadow]}>
            <View style={styles.boxInner}>
              <Image
                style={{
                  width: "100%",
                  height: 200,
                  resizeMode: "contain",
                  alignSelf: "center",
                }}
                source={require("../../assets/FirstAid/Mental/aid.jpg")}
              />
            </View>
          </View>

          <View style={[styles.boxOuter, styles.shadow]}>
            <Text style={styles.txtBoxHead}>
              WHAT IS MENTAL HEALTH FIRST AID?
            </Text>
            <View style={styles.boxInner}>
              <Image
                style={{ width: "100%", height: 280 }}
                source={require("../../assets/FirstAid/Mental/ment.jpg")}
              />

              <Text style={styles.txtBoxDesc}>
                Mental health first aid is the help you give to someone
                developing a mental health problem, experiencing a worsening of
                a mental health problem or in a mental health crisis. You can
                give this first aid until the person has received appropriate
                professional treatment or the crisis is resolved.
                {"\n"}
                {"\n"}
                Mental health first aid can help people experiencing:
                {"\n"}
                {"\n"}
                {"\u2022"} Depression
                {"\n"}
                {"\u2022"} Anxiety problems
                {"\n"}
                {"\u2022"} Psychosis
                {"\n"}
                {"\u2022"} Substance
                {"\n"}
                {"\u2022"} Use Problems
                {"\n"}
                {"\u2022"} Gambling problems
                {"\n"}
                {"\u2022"} Eating disorders
                {"\n"}
                {"\n"}
                It can also help if a person is experiencing a mental health
                crisis, such as:
                {"\n"}
                {"\n"}
                {"\u2022"} Suicidal thoughts and behaviours
                {"\n"}
                {"\u2022"} Non-suicidal self-njuri (sometimes called deliberate
                harm)
                {"\n"}
                {"\u2022"} Panic attacks
                {"\n"}
                {"\u2022"} Traumatic events
                {"\n"}
                {"\u2022"} Severe psychotic states
                {"\n"}
                {"\u2022"} Severe effects from alcohol or other drug use
                {"\n"}
                {"\u2022"} Aggressive behaviours
              </Text>
            </View>
          </View>

          {/* First Aid ------------------------*/}
          <View style={[styles.boxOuter, styles.shadow]}>
            <Text style={styles.txtBoxHead}>MENTAL HEALTH FIRST AID</Text>
            <View style={styles.boxInner}>
              <Text style={styles.txtBoxDesc}>
                1. Access the situation for risk of harm or suicide.
                {"\n"}
                {"\n"}
                {"\u2022"} Look for signs of suicidal thoughts or behaviors.
              </Text>

              <Text style={styles.txtBoxDesc}>
                2. Listen nonjudgmentally.
                {"\n"}
                {"\n"}
                {"\u2022"} Listening and having a meaningful conversation is a
                skill and can be very powerful.
              </Text>
              <Image
                style={{ width: "100%", height: 250 }}
                source={require("../../assets/FirstAid/Mental/listen.jpg")}
              />

              <Text style={styles.txtBoxDesc}>
                3. Give reassurance and information.
                {"\n"}
                {"\n"}
                {"\u2022"} Communicate that people can and do get better from
                mental illness and do not blame the person for the situation.
                {"\n"}
                Offer information and resources to help educate and support the
                person.
              </Text>
              <Image
                style={{ width: "100%", height: 250 }}
                source={require("../../assets/FirstAid/Mental/reass.jpg")}
              />

              <Text style={styles.txtBoxDesc}>
                4. Encourage appropriate professional help.
                {"\n"}
                {"\n"}
                {"\u2022"} It's critical that anyone experiencing a mental
                health emergency contact professional help such as a doctor,
                psychologist or social worker.
              </Text>
              <Image
                style={{ width: "100%", height: 250 }}
                source={require("../../assets/FirstAid/Mental/doc.jpg")}
              />

              <Text style={styles.txtBoxDesc}>
                5. Encourage self-help and other support strategies.
                {"\n"}
                {"\n"}
                {"\u2022"} Self-help strategies can be employed to take control
                over wellness such as participation in a peer support group and
                healthy lifestyle choices such as exercise.
              </Text>
              <Image
                style={{ width: "100%", height: 250 }}
                source={require("../../assets/FirstAid/Mental/self.jpg")}
              />
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
export default MentalScreen;

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

  txtBoxDesc2: {
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
