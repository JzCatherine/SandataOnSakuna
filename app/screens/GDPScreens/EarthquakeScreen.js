import React from 'react'
import { Image, StyleSheet, Text, View ,Platform, StatusBar, LogBox,TouchableOpacity,ScrollView, Linking, FlatList} from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons";
import { WebView } from 'react-native-webview';

LogBox.ignoreAllLogs();

const BeforeData = [
    { id: '1',
      title: 'Familiarize yourself with the location of fire extinguishers, medical kits, exit routes, and your building’s evacuation plan',
    },
    { id: '2',
      title: 'Have necessary house repairs fixed to avoid further damage',
    },
    { id: '3',
      title: 'Store harmful chemicals and flammable materials properly',
    },
    { id: '4',
      title: 'Secure heavy furniture and hanging objects',
    },
    { id: '5',
      title: 'Prepare your survival kit* (preferably one in your house, car, and workplace)',
    },
    { id: '6',
      title: 'Participate in office and community earthquake drills',
    },
    { id: '7',
      title: 'Discuss a designated meet up location with family in case you’re separated',
    },
    { id: '8',
      title: 'Learn simple first aid techniques',
    },
  ];

  const DuringData = [
    { id: '1',
      title: 'Stay calm and stay put',
    },
    { id: '2',
      title: 'Duck, cover and hold under somewhere stable (ex. desk or table)',
    },
    { id: '3',
      title: 'Stay away from glass windows, shelves, and heavy and hanging objects',
    },
    { id: '4',
      title: 'Exit the building only once shaking stops via stairs. Elevators are not to be used.',
    },
    { id: '5',
      title: 'Evacuate to an open area away from trees, electric posts and landslide prone areas',
    },
    { id: '6',
      title: 'If you’re in a moving vehicle, step out and move towards a safer area.',
    },
    { id: '7',
      title: 'Avoid overpasses, slowly stop in an open area, and remain in your vehicle',
    }
  ];
  const AfterData = [
    { id: '1',
      title: 'Stay alert in the event of aftershocks',
    },
    { id: '2',
      title: 'Check yourself and those in your surroundings are injuries and provide first aid. Prioritize children, pregnant women, PWDs, and senior citizens*',
    },
    { id: '3',
      title: 'For coastal locations, evacuate to higher ground immediately',
    },
    { id: '4',
      title: 'Double check for toxic spills and flammable chemicals',
    },
    { id: '5',
      title: 'Stay out of buildings until advised',
    },
    { id: '6',
      title: 'Check for water, electrical, gas, or LPG leaks and damages',
    },
    { id: '7',
      title: 'If signal is not down, message loved ones of your state and where you are',
    },
  ];
  
  const DATA = ({ title }) => (
    <View style={{flexDirection:'row',paddingLeft:10,paddingRight:10,}}><Ionicons name="md-play" color="black" size={15} style={{paddingTop:3}}/>
        <Text style={styles.txtBoxList}>{title}</Text>
    </View>
  );

