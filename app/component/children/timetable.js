
import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TouchableOpacity, Image, } from 'react-native';

export default class timetable extends React.Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.box}>
                        <View style={[styles.boxday, {backgroundColor:'#eaf6f7'}]}>
                            <Text style={styles.text}>MON</Text>
                        </View>
                        <View style={styles.boxinfo}>
                            <Text>nghỉ không có học hành gì hết</Text>
                        </View>
                    </View>
                    <View style={styles.box}>
                        <View style={[styles.boxday, {backgroundColor:'#d9edec'}]}>
                            <Text style={styles.text}>TUE</Text>
                        </View>
                        <View style={styles.boxinfo}>
                            <Text>nguyeenx quoc cuong</Text>
                        </View>
                    </View>
                    <View style={styles.box}>
                        <View style={[styles.boxday, {backgroundColor:'#cbe3e6'}]}>
                            <Text style={styles.text}>WED</Text>
                        </View>
                        <View style={styles.boxinfo}>
                            <Text>nguyeenx quoc cuong</Text>
                        </View>
                    </View>
                    <View style={styles.box}>
                        <View style={[styles.boxday, {backgroundColor:'#b3e0dc'}]}>
                            <Text style={styles.text}>THU</Text>
                        </View>
                        <View style={styles.boxinfo}>
                            <Text>nguyeenx quoc cuong</Text>
                        </View>
                    </View>
                    <View style={styles.box}>
                        <View style={[styles.boxday, {backgroundColor:'#a1dad4'}]}>
                            <Text style={styles.text}>FRI</Text>
                        </View>
                        <View style={styles.boxinfo}>
                            <Text>nguyeenx quoc cuong</Text>
                        </View>
                    </View>
                    <View style={styles.box}>
                        <View style={[styles.boxday, {backgroundColor:'#8dd2cd'}]}>
                            <Text style={styles.text}>SAT</Text>
                        </View>
                        <View style={styles.boxinfo}>
                            <Text>nguyeenx quoc cuong</Text>
                        </View>
                    </View>
                    <View style={styles.box}>
                        <View style={[styles.boxday, {backgroundColor:'#7acbc6'}]}>
                            <Text style={styles.text}>SUN</Text>
                        </View>
                        <View style={styles.boxinfo}>
                            <Text>nguyeenx quoc cuong</Text>
                        </View>
                    </View>
                </View>
                
            </ScrollView>
        )
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
        height: 100,
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