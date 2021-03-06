import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';

export default function Blog() {

    const [data, setData] = useState(null)

    function GetArticle() {
        fetch('http://graph-it.cesi.group/articles', {
            method: 'GET',
            dataType: 'json',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then((response) => {
                response.json()
                    .then((responseData) => {
                        //console.log(responseData)
                        setData(responseData)
                    });
            })
            .catch(function (err) {
                //console.log(err)
            })
    }
    var ViewContent = [];

    if (data != null) {
        for (var i = 0; i < data.length; i++) {
            //console.log(data[i].Photo.url)
            ViewContent.push(
                
                    <View style={styles.container}>
                        <Text style={styles.ArticleTitre}> {data[i].TitreA}</Text>
                        <Image style={styles.ArticleImage} source={{ uri: 'http://graph-it.cesi.group' + data[i].ImageA.url }} />
                        <Text style={styles.ArticleDesc}> {data[i].DescriptionA}</Text>
                    </View>
            )
        }
    }
    else {
        GetArticle();
    }

    return (
        <ScrollView>
            {ViewContent}
        </ScrollView>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor:'#C5FFFF',

    },

    ArticleImage: {
        marginTop: 5,
        marginBottom: 2,

        width: 150,
        height: 150,
    },

    ArticleTitre: {
        marginTop: 5,
        marginBottom: 2,
        
    },

    ArticleDesc: {
        marginTop: 5,
        marginBottom: 2,
    },


}
)