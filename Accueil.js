import React from 'react';
import { View, StyleSheet, Text, ImageBackground, ScrollView } from 'react-native';


import Blog from './Blog';
import Service from './Service';
import Equipe from './Equipe';

export default function Accueil() {

    const image = { uri: 'https://raw.githubusercontent.com/Noe-Louvell/graph-it_front/master/src/assets/img/bg-page2.png?token=AN7XEMQFMBPRHMHZEH2LWG27LHKUS' }

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.texte}>
                    <Text >Graph-It</Text>
                    <Text>Agence de Développement web et Mobile</Text>
                    <Text>-------------------------------</Text>

                
            </View>

            <View style={styles.contenant}>
                <View style={styles.bloc}>

                    <Service />

                </View>
            </View>

            <View>

                <Equipe />

            </View>

            </View>

        </ScrollView >
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    bloc: {
        flex: 1,
        marginBottom: 10,
        flexDirection: 'row',
    },

    texte: {
        width: '100%',
        marginTop: 50,
        alignItems: 'center',
    },


}
)