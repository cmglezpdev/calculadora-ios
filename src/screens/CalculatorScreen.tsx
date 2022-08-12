import React, { useRef, useState } from 'react'
import { Text, View } from 'react-native';

import { ButtonCalc } from '../components/ButtonCalc';
import { styles } from '../theme/appTheme';
import { useCalculator } from '../hooks/useCalculator';
import { Buttons } from '../components/Buttons';


export const CalculatorScreen = () => {

    const { 
        number, prevNumber, 
        btnAdition, btnSubstraction, btnDivition, btnMultiplication, 
        clear, clearLastInput, sign, buildNumber, calcular 
    } = useCalculator();

    return (
        <View style={ styles.CalculatorContainer }>
            {
                prevNumber !== '0' && <Text style={styles.smallResult}>{ prevNumber }</Text>
            }
            <Text 
                style={styles.result}
                numberOfLines={ 1 }
                adjustsFontSizeToFit
            >{ number }</Text>

            <Buttons
                methodsCalculator={{
                    btnAdition, btnSubstraction, btnDivition, btnMultiplication,
                    clear, clearLastInput, sign, buildNumber, calcular
                }}
            />

        </View>
    )
}
