import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { Header } from 'react-native-elements';

export default function MyHeader({ title }) {

    const img = 'https://github.com/Noe-Louvell/graph-it_front/blob/master/src/assets/img/bg-page2.png'
    return (
        <Header
            ImageBackground={{ uri: img}}
            centerComponent={{ text: title, style: { color: '#fff' } }}
            rightComponent={{ icon: 'account-circle', color: '#fff' }}
        />
    )
}

const styles = StyleSheet.create({



    headerText: {
        textAlign: 'center',
        fontWeight: 'bold'
    },
})