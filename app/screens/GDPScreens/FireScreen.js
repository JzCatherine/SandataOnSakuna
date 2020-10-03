import React from 'react'
import { Image, StyleSheet, Text, View ,Platform, StatusBar, LogBox,TouchableOpacity,ScrollView, Linking, FlatList} from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons";

LogBox.ignoreAllLogs();

const BeforeData = [
    { id: '1',
      title: 'Install smoke alarms on every level of your home, inside bedrooms and outside sleeping areas.',
    },
    { id: '2',
      title: 'Test smoke alarms every month. If they’re not working, change the batteries.',
    },
    { id: '3',
      title: 'Talk with all family members about a fire escape plan and practice the plan twice a year.',
    },
    { id: '4',
      title: 'Test your smoke alarms once a month. Change your batteries twice a year. We suggest changing them each time the time changes.',
    },
    { id: '5',
      title: 'Have a fire extinguisher in your home, especially in your kitchen.',
    },
    { id: '6',
      title: 'Ensure all household members know two ways to escape from every room of your home and know the family meeting spot outside of your home.',
    },
    { id: '7',
      title: 'Establish a family emergency communications plan and ensure that all household members know who to contact if they cannot find one another.',
    },
    { id: '8',
      title: 'Make sure everyone knows how to call 911.',
    },
    { id: '9',
    title: 'Teach household members how to STOP, DROP, and ROLL if their clothes should catch on fire.',
    },
  ];

  const DuringData = [
    { id: '1',
      title: 'Know how to safely operate a fire extinguisher.',
    },
    { id: '2',
      title: 'Remember to GET OUT, STAY OUT, and CALL 911.',
    },
    { id: '3',
      title: 'Yell "FIRE" several times and go outside right away. If you live in a building with elevators, use the stairs. Leave all your things where they are and save yourself.',
    },
    { id: '4',
      title: 'If closed doors or handles are warm or smoke blocks your primary escape route, use your second way out. Never open doors that are warm to touch.',
    },
    { id: '5',
      title: 'If you must escape through smoke, get low and go under the smoke to your exit. Close doors behind you.',
    },
  ];
  const AfterData = [
    { id: '1',
      title: 'Be sure that all individuals who are injured – be if from burns, smoke inhalation, or injuries incurred while escaping – should be treated by a doctor.',
    },
    { id: '2',
      title: ' Do not return to the building until given the okay by the fire authorities. For minor fires, make sure that there is no damage to the structure of the home that could cause its collapse.',
    },
    { id: '3',
      title: 'Throw out all food that was exposed to the fire and smoke.',
    },
    { id: '4',
      title: 'Contact your insurance agent to get an inventory of all damaged items, which could be covered. Save receipts that are related to the fire.',
    },
  ];
  
  const DATA = ({ title }) => (
    <View style={{flexDirection:'row',paddingLeft:10,paddingRight:10,}}><Ionicons name="md-play" color="black" size={15} style={{paddingTop:3}}/>
        <Text style={styles.txtBoxList}>{title}</Text>
    </View>
  );

function FireScreen({ navigation }) {
    
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
                    <View style={styles.txtContainer}><Text style={styles.txtheader}>Structural Fire</Text></View>
                </View>
                
{/* Body ------------------------*/}
                <View style={styles.body}>
                    <ScrollView showsVerticalScrollIndicator={false}>

{/* Definition ------------------------*/}                        
                    <View style={[styles.boxOuter, styles.shadow]}>
                        <Text style={styles.txtBoxHead}>Structural Fire</Text>
                            <View style={styles.boxInner}>
                                <Image 
                                    style={{width:"100%",height:210,}} 
                                    source={require('../../assets/GDPIcons/GDP-Fire/1.jpg')}/>

                                <Text style={[styles.txtBoxDesc, styles.txtJustified]}>
                                <Text style={{fontWeight:'bold'}}>Structural Fire </Text>
                                mainly occur in a residential, commercial, or community-based building. 
                                The propagation rates of such fires vary depending on the types of 
                                materials used in building construction; in turn, the degree of flame 
                                and/or radiant heat generation differs.
                                </Text>
                            </View>
                        </View>

{/* Before ------------------------*/}                        
                        <View style={[styles.boxOuter, styles.shadow]}>
                            <Text style={styles.txtBoxHead}>BEFORE THE FIRE</Text>
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
                                <Image 
                                    style={{width:"100%",height:150,marginBottom:10,}}
                                    source={require('../../assets/GDPIcons/GDP-ForestFire/4.jpg')}/>
                            </View>
                        </View>
    {/* Image -----------------------------*/}
                        <View style={[styles.boxOuter, styles.shadow]}>
                            <View style={styles.boxInner}>
                                <Image 
                                  style={{width:"100%",height:600,resizeMode:'contain',alignSelf:'center'}} 
                                  source={require('../../assets/GDPIcons/GDP-Fire/2.jpg')}/>
                            </View>
                        </View>
{/* During ------------------------*/}
                        
                        <View style={[styles.boxOuter, styles.shadow]}>
                            <Text style={styles.txtBoxHead}>DURING THE FIRE</Text>
                            <View style={styles.boxInner}>
                                <Image 
                                    style={{width:"100%",height:280}} 
                                    source={require('../../assets/GDPIcons/GDP-Fire/4.jpg')}/>
                                <View style={{padding:15}}>
                                <FlatList
                                    data={DuringData}
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
                                  style={{width:"100%",height:380,resizeMode:'contain',alignSelf:'center'}} 
                                  source={require('../../assets/GDPIcons/GDP-Fire/3.jpg')}/>
                            </View>
                        </View>
{/* After ------------------------*/}
                        
                    <View style={[styles.boxOuter, styles.shadow]}>
                        <Text style={styles.txtBoxHead}>AFTER THE FIRE</Text>
                        <View style={styles.boxInner}>
                            <Image 
                              style={{width:"100%",height:280}} 
                              source={require('../../assets/GDPIcons/GDP-Fire/5.jpg')}/>
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
                        <Text style={styles.txtBoxHead}>Bureau of Fire Protection</Text>
                            <View style={styles.boxInner}>
                                <Image 
                                    style={{width:"80%",height:300,alignSelf:'center',resizeMode:'contain',}} 
                                    source={require('../../assets/GDPIcons/GDP-Fire/6.png')}/>

                                <Text style={[styles.txtBoxDesc, styles.txtJustified]}>
                                The 
                                <Text style={{fontWeight:'bold'}}> Bureau of Fire Protection </Text>
                                The Bureau of Fire Protection (Filipino: Kawanihan ng Pagtatanggol sa Sunog, acronym BFP)  
                                is an agency of the Department of the Interior and Local Government (DILG) responsible 
                                for implementing national policies related to Firefighting and fire prevention as well as 
                                implementation of the Philippine Fire Code (PD 1185), which has been repealed and replaced 
                                by the New Fire Code of the Philippines (RA 9514). Formerly known as the Integrated National 
                                Police Fire Service, the BFP is in charge of the administration and management of municipal 
                                and city fire and emergency services all over the country.
                                {'\n'}
                                You can go visit Bureau of Fire Protection Website: {'\n'}
                                <TouchableOpacity onPress={()=> Linking.openURL("https://car.bfp.gov.ph/")}
                                                  activeOpacity={0.6}>
                                    <Text style={{color:'dodgerblue'}}>https://car.bfp.gov.ph/</Text>
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
export default FireScreen;

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