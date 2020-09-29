import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


import LoadingScreen from '../screens/loadingScreen';
import Accueil from '../screens/Accueil';
import Blog from '../screens/Blog';
import Contact from '../screens/Contact';
import Equipe from '../screens/Equipe';
import Realisation from '../screens/Realisation';
import Service from '../screens/Service';


export default function MyFooter(props) {

    let page = props.page;
    let navigate = props.navigate;
    const img = 'red'

    return (
        <View style={styles.footer}>
            <View style={styles.menu}>
                
                    <Button
                    
                        icon={
                            <Icon
                                name="home"
                                size={40}
                                
                                color="white"
                            />
                        }
                        buttonStyle={{backgroundColor: '#2CDA6C'}}
                        onPress={() => navigate('Accueil')}
                    />

                    <Button
                        icon={
                            <Icon
                                name="book"
                                size={40}
                                color="white"
                            />
                        }
                        buttonStyle={{backgroundColor: '#2CDA6C'}}
                        onPress={() => navigate('Blog')}
                    />

                    <Button

                        icon={
                            <Icon
                                name="ticket"
                                size={40}
                                color="white"
                            />
                        }
                        buttonStyle={{backgroundColor: '#2CDA6C'}}
                        onPress={() => navigate('Contact')}
                    />

                    <Button
                        icon={
                            <Icon
                                name="users"
                                size={40}
                                color="white"
                            />
                        }

                        buttonStyle={{backgroundColor: '#2CDA6C'}}
                        onPress={() => navigate('Equipe')}
                    />

                    <Button
                        icon={
                            <Icon
                                name="tasks"
                                size={40}
                                color="white"
                            />
                        }

                        buttonStyle={{backgroundColor: '#2CDA6C'}}
                        onPress={() => navigate('Realisation')}
                    />

                    <Button
                        icon={
                            <Icon
                                name="wrench"
                                size={40}
                                color="white"
                                
                            />
                        }
                        buttonStyle={{backgroundColor: '#2CDA6C'}}
                        onPress={() => navigate('Service')}
                    />

                
            </View>

            <View style={{ flex: 1 }}>

                {page === 'Accueil' &&
                    <Accueil navigate={navigate} />}

                {page === 'Blog' && <Blog />}

                {page === 'Contact' && <Contact />}

                {page === 'Equipe' && <Equipe />}

                {page === 'Realisation' && <Realisation />}

                {page === 'Service' && <Service />}

                {page === 'LoadingScreen' && <LoadingScreen />}




            </View>
        </View>
    )

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    menu: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor:'#2CDA6C',



    },
})