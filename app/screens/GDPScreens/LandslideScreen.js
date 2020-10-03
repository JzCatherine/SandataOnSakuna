import React from 'react'
import { Image, StyleSheet, Text, View ,Platform, StatusBar, LogBox,TouchableOpacity,ScrollView, Linking, FlatList} from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons";

LogBox.ignoreAllLogs();

const BeforeData = [
    { id: '1',
      title: 'Learn about local emergency response and evacuation plans.',
    },
    { id: '2',
      title: 'Talk to everyone in your household about what to do if a landslide occurs.',
    },
    { id: '3',
      title: 'If you are near a stream or channel, be alert for any sudden increase or decrease in water flow and notice whether the water changes from clear to muddy. Such changes may mean there is debris flow activity upstream so be prepared to move quickly.',
    },
    { id: '4',
      title: 'Create and practice an evacuation plan for your family and your business.',
    },
    { id: '5',
      title: 'Assemble and maintain an emergency preparedness kit.',
    },
    { id: '6',
      title: 'Become familiar with the land around where you live and work so that you understand your risk in different situations.',
    },
    { id: '7',
      title: 'Create and practice an evacuation plan for your family and your business.',
    },
    { id: '8',
      title: 'Assemble and maintain an emergency preparedness kit.',
    },
  ];

  const DuringData = [
    { id: '1',
      title: 'If you suspect imminent danger, evacuate immediately. Inform affected neighbors if you can, and contact your public works, fire or police department.',
    },
    { id: '2',
      title: 'Listen for unusual sounds that might indicate moving debris, such as trees cracking or boulders knocking together.',
    },
    { id: '3',
      title: 'If you are near a stream or channel, be alert for any sudden increase or decrease in water flow and notice whether the water changes from clear to muddy. Such changes may mean there is debris flow activity upstream so be prepared to move quickly.',
    },
    { id: '4',
      title: 'Be especially alert when driving— watch for collapsed pavement, mud, fallen rocks and other indications of possible debris flow.',
    },
    { id: '5',
      title: 'If you are ordered or decide to evacuate, take your animals with you.',
    },
    { id: '6',
      title: 'Consider a precautionary evacuation of large or numerous animals as soon as you are aware of impending danger.',
    },
  ];
  const AfterData = [
    { id: '1',
      title: 'Stay away from the slide area. There may be danger of additional slides.',
    },
    { id: '2',
      title: 'Check for injured and trapped persons near the slide, without entering the direct slide area. Direct rescuers to their locations.',
    },
    { id: '3',
      title: 'Help a neighbor who may require special assistance--infants, elderly people, and people with disabilities.',
    },
    { id: '4',
      title: 'Listen to local radio or television stations for the latest emergency information.',
    },
    { id: '5',
      title: 'Watch for flooding, which may occur after a landslide or debris flow.',
    },
    { id: '6',
      title: 'Look for and report broken utility lines to appropriate authorities.',
    },
    { id: '7',
      title: 'Seek the advice of a geotechnical expert for evaluating landslide hazards or designing corrective techniques to reduce landslide risk.',
    },
  ];
  
  const DATA = ({ title }) => (
    <View style={{flexDirection:'row',paddingLeft:10,paddingRight:10,}}>
      <Ionicons name="md-play" color="black" size={15} style={{paddingTop:3}}/>
        <Text style={styles.txtBoxList}>{title}</Text>
    </View>
  );

function LandslideScreen({ navigation }) {
    
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
                    <View style={styles.txtContainer}><Text style={styles.txtheader}>Landslide</Text></View>
                </View>
                
{/* Body ------------------------*/}
                <View style={styles.body}>
                    <ScrollView showsVerticalScrollIndicator={false}>

{/* Definition ------------------------*/}                        
                    <View style={[styles.boxOuter, styles.shadow]}>
                        <Text style={styles.txtBoxHead}>Landslide</Text>
                            <View style={styles.boxInner}>
                                <Image 
                                    style={{width:"100%",height:210,}} 
                                    source={require('../../assets/GDPIcons/GDP-Landslide/1.jpg')}/>
                                <Text style={[styles.txtBoxDesc, styles.txtJustified]}>
                                <Text style={{fontWeight:'bold'}}>Landslide </Text>
                                is the mass movement of rock, soil, and debris down a slope due to gravity. 
                                It occurs when the driving force is greater than the resisting force.It is a natural process that occurs in steep slopes. The movement may range from very slow to rapid. 
                                It can affect areas both near and far from the source.
                                </Text>
                            </View>
                        </View>

{/* Before ------------------------*/}                        
                        <View style={[styles.boxOuter, styles.shadow]}>
                            <Text style={styles.txtBoxHead}>BEFORE THE LANDSLIDE</Text>
                            <View style={styles.boxInner}>
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
                            <Text style={styles.txtBoxHead}>DURING THE LANDSLIDE</Text>
                            <View style={styles.boxInner}>
                                <Image 
                                    style={{width:"100%",height:190,}} 
                                    source={require('../../assets/GDPIcons/GDP-Landslide/2.jpg')}/>
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
                        <Text style={styles.txtBoxHead}>AFTER THE LANDSLIDE</Text>
                        <View style={styles.boxInner}>
                            <Image 
                                style={{width:"100%",height:190,}} 
                                source={require('../../assets/GDPIcons/GDP-Landslide/2.jpg')}/>
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
export default LandslideScreen;

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