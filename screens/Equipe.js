import React, { useState } from 'react';
import {View, StyleSheet, Text ,Image, ScrollView, TouchableOpacity} from 'react-native';


export default function Equipe(){
    
    const [data,setData] = useState(null)
    const [dispCard,setDispCard] = useState(false)
    const [idCard,setIdCard] = useState('')
    const [compOrReal,setCompOrReal]=useState('comp')


    function getEquipes(){
        fetch('http://graph-it.cesi.group/equipes', {
        method: 'GET',
        dataType: 'json',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
      .then((response) => 
      {
        response.json()
        .then((responseData) => 
        { 
            //console.log(responseData)
            setData(responseData)
        });
      })
      .catch(function(err) 
      {
        //console.log(err)
      })
    } 

    function toggleDispCard(parameter){
        if(dispCard == false || idCard != parameter){
            setDispCard(true)
            setIdCard(parameter)
        }
        else{
            setDispCard(false)
            setIdCard('')
        }
    }

    function switchCompOrReal(){
        if(compOrReal =='comp'){
            setCompOrReal('real')
        }
        else{
            setCompOrReal('comp')
        }
    }

    var ViewContent = [];

    if(data != null){
        
        for(var i = 0; i<data.length;i++){
            var ViewContent2 = [];
            var ViewContent3 = [];
            const parameter = data[i].id

            if(data[i].competences.length == 0){
                console.log('dans la boucle')
                ViewContent2.push(
                    <Text>
                        Aucunes compétences enregistrées
                    </Text>
                )
            }
            for(var j=0 ; j<data[i].competences.length;j++){
                ViewContent2.push(
                    <Text>
                        {data[i].competences[j].Nom}
                    </Text> 
                )   
            }

            if(data[i].realisations.length == 0){
                ViewContent3.push(
                    <Text>
                        Aucunes réalisations enregistrées
                    </Text>
                )
            }
            for(var j=0 ; j<data[i].realisations.length;j++){
                ViewContent3.push(
                    <Text>
                        {data[i].realisations[j].TitreR}
                    </Text>
                )
            }

            ViewContent.push(
            
            <View style={styles.container}>
                <TouchableOpacity  onPress={() => toggleDispCard(parameter)}>
                    <Image  style={styles.equipeImage} source={{uri:'http://graph-it.cesi.group'+data[i].Photo.url}}/>
                    <Text style={styles.equipeName}>{data[i].Nom} {data[i].Prenom}</Text>
                    {dispCard ==  true & idCard == data[i].id ?
                        <View style={styles.card}>
                                {compOrReal == 'comp' 
                                ?
                                <View style={styles.headerCard}>
                                    <Text onPress={() => switchCompOrReal()} style={styles.buttonActif}>
                                    Compétences
                                    </Text>
                                    <Text onPress={() => switchCompOrReal()} style={styles.button}>
                                    Réalisations
                                    </Text>
                                </View>  
                                :
                                <View style={styles.headerCard}>
                                    <Text onPress={() => switchCompOrReal()} style={styles.button}>
                                    Compétences
                                    </Text>
                                    <Text onPress={() => switchCompOrReal()} style={styles.buttonActif}>
                                    Réalisations
                                    </Text>
                                </View>
                                }
                            
                            {compOrReal == 'comp' ? ViewContent2 : ViewContent3}
                            
                        </View>
                        : 
                        <View>

                        </View>
                    }
                </TouchableOpacity>
            </View>
        
            )
        }
    }
    else{
        getEquipes();
    }

    return (
        <ScrollView>
               {ViewContent}
        </ScrollView>
    )
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        justifyContent : 'space-around',
        alignItems: 'center',
        marginTop:'5%',
        marginBottom:'2%'
    },
    headerCard:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    button:{
        color:'white',
        backgroundColor:'#0b6e0b',
        textAlign:'center',
        textAlignVertical:'center',
        width:125,
        height:25,

        borderColor:'grey',
        borderWidth:0.5,
    },

    buttonActif:{
        color:'white',
        backgroundColor:'#2fd42f',
        textAlign:'center',
        textAlignVertical:'center',
        width:125,
        height:25,
        borderColor:'grey',
        borderWidth:0.5,
    },

    card:{
        justifyContent:'center',
        alignItems:'center',
        width:250,
        borderWidth:0.5,
        borderColor:'grey',
        borderRadius:15,
    },

    equipeImage:{
        marginTop:5,
        marginBottom:2,
        justifyContent:'center',
        width:150,
        height:150,
        borderRadius:100,
    }, 

    equipeName:{
        fontWeight:'600',
        fontSize:20,
        fontFamily: 'sans-serif',
        alignItems:'center',
    }
})