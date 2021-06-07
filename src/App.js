import React, {useState} from 'react'
import {SafeAreaView, View , StyleSheet} from 'react-native'
import Button from './components/Button'
import Display from './components/Display'

teste = () => {
    return ''
}
// const [displayValue, setDisplayValue] = useState(0)

export default () => (
   
    <SafeAreaView style={Estilo.App}>
       <Display displayValue={3}/>
       <View style={Estilo.Buttons}>
           <Button label='AC' onPress=''/>
           <Button label='/' onPress=''/>
           <Button label='7' onPress=''/>
           <Button label='8' onPress=''/>
           <Button label='9' onPress=''/>
           <Button label='*' onPress=''/>
           <Button label='4' onPress=''/>
           <Button label='5' onPress=''/>
           <Button label='6' onPress=''/>
           <Button label='-' onPress=''/>
           <Button label='1' onPress=''/>
           <Button label='2' onPress=''/>
           <Button label='3' onPress=''/>
           <Button label='+' onPress=''/>
           <Button label='0' onPress=''/>
           <Button label='.' onPress=''/>
           <Button label='=' onPress=''/>
       </View>
    </SafeAreaView>
)
const Estilo = StyleSheet.create({
    App: {
        flex: 1,
    },
    Buttons:{
        flexDirection: 'row',
        flexWrap: 'wrap'

    }
})


