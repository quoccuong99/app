
import React from 'react';
import {SafeAreaView,StyleSheet,ScrollView,View,Text,StatusBar, TouchableOpacity, Image,} from 'react-native';

export default class notification extends React.Component{
    render(){
        return(
            <View style= {{justifyContent:"center", alignItems:"center", flex:1}}>
                <Text style = {{fontSize:40}}>
                    thông báo nè các bạn
                </Text>
            </View>
        )
    }
}