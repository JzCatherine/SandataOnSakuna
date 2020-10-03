import React, {Component, useState} from 'react'
import { Image, Modal, StyleSheet, Text, View ,Platform, StatusBar, Linking,TouchableOpacity} from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons";
import Communications from 'react-native-communications';



function AboutUs({ navigation }) {

        const [modalVisible, setModalVisible] = useState(false);
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={{position:"absolute", top:20,left:25}}>
                      <Ionicons onPress={()=> navigation.push("MainScreen")} name="md-arrow-back" color="#F6F0EA" size={40}/>
                    </View>

                    <View style={styles.logoContainer}>
                        <Image 
                            style={styles.logo}
                            source={require('../assets/AppLogo/AppWhiteLogo.png')}/>
                        <Text style={styles.SOS}>S.O.S</Text>
                        <Text style={styles.desc}>Sandata On Sakuna</Text>
                    </View>
                </View>
{/* BODY -----------------------*/}
                <View style={styles.body}>
                    <View style={styles.bodyView1}>
                        <View>
                            <Text style={{fontSize:35, fontWeight: '700',color:'#056674'}}>About Us</Text>
                            <Text style={{fontSize:16, marginLeft:20, marginTop:12,textAlign:'justify'}}>
                            Our team is motivated to help our fellow Filipinos to be always ready 
                            and learn proper response to disaster and emergency situations.
                            {'\n'}{'\n'}Use our app as your
                            <Text style={{fontWeight: "bold"}}> Sandata on Sakuna.</Text>
                            </Text>
                        </View>
                        
                        <View>
                            <Text style={{fontSize:22, fontWeight: '700', marginTop:20, color:'#056674'}}>Check Us Out</Text>
                            <View style={{flexDirection:'row', marginTop:10,justifyContent:'space-evenly',}}>
                                <TouchableOpacity onPress={()=> Linking.openURL("mailto:sandata.on.sakuna093020@gmail.com")}
                                                  activeOpacity={0.6}>
                                    <Image  style={{width:40,height:40,}} 
                                            source={require('../assets/BoutUs/gmail.png')}/>
                                 </TouchableOpacity>
                                 <TouchableOpacity onPress={()=> Linking.openURL("https://www.linkedin.com/in/sandata-on-sakuna/")}
                                                  activeOpacity={0.6}>
                                    <Image  style={{width:40,height:40,}} 
                                            source={require('../assets/BoutUs/linkedin.png')}/>
                                 </TouchableOpacity>
                                 <TouchableOpacity onPress={()=> Linking.openURL("https://www.facebook.com/")}
                                                  activeOpacity={0.6}>
                                    <Image  style={{width:40,height:40,}} 
                                            source={require('../assets/BoutUs/facebook.png')}/>
                                 </TouchableOpacity>
                                 <TouchableOpacity onPress={()=> Linking.openURL("https://twitter.com/")}
                                                  activeOpacity={0.6}>
                                    <Image  style={{width:40,height:40,}} 
                                            source={require('../assets/BoutUs/twitter.png')}/>
                                 </TouchableOpacity>
                            
                            </View>
                        </View>

                        <View>
                            <Text style={{fontSize:20, fontWeight: '700', color:'#056674'}}>Built with</Text>
                            <Image
                                style={{width:250,height:40, marginTop:5, alignSelf:'center', resizeMode:'cover'}} 
                                source={require('../assets/BoutUs/reactnative.png')}
                            />
                        </View>

                    </View>
                    

                    <View style={styles.bodyView2}>
                        <TouchableOpacity onPress={() => {setModalVisible(true);}}
                                                  activeOpacity={0.6}>
                            <View style={[styles.button, styles.shadow]}>
                                <Text style={styles.btnText}>Developers</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={() => Communications.email(['sandata.on.sakuna093020@gmail.com'],null,null,'SOS Feedback','We love to hear your feedback - SOS Team\n\n1-5 Rating: \nFeedback:')}
                            activeOpacity={0.6}>
                            <View style={[styles.button, styles.shadow]}>
                                <Text style={styles.btnText}>Feedback</Text>
                            </View>
                        </TouchableOpacity>
                    </View>


                </View>
{/* Modal ----------------------*/}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    }}
                >
                    <View style={styles.centeredView}>
                    <View style={[styles.modalView, styles.shadow]}>
                        <View style={{position:"absolute", top:20,left:25}}>
                            <Ionicons onPress={()=> {setModalVisible(!modalVisible);}} name="md-arrow-back" color="#ed6663" size={30}/>
                        </View>
                        <Text style={styles.CodeZ}>CODE Z</Text>
                        <Text style={styles.modalText}>Catherine Justine Zuniga</Text>
                        <Text style={styles.modalText}>Sofhia Isabel Bestil</Text>
                        <Text style={styles.modalText}>John Lawrence Torres</Text>
                        <Text style={styles.modalText}>Roline Jason Digal</Text>
                    </View>
                    </View>
                </Modal>
            </View>
        );
}

export default AboutUs;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ed6663',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
      },

    header:{
        flex: .5,
      },

    logo: {
        width: 150,
        height: 150,
        alignSelf:'center',
      },

    logoContainer:{
        width:'100%',
        marginTop:20,
      },

    SOS:{
        color: '#F6F0EA',
        fontSize: 25,
        fontWeight: '700',
        textAlign:'center',
      },
  
    desc:{
        color: '#F6F0EA',
        fontSize: 22,
        fontWeight: '700',
        textAlign:'center',
      },

    body:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#F6F0EA',
        borderTopLeftRadius:40,
        borderTopRightRadius:40,
      },
      
    bodyView1:{
        flex:1,
        padding:40,
        paddingBottom:0,
        justifyContent:'space-around',
      },

    bodyView2:{
        flex:.2,
        width:'100%',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        justifyContent:'space-evenly',
      },
    
    button:{
        backgroundColor:'#056674',
        padding:16,
        borderRadius:10,
        paddingLeft:40,
        paddingRight:40,
    },

    btnText:{
        color: 'white',
        fontSize:18,
        fontWeight:'bold',
    },

    shadow:{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 10,
        },
        shadowOpacity: 0.99,
        shadowRadius: 20.46,
        elevation: 6,
    },



    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      
      modalView: {
        margin: 35,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
      },

      CodeZ: {
        marginTop: 15,
        marginBottom: 15,
        fontSize:25,
        fontWeight:'bold',
      },
      modalText: {
        marginBottom: 15,
      },


})
