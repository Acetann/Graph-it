import React, { useState } from 'react';
import { Switch} from '@material-ui/core';
import {View, StyleSheet, Text ,Image, ScrollView, TextInput,} from 'react-native';


export default function Equipe(){
    const [demandeDevis,setDemandeDevis] = useState(false);
    const [inp_Email,setInpEmail] =useState('')
    const [inp_NumTel,setInpNumTel] =useState('')
    const [inp_Nom,setInpNom] =useState('')
    const [inp_Prenom,setInpPrenom] =useState('')
    const [inp_Entreprise,setInpEntreprise] =useState('')
    const [inp_TypeProjet,setInpTypeProjet] =useState('')
    const [inp_Message,setInpMessage] =useState('')

    function DevisSwitch(){
        if(demandeDevis === false){
            setDemandeDevis(true)
        }
        else{
            setDemandeDevis(false)
        }
    }

    return (
        <View>
            <View style={{marginTop:'3%',marginHorizontal:'5%'}}>
                <Text style={styles.inputName}>Adresse email</Text>
                <TextInput style={styles.input}/>
            </View>

            <View style={{marginTop:'3%',marginHorizontal:'5%'}}>
                <Text style={styles.inputName}>Numéro de téléphone</Text>
                <TextInput style={styles.input}/>
            </View>

            <View style={{flexDirection:'row',marginTop:'3%',marginHorizontal:'5%'}}>
                <View style={{width:'45%',marginRight:'5%'}}>
                    <Text style={styles.inputName}>Nom</Text>
                    <TextInput style={styles.input}/>
                </View>
                
                <View style={{width:'49%' , marginLeft:'1%'}}>
                    <Text style={styles.inputName}>Prénom</Text>
                    <TextInput style={styles.input}/>
                </View>
            </View>

            <View style={{flexDirection:'row',marginTop:'5%',marginHorizontal:'5%',alignItems:'center'}}>
                <Text style={styles.inputName}>S'agît-il d'une demande de devis ?</Text>
                
            </View>

            
        </View>
    )
}



const styles = StyleSheet.create({

    inputName:{
        color:'grey'
    },

    input:{
        borderBottomColor:'grey',
        borderBottomWidth:0.5,

    },
})