import React, {Component} from 'react'
import { Image, StyleSheet, Text, View ,Platform, StatusBar, LogBox,TouchableOpacity,ScrollView, Linking, FlatList} from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons";

LogBox.ignoreAllLogs();

const BeforeData = [
    { id: '1',
      title: 'Find out how often your location is likely to be flooded.',
    },
    { id: '2',
      title: 'Know the flood warning system in your community and be sure your family knows it. Keep informed of daily weather condition.',
    },
    { id: '3',
      title: 'Designate an evacuation area for the family and livestock.',
    },
    { id: '4',
      title: 'Assign family members instructions and responsibilities according to an evacuation plan.',
    },
    { id: '5',
      title: 'Keep a stock of food which requires little cooking and refrigeration; electric power may be interrupted.',
    },
    { id: '6',
      title: 'Keep a transistorized radio and flashlight with spare batteries, emergency cooking equipment, candies, matches and first aid kit handy in case of emergency.',
    },
    { id: '7',
      title: 'Store supplies and other household effects above expected flood water level.',
    },
    { id: '8',
      title: 'Securely anchor weak dwellings and items.',
    },
  ];

  const DuringData = [
    { id: '1',
      title: 'Avoid areas subject to sudden flooding.',
    },
    { id: '2',
      title: 'Do not attempt to cross rivers of flowing streams where water is above the knee.',
    },
    { id: '3',
      title: 'Beware of water-covered roads and bridges.',
    },
    { id: '4',
      title: 'Avoid unnecessary exposure to the elements.',
    },
    { id: '5',
      title: 'Do not go swimming or boating in swollen rivers.',
    },
    { id: '6',
      title: 'Eat only well-cooked food. Protect leftovers against contamination.',
    },
    { id: '7',
      title: 'Drink clean or preferably boiled water ONLY.',
    }
  ];
  const AfterData = [
    { id: '1',
      title: 'Re-enter the dwellings with caution using flashlights, not lanterns or torchers. Flammables may be inside.',
    },
    { id: '2',
      title: 'Be alert for fire hazards like broken wires.',
    },
    { id: '3',
      title: 'Do not eat food and drink water until they have been checked for flood water contamination.',
    },
    { id: '4',
      title: 'Report broken utility lines (electricity, water, gas and telephone) to appropriate agencies authorities.',
    },
    { id: '5',
      title: 'Do not turn on the main switch or use appliances and other equipment until they have been checked by a competent electrician.',
    },
    { id: '6',
      title: 'Consult health authorities for immunization requirements.',
    },
    { id: '7',
      title: 'Do not go in disaster areas. Your presence might hamper rescue and other emergency operations.',
    },
  ];
  
  const DATA = ({ title }) => (
    <View style={{flexDirection:'row',paddingLeft:10,paddingRight:10,}}><Ionicons name="md-play" color="black" size={15} style={{paddingTop:3}}/>
        <Text style={styles.txtBoxList}>{title}</Text>
    </View>
  );

