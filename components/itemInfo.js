import React from 'react'
import { View, Text, Image } from 'react-native'

export default ({ item, img, desc }) => {
    return(
        <View>
            <Text>{ item }</Text>
            <Image source={require(img)} />
            <Text>{ desc }</Text> 
        </View>
    )
}