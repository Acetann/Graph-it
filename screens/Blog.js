import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';

export default function Blog() {

    const [data, setData] = useState(null)

    function getArticle() {
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
                <View>
                    <View style={styles.container}>
                        <Text style={styles.equipeName}> {data[i].TitreA}</Text>
                        <Image style={styles.ArticleImage} source={{ uri: 'http://graph-it.cesi.group' + data[i].ImageA.url }} />
                    </View>
                    <View>
                        <Text style={styles.equipeName}> {data[i].DescriptionA}</Text>
                    </View>
                </View>
            )
        }
    }
    else {
        getArticle();
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
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: '5%',
        marginBottom: '2%'
    },

    ArticleImage: {
        marginTop: 5,
        marginBottom: 2,
        justifyContent: 'center',
        width: 150,
        height: 150,
        borderRadius: 100,
    },

    equipeName: {
        fontWeight: '600',
        fontSize: 20,
        fontFamily: 'sans-serif',
        alignItems: 'center',
    }


}
)