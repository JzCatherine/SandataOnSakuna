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

function AsthmaScreen({ navigation }) {
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
          <Text style={styles.txtheader}>ASTHMA</Text>
        </View>
      </View>

      {/* Body ------------------------*/}
      <View style={styles.body}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Before ------------------------*/}
          <View style={[styles.boxOuter, styles.shadow]}>
            <Text style={styles.txtBoxHead}>WHAT IS ASTHMA?</Text>
            <View style={styles.boxInner}>
              <Image
                style={{ width: "100%", height: 280 }}
                source={require("../../assets/FirstAid/Asthma/asthma.jpg")}
              />

              <Text style={styles.txtBoxDesc}>
                Asthma is an inflammatory disease of the airways to the lungs.
                It makes breathing difficult and can make some physical
                activities challenging or even impossible.
                {"\n"}
                {"\n"}
                To understand asthma, it’s necessary to understand a little
                about what happens when you breathe. Normally, with every breath
                you take, air goes through your nose or mouth and down into your
                throat and into your airways, eventually making it to your
                lungs.
                {"\n"}
                {"\n"}
                There are lots of small air passages in your lungs that help
                deliver oxygen from the air into your bloodstream. Asthma
                symptoms occur when the lining of your airways swell and the
                muscles around them tighten.
                {"\n"}
                {"\n"}
                Mucus then fills the airways, further reducing the amount of air
                that can pass through. These conditions can then bring on an
                asthma “attack,” the coughing and tightness in your chest that’s
                typical of asthma.
              </Text>
            </View>
          </View>

          {/* Causes ------------------------*/}
          <View style={[styles.boxOuter, styles.shadow]}>
            <Text style={styles.txtBoxHead}>SYMPTOMS OF ASTHMA</Text>
            <View style={styles.boxInner}>
              <Text style={styles.txtBoxDesc2}>
                1. Wheezing, squealing or whistling sound made when you breathe.
              </Text>
              <Image
                style={{ width: "100%", height: 250 }}
                source={require("../../assets/FirstAid/Asthma/wheezing.png")}
              />

              <Text style={styles.txtBoxDesc2}>
                2. Coughing, especially at night, when laughing, or during
                exercise.
              </Text>
              <Image
                style={{ width: "100%", height: 250 }}
                source={require("../../assets/FirstAid/Asthma/coughing.jpg")}
              />

              <Text style={styles.txtBoxDesc2}>3. Tightness in the Chest</Text>
              <Image
                style={{ width: "100%", height: 250 }}
                source={require("../../assets/FirstAid/Asthma/tightness.jpg")}
              />

              <Text style={styles.txtBoxDesc2}>4. Shortness of Breathe</Text>
              <Image
                style={{ width: "100%", height: 250 }}
                source={require("../../assets/FirstAid/Asthma/shortness.jpg")}
              />

              <Text style={styles.txtBoxDesc2}>5. Anxiousness or panic</Text>
              <Image
                style={{ width: "100%", height: 250 }}
                source={require("../../assets/FirstAid/Asthma/panic.jpg")}
              />

              <Text style={styles.txtBoxDesc2}>6. Fatigue</Text>
              <Image
                style={{ width: "100%", height: 250 }}
                source={require("../../assets/FirstAid/Asthma/fatigue.jpg")}
              />
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
            <Text style={styles.txtBoxHead}>FIRST AID FOR ASTHMA</Text>
            <View style={styles.boxInner}>
              <Text style={styles.txtBoxDesc}>
                1. Call for 911. Symptoms of acute attack include difficulty
                talking or walking because of shortness of breath or lips or
                fingernails turning blue.
              </Text>
              <Image
                style={{ width: "100%", height: 250 }}
                source={require("../../assets/FirstAid/Asthma/call.jpg")}
              />

              <Text style={styles.txtBoxDesc}>
                2. Follow the Person’s Asthma Plan, if Possible. Find out if the
                person has an individualized asthma action plan from a health
                care provider.
                {"\n"}
                {"\n"}
                If so, follow its directions for giving asthma medication and
                seeking medical help for acute asthma attack.
              </Text>
              <Image
                style={{ width: "100%", height: 250 }}
                source={require("../../assets/FirstAid/Asthma/plan.jpg")}
              />

              <Text style={styles.txtBoxDesc}>
                3. Give Asthma First Aid. If the person doesn't have an asthma
                plan: a) Sit the person upright comfortably and loosen tight
                clothing. b) If the person has asthma medication, such as an
                inhaler, assist in using it. c) If the person doesn’t have an
                inhaler, use one from a first aid kit.
                {"\n"}
                {"\n"}
                Do not borrow someone else’s. d) The medicine in it may be
                different than the needed rescue medicine. Also, using someone
                else's inhaler has a slight risk of passing on an infection.
              </Text>
              <Image
                style={{ width: "100%", height: 250 }}
                source={require("../../assets/FirstAid/Asthma/aid.jpg")}
              />

              <Text style={styles.txtBoxDesc}>
                4. Use Inhaler With a Spacer, if Possible. Remove cap and shake
                inhaler well. Insert inhaler into spacer. Have the person
                breathe out completely and put mouth tightly around spacer
                mouthpiece.
                {"\n"}
                {"\n"}
                Press inhaler once to deliver a puff. Have the person breathe in
                slowly through the mouth and then hold breath for 10 seconds.
                Give a total of four puffs, waiting about a minute between each
                puff.
              </Text>
              <Image
                style={{ width: "100%", height: 250 }}
                source={require("../../assets/FirstAid/Asthma/inhalerspacer.jpg")}
              />

              <Text style={styles.txtBoxDesc}>
                5. Use Inhaler Without a Spacer, if Necessary. Remove the
                inhaler cap and shake well. Have the person breathe out all the
                way and seal lips tightly around inhaler mouthpiece. As the
                person starts to breathe in slowly, press down on inhaler one
                time.
                {"\n"}
                {"\n"}
                The person should keep breathing in as slowly and deeply as
                possible (about five to seven seconds) and then hold breath for
                10 seconds. Give a total of four puffs, waiting about one minute
                between each puff.
              </Text>
              <Image
                style={{ width: "100%", height: 250 }}
                source={require("../../assets/FirstAid/Asthma/outspacer.jpg")}
              />

              <Text style={styles.txtBoxDesc}>
                6. Continue Using Inhaler if Breathing Is Still a Problem. After
                four puffs, wait four minutes. If the person still has trouble
                breathing, give another set of four puffs.
                {"\n"}
                {"\n"}
                If there’s still little or no improvement, give 4 to 8 puffs
                every 20 minutes until the ambulance arrives for up to 4 hours.
                If you are still waiting for help after 4 hours, the recommended
                dose is 4 to 8 puffs as needed every 1 to 4 hours.
              </Text>
              <Image
                style={{ width: "100%", height: 250 }}
                source={require("../../assets/FirstAid/Asthma/continue.jpg")}
              />

              <Text style={styles.txtBoxDesc}>
                7. Monitor the Person Until Help Arrives. Do not mistake
                drowsiness as a sign of improvement; it could mean asthma is
                worsening. Do not assume the person’s asthma is improving if you
                no longer hear wheezing.
              </Text>
              <Image
                style={{ width: "100%", height: 250 }}
                source={require("../../assets/FirstAid/Asthma/monitor.jpg")}
              />

              <Text style={styles.txtBoxDesc}>
                8. Follow Up. An emergency room doctor will check the severity
                of the attack and provide treatment, including medications. The
                person may be discharged home or hospitalized for further care,
                depending on response to treatment.
              </Text>
              <Image
                style={{ width: "100%", height: 250 }}
                source={require("../../assets/FirstAid/Asthma/follow.jpg")}
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
export default AsthmaScreen;

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
