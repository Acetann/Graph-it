import React from 'react';
import { Header } from 'react-native-elements';
import { View, TouchableOpacity, Image, StyleSheet, Text } from 'react-native'

export default function MyHeader({ title }) {

    const img = 'http://graph-it.cesi.group/uploads/bg_page2_08c2e9f9a8.png'

    return (
        <View>

            <Header
                backgroundColor={"#19327c"}
                centerComponent={{ text: title, style: { color: '#fff' } }}>

            </Header>

        </View>
    )

}
const styles = StyleSheet.create({


});

