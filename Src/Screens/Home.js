import React, { useState, useEffect } from 'react';
import {
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Dimensions,
} from 'react-native';
import user_img from "../images/user.jpg";
import Ionicons from "react-native-vector-icons/SimpleLineIcons"
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = ({ navigation }) => {
    const [Email, setemail] = useState("")
    const [name, setname] = useState("")
 async function logout ( ) {
    await AsyncStorage.removeItem("userEmail");
    await AsyncStorage.removeItem("userName");
    navigation.navigate("Signup")
    }
    useEffect(() => {
        (async () =>
            await AsyncStorage.getItem('userEmail')
                .then((email) => {
                    console.log(email)
                    setemail(email)
                })
                .catch((e) => {
                    console.log(e, "eerer")
                }))()
    }, [])
    useEffect(() => {
        (async () =>
            await AsyncStorage.getItem('userName')
                .then((name) => {
                    console.log(name)
                    setname(name)
                })
                .catch((e) => {
                    console.log(e, "eerer")
                }))()
    }, [])
    return (
        <View style={{ height: Dimensions.get('window').height / 2 }}>
            <StatusBar />
            <View style={{ backgroundColor: "white" }}>
                <View style={{ ...styles.profile_div, height: Dimensions.get('window').height / 2 }}>
                    <View>
                        <Ionicons name="logout" onPress={logout } color={"white"} size={30} style={styles.icon} />
                    </View>
                    <View style={styles.img_div}>
                        <Image source={user_img} style={styles.userImg} alt="img" />
                        <Text style={styles.user_name}>
                            {Email}
                        </Text>
                        <Text style={styles.user_job}>
                            {name}
                        </Text>
                        {/* <View style={styles.user_extra}>
                            <TouchableOpacity>
                                <Text style={styles.text}>All Jobs</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.textcenter} >My Posts</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.text}>My Profile</Text>
                            </TouchableOpacity>
                        </View> */}
                    </View>
                </View>
                {/* <View style={{ backgroundColor: "white" }}>
                    <View>
                        <Text style={styles.heading}>
                            Jobs
                        </Text>
                    </View>
                    <View style={{ height: Dimensions.get('window').height / 2 }}>
                        <ScrollView>
                            <View style={styles.jobdiv} >
                                <View>
                                    <Text style={styles.jobtext}>
                                        Pakistan Income Text
                                    </Text>
                                    <Text style={{ color: "#F2AA4CFF", fontSize: 20, marginLeft: 90 }}>
                                        Sepoy required !
                                    </Text>
                                    <Text style={{ color: "#F2AA4CFF", fontSize: 20, marginLeft: 320, marginTop: -40 }}>40$</Text>
                                </View>
                                <View style={styles.img}>
                                    <Image source={user_icon} style={{ height: 40, width: 40, borderRadius: 100, display: "flex", marginTop: -35, marginLeft: 20 }}></Image>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </View> */}
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    profile_div: {
        backgroundColor: "black",
        margin: 10,
        borderRadius: 10,
    },
    img: {
        width: 80,
    },
    img_div: {
        backgroundColor: "black",
        alignSelf: "center",
        marginTop: 30,
    },
    userImg: {
        height: 150,
        width: 150,
        borderRadius: 100,
        alignContent: "center",
        alignItems: "center",
        alignSelf: "center"
    },
    user_name: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: "bold",
        marginTop: 5,
        color: "#F2AA4CFF"
    },
    heading: {
        fontSize: 35,
        fontWeight: "bold",
        marginTop: 5,
        marginLeft: 20,
        color: "#F2AA4CFF"
    },
    user_job: {
        color: "white",
        textAlign: 'center',
        fontSize: 20,
        marginTop: 5,
    },
    user_extra: {
        color: "white",
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 20,
        marginBottom: 20,
        width: 360
    },
    icon: {
        marginTop: 20,
        marginLeft: 310
    },
    text: {
        color: "white",
        fontSize: 18
    },
    textcenter: {
        color: "white",
        fontSize: 18,
        borderWidth: 2,
        borderColor: "#E6DBC7",
        borderTopColor: "black",
        borderBottomColor: "black",
        paddingLeft: 50,
        paddingRight: 50,
    },
    jobdiv: {
        backgroundColor: "black",
        margin: 10,
        borderRadius: 20,
        height: 70
    },
    jobtext: {
        color: "white",
        marginLeft: 90,
        fontSize: 20,
        marginTop: 10
    },
    img: {

    }
});

export default Home;