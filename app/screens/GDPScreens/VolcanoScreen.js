import React from 'react'
import { Image, StyleSheet, Text, View ,Platform, StatusBar, LogBox,TouchableOpacity,ScrollView, Linking, FlatList} from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons";
import { WebView } from 'react-native-webview';

LogBox.ignoreAllLogs();

const BeforeData = [
    { id: '1',
      title: 'Talk about volcanoes with your family so that everyone knows what to do in case of a volcanic eruption. Discussing ahead of time helps reduce fear, particularly for younger children.',
    },
    { id: '2',
      title: 'Keep handy a pair of goggles and a dust mask for each member of your household in case of ashfall.',
    },
    { id: '3',
      title: 'Charge your electronics. Keep your mobile devices and power banks charged in case of power interruptions.',
    },
    { id: '4',
      title: 'Know disaster hotlines and other emergency hotlines. ',
    },
    { id: '5',
      title: 'Prepare a go-bag in case of evacuation.',
    },
  ];

  const DuringData = [
    { id: '1',
      title: 'Listen to a local station on a portable, battery-operated radio or television for updated emergency information and instructions.',
    },
    { id: '2',
      title: 'Follow any evacuation orders issued by authorities, and put your emergency plan into action.',
    },
    { id: '3',
      title: 'If indoors, close all window, doors, and dampers to keep volcanic ash from entering.',
    },
    { id: '4',
      title: 'Put all machinery inside a garage or barn to protect it from volcanic ash. If buildings are not available, cover machinery with large tarps.',
    },
    { id: '5',
      title: 'Bring animals and livestock into closed shelters to protect them from breathing volcanic ash.',
    },
    { id: '6',
      title: 'Seek shelter indoors if possible.',
    },
    { id: '7',
      title: 'Stay out of designated restricted zones. Effects of a volcanic eruption can be experienced many miles from a volcano.',
    },
    { id: '8',
      title: 'Avoid low-lying areas, areas downwind of the volcano, and river valleys downstream of the volcano.',
    },
    { id: '9',
      title: 'Stay in areas where you will not be further exposed to volcanic eruption hazards. Trying to watch an erupting volcano up close is a deadly idea.',
    },
    { id: '10',
      title: 'Wear a dust mask designed to protect against lung irritation from small particles.',
    },
    { id: '11',
      title: 'Protect your eyes by wearing goggles. Wear eyeglasses, not contact lenses.',
    },
    { id: '12',
      title: 'Keep as much of your skin covered as possible.',
    },
  ];
  const AfterData = [
    { id: '1',
      title: 'Do not leave your home or indoor shelters until notified by the local government that it is safe to do so. Evacuate to safer grounds only when notified.',
    },
    { id: '2',
      title: 'Keep a watchful eye on your kids or loved ones who may be tempted to go out to see what’s going on outside.',
    },
    { id: '3',
      title: 'Wear protection. Use masks, glasses/goggles, long sleeves, pants, and shoes when clearing out ash to protect your lungs, skin and eyes.',
    },
    { id: '4',
      title: 'Clean your gutters and roof with water after clearing out the ash to prevent corrosion.',
    },
    { id: '5',
      title: 'Wait for further announcements from LGUs or national news related to the volcanic eruption.',
    }
  ];
  
  const DATA = ({ title }) => (
    <View style={{flexDirection:'row',paddingLeft:10,paddingRight:10,}}>
      <Ionicons name="md-play" color="black" size={15} style={{paddingTop:3}}/>
        <Text style={styles.txtBoxList}>{title}</Text>
    </View>
  );

function VolcanoScreen({ navigation }) {
    
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
                    <View style={styles.txtContainer}><Text style={styles.txtheader}>Volcano Eruption</Text></View>
                </View>
                
{/* Body ------------------------*/}
                <View style={styles.body}>
                    <ScrollView showsVerticalScrollIndicator={false}>

{/* Definition ------------------------*/}                        
                    <View style={[styles.boxOuter, styles.shadow]}>
                        <Text style={styles.txtBoxHead}>Volcano Eruption</Text>
                            <View style={styles.boxInner}>
                                <Image 
                                    style={{width:"100%",height:210,}} 
                                    source={require('../../assets/GDPIcons/GDP-Volcano/1.jpg')}/>
                                <Text style={[styles.txtBoxDesc, styles.txtJustified]}>
                                  <Text style={{fontWeight:'bold'}}>Volcano Eruption </Text>
                                    occurs when magma is released from a volcano. Volcanic eruptions can be quite 
                                    calm and effusive, or they can be explosive. Effusive eruptions produce lava 
                                    flows, while explosive eruptions produce ash and pyroclastic density currents.
                                  <Text style={{fontWeight:'bold', color:'black',}}>
                                  {'\n'}{'\n'}Why does the Philippines have many volcanoes?{'\n'}</Text>
                                    The Philippines sits on a unique tectonic setting ideal to volcanism and earthquake activity. 
                                    It is situated at the boundaries of two tectonic plates – the Philippine Sea Plate and the 
                                    Eurasian plate –  both of which subduct or dive beneath the archipelago along the deep 
                                    trenches along its east and west seaboard.
                                </Text>
                            </View>
                        </View>

{/* Video ------------------------*/}                        
                        <View style={[styles.boxOuter, styles.shadow]}>
                            <Text style={styles.txtBoxHead}>VIDEO VOLCANO ERUPTION</Text>
                            <View style={styles.boxInner}>
                                <View>
                                <WebView
                                  allowsFullscreenVideo
                                  allowsInlineMediaPlayback
                                  mediaPlaybackRequiresUserAction
                                  style={{ width: "100%", height: 200 }}
                                  source={{ uri: "https://www.youtube.com/embed/69Hkolfugw4" }}
                                  />
                                </View>
                            </View>
                        </View>

{/* Before ------------------------*/}                        
                        <View style={[styles.boxOuter, styles.shadow]}>
                            <Text style={styles.txtBoxHead}>BEFORE VOLCANO ERUPTION</Text>
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
                                  style={{width:"100%",height:700,resizeMode:'contain',alignSelf:'center'}} 
                                  source={require('../../assets/GDPIcons/GDP-Volcano/2.jpg')}/>
                            </View>
                        </View>
{/* During ------------------------*/}
                        
                        <View style={[styles.boxOuter, styles.shadow]}>
                            <Text style={styles.txtBoxHead}>DURING VOLCANO ERUPTION</Text>
                            <View style={styles.boxInner}>
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
                        <Text style={styles.txtBoxHead}>AFTER VOLCANO ERUPTION</Text>
                        <View style={styles.boxInner}>
                            <Image 
                              style={{width:"100%",height:210,}} 
                              source={require('../../assets/GDPIcons/GDP-Volcano/3.jpg')}/>
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
                                {'\n'}
                                to learn more about Earthquake and PHIVOLCS.
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
export default VolcanoScreen;

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