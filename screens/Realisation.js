import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import PageTitle from '../components/PageTitle'

export default function Realisation(){

        
    return (
        <View>
            <Text>Nos réalisations</Text>
        </View>
    )
}

const styles = StyleSheet.create({
        container:{
            flex: 1,
            justifyContent : 'center',
            alignItems: 'center',
    },
    }
)