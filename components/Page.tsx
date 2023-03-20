import {Dimensions, Image, Text, StyleSheet, View} from "react-native";
import {BGCOLOR, PagesInterface} from "../constants";
import React from "react";

interface PageProps  {
    page: PagesInterface
}

const {width: PAGE_WIDTH, height: PAGE_HEIGHT} = Dimensions.get('window');

const Page: React.FC<PageProps> = ({page}) => {
    return (
        <View style={styles.container}>
            <View style={styles.circleContainer}>
                <View style={styles.circle}></View>
                <Image source={page.source} style={styles.image} resizeMode='contain'/>
            </View>
            <Text style={styles.title}>{page.title}</Text>
            <Text style={styles.description}>{page.description }</Text>
         </View>
    )
}

export default Page;

const styles = StyleSheet.create({
    container: {
        width: PAGE_WIDTH,
        height: PAGE_HEIGHT,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 50,
    },
    circleContainer: {
        width: PAGE_WIDTH * 0.7,
        aspectRatio: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 150,
    },
    circle: {
        width: '100%',
        height: '100%',
        borderRadius: PAGE_WIDTH * 0.7,
        backgroundColor: 'red',
    },
    image: {
        position: 'absolute',
        height: PAGE_HEIGHT * 0.5
    },
    title: {

    },
    description: {

    }
});
