import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator, DrawerNavigatorItems } from 'react-navigation-drawer';
import { SafeAreaView } from 'react-native'
import { Header } from 'react-native-elements';
import { View, TouchableOpacity, Image, StyleSheet, Text } from 'react-native'

import Accueil from '../screens/Accueil';
import Blog from '../screens/Blog';

export default function MyHeader({ props }) {

    const RootStack = createDrawerNavigator(
        {
            'Accueil': { screen: Accueil },
            'Blog': { screen: Blog },

        },
        {
            contentComponent: props => < CustomDrawerComponent {...props} />
        })


    const CustomDrawerComponent = (props) => (
        <SafeAreaView
         forceInset={{ top: 'always', horizontal: 'never' }}
        >
            <DrawerNavigatorItems {...props} />
        </SafeAreaView>
    );

    const AppContainer = createAppContainer(RootStack);

    return (<View>
        <AppContainer />
        <Header containerStyle={{ backgroundColor: 'white', }}>

            <TouchableOpacity onPress={() => this.props.navigation.openDrawer()} >

                <Image source={require('../assets/splash.png')} style={{ width: 50, height: 50, tintColor: '#1F73BD' }} />
                
            </TouchableOpacity>

        </Header>
    </View>)

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
        justifyContent: 'space-around',


    },


});

