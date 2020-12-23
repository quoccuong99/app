
import React from 'react';
import {SafeAreaView,StyleSheet,ScrollView,View,Text,StatusBar, TouchableOpacity,TextInput, Image,} from 'react-native';

export default class system extends React.Component{
    render(){
            var payments = [<View>
                <View>
                    <TextInput />
                </View>
                <View>
                    <TextInput />
                </View>
                <View>
                    <TextInput />
                </View>
            </View>];
        
            for(let i = 0; i < 10; i++){

            
            return (
                <ScrollView>
<View>
                    <View>
                        <View><Text>No</Text></View>
                        <View><Text>Name</Text></View>
                        <View><Text>Preference</Text></View>
                    </View>
        
                    { payments }
                </View>
                </ScrollView>
                
            )
            }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexDirection: 'row',
        padding: 20
    },
    box: {
        flex: 1,
        flexDirection: 'row',
        marginBottom:10
        // borderWidth: 1,
        // borderColor: "#f5bac3",
        // alignContent:'stretch',
        // backgroundColor: '#f31421'
    },
    boxinfo: {
        flex: 6,
        borderWidth: 1,
        borderColor: "#dfe3e2",
        marginLeft: 5,
        // justifyContent: 'center'
    },
    boxday: {
        backgroundColor: '#88cbc8',
        flex: 1,
        height: 50,
        // marginBottom: 15,
        justifyContent: 'center',
    },
    info: {
        // flex: 2,
        borderWidth: 4,
        borderColor: '#c9e1c9',
        // backgroundColor:'#234234'
    },
    text: {
        // backgroundColor:"#7777",
        alignSelf: 'flex-start',
        alignSelf: 'center'
        // transform: [{ rotate: '270deg' }],

    }

})