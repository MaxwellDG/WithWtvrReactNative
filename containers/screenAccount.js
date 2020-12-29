import AccountFieldWithText from '../components/accountFieldText'

export default () => {

    // Pretty much all the variables here will be set from Context 

    // dont make some huge function for the avatar desc. Instead, in Context (and consequently also in the data file),
    // have the avatar as an object that has the img and desc 



    return(
        <>
            <View>
                <Image source={} /> 
                <Text>{  }</Text> 
                <Text>{  }</Text> 
            </View>
            <View>
                <Text>Account Info</Text>
                <AccountFieldWithText field="Display Name: " variable={ } needsImageEdit={ false } />
                <AccountFieldWithText field="Password: " variable={ } needsImageEdit={ true } />
                <AccountFieldWithText field="Email:"  variable={ } needsImageEdit={ true } />
            </View>
            <View>
                <Text>GPS Enabled:<Switch onValueChange={  }  value={  }/></Text>
                <Text>Day Theme:<Switch onValueChange={  } value={  }/></Text>
            </View>
            <View>
                <Text>Room Settings</Text>
                <Text>Only takes effect when host</Text>
                <AccountFieldWithText field="Max Destinations: " variable={ } needsImageEdit={ true } />
                <AccountFieldWithText field="Max Votes: " variable={ } needsImageEdit={ true } />
                <AccountFieldWithText field="Timer Length:"  variable={ } needsImageEdit={ true } />
            </View>
        </>
    )
}