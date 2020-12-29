import React from 'react'
import { View, Text, TextInput, Button, ImageBackground, Pressable, Keyboard } from 'react-native'
import { Formik } from 'formik'
import axios from 'axios'

const initialValues = {
    username: "",
    password: "",
    passwordConfirm: "",
    email: ""
}

const validateForm = (values)  => {
    const errors = {}

    if (!values.username) {
        errors.username = 'Name is required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{1,9}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    } else if (!values.password){
        errors.password = "Password is required"
    } else if (!values.password == values.passwordConfirm){
        errors.passwordConfirm = "Passwords do not match"
    }
    return errors
}

export default () => {

    const generateError = (text) => {
        return(
            <View>
                <Text>{ text }</Text>
            </View>
        )
    }

    return(
        <Pressable onPress={ Keyboard.dismiss }>
            <ImageBackground>
                <Image />
                <Formik
                    initialValues={ initialValues }
                    validate={ values => validateForm(values) }
                    onSubmit={ (values, actions) => {
                        axios.post("https://www.mybackendserverwtvr.com/submittingMyGuy")
                            .then(response => {
                                if(response.status === 200){
                                    const data = response.json()
                                    // do something with the data. or not. i'm not your dad.
                                    actions.resetForm()
                                } else if(response.status === 300){
                                    // change to use the correct HTML response code 
                                    // Alert that the username is already taken
                                    actions.resetForm({
                                        username: "",
                                        password: values.password,
                                        password: values.passwordConfirm,
                                        email: values.email
                                    }) 
                                }
                            }).catch(reason => {
                                console.log(reason)
                            })
                    } }
                    >
                        {({ handleBlur, handleChange, handleSubmit, values, touched, errors }) => {
                    <>
                        { errors.username && touched.username ? generateError(errors.username) : null }
                        <TextInput 
                            placeholder="Username: "
                            value={ values.username }
                            onChangeText={ handleChange("username") }
                            onBlur={ handleBlur("username") }
                        />
                        { errors.password && touched.password ? generateError(errors.password) : null }
                        <TextInput 
                            placeholder="Password: "
                            value={ values.password }
                            onChangeText={ handleChange("password") }
                            onBlur={ handleBlur("password") }
                        />
                        { errors.passwordConfirm && touched.passwordConfirm ? generateError(errors.passwordConfirm) : null }                    
                        <TextInput 
                            placeholder="Confirm Password: "
                            value={ values.passwordConfirm }
                            onChangeText={ handleChange("passwordConfirm") }
                            onBlur={ handleBlur("passwordConfirm") }
                        />
                        { errors.email && touched.email ? generateError(errors.email) : null }                        
                        <TextInput 
                            placeholder="Email: "
                            value={ values.email }
                            onChangeText={ handleChange("email") }
                            onBlur={ handleBlur("email") }
                        />
                        <Button title="Create Account" onPress={ handleSubmit } />
                    </>
                    }}
                </Formik>
            </ImageBackground>
        </Pressable>
    )
}