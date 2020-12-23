
import React from 'react';
import {SafeAreaView,StyleSheet,ScrollView,View,Text,StatusBar,autoCompleteType, TouchableOpacity, Image, TextInput,value} from 'react-native';




export default class login extends React.Component{
 render(){

        return(
            <View style = {styles.container}>
                <View style={styles.box_text}>
                <Image style={styles.img} source={require('../img/logo2.jpeg')} />
                    <Text style = {styles.conten}>
                    </Text>
                    <TextInput style={{ height: 40,width:300, borderColor: 'gray', borderWidth: 1 }} placeholder = "tên đăng nhập"/>
                    <TextInput style={{ height: 40,width:300, borderColor: 'gray', borderWidth: 1 }} placeholder = "mật khẩu"/>
                        <TouchableOpacity style = {styles.button}>
                            <Text>đăng nhập</Text>
                    </TouchableOpacity>
                </View>
                
                    <View style = {styles.box}>
                        <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.replace('home')}>
                            <Text>next</Text>
                        </TouchableOpacity>
                    </View>
            </View>
        )
}
}


const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        flex:1,
        // justifyContent:"center"
    },
    img:{
        width:200,
        height:200
    },
    box_text:{
        flex:7,
        justifyContent:"center",
        alignItems:"center",
    },
    conten:{
        fontSize: 40,
        color: '#f32443',
    },
    box:{
        flex:1,
        justifyContent:"center",
        alignItems:"flex-end",
        paddingRight:50,
        // backgroundColor:'#213444',
    },
    button:{
        backgroundColor:'#1e9e40',
        padding:10,
        borderRadius:10,

    }
})