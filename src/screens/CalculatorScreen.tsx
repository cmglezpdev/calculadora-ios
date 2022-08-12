import React from 'react'
import { Text, View } from 'react-native';

import { styles } from '../theme/appTheme';
import { useCalculator } from '../hooks/useCalculator';
import { Buttons } from '../components/Buttons';


export const CalculatorScreen = () => {

    const { 
        number, prevNumber, 
        btnAdition, btnSubstraction, btnDivition, btnMultiplication, 
        clear, clearLastInput, sign, buildNumber, btnEqual,
        lastOperation 
    } = useCalculator();

    return (
        <View style={ styles.CalculatorContainer }>

                { lastOperation && <Text style={styles.operation}>{ lastOperation }</Text> }
                <Text style={styles.smallResult}>{ prevNumber }</Text>

            <Text 
                style={styles.result}
                numberOfLines={ 1 }
                adjustsFontSizeToFit
            >{ number }</Text>

            <Buttons
                methodsCalculator={{
                    btnAdition, btnSubstraction, btnDivition, btnMultiplication,
                    clear, clearLastInput, sign, buildNumber, btnEqual
                }}
            />

        </View>
    )
}
