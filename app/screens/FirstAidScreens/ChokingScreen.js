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

function ChokingScreen({ navigation }) {
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
          <Text style={styles.txtheader}>CHOKING</Text>
        </View>
      </View>

      {/* Body ------------------------*/}
      <View style={styles.body}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Before ------------------------*/}
          <View style={[styles.boxOuter, styles.shadow]}>
            <Text style={styles.txtBoxHead}>WHAT IS CHOKING?</Text>
            <View style={styles.boxInner}>
              <Image
                style={{ width: "100%", height: 280 }}
                source={require("../../assets/FirstAid/Choking/choking.jpg")}
              />

              <Text style={styles.txtBoxDesc}>
                Choking occurs when a foreign object lodges in the throat or
                windpipe, blocking the flow of air. In adults, a piece of food
                often is the culprit.
                {"\n"}
                {"\n"}
                Young children often swallow small objects. Because choking cuts
                off oxygen to the brain, give first aid as quickly as possible.
                {"\n"}
                {"\n"}
                The universal sign for choking is hands clutched to the throat.
                If the person doesn't give the signal, look for these
                indications:
                {"\n"}
                1. Inability to talk and difficulty breathing or noisy
                breathing.
                {"\n"}
                2. Squeaky sounds when trying to breathe and cough, which may
                either be weak or forceful.
                {"\n"}
                3. Skin, lips and nails turning blue or dusky. Skin that is
                flushed, then turns pale or bluish in color and loss of
                consciousness.
              </Text>
            </View>
          </View>

          {/* FIRST AID ADULT ------------------------*/}
          <View style={[styles.boxOuter, styles.shadow]}>
            <Text style={styles.txtBoxHead}>FIRST AID FOR CHOKING ADULT</Text>
            <View style={styles.boxInner}>
              <Image
                style={{ width: "100%", height: 250 }}
                source={require("../../assets/FirstAid/Choking/step1.png")}
              />
              <Text style={styles.txtBoxDesc}>
                1. If you think someone is choking, ask them ‘Are you choking?'
                If they can breathe, speak or cough then they might be able to
                clear their own throat. If they cannot breathe, cough, or make
                any noise, then they need your help straight away.
              </Text>
              <Image
                style={{ width: "100%", height: 250 }}
                source={require("../../assets/FirstAid/Choking/step2.png")}
              />
              <Text style={styles.txtBoxDesc}>
                2. If you think someone is choking, ask them ‘Are you choking?'
                If they can breathe, speak or cough then they might be able to
                clear their own throat. If they cannot breathe, cough, or make
                any noise, then they need your help straight away.
              </Text>

              <Image
                style={{ width: "100%", height: 250 }}
                source={require("../../assets/FirstAid/Choking/step3.png")}
              />
              <Text style={styles.txtBoxDesc}>
                3. Slap it out. If coughing fails to work, you need to give five
                sharp back blows. To do this, help them to lean forwards,
                supporting their upper body with one hand. With the heel of your
                other hand give them five sharp back blows between their
                shoulder blades. After each back blow, check to see if there’s
                anything in their mouth.
              </Text>

              <Image
                style={{ width: "100%", height: 250 }}
                source={require("../../assets/FirstAid/Choking/step4.png")}
              />
              <Text style={styles.txtBoxDesc}>
                4. Squeeze it out. If back blows fail to clear the obstruction,
                give five abdominal thrusts. To do this, stand behind them and
                put your arms around their waist. Place one hand in a clenched
                fist between their belly button and the bottom of their chest.
                With your other hand, grasp your fist and pull sharply inwards
                and upwards up to five times. Check their mouth again, each
                time.
              </Text>

              <Image
                style={{ width: "100%", height: 250 }}
                source={require("../../assets/FirstAid/Choking/step5.png")}
              />
              <Text style={styles.txtBoxDesc}>
                5. If the blockage has not cleared, call 999 or 112 for
                emergency help straight away. Repeat five back blows and five
                abdominal thrusts until help arrives, re-checking their mouth
                each time. If they become unresponsive at any point, prepare to
                start adult CPR.
              </Text>
            </View>
          </View>

          {/* FIRST AID CHILD ------------------------*/}
          <View style={[styles.boxOuter, styles.shadow]}>
            <Text style={styles.txtBoxHead}>FIRST AID FOR CHOKING CHILD</Text>
            <View style={styles.boxInner}>
              <Image
                style={{ width: "100%", height: 250 }}
                source={require("../../assets/FirstAid/Choking/cstep1.png")}
              />
              <Text style={styles.txtBoxDesc}>
                1. If you think a child is choking, ask them ‘Are you choking?'.
                If they can breathe, speak, or cough then they might be able to
                clear their own throat. If they cannot breathe, cough, or make
                any noise, then they need your help straight away.
              </Text>
              <Image
                style={{ width: "100%", height: 250 }}
                source={require("../../assets/FirstAid/Choking/cstep2.png")}
              />
              <Text style={styles.txtBoxDesc}>
                2. Cough it out. Encourage them to cough and remove any obvious
                obstruction from their mouth.
              </Text>

              <Image
                style={{ width: "100%", height: 250 }}
                source={require("../../assets/FirstAid/Choking/cstep3.png")}
              />
              <Text style={styles.txtBoxDesc}>
                3. Slap it out. If coughing fails to work, you need to give five
                sharp back blows. To do this, help them to lean forwards,
                supporting their upper body with one hand. With the heel of your
                other hand give them five sharp back blows between their
                shoulder blades. After each back blow, check their mouth and
                pick out any obvious obstruction. Do not sweep the mouth as this
                could push the object further down the throat.
              </Text>

              <Image
                style={{ width: "100%", height: 250 }}
                source={require("../../assets/FirstAid/Choking/cstep4.png")}
              />
              <Text style={styles.txtBoxDesc}>
                4. Squeeze it out. If back blows fail to clear the obstruction,
                give five abdominal thrusts. To do this, stand behind them and
                put your arms around the child's waist. Place one hand in a
                clenched fist between their belly button and the bottom of their
                chest. With your other hand, grasp your fist and pull sharply
                inwards and upwards up to five times. Check their mouth again,
                each time.
              </Text>

              <Image
                style={{ width: "100%", height: 250 }}
                source={require("../../assets/FirstAid/Choking/cstep5.png")}
              />
              <Text style={styles.txtBoxDesc}>
                5. If the blockage has not cleared, call 911 for emergency help
                straight away. Repeat five back blows and five abdominal thrusts
                until help arrives, rechecking their mouth each time. If they
                become unresponsive at any point prepare to start child CPR.
              </Text>
            </View>
          </View>

          {/* FIRST AID BABY ------------------------*/}
          <View style={[styles.boxOuter, styles.shadow]}>
            <Text style={styles.txtBoxHead}>FIRST AID FOR CHOKING BABY</Text>
            <View style={styles.boxInner}>
              <Image
                style={{ width: "100%", height: 300 }}
                source={require("../../assets/FirstAid/Choking/bstep1.png")}
              />
              <Text style={styles.txtBoxDesc}>
                1. If you think a child is choking, ask them ‘Are you choking?'.
                If they can breathe, speak, or cough then they might be able to
                clear their own throat. If they cannot breathe, cough, or make
                any noise, then they need your help straight away.
              </Text>
              <Image
                style={{ width: "100%", height: 300 }}
                source={require("../../assets/FirstAid/Choking/bstep2.png")}
              />
              <Text style={styles.txtBoxDesc}>
                2. Turn them over on your thigh and check their mouth. Pick out
                any obvious obstructions you can see with your fingertips. Do
                not sweep the mouth as this could push the object further down
                the throat.
              </Text>

              <Image
                style={{ width: "100%", height: 300 }}
                source={require("../../assets/FirstAid/Choking/bstep3.png")}
              />
              <Text style={styles.txtBoxDesc}>
                3. Squeeze it out. If back blows fail to clear obstruction, give
                five chest thrusts with your baby facing upwards, making sure
                you’re supporting their head and neck. Put two fingers in the
                centre of their chest just below the nipple line and give five
                sharp chest thrusts. Check their mouth again, each time.
              </Text>

              <Image
                style={{ width: "100%", height: 250 }}
                source={require("../../assets/FirstAid/Choking/bstep4.png")}
              />
              <Text style={styles.txtBoxDesc}>
                4. Call 911 for emergency help if the obstruction hasn't
                cleared. Take the baby with you to make the call. Keep repeating
                five back blows and five chest thrusts until help arrives,
                checking their mouth each time. If the baby becomes unresponsive
                at any point, prepare to start baby CPR.
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
export default ChokingScreen;

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
