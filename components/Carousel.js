import React, { Component } from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Dimensions, ImageBackground} from 'react-native';
import Carousel from 'react-native-anchor-carousel';

const { width } = Dimensions.get('window');

const data = [
    {
        uri: '',
        title: 'test',
        content: 'description '
    },
    {
        uri: '',
        title: 'test',
        content: 'description '
    },
    {
        uri: '',
        title: 'test',
        content: 'description '
    },
    {
        uri: '',
        title: 'test',
        content: 'description '
    },
    {
        uri: '',
        title: 'test',
        content: 'description '
    }
];

export default class ImageCarousel extends Component {
    renderItem = ({ item, index }) => {
        const { uri, title, content } = item;
        return (
            <TouchableOpacity
                activeOpacity={1}
                style={styles.item}
                onPress={() => {
                    this.numberCarousel.scrollToIndex(index);
                }}
            >
                <ImageBackground
                    source={{ uri: uri }}
                    style={styles.imageBackground}
                >
                    <View style={styles.rightTextContainer}>
                        <Text style={styles.rightText}>Lorem</Text>
                    </View>
                </ImageBackground>
                <View style={styles.lowerContainer}>
                    <Text style={styles.titleText}>{title}</Text>
                    <Text style={styles.contentText}>{content}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    render() {
        return (
            <Carousel
                style={styles.carousel}
                data={data}
                renderItem={this.renderItem}
                itemWidth={0.7 * width}
                inActiveOpacity={0.3}
                containerWidth={width - 10}
                ref={(c) => {
                    this.numberCarousel = c;
                }}
            />
        );
    }
}

const styles = StyleSheet.create({
    carousel: {
        flex: 1,
        backgroundColor: 'blue'
    },
    item: {
        borderWidth: 2,
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 5,
        borderColor: 'white',
        elevation: 3
    },
    imageBackground: {
        flex: 2,
        backgroundColor: 'white',
        borderWidth: 5,
        borderColor: 'white'
    },
    rightTextContainer: {
        marginLeft: 'auto',
        marginRight: -2,
        backgroundColor: 'blue',
        padding: 3,
        marginTop: 3,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5
    },
    rightText: { color: 'white' },
    lowerContainer: {
        flex: 1,
        margin: 10
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 18
    },
    contentText: {
        fontSize:12
    }
});