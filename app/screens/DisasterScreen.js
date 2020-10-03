import React, {Component} from 'react'
import { Image, StyleSheet, Text, View ,Platform, StatusBar, TouchableOpacity, FlatList} from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons";


const category = [
    { key: '1', 
      name: "Earthquake",
      picture: require('../assets/GDPIcons/quakeIcon.png'), 
      screen: "EarthquakeScreen",
    },
    { key: '2', 
      name: "Forest Fire",
      picture: require('../assets/GDPIcons/forestFireIcon.png'), 
      screen: "ForestFireScreen",
    
    },
    { key: '3', 
      name: "Flood",
      picture: require('../assets/GDPIcons/floodIcon.png'), 
      screen: "FloodScreen",
    },
    { key: '4', 
      name: "Landslide",
      picture: require('../assets/GDPIcons/landslideIcon.png'), 
      screen: "LandslideScreen",
    },
    { key: '5', 
      name: "Volcano Eruption",
      picture: require('../assets/GDPIcons/volcanoIcon.png'), 
      screen: "VolcanoScreen",
    },
    { key: '6', 
      name: "Structural \nFire",
      picture: require('../assets/GDPIcons/structureFireIcon.png'), 
      screen: "FireScreen",
    },

  ];


function DisasterScreen({ navigation }) {
    
        return (
            <View style={styles.container}>
{/* Header -------------------------------*/}
                <View style={styles.header}>
                  <View style={{position:"absolute", top:20,left:25}}>
                      <Ionicons onPress={()=> navigation.push("MainScreen")} name="md-arrow-back" color="#ff5c5c" size={40}/>
                  </View>
                </View>
{/* Sub Header ---------------------------*/}
                <View style={styles.subHeader}>
                    <View style={{marginTop:15, alignItems: "center"}}>
                        <Text style={styles.txtheader}>General Disaster {"\n"} Preparedness</Text>
                    </View>

{/* Contact List ------------------------*/}
                    <View style={styles.body}>
                        
                        <FlatList
                            data={category}
                            numColumns={2}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item }) => (
                          <View style={styles.box}>  
                            <TouchableOpacity 
                                activeOpacity={0.6}
                                underlayColor="#ecf0f1"

                                onPress={()=> navigation.push(item.screen)}
                            >    
                              <View style={[styles.viewButtons, styles.shadow]}>   
                                <Image 
                                  style={styles.images} 
                                  source={item.picture}/>
                                <View><Text style={styles.txtName}>{item.name}</Text></View>
                          
                              </View>
                            </TouchableOpacity>
                          </View>  
                        )}/>    
                    </View>
                </View>

            </View> // end Container

        );
}

{/* EXPORT ------------------------------------------*/}
export default DisasterScreen;

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
        flex:.1,
        width:'100%',
        backgroundColor: 'white',
        justifyContent: "center",
        alignItems: "center",
    },

    logo: {
        top:15,
        width: 125,
        height: 95,
    },

    images: {
      width: 130,
      height: 130,
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
        fontSize:27,
        fontWeight: '700',
        textAlign: 'center',
    },

    body:{
        flex:1,
        width:'100%',
        top:10,
        backgroundColor: '#e1f0ee',
        borderTopLeftRadius : 50,
        borderTopRightRadius: 50,
        padding:27,
        paddingTop:1,
        paddingBottom:10,
    },

    box:{
      width : '50%',
      paddingLeft:10,
      paddingRight:10,
      marginTop:20,
    },

    viewButtons:{
      padding:15,
      borderRadius:20,
      backgroundColor: 'white',
      alignItems: "center",
      justifyContent: "center",
    },

    txtName:{
        color: '#ed6663',
        fontSize:21,
        fontWeight: '700',
        textAlign: 'center',
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