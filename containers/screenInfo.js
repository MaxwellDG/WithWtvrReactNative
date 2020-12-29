import React from 'react'
import { ImageBackground } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import Information from '../data/information'
import Item from '../components/itemInfo'

export default () => {
    return(
        <ImageBackground>
            <Text>Information</Text>
            <FlatList 
                data={ Information }
                renderItem={ (item) => {
                    console.log(item)
                    return(
                        <Item item={ item.item.item } img={ item.item.img } desc={ item.item.desc } />
                    )
                } }
                keyExtractor={ item => item.item.key }
            />
            <Text>This app is still under development. If you have any additional questions or suggestions, please contact me at maxwellmdg@protonmail.com</Text>
        </ImageBackground>
    )
}