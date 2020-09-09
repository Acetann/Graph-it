import React, { useState } from 'react';
import {View, StyleSheet, Text ,Image, ScrollView, Card, Dimensions, ImageBackground} from 'react-native';

const {height, width} = Dimensions.get('window');

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
                    <View style={styles.card}>
                    <Text style={styles.realisationTitre}> {data[i].TitreR}</Text>
                        <Image style={styles.reaImage} source={{uri:'http://graph-it.cesi.group'+data[i].ImageR.url}}/>
                        <View style={styles.declinaisons}>
                            <Text style={styles.decliButton}> site web </Text>
                            <Text style={styles.decliButton}> IOS </Text>
                            <Text style={styles.decliButton}> Android </Text>
                        </View>
                    <Text style={styles.realisationDesc}> {data[i].DescriptionR}</Text>

                    </View>
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
            margin: 50,
            marginLeft:50,
            marginRight:50,
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
    realisationTitre:{
        fontWeight:'600',
        fontSize:20,
        color: 'white',
        fontFamily: 'sans-serif',
        alignItems:'center',
        margin: 10,
    },
    reaImage:{
        marginTop:5,
        marginBottom:2,
        justifyContent:'center',
        width:100,
        height:100,
        borderRadius:10,
    },
    realisationDesc:{
        fontWeight:'600',
        fontSize:20,
        color: 'white',
        fontFamily: 'sans-serif',
        alignItems:'center',
        margin: 10,
    },
    declinaisons:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
},
    decliButton:{
        justifyContent : 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 20,
        margin: 10,
        color: 'blue',
    }
    }
)