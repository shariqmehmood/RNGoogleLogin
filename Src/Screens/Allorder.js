import React, { useState, useEffect } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';
import axios from 'axios';
import user_icon from "../images/usericon.jpg"
import Search from "../Screens/Search"

export default function AllOrder({ navigation }) {
    const [data, setdata] = useState([])


    useEffect(() => {
     
        axios.get("https://reactnativesignuplogin.herokuapp.com/student")
            .then((s) => {
                console.log(s?.data, 'sdata')
                setdata(s?.data)
            }
            )
            .catch((e) => console.log(e, 'e'))
    }, [])


    return (
        <ScrollView>
            <View>

                <View style={{ backgroundColor: "white" }}>
                    <View>
                        <Text style={styles.heading}>
                            ALL Jobs
                        </Text>
                        <Search />
                    </View>

                    <View >
                        {
                            data?.map((data, index) => {

                                return (

                                    <View style={styles.jobdiv} key={index}>
                                        <View>
                                            <Text style={styles.jobtext}>
                                                Mr : {data.yourname}
                                            </Text>
                                            <Text style={styles.job}>
                                                Required: {data.jobtitle}
                                            </Text>
                                        </View>
                                        <View style={{ width: 100 }}>
                                            <Image source={user_icon} style={styles.img} />
                                        </View>
                                        <Text style={styles.btn} onPress={() => { navigation.navigate('Post', { id: data._id }) }}>
                                            Open
                                        </Text>
                                        <Text style={styles.price}>
                                            {data.Price}$
                                        </Text>
                                    </View>
                                )
                            })
                        }
                    </View>
                </View>

            </View>
        </ScrollView>
    )
};
const styles = StyleSheet.create({
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
    user_name: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: "bold",
        marginTop: 5,
        color: "#F2AA4CFF"

    },
    job: {
        color: "white",
        fontSize: 21,
        marginTop: 10,
        marginLeft: 70
    },
    img: {
        height: 50,
        width: 50,
        borderRadius: 100,
        display: "flex",
        marginTop: -55,
        marginLeft: 10
    },
    btn: {
        color: "black",
        fontSize: 21,
        marginLeft: 300,
        textAlign: "center",
        borderRadius: 3,
        marginTop: -60,
        width: 60,
        backgroundColor: "white"
    },
    price: {
        color: "white",
        fontSize: 21,
        marginLeft: 300,
        textAlign: "center",
        borderRadius: 3,
        marginTop: 10,
        width: 60,
    },
    heading: {
        fontSize: 35,
        fontWeight: "bold",
        marginTop: 5,
        marginLeft: 20,
        color: "black"

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
        height: 90
    },
    jobtext: {
        color: "white",
        marginLeft: 70,
        fontSize: 20,
        marginTop: 10
    }

});