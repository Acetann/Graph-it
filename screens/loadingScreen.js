import React from 'react'
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native'


export default function LoadingScreen(){

    return(
        <View style={styles.container}>
            <Text style={styles.mainText}>Graph - IT</Text>
            <ActivityIndicator size="large"></ActivityIndicator>
            <Text style={styles.smallText}>chargement ... Veuillez patienter</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent : 'center',
        alignItems: 'center'
    },

    mainText:{
        fontSize:25,
        marginBottom:'10%',
    },

    smallText:{
        color:'grey',
        fontStyle:'italic',
        textDecorationLine:'underline',
        textDecorationColor:'grey',
        marginTop:'10%',

    },
})