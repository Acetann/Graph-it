import React, { useState } from 'react';
import { View, Button, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView, TextInput } from 'react-native'


export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [page, setPage] = useState('');

    function navigate(page) {
        setPage(page)
      }

    function checkPassword(str) {
        var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
        return re.test(str);
    }

    function checkEmail(str) {
        var re = /[^@ \t\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
        return re.test(str);
    }

    function checkAndLoginIn() {
        if (!checkPassword(password)) {
            alert('Veuillez entrer un mot de passe correct')
        } else if (!checkEmail(email)) {
            alert('Veuillez entrer une adresse email valide')
        } else {
            if (email === 'contact@entreprise.com' && password === '$Motdepasse2') {
                console.log("Connecté")
            } else {
                alert('Utilisateur introuvable')
            }
        }
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
            

            <TextInput style={styles.inputLog}
                value={email}
                onChangeText={(str) => setEmail(str)}

                placeholder="Votre adresse email"
                autoCompleteType="email"
                keyboardType="email-address"
                type="email"
            />

            <TextInput style={styles.inputLog}
                value={password}
                onChangeText={(str) => setPassword(str)}

                keyboardType="default"
                placeholder="Votre mot de passe"
                autoCompleteType="password"
                secureTextEntry={true}
            />

            <Button
                color="#2CDA6C"
                title="Se connecter"
                disabled={(email === '' || password === '')}
                onPress={checkAndLoginIn}
                
            />
        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingTop:130,
        marginLeft:'auto',
        marginRight:'auto'
    },
  
    inputLog:{
        width:300,
        height:50,
        margin:30,
        borderWidth:1,
        borderColor:'black',
        borderRadius: 20,
        overflow:'hidden',
        textAlign:'center',
    },

    }       
)
