import React, { useState } from 'react';
import {View, StyleSheet, Text ,Image, ScrollView} from 'react-native';


export default function Equipe(){
    
    const [data,setData] = useState(null)

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
            console.log(responseData)
            setData(responseData)
        });
      })
      .catch(function(err) 
      {
        console.log(err)
      })
    } 
    var ViewContent = [];

    if(data != null){
        for(var i = 0; i<data.length;i++){
            console.log(data[i].Photo.url)
            ViewContent.push(
            
            <View style={styles.container}>
                <Image style={styles.equipeImage} source={{uri:'http://graph-it.cesi.group'+data[i].Photo.url}}/>
                <Text style={styles.equipeName}>{data[i].Nom} {data[i].Prenom}</Text>
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