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
          color={page === "Accueil" ? "green" : ''}
          onPress={() => navigate('Accueil')}
        />

        <Button
          title="Blog"
          color={page === "Blog" ? "green" : ''}
          onPress={() => navigate('Blog')}
        />

        <Button
          title="Contact"
          color={page === "Contact" ? "green" : ''}
          onPress={() => navigate('Contact')}
        />

        <Button
          title="Equipe"
          color={page === "Equipe" ? "green" : ''}
          onPress={() => navigate('Equipe')}
        />

        <Button
          title="Realisation"
          color={page === "Realisation" ? "green" : ''}
          onPress={() => navigate('Realisation')}
        />

        <Button
          title="Service"
          color={page === "Service" ? "green" : ''}
          onPress={() => navigate('Service')}
        />

        <Button
          title="Login"
          color={page === "Login" ? "green" : ''}
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
