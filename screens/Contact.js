import React, { useState } from 'react';
import {View, StyleSheet, Text , TextInput,} from 'react-native';
import { Switch , Picker } from 'native-base';


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
        <View style={styles.container}>
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
            <View style={{alignItems:'center',marginTop:'5%'}}>
                <Text style={styles.inputName}> S'agit-il d'une demande de devis ?</Text>
                <View style={{flexDirection:'row',marginTop:'1%',marginHorizontal:'5%',alignItems:'center'}}>
                    <Text style={styles.inputName}> Non</Text>
                    <Switch value={demandeDevis} onValueChange={() => DevisSwitch()}/>
                    <Text style={styles.inputName}> Oui</Text>
                </View>
            </View>

            <View style={{marginTop:'3%',marginHorizontal:'5%'}}>
                <Text style={styles.inputName}>Nom de l'entreprise</Text>
                <TextInput style={styles.input}/>
            </View>

            <View style={{marginTop:'3%',marginHorizontal:'5%',borderBottomColor:'grey',borderBottomWidth:0.5,borderStyle:'solid'}}>
              <Text style={styles.inputName}>Type de projet</Text>
                <Picker
                    selectedValue={inp_TypeProjet}
                    style={{ height: 50 ,}}
                    onValueChange={(itemValue, itemIndex) => setInpTypeProjet(itemValue)}>

                    <Picker.Item label="Création d'un site web" value="SiteWeb" />
                    <Picker.Item label="Création d'une application mobile" value="ApplicationMobile" />
                    <Picker.Item label="Autre" value="Autre" />

                </Picker>
            </View>

            <View style={{marginTop:'3%',marginHorizontal:'5%'}}>
                <Text style={styles.inputName}>Entrez votre message</Text>
                <TextInput 
                    placeholder="..." 
                    style={{textAlign:'center',alignContent:'flex-start',justifyContent: "flex-start",marginTop:'2%',borderStyle:'solid',borderColor:'grey',borderWidth:0.5,borderRadius:10}}
                    multiline={true}
                    numberOfLines={10}
                />
            </View>

            
        </View>
    )
}



const styles = StyleSheet.create({
    container:{
        paddingTop:5
    },
    inputName:{
        color:'grey'
    },

    input:{
        borderBottomColor:'grey',
        borderBottomWidth:0.5,

    },
})