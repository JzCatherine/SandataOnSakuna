import React, {Component} from 'react'
import { Image, StyleSheet, Text, View ,Platform, StatusBar, FlatList, Clipboard, ToastAndroid} from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons";
import Communications from 'react-native-communications';


const category = [
    { key: '1', 
      name: 'National Emergency', 
      contact: "911",
    },
    { key: '2', 
      name: 'Philippine National Police', 
      contact: "117",
    },
    { key: '3', 
      name: 'Philippine Red Cross', 
      contact: "143",
    },
    { key: '4', 
      name: 'Bureau of Fire Protection', 
      contact: "8426-0219",
    },
    { key: '5', 
      name: 'MMDA', 
      contact: "136",
    },
    { key: '6', 
      name: 'DOTr Action Center', 
      contact: "7890",
    },
    { key: '7', 
      name: 'LTO', 
      contact: "2600",
    },
    { key: '8', 
      name: 'Philippine Coast Guard', 
      contact: "8527-8481 to 89",
    },
    { key: '9', 
      name: 'DPWH', 
      contact: "165-02",
    },
    { key: '10', 
      name: 'National Center \nfor Mental Health', 
      contact: "165-02",
    },
    { key: '11', 
      name: 'LTFRB', 
      contact: "1342",
    },

  ];

const showToast = () => {
    ToastAndroid.show("Copied to Clipboard!", ToastAndroid.SHORT);
};

function HotlineScreen({ navigation }) {
        return (
            <View style={styles.container}>
{/* Header -------------------------------*/}
                <View style={styles.header}>
                <View style={{position:"absolute", top:20,left:25}}>
                        
                        <Ionicons onPress={()=> navigation.push("MainScreen")} name="md-arrow-back" color="#ff5c5c" size={40}/>
                    </View>
                    <Image 
                        style={styles.logo}
                        source={require('../assets/CategoriesLogo/HotlineLogo.png')}/>
                </View>
{/* Sub Header ---------------------------*/}
                <View style={styles.subHeader}>
                    <View style={{marginTop:15, alignItems: "center"}}>
                        <Text style={styles.txtheader}>Emergency Hotlines</Text>
                    </View>
{/* Contact List ------------------------*/}
                    <View style={styles.body}>
                        <FlatList
                                data={category}
                                showsVerticalScrollIndicator={false}
                                renderItem={({ item }) => (
                            <View style={[styles.viewContact, styles.shadow]} >
                                <View>
                                    <Text style={styles.txtContactName}>{item.name}</Text>
                                    <Text style={styles.txtContact}>{item.contact}</Text>
                                </View>
                                <View style={{flexDirection:'row'}}>
                                    <View style={{margin:5,}}>
                                      <Ionicons onPress={()=> [Clipboard.setString(item.contact), showToast()]} name="md-copy" color="#ff5c5c" size={35}/>
                                    </View>
                                    <View style={{margin:5,}}>
                                      <Ionicons onPress={()=> Communications.phonecall(item.contact, true)} name="md-call" color="#ff5c5c" size={35}/>
                                    </View>
                                </View>
                                
                            </View>
                        )} // end renderitem
                        />   

                    </View>
                </View>

            </View>
        );
}

{/* EXPORT ------------------------------------------*/}
export default HotlineScreen;

{/* Style ------------------------------------------*/}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: "center",
        alignItems: "center",
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
      },
    header:{
        flex:.2,
        width:'100%',
        backgroundColor: 'white',
        justifyContent: "center",
        alignItems: "center",
    },

    logo: {
        width: 90,
        height: 90,
    },

    subHeader:{
        flex:1,
        width:'100%',
        backgroundColor: '#056674',
        borderTopLeftRadius : 50,
        borderTopRightRadius: 50,
        
    },

    txtheader:{
        color: 'white',
        fontSize:30,
        fontWeight: '700',
    },

    body:{
        flex:1,
        width:'100%',
        top:10,
        backgroundColor: '#e1f0ee',
        borderTopLeftRadius : 50,
        borderTopRightRadius: 50,
        padding:34,
        paddingTop:3,
        paddingBottom:13,
    },

    viewContact:{
        flex: 1,
        width : '100%',
        height : '50%',
        marginTop: 12,
        marginBottom:3,
        padding : 20,
        paddingLeft:38,
        paddingRight:30,
        backgroundColor: 'white',
        borderRadius:50,
        flexDirection:"row",
        justifyContent:"space-between",
    },

    txtContactName:{
        color: '#ed6663',
        fontSize:15,
        fontWeight: '700',
    },

    txtContact:{
        fontSize:17,
        marginLeft:20,
        fontWeight: '700'
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
    }
    
})