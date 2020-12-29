import { useState } from "react"
import { StatusBar, StyleSheet } from 'react-native'

export default () => {

    const[currentLocation, setCurrentLocation] = useState({ lat: 0, lng: 0})
    const[observingLocation, setObservingLocation] = useState({ lat: 0, lng: 0})
    
    const openMenuPlaces = () => {
        // open menu 
    }
    
    return(
        <>
            <View>
                // Google Map 
                <Pressable style={ styles.buttonWW } onPress={ openMenuPlaces }>
                    <Image source={} />
                </Pressable>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    buttonWW: {
        position: "absolute",
        bottom: 25,
        right: 25
    }
})
