import React, { useState, Components } from 'react';
import {View, StyleSheet, Text ,Image, ScrollView, Card, Button, Dimensions, ImageBackground ,Alert, TouchableOpacity, LayoutAnimation} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Icon from "react-native-vector-icons/MaterialIcons";

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
                        <View style={styles.declinaisons}>
                            <Text style={styles.decliButton}> {data[i].TypeR} </Text>
                        </View>
                        <Text style={styles.realisationDesc}> {data[i].SubtitleR}</Text>
                        <Image style={styles.reaImage} source={{uri:'http://graph-it.cesi.group'+data[i].ImageR.url}}/>
                        <TouchableOpacity style={styles.row} onPress={()=>this.toggleExpand()}>
                            <Icon name={ 'keyboard-arrow-up' } size={30} />
                        </TouchableOpacity>
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
            <KeyboardAwareScrollView>

            <View style={styles.container} >

                <TouchableOpacity  style={styles.appButtonContainer}>
                    <Text style={styles.appButtonText} >App Mobile</Text>
                </TouchableOpacity>

                <TouchableOpacity  style={styles.appButtonContainer} onPress={() => Alert.alert('Simple Button pressed')}>
                    <Text  style={styles.appButtonText}>App Web</Text>
                </TouchableOpacity>

                <TouchableOpacity  style={styles.appButtonContainer} onPress={() => Alert.alert('Simple Button pressed')}>
                    <Text style={styles.appButtonText} >IOS</Text>
                </TouchableOpacity>

                <TouchableOpacity  style={styles.appButtonContainer} onPress={() => Alert.alert('Simple Button pressed')}>
                    <Text style={styles.appButtonText}>Androïd</Text>
                </TouchableOpacity>

                <TouchableOpacity  style={styles.appButtonContainer} onPress={() => Alert.alert('Simple Button pressed')}>
                    <Text style={styles.appButtonText} >Site web</Text>
                </TouchableOpacity>
            </View>
                {ViewContent}
            </KeyboardAwareScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
        container:{
            flex: 1,
            margin: 20,
            alignContent:'center',
    },
    card:{
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: 'blue',
        shadowColor: 'grey',
        shadowRadius: 10,
        margin: 20,
        marginBottom: 20,
    },
    realisationTitre:{
        fontWeight:'600',
        fontSize:20,
        color: 'white',
        fontFamily: 'sans-serif',
        margin: 10,
    },
    reaImage:{
        margin:5,
        width:150,
        height:100,
        borderRadius:10,
        marginBottom:25,
    },
    realisationDesc:{
        fontWeight:'600',
        fontSize:20,
        color: 'white',
        fontFamily: 'sans-serif',
        alignItems:'center',
        margin: 20,
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
        borderRadius: 10,
        margin: 5,
        fontSize:20,
        color: 'blue',
    },
    appButtonContainer: {
        maxHeigth: '100%',
        minHeight: 25,
        backgroundColor: 'blue',
        alignItems:'center',
        justifyContent : 'center',
        borderRadius: 25,
        shadowColor: 'grey',
        shadowRadius: 10,
        margin: 10,
    },
    appButtonText: {
        maxWidth: '100%',
        fontSize:25,
        fontFamily: 'sans-serif',
        color: 'white',
        alignItems:'center',
        textTransform: "uppercase",
    },
    }
)