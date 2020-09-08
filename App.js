import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';


import MyHeader from './components/Header';

import LoadingScreen from './screens/loadingScreen';
import Accueil from './screens/Accueil';
import Blog from './screens/Blog';
import Contact from './screens/Contact';
import Equipe from './screens/Equipe';
import Realisation from './screens/Realisation';
import Service from './screens/Service';



export default function App() {

  const [page, setPage] = useState('Accueil');

  function navigate(page) {
    setPage(page)
  }

  return (

    <SafeAreaView style={styles.container}>

      <MyHeader title={page} />

      <View style={styles.menu}>

        <Button
          title="Accueil"
          color={page === "Accueil" ? "black" : ''}
          onPress={() => navigate('Accueil')}
        />

        <Button
          title="Blog"
          color={page === "Blog" ? "black" : ''}
          onPress={() => navigate('Blog')}
        />

        <Button
          title="Contact"
          color={page === "Contact" ? "black" : ''}
          onPress={() => navigate('Contact')}
        />

        <Button
          title="Equipe"
          color={page === "Equipe" ? "black" : ''}
          onPress={() => navigate('Equipe')}
        />

        <Button
          title="Realisation"
          color={page === "Realisation" ? "black" : ''}
          onPress={() => navigate('Realisation')}
        />

        <Button
          title="Service"
          color={page === "Service" ? "black" : ''}
          onPress={() => navigate('Service')}
        />

      </View>

      {page === 'Accueil' &&
        <Accueil navigate={navigate} />}

      {page === 'Blog' && <Blog />}

      {page === 'Contact' && <Contact />}

      {page === 'Equipe' && <Equipe />}

      {page === 'Realisation' && <Realisation />}

      {page === 'Service' && <Service />}

      {page === 'LoadingScreen' && <LoadingScreen />}

    </SafeAreaView>

  );
}

const styles = StyleSheet.create({

  menu: {

    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
