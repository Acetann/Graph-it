import React from 'react';
import { View, StyleSheet, Text, Image, } from 'react-native';

export default function Accueil() {

    
    return (
        <View style={styles.container}>
            <View style={styles.logo}>
            <Image
                source={{ uri: 'https://media.discordapp.net/attachments/752439026950340689/752545411041853570/Fichier_60.75x.png' }}
                style={{ width: 200, height: 140,}}
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
