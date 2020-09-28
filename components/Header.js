import React from 'react';
import { createAppContainer, withNavigation } from 'react-navigation';
import { createDrawerNavigator, DrawerNavigatorItems } from 'react-navigation-drawer';
import { SafeAreaView } from 'react-native'
import { Header } from 'react-native-elements';
import { View, TouchableOpacity, Image, StyleSheet, Text } from 'react-native'

import Accueil from '../screens/Accueil';
import Blog from '../screens/Blog';

export default function MyHeader({ title }) {

    const img = 'http://graph-it.cesi.group/uploads/bg_page2_08c2e9f9a8.png'

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
        //forceInset={{ top: 'always', horizontal: 'never' }}
        >
            <DrawerNavigatorItems {...props} />
        </SafeAreaView>
    );

    const AppContainer = createAppContainer(RootStack);

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

