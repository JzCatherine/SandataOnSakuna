import React from 'react'
import { Image, StyleSheet, Text, View ,Platform, StatusBar, LogBox,TouchableOpacity,ScrollView, Linking, FlatList} from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons";

LogBox.ignoreAllLogs();

const BeforeData = [
    { id: '1',
      title: 'Adhere to all local fre and building codes and weed abatement ordinances. ',
    },
    { id: '2',
      title: 'Keep rain gutters clear of debris at all times.',
    },
    { id: '3',
      title: 'Stack firewood away from your home and other buildings',
    },
    { id: '4',
      title: 'Use approved fire resistant materials when building, renovating or retrofitting structures.',
    },
    { id: '5',
      title: 'Store combustible or flammable materials in approved containers.',
    },
    { id: '6',
      title: 'Store all important papers in a fireproof container or keep copies at another location.',
    },
    { id: '7',
      title: 'Keep battery operated radios and flashlights with additional fresh batteries on hand.',
    },
    { id: '8',
      title: 'Make evacuation plans with family members. Include several options with an outside meeting place and contact person. Practice regularly.',
    },
  ];

  const DuringData = [
    { id: '1',
      title: 'Turn on a TV or radio to get the latest emergency information.',
    },
    { id: '2',
      title: 'If hoses and adequate water are available set them up. Fill buckets with water.',
    },
    { id: '3',
      title: 'Remove combustible material from the area surrounding the house (lawn chairs, tables, etc.).',
    },
    { id: '4',
      title: 'Turn a light on in each room for visibility in case of smoke.',
    },
    { id: '5',
      title: 'Open or take down flammable drapes and curtains.',
    },
    { id: '6',
      title: 'Be ready to evacuate all family members and pets when requested to do so.',
    },
    { id: '7',
      title: 'Detach electrical garage doors. Back in your car and leave the keys in the ignition.',
    },
    { id: '8',
      title: 'Secure your pets if possible.',
    }
  ];
  const AfterData = [
    { id: '1',
      title: 'Check with fire officials before attempting to return to your home.',
    },
    { id: '2',
      title: 'Use caution when re-entering a burned area - flare ups can occur.',
    },
    { id: '3',
      title: 'Check grounds for hot spots, smoldering stumps and vegetation. Use your buckets of water.',
    },
    { id: '4',
      title: 'Check the roof and exterior areas for sparks and embers.',
    },
    { id: '5',
      title: 'Check the attic and throughout the house for hidden burning, sparks and embers.',
    },
    { id: '6',
      title: 'Continue to check for problem areas for several days.',
    },
    { id: '7',
      title: 'Contact 911 if any danger is perceived.',
    },
  ];
  
  const DATA = ({ title }) => (
    <View style={{flexDirection:'row',paddingLeft:10,paddingRight:10,}}><Ionicons name="md-play" color="black" size={15} style={{paddingTop:3}}/>
        <Text style={styles.txtBoxList}>{title}</Text>
    </View>
  );


function ForestFireScreen({ navigation }) {
    
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
                    <View style={styles.txtContainer}><Text style={styles.txtheader}>Forest Fire</Text></View>
                </View>
                
{/* Body ------------------------*/}
                <View style={styles.body}>
                    <ScrollView showsVerticalScrollIndicator={false}>

{/* Definition ------------------------*/}                        
                    <View style={[styles.boxOuter, styles.shadow]}>
                        <Text style={styles.txtBoxHead}>What is Forest Fire?</Text>
                            <View style={styles.boxInner}>
                                <Image 
                                    style={{width:"100%",height:200,resizeMode:'contain'}} 
                                    source={require('../../assets/GDPIcons/GDP-ForestFire/1.jpg')}/>

                                <Text style={[styles.txtBoxDesc, styles.txtJustified]}>
                                A 
                                <Text style={{fontWeight:'bold'}}> Forest Fire </Text>
                                is an uncontrolled fire that is wiping out large 
                                fields and areas of land. It is typically fires that started out of 
                                a lightning strike, or people carelessly starting it, or accidentally, 
                                or even arson, that went unnoticed and got out of hand. These fires 
                                sometimes burn for days and weeks. They can wipe out an entire forest 
                                and destroy almost every organic matter in it.
                                </Text>
                            </View>
                        </View>

{/* Before ------------------------*/}                        
                        <View style={[styles.boxOuter, styles.shadow]}>
                            <Text style={styles.txtBoxHead}>BEFORE THE FIRE</Text>
                            <View style={styles.boxInner}>
                                <Image 
                                    style={{width:"100%",height:190,}} 
                                    source={require('../../assets/GDPIcons/GDP-ForestFire/2.jpg')}/>
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
                            <Text style={styles.txtBoxHead}>DURING THE FIRE</Text>
                            <View style={styles.boxInner}>
                                <Image 
                                    style={{width:"100%",height:190,}} 
                                    source={require('../../assets/GDPIcons/GDP-ForestFire/3.jpg')}/>
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
export default ForestFireScreen;

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