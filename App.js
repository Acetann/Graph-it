import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import MyHeader from './components/Header';

import LoadingScreen from './screens/loadingScreen';
import Accueil from './screens/Accueil';
import Blog from './screens/Blog';


export default function App() {

  const [page, setPage] = useState('Accueil');

  function navigate(page){
    setPage(page)
  }

  return (

    <SafeAreaView style={styles.container}>
      
      <MyHeader title={page}/>

      { page === 'Accueil' && 
      <Accueil navigate={navigate}/> }
    
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
