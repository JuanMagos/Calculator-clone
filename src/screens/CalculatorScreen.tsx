import React from 'react';
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme';
import { ButtonCalculator } from '../components/ButtonCalculator';
import { useCalculator } from '../hooks/useCalculator';

export const CalculatorScreen = () => {

    const { 
        number,
        prevNumber,
        clear,
        addNumber,
        positiveNegative,
        deleteLastItem,
        divide,
        multiply,
        substract,
        add,
        calculate
     } = useCalculator();

    return (
        <View style={styles.container}>
            {
                (prevNumber !== '0') && (
                    <Text style={styles.smallResult}> { prevNumber } </Text>
                )
            }
            
            <Text style={styles.result} numberOfLines={ 1 } adjustsFontSizeToFit> { number } </Text>

            <View style={styles.row}>
                <ButtonCalculator text="C" color="#9B9B9B" action={ clear }/>
                <ButtonCalculator text="+/-" color="#9B9B9B" action={ positiveNegative } />
                <ButtonCalculator text="del" color="#9B9B9B" action={ deleteLastItem }/>
                <ButtonCalculator text="/" color="#FF9427" action={ divide }/>
            </View>


            <View style={styles.row}>
                <ButtonCalculator text="7" action={addNumber}/>
                <ButtonCalculator text="8" action={addNumber}/>
                <ButtonCalculator text="9" action={addNumber}/>
                <ButtonCalculator text="X" color="#FF9427" action={ multiply }/>
            </View>
            

            <View style={styles.row}>
                <ButtonCalculator text="4" action={addNumber}/>
                <ButtonCalculator text="5" action={addNumber}/>
                <ButtonCalculator text="6" action={addNumber}/>
                <ButtonCalculator text="-" color="#FF9427" action={ substract }/>
            </View>

            <View style={styles.row}>
                <ButtonCalculator text="1" action={addNumber}/>
                <ButtonCalculator text="2" action={addNumber}/>
                <ButtonCalculator text="3" action={addNumber}/>
                <ButtonCalculator text="+" color="#FF9427" action={ add }/>
            </View>

            <View style={styles.row}>
                <ButtonCalculator text="0" action={addNumber} large/>
                <ButtonCalculator text="." action={addNumber}/>
                <ButtonCalculator text="=" color="#FF9427" action={ calculate }/>
            </View>
        </View>
    )
}
