import React, { useState, useEffect } from 'react';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import {
    StatusBar,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import axios from 'axios';
const GetSingle = (props) => {
    let id = props?.route?.params?.id
    // console.log(id,'id')
    const navigation = () => {
        props.navigation.navigate("PostReply")
    }
    const [post, setpost] = useState([])
    useEffect(() => {

        axios.get(`https://reactnativesignuplogin.herokuapp.com/student/${id}`)
            .then((suc) => {
                console.log(suc.data.OneProduct, 'd')
                setpost(suc?.data.OneProduct)
            })
            .catch((err) => {
                console.log(err, 'e')
            })
    }, [])

    return (
        <>
            <View style={{ height: Dimensions.get('window').height / 2 }}>
                <StatusBar />

                <View style={{ backgroundColor: "white" }}>
                    <View style={{ ...styles.profile_div, height: 500 }}>
                        <FontAwesome name='user-circle-o' size={100} style={styles.icon} color="#F2AA4CFF" />
                        <View style={styles.img_div}>
                            <Text style={styles.postby}>

                                Posted by = {post.yourname}
                            </Text>
                            <Text style={styles.user_name}>

                                I am {post.yourname}
                            </Text>
                            <Text style={styles.user_job}>
                                Required. {post.jobtitle}.
                            </Text>
                            <View style={styles.user_extra}>

                                <Text style={{ color: "white", width: 350, fontSize: 20, textAlign: "center" }}>
                                    <Text style={styles.user_name}>Discription</Text>{'\n'}


                                    {post.discription}
                                </Text>
                            </View>
                            <Text style={styles.price}> I Pay {post.Price} $ For My Wrok</Text>

                        </View>
                    </View>
                </View>

            </View>

            <View style={styles.button}>
                {/* <View>
                    <Text style={styles.btn_text} onPress={navigation}>Send Proposal</Text>
                </View> */}
            </View>
        </>
    );
};
const styles = StyleSheet.create({
    button: {
        backgroundColor: "black",
        marginTop: 40,
        height: 60,
        alignSelf: "center",
        width: 300
    },
    postby: {
        color: "white",
        textAlign: "center",
        fontSize: 20
    },
    btn_text: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 30,
        marginTop: 20,
    },
    profile_div: {
        backgroundColor: "black",
        margin: 10,
        borderRadius: 10,
    },
    img_div: {
        backgroundColor: "black",
        alignSelf: "center",
        marginTop: 30,
    },
    icon: {
        marginTop: 20,
        alignSelf: "center"
    },
    user_name: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: "bold",
        marginTop: 5,
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
    text: {
        color: "#F2AA4CFF",
        fontSize: 22
    },
    text1: {
        color: "white",
        fontSize: 20,
        marginLeft: 15
    },
    price: {
        color: "white",
        fontSize: 20,
        textAlign: "center"
    }
});

export default GetSingle;