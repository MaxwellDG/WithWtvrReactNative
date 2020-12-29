import React, { useState } from 'react'
import { View, Text, TextInput, Button, SafeAreaView, ImageBackground } from 'react-native'
import axios from 'axios'

export default ({ navigation, route }) => {

    const[username, setUsername] = useState("")
    const[password, setPassword] = useState("")

    const login = (user, pass) => {
        /* 
            const userAuthenticated = axios.get user authentication
            if(userAuthenticated){
                navigation.navigate("screenHome")
                // submit the user object to ContextProvider
            } else {
                toast that the credentials dont match
            }
        */
    }

    return(
        <ImageBackground>
            <Text>Let's get going!</Text>
            <TextInput
                placeholder="Username: " 
                value={ username }
                onChangeText={ setUsername } 
            />
            <TextInput 
                placeholder="Password: "
                value={ password }
                onChangeText={ setPassword } 
            />
            <Button title="Login" onPress={ login(username, password) }/>
            <Button title="Sign Up" onPress={ () => navigation.navigate("SignUp") }/>
        </ImageBackground>
    )
}