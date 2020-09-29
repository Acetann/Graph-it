import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';


import MyHeader from './components/Header';
import MyFooter from './components/Footer'



import LoadingScreen from './screens/loadingScreen';
import Accueil from './screens/Accueil';
import Blog from './screens/Blog';
import Contact from './screens/Contact';
import Equipe from './screens/Equipe';
import Realisation from './screens/Realisation';
import Service from './screens/Service';
import Login from './screens/Login';

export default function App() {

  const [page, setPage] = useState('Accueil');

  function navigate(page) {
    setPage(page)
  }

  return (

    <SafeAreaView style={styles.container}>

      <MyHeader title={page} />
      

      <View style={{ flex: 1 }}>

        {page === 'Accueil' &&
          <Accueil navigate={navigate} />}

        {page === 'Blog' && <Blog />}

        {page === 'Contact' && <Contact />}

        {page === 'Equipe' && <Equipe />}

        {page === 'Realisation' && <Realisation />}

        {page === 'Service' && <Service />}

        {page === 'LoadingScreen' && <LoadingScreen />}

       

        <MyFooter navigate={navigate} />
      </View>


    </SafeAreaView>


  );
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
