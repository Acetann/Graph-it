import {React} from 'react'
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native'


export default function LoadingScreen(){

    return(
        <View style={styles.container}>
            <Text>Graph - IT</Text>
            <ActivityIndicator size="large"></ActivityIndicator>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent : 'center',
        alignItems: 'center',
    },

    mainText:{
        fontSize:500,
        fontWeight:'bold',
    },
})