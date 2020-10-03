import React, {Component} from 'react'
import { Image, ImageBackground, StyleSheet, Text, View ,Platform, StatusBar, Animated,TouchableOpacity} from 'react-native'

import { YellowBox } from 'react-native';



class SpashScreen extends Component{
    
    componentDidMount() {
        YellowBox.ignoreWarnings(['Animated: `useNativeDriver`']);
    }

    state ={
        LogoAnime: new Animated.Value(0),
        LogoText: new Animated.Value(0),
        loaderSpinner:false,
    };

    componentDidMount(){
        const {LogoAnime, LogoText} = this.state;
        Animated.parallel([
            Animated.spring(LogoAnime, {
                toValue: 1,
                tension: 10,
                friction: 2,
                duration: 7000,
            }).start(),
            Animated.timing(LogoText, {
                toValue:1,
                duration:3000,
            }),
        ]).start(() => {
            this.setState({
                loadingSpinner:true,
            });
        });
    }

    render(){
        const { navigation } = this.props;
        setTimeout(() => {
            navigation.navigate('MainScreen'); 
        }, 2400); //: Credits to Sir Jerone XD
          
        return(
        
            <View style={styles.container}>
            <ImageBackground source={require('../assets/AppBackground/WelcomeScreenBG.png')} 
                            style={{
                                flex: 1, resizeMode: "cover",
                                justifyContent: "center",
                                width:'100%', }}>
            
                <Animated.View 
                    style={{
                        opacity: this.state.LogoAnime,
                        top:this.state.LogoAnime.interpolate({
                            inputRange: [0, 1],
                            outputRange:[80,0]
                        }),
                    }}>

                    <Image 
                        style={styles.logo}
                        source={require('../assets/AppLogo/AppRedLogo.png')}/>
                </Animated.View>
                <Animated.View 
                    style = {{opacity: this.state.LogoText}}
                >
                    <Text style={styles.appname}>S.O.S</Text>
                </Animated.View>
                
            </ImageBackground>
            </View>
        );
    } 
}

export default SpashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
      },
    appname:{
        color: '#ed6663',
        fontSize:40,
        fontWeight: '700',
        fontStyle: "italic",
        alignSelf:'center',
    },
    logo: {
        width: 200,
        height: 200,
        alignSelf:'center',

    }
})
