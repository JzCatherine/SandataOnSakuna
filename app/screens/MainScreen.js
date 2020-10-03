import React, {Component} from 'react'
import { Image, StyleSheet, FlatList,Text, View ,Platform, StatusBar, TouchableOpacity, Alert, BackHandler} from 'react-native'


const category = [
  { key:'1',
    picture: require('../assets/MainImages/siren.jpg'), 
    description: "Emergency Alarm\nSOS",
    screen: "EmergencyAlertScreen",
  },
  { key:'2',
    picture: require('../assets/MainImages/EmergencyCall.jpg'), 
    description: "Emergency\nHotlines",
    screen: "HotlineScreen",
  },
  { key:'3',
    picture: require('../assets/MainImages/govsite.png'), 
    description: "PH Government\nSites & News",
    screen: "SitesScreen",
  },
  { key:'4',
    picture: require('../assets/MainImages/gdp.png'), 
    description: "General Disaster\nPreparedness",
    screen: "DisasterScreen",
  },
  { key:'5',
    picture: require('../assets/MainImages/FirstAid.jpg'), 
    description: "Emergency\nFirst Aid",
    screen: "FirstAidScreen",
  },
  { key:'6',
    picture: require('../assets/MainImages/dev.jpg'), 
    description: "About Us &\nFeedback",
    screen: "AboutUs",
  },
];
class MainScreen extends Component{
    
  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }

  onBackPress = () => {
 
    //Code to display alert message when use click on android device back button.
    Alert.alert(
      ' Exit From App ',
      ' Do you want to exit From App ?',
      [
        { text: 'Yes', onPress: () => BackHandler.exitApp() },
        { text: 'No', onPress: () => console.log('NO Pressed') }
      ],
      { cancelable: false },
    );
 
    // Return true to enable back button over ride.
    return true;
  }

  render(){
    const { navigation } = this.props;
  
    return (
        <View style={styles.container}>
{/* Header ------------------------------------ */}
          <View style={[styles.header, styles.shadow]}> 
            <Image 
              style={styles.logo}
              source={require('../assets/AppLogo/AppWhiteLogo.png')}/>
            <Text style={styles.SOS}>Sandata On Sakuna</Text>
            <Text style={styles.descrip}>Learn and Take Action to Survive!</Text>
          </View>
          
{/* Body ------------------------------------ */}           
          <View style={styles.body}>
            <FlatList
              data={category}
              numColumns={2}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
              <View style={[styles.box, styles.shadow]}>
                <TouchableOpacity 
                  activeOpacity={0.6}
                  underlayColor="#ecf0f1"
                  onPress={()=> navigation.push(item.screen)}
                >
                    <View style={styles.inner}>
                      <Image 
                          style={styles.logo} 
                          source={item.picture}/>
                      <Text style={styles.catgry}>{item.description}</Text>
                    </View>
                </TouchableOpacity>
              </View>
            )}/>    
          </View> 
        </View>

      );
  }
}
export default MainScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
      },
      header:{
        flex: 0.5,
        backgroundColor: '#ed6663',
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        alignItems: "center",
        justifyContent: "center",
    },

    logo: {
      width: 150,
      height: 150,
    },
    
    SOS:{
      color: 'white',
      fontSize: 25,
      fontWeight: '700',
      textAlign:'center',
    },

    descrip:{
      color: 'white',
      fontSize: 15,
      fontWeight: '700',
      textAlign:'center',
    },

    body:{
      flex: 1,
      backgroundColor: 'white',
      alignItems: "center",
      justifyContent: "center",
      
      paddingTop:0,
      paddingBottom:0,
    },

    box:{
      width : '50%',
    },

    inner: {
      margin:8,
      padding:10,
      borderRadius:20,
      backgroundColor: '#d9ecf2',
      alignItems: "center",
      justifyContent: "center",
    },

    innerimage:{
      width: 100,
      height: 100,
    },

    catgry:{
      fontSize:17,
      fontWeight: '700',
      textAlign: 'center',
      paddingTop: 15,
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