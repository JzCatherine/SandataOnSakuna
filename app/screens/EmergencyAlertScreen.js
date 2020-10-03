import React, {Component} from 'react'
import { Image, StyleSheet, Text, View, Platform, StatusBar, TouchableOpacity} from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons";
import { Audio } from 'expo-av';

    
class EmergencyAlertScreen extends Component{
    state = {
        playingStatus: "Play",
      };
      
      async _playRecording() {
        const { sound } = await Audio.Sound.createAsync(
          require('../assets/EmergencyAudio/AirHorn.mp3'),
          {
            shouldPlay: true,
            isLooping: true,
          },
          this._updateScreenForSoundStatus,
        );
        this.sound = sound;
        this.setState({
          playingStatus: 'playing'
        });
      }
      
      _updateScreenForSoundStatus = (status) => {
        if (status.isPlaying && this.state.playingStatus !== "playing") {
          this.setState({ playingStatus: "playing" });
        } else if (!status.isPlaying && this.state.playingStatus === "playing") {
          this.setState({ playingStatus: "Stopped" });
        }
      };
      
      async _pauseAndPlayRecording() {
        if (this.sound != null) {
          if (this.state.playingStatus == 'playing') {
            console.log('pausing...');
            await this.sound.pauseAsync();
            console.log('paused!');
            this.setState({
              playingStatus: 'Stopped',
            });
          } else {
            console.log('playing...');
            await this.sound.playAsync();
            console.log('playing!');
            this.setState({
              playingStatus: 'playing',
            });
          }
        }
      }
      
      _syncPauseAndPlayRecording() {
        if (this.sound != null) {
          if (this.state.playingStatus == 'playing') {
            this.sound.pauseAsync();
          } else {
            this.sound.playAsync();
          }
        }
      }
      
      _playAndPause = () => {
        switch (this.state.playingStatus) {
          case 'Play':
            this._playRecording();
            break;
          case 'Stopped':
          case 'playing':
            this._pauseAndPlayRecording();
            break;
        }
      }

    render(){
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.Header}>
                    <Ionicons onPress={()=> { navigation.push("MainScreen")}} 
                              name="md-arrow-back" color="white" size={40}/>
                    <Text style={styles.Title}>Emergency Alert</Text>
                    <Text style={styles.Desc}>
                        If you are in a emergency situation {'\n'}please Press the 
                        button to make a {'\n'}Distress Sound to alert nearby people.
                    </Text>
                </View>

                <View style={styles.body}>
                    <Image 
                        style={styles.image} 
                        source={require('../assets/EmergencyAudio/siren.png')}/>
{/* Toggle Sound -----------------------------*/}
                    <TouchableOpacity 
                        activeOpacity={0.6}
                        underlayColor="#ecf0f1"
                        onPress={this._playAndPause}
                    > 
                        <View style={styles.btn}>
                            <Text style={styles.btnTxt}>{this.state.playingStatus}</Text> 
                        </View>
                    </TouchableOpacity>
                    
                </View>
            </View>
        );
    } 
}
export default EmergencyAlertScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e1f0ee',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
      },
    Header:{
        flex:.5,
        padding:20,
        backgroundColor: '#056674',
        borderBottomLeftRadius:40,
        borderBottomRightRadius:40,
    },
    Title:{
        fontSize:35,
        fontWeight:'bold',
        color:'white',
        textAlign:'center',
        marginTop:"5%",
    },
    Desc:{
        fontSize:15,
        color:'white',
        textAlign:'center',
        marginTop:"8%",
    },
    body:{
        flex:1,
        padding:30,
    },
    image:{
        width:240,
        height:240,
        marginTop: 20,
        alignSelf:"center",
    },
    btn:{
        backgroundColor:"#ed6663",
        width:"50%",
        alignSelf:"center",
        padding:15,
        borderRadius:20,
        marginTop:10,
    },
    btnTxt:{
        color:'white',
        fontWeight:'bold',
        fontSize:25,
        textAlign:'center',
        
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
