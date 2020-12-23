
import React from 'react';
import {SafeAreaView,StyleSheet,ScrollView,View,Text,StatusBar, TouchableOpacity, Image,} from 'react-native';


export default class wellcom extends React.Component {

    state = {
        data: []
    }


    // componentDidMount =() =>{
    //     fetch('http://localhost:3000/data',{method: "GET"})
    //     .then((Response) => Response.json())
    //     .then((responseJson) => {this.setState({data: responseJson})
    //     })
    //     .catch((error) => {
    //         console.error(error);
    //     })
    // }

    render(){
        return(
            <View style = {styles.container}>
                <View style={styles.box_text}>
                <Image style={styles.img} source={require('../img/logo2.jpeg')} />
                    <Text style = {styles.conten}>
                        wellcom to UDA
                    </Text>
                </View>
    
                    <View style = {styles.box}>
                        <TouchableOpacity style = {styles.button} onPress = {()  => this.props.navigation.replace('login')}>
                        {/* {this.state.data.map(post =)} */}
                            <Text>hello</Text>
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