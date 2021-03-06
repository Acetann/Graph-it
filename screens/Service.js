import React, { useState } from 'react';
import {View, StyleSheet, Text ,Image, Button, ScrollView, Card, ImageBackground} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
//import Carousel from './Component/Carousel';



export default function Service (){

    const [data,setData] = useState(null)
    
    function getServices(){
        fetch('http://graph-it.cesi.group/services', {
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
            ViewContent.push(

                <View style={styles.container}>
                    <View style={styles.card}>
                        <Text style={styles.ServiceTitre}> {data[i].Titre}</Text>
                        <Image style={styles.ServImage} source={{uri:'http://graph-it.cesi.group'+data[i].ImageS.url}}/>
                        <Text style={styles.ServiceDescription}> {data[i].Description}</Text>
                    </View>
                </View>

            )
        }
    }
    else{
        getServices();
    }

    return (
        <ScrollView>
            {ViewContent}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
        container:{
            flex: 1,
            justifyContent : 'center',
            alignItems: 'center',
            margin: 50,
            marginLeft:50,
            marginRight:50,
    },
    card:{
        justifyContent : 'center',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: '#19327c',
        shadowColor: 'black',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 20,
    },
    ServiceTitre:{
        fontWeight:'600',
        fontSize:20,
        color: 'white',
        alignItems:'center',
        margin: 10,
    },
    ServImage:{
        marginTop:5,
        marginBottom:2,
        justifyContent:'center',
        width:100,
        height:100,
        borderRadius:10,
    },
    ServiceDescription:{
        fontWeight:'600',
        fontSize:20,
        color: 'white',
        alignItems:'center',
        margin: 10,
    },
    carouselContainer: {
       width: 50,
       height:50,
       marginTop:10
        },
    }
)