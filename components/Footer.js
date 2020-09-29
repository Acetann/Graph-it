import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native'
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


import LoadingScreen from '../screens/loadingScreen';
import Accueil from '../screens/Accueil';
import Blog from '../screens/Blog';
import Contact from '../screens/Contact';
import Equipe from '../screens/Equipe';
import Realisation from '../screens/Realisation';
import Service from '../screens/Service';
import Login from '../screens/Login';

export default function Footer(props) {

    let page = props.page;
    let navigate = props.navigate;

    return (
        <View style={styles.footer}>
            <View style={styles.menu}>

                <Button
                    icon={
                        <Icon
                            name="home"
                            size={50}

                            color="white"
                        />
                    }
                    onPress={() => navigate('Accueil')}
                />

                <Button
                    icon={
                        <Icon
                            name="book"
                            size={50}
                            color="white"
                        />
                    }
                    onPress={() => navigate('Blog')}
                />

                <Button
                    
                    icon={
                        <Icon
                            name="ticket"
                            size={50}
                            color="white"
                        />
                    }
                    color={page === "Contact" ? "#1F6639" : '#1F6639'}
                    onPress={() => navigate('Contact')}
                />

                <Button
                icon={
                    <Icon
                        name="users"
                        size={50}
                        color="white"
                    />
                }
                    
                    color={page === "Equipe" ? "#1F6639" : '#1F6639'}
                    onPress={() => navigate('Equipe')}
                />

                <Button
                icon={
                    <Icon
                        name="tasks"
                        size={50}
                        color="white"
                    />
                }
                   
                    color={page === "Realisation" ? "#1F6639" : '#1F6639'}
                    onPress={() => navigate('Realisation')}
                />

                <Button
                    icon={
                        <Icon
                            name="wrench"
                            size={50}
                            color="white"
                        />
                    }
                    color={page === "Service" ? "#1F6639" : '#1F6639'}
                    onPress={() => navigate('Service')}
                />

                <Button
                icon={
                    <Icon
                        name="sign-in"
                        size={50}
                        color="white"
                    />
                }
                    
                    color={page === "Login" ? "#1F6639" : '#1F6639'}
                    onPress={() => navigate('Login')}
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

                {page === 'Login' && <Login />}


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
        width:'100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor:'white',



    },
})