import React, { useState } from 'react'
import { View, Text, TextInput, Button, ImageBackground } from 'react-native'
import axios from 'axios'

export default ({ navigation, route }) => {

    return(
        <>
            <ImageBackground style={{ flex: 3 }}>
                <Pressable onPress={ navigation.navigate("Info") }>
                    <Image />
                </Pressable>
                <Pressable>
                    <Image />
                </Pressable>
                <Pressable>
                    <Image />
                </Pressable>
            </ImageBackground>
            <View style={{ flex: 1 }}>
                <Button 
                    title="Host Room" 
                    onPress={ () => { navigation.push("Host Room", { params: "" })} }
                />
                <Button 
                    title="Join Room"
                    onPress={ () => { navigation.push("screenJoinRoom", { params: "" })}}
                />
            </View>
        </>
    )
}