export default ({ field, variable, needsImageEdit }) => {

    return(
        <View>
            <Text>{ field }</Text>
            <Text>{ variable }</Text>
            { needsImageEdit ? 
                                <Pressable>
                                    <Image />
                                </Pressable> 
                                : 
                                null 
            }
        </View>
    )
}