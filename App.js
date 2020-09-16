import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, AppRegistry } from 'react-native';


import MyHeader from './components/Header';



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

        {page === 'Login' && <Login />}

      </View>
      <View style={styles.menu}>

        <Button
          title="Accueil"
          color={page === "Accueil" ? "#1F6639" : '#1F6639'}
          onPress={() => navigate('Accueil')}
        />

        <Button
          title="Blog"
          color={page === "Blog" ? "#1F6639" : '#1F6639'}
          onPress={() => navigate('Blog')}
        />

        <Button
          title="Contact"
          color={page === "Contact" ? "#1F6639" : '#1F6639'}
          onPress={() => navigate('Contact')}
        />

        <Button
          title="Equipe"
          color={page === "Equipe" ? "#1F6639" : '#1F6639'}
          onPress={() => navigate('Equipe')}
        />

        <Button
          title="Realisation"
          color={page === "Realisation" ? "#1F6639" : '#1F6639'}
          onPress={() => navigate('Realisation')}
        />

        <Button
          title="Service"
          color={page === "Service" ? "#1F6639" : '#1F6639'}
          onPress={() => navigate('Service')}
        />

        <Button
          title="Login"
          color={page === "Login" ? "#1F6639" : '#1F6639'}
          onPress={() => navigate('Login')}
        />

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