function EarthquakeScreen({ navigation }) {
    
    const renderItem = ({ item }) => (
        <DATA title={item.title} />
    );

        return (
            <View style={styles.container}>
{/* Header -------------------------------*/}
                <View style={styles.header}>
                <View style={{position:"absolute", top:20,left:25}}>
                    <Ionicons onPress={()=> navigation.navigate("DisasterScreen")} name="md-arrow-back" color="white" size={40}/>
                </View>
                    <View style={styles.txtContainer}><Text style={styles.txtheader}>Earthquake</Text></View>
                </View>
                
{/* Body ------------------------*/}
                <View style={styles.body}>
                    <ScrollView showsVerticalScrollIndicator={false}>

{/* Definition ------------------------*/}                        
                    <View style={[styles.boxOuter, styles.shadow]}>
                        <Text style={styles.txtBoxHead}>Earthquake</Text>
                            <View style={styles.boxInner}>
                                <Image 
                                    style={{width:"85%",height:190,alignSelf:'center',resizeMode:'contain'}} 
                                    source={require('../../assets/GDPIcons/GDP-Earthquake/whatis.png')}/>

                                <Text style={[styles.txtBoxDesc, styles.txtJustified]}>
                                <Text style={{fontWeight:'bold'}}>Earthquake </Text>
                                An earthquake is what happens when two blocks of the earth suddenly slip past 
                                one another. The surface where they slip is called the fault or fault plane.
                                The location below the earth’s surface where the earthquake starts is called the 
                                hypocenter, and the location directly above it on the surface of the earth is 
                                called the epicenter.
                                </Text>
                            </View>
                        </View>
{/* Video ------------------------*/}   
                        <View style={[styles.boxOuter, styles.shadow]}>
                            <Text style={styles.txtBoxHead}>Earthquake 101</Text>
                            <View style={styles.boxInner}>
                                <View>
                                <WebView
                                  allowsFullscreenVideo
                                  allowsInlineMediaPlayback
                                  mediaPlaybackRequiresUserAction
                                  style={{ width: "100%", height: 200 }}
                                  source={{ uri: "https://www.youtube.com/embed/_r_nFT2m-Vg" }}
                                  />
                                </View>
                            </View>
                        </View>

{/* Before ------------------------*/}                        
                        <View style={[styles.boxOuter, styles.shadow]}>
                            <Text style={styles.txtBoxHead}>BEFORE THE EARTHQUAKE</Text>
                            <View style={styles.boxInner}>
                                <Image 
                                    style={{width:"100%",height:190,}} 
                                    source={require('../../assets/GDPIcons/GDP-Earthquake/1.jpg')}/>
                                <View style={{padding:15}}>
                                <FlatList
                                    data={BeforeData}
                                    renderItem={renderItem}
                                    keyExtractor={item => item.id}
                                />
                                </View>
                            </View>
                        </View>
    {/* Image -----------------------------*/}
                        <View style={[styles.boxOuter, styles.shadow]}>
                            <View style={styles.boxInner}>
                                <Image 
                                    style={{width:"100%",height:500,resizeMode:'contain',alignSelf:'center'}} 
                                    source={require('../../assets/GDPIcons/GDP-Earthquake/2.jpg')}/>
                            </View>
                        </View>
{/* During ------------------------*/}
                        
                        <View style={[styles.boxOuter, styles.shadow]}>
                            <Text style={styles.txtBoxHead}>DURING THE EARTHQUAKE</Text>
                            <View style={styles.boxInner}>
                                <Image 
                                    style={{width:"100%",height:190,}} 
                                    source={require('../../assets/GDPIcons/GDP-Earthquake/3.jpg')}/>
                                <View style={{padding:15}}>
                                <FlatList
                                    data={DuringData}
                                    renderItem={renderItem}
                                    keyExtractor={item => item.id}
                                />
                                </View>
                            </View>
                        </View>
{/* After ------------------------*/}
                        
                    <View style={[styles.boxOuter, styles.shadow]}>
                        <Text style={styles.txtBoxHead}>AFTER THE EARTHQUAKE</Text>
                        <View style={styles.boxInner}>
                            <Image 
                                style={{width:"100%",height:190,}} 
                                source={require('../../assets/GDPIcons/GDP-Earthquake/4.jpg')}/>
                            <View style={{padding:15}}>
                            <FlatList
                                data={AfterData}
                                renderItem={renderItem}
                                keyExtractor={item => item.id}
                            />
                            </View>
                        </View>
                    </View>

{/* Extra Info ------------------------*/}                        
                    <View style={[styles.boxOuter, styles.shadow]}>
                        <Text style={styles.txtBoxHead}>PHILVOLCS</Text>
                            <View style={styles.boxInner}>
                                <Image 
                                    style={{width:"90%",height:100,resizeMode:'contain',alignSelf:'center',}} 
                                    source={require('../../assets/GDPIcons/GDP-Earthquake/PHILVOLCS.png')}/>

                                <Text style={[styles.txtBoxDesc, styles.txtJustified]}>
                                The 
                                <Text style={{fontWeight:'bold'}}> Philippine Institute of Volcanology and Seismology </Text>
                                (PHIVOLCS) 
                                is a service institute of the Department of Science and Technology 
                                (DOST) that is principally mandated to mitigate disasters that may 
                                arise from volcanic eruptions, earthquakes, tsunami and other 
                                related geotectonic phenomena.
                                {'\n'}
                                You can go visit PHIVOLCS Website: {'\n'}
                                <TouchableOpacity onPress={()=> Linking.openURL("https://www.phivolcs.dost.gov.ph/")}
                                                  activeOpacity={0.6}>
                                    <Text style={{color:'dodgerblue'}}>https://www.phivolcs.dost.gov.ph/</Text>
                                </TouchableOpacity>
                                </Text>
                            </View>
                        </View>
{/* End Info ------------------------*/}

                    </ScrollView>
                </View>

            </View> // end Container

        );
}

{/* EXPORT ------------------------------------------*/}
export default EarthquakeScreen;

{/* Style ------------------------------------------*/}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e1f0ee',
        justifyContent: "center",
        alignItems: "center",
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
      },

    header:{
        flex:.1,
        width:'100%',
        backgroundColor: '#056674',
        padding:5,
        flexDirection:'row',
    },
    txtContainer:{
        alignSelf:'center',
        justifyContent: "center",
        width:'100%',
    },

    txtheader:{
        color: 'white',
        fontSize:25,
        fontWeight: '700',
        textAlign: 'center',
        alignSelf:'center',
    },

    body:{
        flex:1,
        width:'100%',
        padding:15,
        paddingTop:1,
        paddingBottom:1,
    },

    boxOuter:{
        flex:1,
        backgroundColor: '#494848',
        borderTopLeftRadius : 30,
        borderTopRightRadius: 30,
        borderRadius: 10,
        margin:10,
        marginTop:13,
    },

    boxInner:{
        flex:1,
        backgroundColor: 'white',
        borderTopLeftRadius : 15,
        borderTopRightRadius: 15,
        borderRadius: 10,
    },
   
    txtBoxHead:{
        color: 'white',
        fontSize:20,
        fontWeight: 'bold',
        textAlign: 'center',
        margin:10,
    },

    txtBoxDesc:{
        color: 'black',
        fontSize:15,
        padding: 20,
    },

    txtBoxList:{
        color: 'black',
        fontSize:15,
        paddingLeft: 10,
        paddingRight:15,
        textAlign:'justify',
    },

    txtJustified:{
        textAlign:'justify'
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