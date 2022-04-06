import React, { useEffect } from "react";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    View,
    Button,
    TouchableOpacity,
    Image,
    ActivityIndicator,
    ImageBackground
} from 'react-native';
import google from "../images/gogle.png"

import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from '@react-native-google-signin/google-signin';


const Google = () => {


    useEffect(() => {
        GoogleSignin.configure({
            scopes: ['https://www.googleapis.com/auth/drive.readonly'], // [Android] what API you want to access on behalf of the user, default is email and profile
            webClientId: '197995320864-ahh6kn6jbcb01ojb5b7pn64ivqo1vhkf.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
            offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
            forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.

        })
    }, []);



    let signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            console.log(" user data ==>")
            console.log(userInfo)
        } catch (error) {
            console.log(error)
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            } else if (error.code === statusCodes.IN_PROGRESS) {
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            } 
        }
    };
    return (
        <>
            <TouchableOpacity>
                <Text onPress={signIn} style={styles.google}>
                    Countinue With <Image style={styles.img} source={google}></Image>
                </Text>
            </TouchableOpacity>
        </>
    )
}
export default Google;
const styles = StyleSheet.create({
    google: {
        marginLeft: 10,
        height: 80,
        width: 370,
        marginTop: -90,
        borderWidth: 2,
        borderColor: "white",
        padding: 10,
        borderRadius: 9,
        color: "white",
        fontSize: 33,
        textAlign: "center",
        backgroundColor: "black",
        marginBottom: 120
    },
    img: {
        height: 40,
        width: 40,
        marginLeft: 100
    }
});