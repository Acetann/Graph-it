import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import { Header } from 'react-native-elements';

export default function MyHeader({ title }) {

    const img = 'http://graph-it.cesi.group/uploads/bg_page2_08c2e9f9a8.png'
    return (
        <Header
            backgroundImage={{ uri: img }}
            backgroundImageStyle={styles.headerImg}
            backgroundColor={"transparent"}
            centerComponent={{ text: title, style: { color: '#fff' } }}
            rightComponent={{ ImageBackground: 'https://raw.githubusercontent.com/Noe-Louvell/graph-it_front/master/src/assets/img/logo_1.png?token=AN7XEMT5ELUWHUCKAUXSKI27LHK7A', width:'100%', height:20, color: '#fff' }}
        />
    )
    
}

const styles = StyleSheet.create({

    headerImg: {
        flex: 1,
        resizeMode: "cover"
    },

    headerText: {
        textAlign: 'center',
        fontWeight: 'bold'
    },
})