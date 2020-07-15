import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { globalStyles, images } from '../styles/global';
import Card from '../shared/card';

export default function ReviewDetails({ navigation }){

    // const goBackHome = () => {
    //     navigation.goBack()
    // }

    const rating = navigation.getParam('rating');

    return(
        <View style={globalStyles.container}>
            {/* <Button title='Go Back' onPress={goBackHome}/> */}
            <Card>
                <Text>{ navigation.getParam('title') }</Text>
                <Text>{ navigation.getParam('body') }</Text>
                <View style={styles.rating}>
                    <Text>GameZone Rating : </Text>
                    <Image source={images.ratings[rating]}/>
                </View>
            </Card>


        </View>
    )

}

const styles = StyleSheet.create({
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee'
    }
})
