import React from 'react';
import { Header } from 'react-native-elements';
import { View, StyleSheet } from 'react-native'

export default function MyHeader({ title }) {

    return (
        <View>

            <Header 
                backgroundColor={"#1F6639"}
                centerComponent={{ text: title, style: { color: '#fff' } }}>

            </Header>

        </View>
        )

}
const styles = StyleSheet.create({

    
});

