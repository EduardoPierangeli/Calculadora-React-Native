import React, {useState} from 'react'
import {SafeAreaView, View , StyleSheet} from 'react-native'
import Button from './components/Button'
import Display from './components/Display'

export default () =>{ 
    const [displayValue, setDisplayValue] = useState('0')
    const [clearDisplay, setClearDisplay] = useState(false)
    const [operation, setOperation] = useState(null)
    const [values, setValues] = useState([0,0])
    const [current, setCurrent] = useState(0)
    
    addDigito = n =>{
        const limparDisplay = displayValue === '0' || clearDisplay
        
        if(n === '.' && !clearDisplay && displayValue.includes('.')){
            return
        }

        const currentValue = limparDisplay ? '' : displayValue
        const valorDisplay = displayValue ==='0'? n : currentValue + n
        setDisplayValue(valorDisplay)
        setClearDisplay(false)

        if(n !== '.'){
            const newValue = parseFloat(valorDisplay)
            const valores = [...values]
            valores[current] = newValue
            setValues(valores)
        }
    }

    clearMemory = () =>{
        setDisplayValue('0')
        setClearDisplay(false)
        setOperation(null)
        setValues([0,0])
        setCurrent(0)
    }

    selectOperation = o =>{
        if(current === 0){
            setCurrent(1)
            setOperation(o)
            setClearDisplay(true)
        }else{
            const equals = o === '='
            const valores = [...values]
            try{
                valores[0] = eval(`${valores[0]} ${operation} ${valores[1]}`)
            }catch(e){
                valores[0] = values[0]
            }
            valores[1] = 0
            setDisplayValue(`${valores[0]}`)
            setOperation(equals ? null : o)
            setCurrent(equals? 0 : 1)
            setClearDisplay(!equals)
            setValues(valores)
        }
    }
        
    return(
   
    <SafeAreaView style={Estilo.App}>
       <Display displayValue={displayValue}/>
       <View style={Estilo.Buttons}>
           <Button label='AC' triple onClick={clearMemory}/>
           <Button label='/' operation onClick={selectOperation}/>
           <Button label='7' onClick={addDigito}/>
           <Button label='8' onClick={addDigito}/>
           <Button label='9' onClick={addDigito}/>
           <Button label='*' operation onClick={selectOperation}/>
           <Button label='4' onClick={addDigito}/>
           <Button label='5' onClick={addDigito}/>
           <Button label='6' onClick={addDigito}/>
           <Button label='-' operation onClick={selectOperation}/>
           <Button label='1' onClick={addDigito}/>
           <Button label='2' onClick={addDigito}/>
           <Button label='3' onClick={addDigito}/>
           <Button label='+' operation onClick={selectOperation}/>
           <Button label='0' double onClick={addDigito}/>
           <Button label='.' onClick={addDigito}/>
           <Button label='=' operation onClick={selectOperation}/>
       </View>
    </SafeAreaView>
)}
const Estilo = StyleSheet.create({
    App: {
        flex: 1,
    },
    Buttons:{
        flexDirection: 'row',
        flexWrap: 'wrap'

    }
})


