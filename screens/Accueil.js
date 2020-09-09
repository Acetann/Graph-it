import React from 'react';
import { View, StyleSheet, Text, Image, Button } from 'react-native';



export default function Accueil() {
    
    return (
        <View style={styles.container}>
            <View style={styles.logo}>
            <Image
                source={{ uri: 'http://graph-it.cesi.group/uploads/logo_graph_it_a905ce599c.png' }}
                style={{ width: 220, height: 140, marginTop:'2%'}}
            />
            </View>
            
            
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
      },

      logo: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
      }


}
)
