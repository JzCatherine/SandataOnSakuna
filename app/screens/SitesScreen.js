import React, {Component} from 'react'
import { Image, StyleSheet, Text, View ,Platform, StatusBar, Linking,TouchableOpacity, FlatList,ImageBackground} from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons";

const news = [
    { key: '1', 
      name: "COVID-19 \ncases in PH \nsoar to 304,226 \nwith over 19,000 \nnew recoveries",
      picture: require('../assets/NewsImages/1.jpg'), 
      link: 'https://www.pna.gov.ph/articles/1116758',
    },
    { key: '2', 
      name: "Critical utilization \nrate in PH hospitals \nhas improved",
      picture: require('../assets/NewsImages/2.jpg'), 
      link: 'https://www.pna.gov.ph/articles/1116426',
    },
    { key: '3', 
      name: "House approves bills \nrequiring parents, \ngraduating students \nto plant trees",
      picture: require('../assets/NewsImages/3.jpg'), 
      link: "https://cnnphilippines.com/news/2020/8/26/House-approves-bills-requiring-parents-graduating-students-plant-trees-.html",
    },
    { key: '4', 
      name: "DOH warns against \nuse of anti-parasitic\n drug Ivermectin for \nCOVID-19 patients",
      picture: require('../assets/NewsImages/4.jpg'), 
      link: 'https://www.cnn.ph/news/2020/8/26/Ivermectin-COVID-19-treatment-warning.html',
    },
    { key: '5', 
      name: "'No Planet B': \nFilipino climate \nprotectors want \nleaders to act \nimmediately on \nclimate crisis",
      picture: require('../assets/NewsImages/5.png'), 
      link: 'https://www.philstar.com/headlines/2020/09/25/2045095/no-planet-b-filipino-climate-protectors-want-leaders-act-immediately-climate-crisis',
    },
    { key: '6', 
      name: "Click here for \nmore Official Latest \nNews at Philippine\n News Agency",
      picture: require('../assets/NewsImages/6.jpg'), 
      link: 'https://www.pna.gov.ph/',
    },

  ];

const category = [
    { key: '1', 
      name: "GOV.PH",
      picture: require('../assets/GovLogo/1.png'), 
      link: "https://www.gov.ph/",
    },
    { key: '2', 
      name: "Department of Health",
      picture: require('../assets/GovLogo/2.png'), 
      link: "https://www.doh.gov.ph/",
    
    },
    { key: '3', 
      name: "NDRRMC",
      picture: require('../assets/GovLogo/3.png'), 
      link: "https://www.ndrrmc.gov.ph/n",
    },
    { key: '4', 
      name: "Department of Environment \nand Natural Resources",
      picture: require('../assets/GovLogo/4.png'), 
      link: "https://www.pna.gov.ph/",
    },
    { key: '5', 
      name: "GOV.PH Coronavirus",
      picture: require('../assets/GovLogo/5.png'), 
      link: "https://covid19.gov.ph/information/covid-19-news-and-updates",
    },
    { key: '6', 
      name: "Philippine Information \nAgency",
      picture: require('../assets/GovLogo/6.jpg'), 
      link: "https://pia.gov.ph/",
    },

  ];


function SitesScreen({ navigation }) {
    
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../assets/AppBackground/bgBlue.jpg')} style={styles.imagebg}>
{/* Header -------------------------------*/}
                <View style={styles.header}>
                    <View style={styles.backView}>
                            <Ionicons onPress={()=> { navigation.push("MainScreen")}} name="md-arrow-back" color="#ff5c5c" size={40}/>
                            <View><Text style={styles.txtNews}>Latest News</Text></View>
                    </View>
                    
{/* News Header ---------------------------*/}
                    <View style={styles.newsView}>
                        <FlatList
                                data={news}
                                showsHorizontalScrollIndicator={false}
                                horizontal={true}
                                renderItem={({ item }) => (
                                <TouchableOpacity 
                                    activeOpacity={0.6}
                                    underlayColor="#ecf0f1"
                                    onPress={()=> Linking.openURL(item.link)}
                                >    
                                <View style={styles.newsBox}>   
                                    <Image 
                                    style={styles.newsImage} 
                                    source={item.picture}/>
                                    <View>
                                    <Text style={styles.txtNewsTitle}>{item.name}</Text>
                                    <Text style={styles.txtNewsDesc}>{'\n'}Click here to{'\n'}see the article</Text>
                                    </View>
                                </View>
                                </TouchableOpacity>
    
                            )}/>    

                    </View> 
                </View> 
{/* Sub Header ---------------------------*/}
                <View style={styles.subHeader}>
                    <View style={{marginTop:15, alignItems: "center"}}>
                        <Text style={styles.txtheader}> Government Websites </Text>
                    </View>

{/* Contact List ------------------------*/}
                    <View style={styles.body}>
                        
                        <FlatList
                            data={category}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item }) => (
                          <View style={styles.box}>  
                            <TouchableOpacity 
                                activeOpacity={0.6}
                                underlayColor="#ecf0f1"
                                onPress={()=> Linking.openURL(item.link)}
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
            </ImageBackground>
            </View> // end Container

        );
}

{/* EXPORT ------------------------------------------*/}
export default SitesScreen;

{/* Style ------------------------------------------*/}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
    imagebg: {
        flex: 1,
        width:'100%',
        height:'100%',
    },
    header:{
        flex:1,
        width:'100%',
    },

    backView:{
        flex:.2,
        marginLeft:"5%",
        marginTop:"5%",
        flexDirection:'row',
    },


    txtNews:{
        color: '#056674',
        fontSize:30,
        fontWeight: '700',
        marginLeft:"10%",
    },
    newsImage:{
        width: 200,
        height: 200,
        borderRadius:20,
    },

    txtNewsTitle:{
      fontSize:15,
      color: 'black',
      paddingLeft:10,
      fontWeight:'bold',
  },

    txtNewsDesc:{
        fontSize:12,
        color: 'black',
        paddingLeft:10,
        textAlign:'right',
        fontStyle:'italic',
    },

    newsView:{
        flex:1,
        width:"100%",
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
    },
    newsBox:{
        padding: 10,
        padding:15,
        borderRadius:20,
        margin:20,
        marginTop:0,
        backgroundColor: 'hsla(186, 90%, 99%, 0.51)',
        alignItems: "center",
        justifyContent: "center",
        flexDirection:'row'
        
    },


//Body-------------------------------------
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
        padding:30,
        paddingTop:2,
        paddingBottom:10,
    },

    box:{
      width:"100%",
      padding: 7,
    },

    viewButtons:{
      padding:15,
      borderRadius:20,
      backgroundColor: 'white',
      alignItems: "center",
      flexDirection:'row',
    },
    
    images: {
      width: 60,
      height: 60,
      borderRadius:50,
    },

    txtName:{
        color: '#ed6663',
        fontSize:17,
        paddingLeft:10,
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