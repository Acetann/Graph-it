import React, { useState } from 'react';
import {View, StyleSheet, Text , TextInput, TouchableOpacity,} from 'react-native';
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
    
    const [errorEmail,setErrorEmail] = useState('none')
    const [errorNumTel,setErrorNumTel] = useState('')
    const [errorNom,setErrorNom]=useState('none')
    const [errorPrenom,setErrorPrenom]=useState('none')
    const [errorMessage,setErrorMessage]=useState('none')
    const [errorEntreprise,setErrorEntreprise]=useState('none')

    const [displayError,setDisplayError] = useState('')

    function CheckSend(){
   
        if(errorEmail != ''){
            if(errorEmail == 'none'){
                setDisplayError('veuillez renseigner une adresse email')
                setErrorEmail('veuillez renseigner une adresse email')
                return;
            }
            else{
                setDisplayError(errorEmail)
                return;
            }
        }else{
            setDisplayError('')
        }

        if(errorNumTel != ''){
                setDisplayError(errorNumTel)
                return;
        }else{
            setDisplayError('')
        }

        if(inp_Nom == ''){
            setDisplayError('Veuillez renseigner votre nom')
            setErrorNom('Veuillez renseigner votre nom')
            return;
        }
        else{
            setDisplayError('')
            setErrorNom('')

        }

        if(inp_Prenom == ''){
            setDisplayError('Veuillez renseigner votre prenom')
            setErrorPrenom('Veuillez renseigner votre prenom')
            return;
        }
        else{
            setDisplayError('')
            setErrorPrenom('')
        }

        if(inp_Entreprise == '' & demandeDevis == true){
            setDisplayError('Vous devez renseigner votre entreprise pour une demande de devis')
            setErrorEntreprise('Vous devez renseigner votre entreprise pour une demande de devis')
            return;
        }
        else{
            setDisplayError('')
            setErrorEntreprise('')
        }

        if(inp_Message == ''){
            setDisplayError('Veuillez renseigner votre message')
            setErrorMessage('Veuillez renseigner votre message')
            return;
        }
        else{
            setDisplayError('')
            setErrorMessage('')
        }

        console.log('tentative envoi')

        fetch("http://graph-it.cesi.group/clients", {
                method: "post",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({
                    NomSociete: inp_Entreprise,
                    NomC:inp_Nom,
                    PrenomC:inp_Prenom,
                    TypeC:inp_TypeProjet,
                    CommentaireC:inp_Message,
                    MailC:inp_Email,
                    NumeroC:inp_NumTel,
                })
            }).then((res) => console.log(res.json()))
        
    }

    function checkEmail(str) {
        setInpEmail(str);
        var regex = /[^@ \t\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
        
        if(str == ''){
            setErrorEmail("Veuillez renseigner une adresse email")
        }
        else{
            if(regex.test(str)){
                setErrorEmail('')
            }
            else{
                setErrorEmail("Veuillez entrer une adresse email valide")
            }
        }
        
    }

    function checkNumTel(str){
        setInpNumTel(str);
        var regex = /^(0|\+33)[1-9]([-. ]?[0-9]{2}){4}$/;


        if(regex.test(str) || str==''){
            setErrorNumTel('')
        }
        else{
            setErrorNumTel("Veuillez entrer un numéro de téléphone valide")
        }
    }

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
                {displayError ?
                <View style={{marginTop:'3%',marginHorizontal:'5%'}}>
                    <Text style={{textAlignVertical:'center',textAlign:"center",height:35,color:'red',borderColor:'red',borderWidth:0.5,borderRadius:15}}>{displayError}</Text>
                </View>
                :
                <View style={{marginTop:'3%',marginHorizontal:'5%'}}>
                    <Text style={{height:25}}></Text>
                </View>
                }
          
            <View style={{marginTop:'3%',marginHorizontal:'5%'}}>
                <Text style={styles.inputName}>Adresse email</Text>
                <TextInput style={{borderBottomColor:errorEmail!='' & errorEmail != 'none' ? 'red' : 'grey',borderBottomWidth:errorEmail!='' & errorEmail!='none' ? 1 : 0.5}}  onChangeText={(text) => checkEmail(text)}/>
            </View>

            <View style={{marginTop:'3%',marginHorizontal:'5%'}}>
                <Text style={styles.inputName}>Numéro de téléphone</Text>
                <TextInput style={{borderBottomColor:errorNumTel!='' & errorNumTel != 'none' ? 'red' : 'grey',borderBottomWidth:errorNumTel!='' & errorNumTel != 'none' ? 1 : 0.5}} onChangeText={(text) => checkNumTel(text)}/>
            </View>

            <View style={{flexDirection:'row',marginTop:'3%',marginHorizontal:'5%'}}>
                <View style={{width:'45%',marginRight:'5%'}}>
                    <Text style={styles.inputName}>Nom</Text>
                    <TextInput style={{borderBottomColor:errorNom!='' & errorNom != 'none' ? 'red' : 'grey',borderBottomWidth:errorNom!='' & errorNom!='none' ? 1 : 0.5}} onChangeText={(text) => setInpNom(text)}/>
                </View>
                
                <View style={{width:'49%' , marginLeft:'1%'}}>
                    <Text style={styles.inputName}>Prénom</Text>
                    <TextInput style={{borderBottomColor:errorPrenom!='' & errorPrenom != 'none' ? 'red' : 'grey',borderBottomWidth:errorPrenom!='' & errorPrenom!='none' ? 1 : 0.5}} onChangeText={(text) => setInpPrenom(text)}/>
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
            {demandeDevis &&
            <View style={{marginTop:'3%',marginHorizontal:'5%'}}>
                <Text style={styles.inputName}>Nom de l'entreprise</Text>
                <TextInput style={{borderBottomColor:errorEntreprise!='' & errorEntreprise != 'none' ? 'red' : 'grey',borderBottomWidth:errorEntreprise!='' & errorEntreprise!='none' ? 1 : 0.5}} onChangeText={(text) => setInpEntreprise(text)}/>
            </View>
            }   
            
            {demandeDevis &&
            <View style={{marginTop:'3%',marginHorizontal:'5%',borderBottomColor:'grey',borderBottomWidth:0.5,borderStyle:'solid'}}>
              <Text style={styles.inputName}>Type de projet</Text>
                
                    {inp_TypeProjet === '' 
                        ?<Picker
                        selectedValue={inp_TypeProjet}
                        style={{ height: 50 ,}}
                        onValueChange={(itemValue, itemIndex) => setInpTypeProjet(itemValue)}>   
                        <Picker.Item label="sélectionnez un type dans la liste..." value='Inconnu' />
                        <Picker.Item label="Création d'un site web" value="SiteWeb" />
                        <Picker.Item label="Création d'une application mobile" value="ApplicationMobile" />
                        <Picker.Item label="Autre" value="Autre" />
                        </Picker>
                    
                        :<Picker
                        selectedValue={inp_TypeProjet}
                        style={{ height: 50 ,}}
                        onValueChange={(itemValue, itemIndex) => setInpTypeProjet(itemValue)}>   
                        <Picker.Item label="Création d'un site web" value="SiteWeb" />
                        <Picker.Item label="Création d'une application mobile" value="ApplicationMobile" />
                        <Picker.Item label="Autre" value="Autre" />
                        </Picker>
                    }

            </View>
            }
            
        
            <View style={{marginTop:'3%',marginHorizontal:'5%'}}>
                <Text style={styles.inputName}>Entrez votre message</Text>
                <TextInput 
                    placeholder="..." 
                    style={{textAlign:'center',alignContent:'flex-start',justifyContent: "flex-start",marginTop:'2%',borderStyle:'solid',borderColor:errorMessage != '' & errorMessage != 'none' ? 'red' : 'grey',borderWidth:errorMessage != '' & errorMessage != 'none' ? 1 : 0.5,borderRadius:10}}
                    multiline={true}
                    numberOfLines={10}
                    onChangeText={(text) => setInpMessage(text)}
                />
            </View>

            <View style={{marginTop:'3%',marginHorizontal:'5%',flexDirection:'row-reverse'}}>
                <TouchableOpacity style={styles.button} >
                    <Text onPress={() => CheckSend() } style={styles.button}>Envoyer</Text>
                </TouchableOpacity>
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
        borderBottomWidth:0.5,
    },
    button:{
        color:'white',
        backgroundColor:'#093460',
        textAlign:'center',
        textAlignVertical:'center',
        width:150,
        height:25,
        borderRadius:15,
        borderColor:'grey',
        borderWidth:0.5,
    },
})