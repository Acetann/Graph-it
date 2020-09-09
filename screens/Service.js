import React, { useState } from 'react';
import {View, StyleSheet, Text ,Image, ScrollView} from 'react-native';

export default function Service(){

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
                        <Text style={styles.ServiceTitre}> {data[i].NomS}</Text>
                        <Text style={styles.ServiceDescription}> {data[i].DescriptionS}</Text>

                    </View>
                </View>

            )
        }
    }
    else{
        getServices();
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
    card:{
        justifyContent : 'center',
        alignItems: 'center',
        borderRadius: 20,
        minWidth:250,
        minHeight:125,
        maxWidth:500,
        maxHeight:250,
        backgroundColor: 'blue',
        shadowColor: 'grey',
        shadowRadius: 10,
    },
    ServiceTitre:{
        fontWeight:'600',
        fontSize:20,
        color: 'white',
        fontFamily: 'sans-serif',
        alignItems:'center',
    },
    ServiceDescription:{
        fontWeight:'600',
        fontSize:20,
        color: 'white',
        fontFamily: 'sans-serif',
        alignItems:'center',
    },
    }
)