function FloodScreen({ navigation }) {
    
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
                    <View style={styles.txtContainer}><Text style={styles.txtheader}>Tropical Cyclone{'\n'}& Floods</Text></View>
                </View>
                
{/* Body ------------------------*/}
                <View style={styles.body}>
                    <ScrollView showsVerticalScrollIndicator={false}>

{/* Definition ------------------------*/}                        
                    <View style={[styles.boxOuter, styles.shadow]}>
                        <Text style={styles.txtBoxHead}>Tropical Cyclone</Text>
                            <View style={styles.boxInner}>
                                <Image 
                                    style={{width:"100%",height:210,}} 
                                    source={require('../../assets/GDPIcons/GDP-Flood/0.jpg')}/>

                                <Text style={[styles.txtBoxDesc, styles.txtJustified]}>
                                <Text style={{fontWeight:'bold'}}>Tropical Cyclone </Text>
                                is a rapid rotating storm originating over tropical oceans from 
                                where it draws the energy to develop. It has a low pressure 
                                centre and clouds spiraling towards the eyewall surrounding 
                                the "eye", the central part of the system where the weather 
                                is normally calm and free of clouds.
                                </Text>
                            </View>
                        </View>

    {/* Image -----------------------------*/}
                        <View style={[styles.boxOuter, styles.shadow]}>
                            <View style={styles.boxInner}>
                                <Image 
                                  style={{width:"100%",height:600,resizeMode:'contain',alignSelf:'center'}} 
                                  source={require('../../assets/GDPIcons/GDP-Flood/1-1.jpg')}/>
                            </View>
                        </View>

                        <View style={[styles.boxOuter, styles.shadow]}>
                            <View style={styles.boxInner}>
                                <Image 
                                  style={{width:"100%",height:600,resizeMode:'contain',alignSelf:'center'}} 
                                  source={require('../../assets/GDPIcons/GDP-Flood/2-1.jpg')}/>
                            </View>
                        </View>


                        <View style={[styles.boxOuter, styles.shadow]}>
                            <View style={styles.boxInner}>
                                <Image 
                                  style={{width:"100%",height:600,resizeMode:'contain',alignSelf:'center'}} 
                                  source={require('../../assets/GDPIcons/GDP-Flood/2-2.jpg')}/>
                            </View>
                        </View>


{/* Definition ------------------------*/}                        
                    <View style={[styles.boxOuter, styles.shadow]}>
                        <Text style={styles.txtBoxHead}>Flood</Text>
                            <View style={styles.boxInner}>
                                <Image 
                                    style={{width:"100%",height:210,}} 
                                    source={require('../../assets/GDPIcons/GDP-Flood/1.jpg')}/>

                                <Text style={[styles.txtBoxDesc, styles.txtJustified]}>
                                <Text style={{fontWeight:'bold'}}>Flood </Text>
                                denotes a progressive abnormal increase in the elevation of the 
                                surface level of streamfiow until it reaches a maximum height from 
                                which the level slowly drops to what is its normal level. 
                                The sequence described all takes place within a certain period of time.
                                </Text>
                            </View>
                        </View>


{/* Before ------------------------*/}                        
                        <View style={[styles.boxOuter, styles.shadow]}>
                            <Text style={styles.txtBoxHead}>BEFORE THE FLOOD</Text>
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
                            <Text style={styles.txtBoxHead}>DURING THE FLOOD</Text>
                            <View style={styles.boxInner}>
                                <Image 
                                    style={{width:"100%",height:190,}} 
                                    source={require('../../assets/GDPIcons/GDP-Flood/f1.jpg')}/>
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
                        <Text style={styles.txtBoxHead}>AFTER THE FLOOD</Text>
                        <View style={styles.boxInner}>
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
                        <Text style={styles.txtBoxHead}>PAGASA</Text>
                            <View style={styles.boxInner}>
                                <Image 
                                    style={{width:"100%",height:120,alignSelf:'center',}} 
                                    source={require('../../assets/GDPIcons/GDP-Flood/pagasa.jpg')}/>

                                <Text style={[styles.txtBoxDesc, styles.txtJustified]}>
                                The 
                                <Text style={{fontWeight:'bold'}}> Philippine Atmospheric, Geophysical and Astronomical Services Administration </Text>
                                PAGASA is the Philippine national institution dedicated to provide flood and typhoon warnings, 
                                public weather forecasts and advisories, meteorological, astronomical, climatological, 
                                and other specialized information and services primarily for the protection of life and 
                                property and in support of economic, productivity and sustainable development. 
                                {'\n'}
                                You can go visit PAGASA Website: {'\n'}
                                <TouchableOpacity onPress={()=> Linking.openURL("http://bagong.pagasa.dost.gov.ph/")}
                                                  activeOpacity={0.6}>
                                    <Text style={{color:'dodgerblue'}}>http://bagong.pagasa.dost.gov.ph/</Text>
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
export default FloodScreen;

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