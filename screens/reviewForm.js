import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';
import * as yup from 'yup';
import FlatButton  from '../shared/button';

const ReviewSchema = yup.object({
  title: yup.string().required().min(4),
  body: yup.string().required().min(8),
  rating: yup.string().required().test('isNum-1-5', 'Enter rating between 1 - 5', (val) => {
    //check if rating is between number 1 and 5  
    return parseInt(val) < 6 && parseInt(val) > 0
  })  
});

export default function ReviewForm({ addReview }) {

    return(
        <View style={globalStyles.container}>
            <Formik
                initialValues={{ title: '', body: '', rating: '' }}
                validationSchema={ReviewSchema}
                onSubmit={(values, actions) => {
                    //clears all values in the form
                    actions.resetForm();
                    //add the new review to the arrays
                    addReview(values); 
                }}
            >
                {(formikProps) => (
                    <View>
                        <TextInput style={globalStyles.input} placeholder='Review Title' onChangeText={formikProps.handleChange('title')} value={formikProps.values.title} onBlur={formikProps.handleBlur('title')} />
                        <Text style={globalStyles.errorText}>{ formikProps.touched.title && formikProps.errors.title }</Text>

                        <TextInput multiline minHeight={80} style={globalStyles.input} placeholder='Review Description' onChangeText={formikProps.handleChange('body')} value={formikProps.values.body} onBlur={formikProps.handleBlur('body')} />
                        <Text style={globalStyles.errorText}>{ formikProps.touched.body && formikProps.errors.body }</Text>

                        <TextInput keyboardType='numeric' style={globalStyles.input} placeholder='Rating (1-5)' onChangeText={formikProps.handleChange('rating')} value={formikProps.values.rating} onBlur={formikProps.handleBlur('rating')} />
                        <Text style={globalStyles.errorText}>{ formikProps.touched.rating && formikProps.errors.rating }</Text>

                        <FlatButton text='Submit' onPress={formikProps.handleSubmit} />
                    </View>
                )}
            </Formik>
        </View>
    )

}