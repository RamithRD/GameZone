import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Modal } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from './reviewForm';

export default function Home({ navigation }){

    const [modalOpen, setModalOpen] = useState(false);

    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'segse gesg', key: '1'},
        { title: 'Call of Duty: Modern Warfare', rating: 4, body: 'segse gesg', key: '2'},
        { title: 'Hyper Scape : battle Royale', rating: 3, body: 'segse gesg', key: '3'},
    ]);

    const addReview = (review) => {
        review.key = Math.random().toString();
        setReviews((currentReviews) => {
            return [
                review, ...currentReviews
            ]
        });
        //close the modal dialog when review submitted
        toggleModal();
    }


    // const pressHandler = () => {
    //    navigation.navigate('ReviewDetails');
    //    //navigation.push('ReviewDetails');     

    // }

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    }

    return(
        <View style={globalStyles.container}>
            {/* <Button title='Go To Reviews' onPress={pressHandler}/> */}

            <Modal visible={modalOpen} animationType='slide'>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.modalContent}>
                        <MaterialIcons
                            name='close' 
                            size={24} 
                            onPress={toggleModal}
                            style={{ ...styles.modalToggle, ...styles.modalClose}}      
                            />
                        <ReviewForm addReview = {addReview}/>
                    </View>
            </TouchableWithoutFeedback>
            </Modal>

            <MaterialIcons 
                name='add' 
                size={24} 
                onPress={toggleModal}
                style={styles.modalToggle}    
                />

            <FlatList 
                data={reviews}
                renderItem={({ item }) => {
                    return(
                       //item is idividual review item in reviews array    
                       <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                           <Card>
                              <Text style={globalStyles.titleText}>{ item.title }</Text>
                           </Card>
                       </TouchableOpacity> 
                    )
                }}
            />
        </View>
    )

}

const styles = StyleSheet.create({
    modalContent: {
      flex: 1  
    },
    modalToggle: {
      marginBottom: 10,
      borderWidth: 1,
      borderColor: '#f2f2f2',
      padding: 10,
      borderRadius: 10,
      alignSelf: 'center'  
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0
    }
});