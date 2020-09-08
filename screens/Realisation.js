import React, { useState } from 'react';
import {View, StyleSheet, Text ,Image, ScrollView} from 'react-native';


export default function Realisation(){

    const [data,setData] = useState(null)

    function getRealisations(){
        fetch('http://graph-it.cesi.group/realisations', {
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
                    <Text style={styles.realisationTitre}> {data[i].TitreR}</Text>
                </View>

            )
        }
    }
    else{
        getRealisations();
    }

    return (
        <View>

            <ScrollView>
                {ViewContent}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
        container:{
            flex: 1,
            justifyContent : 'center',
            alignItems: 'center',
    },

    realisationImage:{
        marginTop:5,
        marginBottom:2,
        justifyContent:'center',
        width:150,
        height:150,
        borderRadius:100,
    },

    realisationTitre:{
        fontWeight:'600',
        fontSize:20,
        fontFamily: 'sans-serif',
        alignItems:'center',
    }
    }
)