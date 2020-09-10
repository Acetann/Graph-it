import React from 'react';
import { View, StyleSheet, Text, ImageBackground, Button, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';

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
                        <View style={styles.blocA}>
                            <Icon
                                color='green'
                                name='public' />
                            <Text style={styles.TexteA}>Web Design</Text>
                            <Text style={styles.TexteA}>Il a été popularisé dans les années 1960 grâce à la vente de feuille.</Text>
                        </View>
                    </View>



                    <View style={styles.bloc}>
                        <View style={styles.blocB}>
                            <Icon
                                color='green'
                                name='public' />
                            <Text style={styles.TexteB}>Développement Web</Text>
                            <Text style={styles.TexteB}>Il a été popularisé dans les années 1960 grâce à la vente de feuille.</Text>
                        </View>
                    </View>



                    <View style={styles.bloc}>
                        <View style={styles.blocC}>
                            <Icon
                                color='green'
                                name='public' />
                            <Text style={styles.TexteC}>Développement d'appli</Text>
                            <Text style={styles.TexteC}>Il a été popularisé dans les années 1960 grâce à la vente de feuille.</Text>
                        </View>
                    </View>
                </View>


            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    contenant: {
        borderRadius: 50,
        borderWidth: 3,
        borderColor: 'green',
        marginHorizontal: '2%',
    },

    bloc: {
        flex: 1,
        marginBottom: 70,
        flexDirection: 'row',
    },

    blocA: {
        flex: 1,
        marginTop: 10,
        justifyContent: 'center',
        flexDirection: 'column',
    },

    blocB: {
        flex: 1,
        marginTop: 10,
        justifyContent: 'center',
        flexDirection: 'column',
    },

    blocC: {
        flex: 1,
        marginTop: 10,
        justifyContent: 'center',
        flexDirection: 'column',
    },

    contenu: {
        flex: 1,
        marginTop: 20,
    },

    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },

    service: {
        textAlign: 'center',
    },

    texte: {
        width: '100%',
        marginTop: 50,
        alignItems: 'center',
    },

    TexteA: {
        marginTop: 10,
        textAlign: 'center',
    },

    TexteB: {
        marginTop: 10,
        textAlign: 'center',
    },

    TexteC: {
        marginTop: 10,
        textAlign: 'center',
    }
}
)
