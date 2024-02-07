import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Svg, { Path } from 'react-native-svg'

export default function LandingPage({navigation}) {
    function registration(){
        navigation.navigate('SuccessMessage')
    }
    function signIn(){
        navigation.navigate('SuccessMessage')
    }
    return (
        <View style={styles.container}>
            <Image source={require('../assets/emc2.png')} style={styles.image} />
            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <Path fill="#2419A0" fill-opacity="1" d="M0,32L14.1,69.3C28.2,107,56,181,85,213.3C112.9,245,141,235,169,197.3C197.6,160,226,96,254,80C282.4,64,311,96,339,106.7C367.1,117,395,107,424,106.7C451.8,107,480,117,508,154.7C536.5,192,565,256,593,266.7C621.2,277,649,235,678,224C705.9,213,734,235,762,208C790.6,181,819,107,847,69.3C875.3,32,904,32,932,74.7C960,117,988,203,1016,245.3C1044.7,288,1073,288,1101,240C1129.4,192,1158,96,1186,74.7C1214.1,53,1242,107,1271,117.3C1298.8,128,1327,96,1355,106.7C1383.5,117,1412,171,1426,197.3L1440,224L1440,0L1425.9,0C1411.8,0,1384,0,1355,0C1327.1,0,1299,0,1271,0C1242.4,0,1214,0,1186,0C1157.6,0,1129,0,1101,0C1072.9,0,1045,0,1016,0C988.2,0,960,0,932,0C903.5,0,875,0,847,0C818.8,0,791,0,762,0C734.1,0,706,0,678,0C649.4,0,621,0,593,0C564.7,0,536,0,508,0C480,0,452,0,424,0C395.3,0,367,0,339,0C310.6,0,282,0,254,0C225.9,0,198,0,169,0C141.2,0,113,0,85,0C56.5,0,28,0,14,0L0,0Z">
                </Path>
            </Svg>
            <View style={styles.ph_wrapper}>
                <View style={styles.ph_lr_wrapper}>
                    <Text style={styles.ph}>Physics Learning</Text>
                </View>
                <View>
                    <Text style={styles.lrn}>Learn like never before.</Text>
                </View>

            </View>
            <View style={styles.wrapper}>
                <View>
                    <TouchableOpacity onPress={registration} style={styles.registerButton}>
                        <Text style={styles.registerText}>
                            Register

                        </Text>
                        <Image source={require('../assets/s-in-a2.png')} style={styles.rightArrow}></Image>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={signIn} style={styles.signInButton}>
                        <Text style={styles.signInText}>
                            Sign In

                        </Text>
                        <Image source={require('../assets/s-in-a1.png')} style={styles.rightArrow}></Image>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2419A0',
        width: '100%',
        height: '27%',
    }, image: {
        marginTop: 33,
        marginLeft: 90
    }, registerButton: {

        backgroundColor: '#2419A0',
        width: 138,
        height: 50,
        borderWidth: 2,
        borderColor: '#2419A0',
        borderStyle: 'solid',
        borderRadius: 30,
        display: 'flex',
        gap: 10,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center'
    }, registerText: {
        color: 'white',
    }, rightArrow: {

        width: 15,
        height: 15
    }, signInButton: {
        width: 138,
        height: 50,
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: '#2419A0',
        borderStyle: 'solid',
        borderRadius: 30,
        display: 'flex',
        gap: 17,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center'
    }, signInText: {
        color: '#2419A0'
    },
    wrapper: {
        marginTop: 50,
        height: "auto",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 30
    },
    ph: {
        fontSize: 45,
        color: '#2419A0',
        textAlign: "center",
        fontWeight: 'bold'
    }
    ,
    lrn: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    ph_wrapper: {
        height: "auto",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 20,
    }
    ,
    ph_lr_wrapper: {
        position: "relative",
        width: "70%",
    }
})