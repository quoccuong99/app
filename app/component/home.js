import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TouchableOpacity, Image, TextInput, value } from 'react-native';
import { ceil } from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// 
// import StudentCorner from './menu/studentCorner'
// import Study from './menu/study'
// import System from './menu/system'
// import Timetable from './children/timetable'


// const Tabs = createBottomTabNavigator();


export default class home extends React.Component {
    render() {
        return (
            // <LinearGradient style={{flex:1}} colors={['#34ad41', '#70f0cf']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
            <LinearGradient style={{ flex: 1 }} colors={['#1f6e06', '#70f0cf']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>

                {/* <SafeAreaView>
                    <ScrollView > */}
                <View style={styles.container}>
                    <View style={styles.card}>
                        <View style={styles.format}>
                            <View style={styles.boxImg}>
                                <Image style={styles.img} source={require('../img/41722.jpg')} />
                            </View>
                            <View style={styles.boxInfo}>
                                <View style={styles.info}>
                                    <Text style={styles.textCard}>Nguyễn Quốc Cường</Text>
                                    <Text style={styles.textCard}>Ngày sinh: 19/06/1999</Text>
                                    <Text style={styles.textCard}>ID: 41722</Text>
                                    <Text style={styles.textCard}>Lớp: IT17A1.11</Text>
                                    <Text style={styles.textCard}>Khoá: 2017-2021</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.list}>
                        <TouchableOpacity style = {styles.item} onPress = {()  => this.props.navigation.navigate('notification')}>
                        <Text style={styles.text}>Thông báo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.item} onPress = {()  => this.props.navigation.navigate('timetable')}>
                            <Text style={styles.text}>thời khoá biểu</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.item} onPress = {()  => this.props.navigation.navigate('testSchedule')}>
                            <Text style={styles.text}>lịch thi học phần</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.item} onPress = {()  => this.props.navigation.navigate('practise')}>
                            <Text style={styles.text}>tự đánh giá rèn luyện</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.item} onPress = {()  => this.props.navigation.navigate('document')}>
                            <Text style={styles.text}>tài liệu học tập</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.item} onPress = {()  => this.props.navigation.navigate('tuition')}>
                            <Text style={styles.text}>học phí</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.item} onPress = {()  => this.props.navigation.navigate('tuition')}>
                            <Text style={styles.text}>tài liệu học tập</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* </ScrollView>
                </SafeAreaView> */}
            </LinearGradient>


        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#234233',
        justifyContent: "center"
    },
    item: {
        height: 110,
        width: 110,
        backgroundColor: '#fff',
        borderRadius: 15,
        justifyContent: 'center',
        // 
        shadowColor: "#004207",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.53,
        shadowRadius: 13.97,

        elevation: 24,
    },
    list: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignContent: 'space-between',
        flex: 2.5,
        margin: 20,
    },
    card: {
        // backgroundColor: '#458f4d',
        flex: 2,
    },
    boxInfo: {
        backgroundColor: "#fff",
        height: 200,
        width: 300,
        borderRadius: 10,
        alignSelf: 'flex-end',
        justifyContent: 'center'
    },
    info: {
        alignSelf: 'flex-end',
        marginRight: 10,
        // backgroundColor:"#f23132"
    },
    textCard: {
        fontSize: 18,
    },
    text: {
        textAlign: 'center',
        fontSize: 18,
        // textAlign:'center'
    },
    format: {
        flex: 1,
        justifyContent: 'center',
        margin: 20,
        // backgroundColor:'#313423'
    },
    boxImg: {
        position: 'absolute',
        width: 160,
        height: 160,
        zIndex: 10,
        // 
        shadowColor: "#004207",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.53,
        shadowRadius: 13.97,

        elevation: 24,
    },
    img: {
        // height:"100%",
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain',
        borderRadius: 20
    }
})