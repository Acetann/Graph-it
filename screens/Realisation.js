import React, { useState, Components } from 'react';
import {View, StyleSheet, Text ,Image, ScrollView, Card, Button, Dimensions, ImageBackground ,Alert, TouchableOpacity, LayoutAnimation} from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";
import SwiperFlatList from 'react-native-swiper-flatlist';


const {height, width} = Dimensions.get('window');

export default function Realisation (){

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

                        <View style={[styles.child, { backgroundColor: '#19327c' }]}>
                            <Text style={styles.realisationTitre}> {data[i].TitreR}</Text>
                            <Image style={styles.reaImage} source={{uri:'http://graph-it.cesi.group'+data[i].ImageR.url}}/>
                            <Text style={styles.text}> {data[i].DescriptionR} </Text>
                        </View>
                </View>

            )
        }
    }
    else{
        getRealisations();
    }

    return (
        <ScrollView>
            <SwiperFlatList style={styles.card}
                index={1}
            >
            {ViewContent}
            </SwiperFlatList>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
        container:{
            flex: 1,
            margin: 20,
            alignContent:'center',
    },
    card:{
        backgroundColor: '#19327c',
        borderRadius: 20,
        shadowColor: 'black',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        margin: 5,
    },
    realisationTitre:{
        fontWeight:'600',
        fontSize:20,
        color: 'white',
        alignItems:'center',
        margin: 10,
    },
    reaImage:{
        margin:5,
        width:150,
        height:100,
        borderRadius:10,
        marginBottom:25,
        justifyContent:'center',
    },
    realisationDesc:{
        fontWeight:'600',
        fontSize:20,
        color: 'white',
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
        borderRadius: 10,
        margin: 5,
        fontSize:20,
        color: '#F7AC07',
    },
    appButtonContainer: {
        minHeight: 25,
        backgroundColor: '#1F6639',
        alignItems:'center',
        justifyContent : 'center',
        borderRadius: 25,
        shadowColor: 'grey',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 20,
        margin: 10,
    },
    appButtonText: {
        maxWidth: '100%',
        fontSize:25,
        color: 'white',
        alignItems:'center',
        textTransform: "uppercase",
    },
    child: {
        height: height * 0.5,
        width,
        justifyContent: 'center'
    },
    text: {
        fontWeight:'600',
        fontSize:20,
        color: 'white',
        alignItems:'center',
        margin: 5,
    },

    }
)