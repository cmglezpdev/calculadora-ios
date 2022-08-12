import React, { useRef, useState } from 'react'
import { Text, View } from 'react-native';

import { ButtonCalc } from '../components/ButtonCalc';
import { styles } from '../theme/appTheme';
import { useCalculator } from '../hooks/useCalculator';


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



            {/* Button Rows */}
            <View style={ styles.row }>
                <ButtonCalc color='#9b9b9b' textColor='#000' text={'C'} action={clear} />
                <ButtonCalc color='#9b9b9b' textColor='#000' text={'+/-'} action={sign} />
                <ButtonCalc color='#9b9b9b' textColor='#000' text={'del'} action={clearLastInput} />
                <ButtonCalc color='#ff9427' textColor='#fff' text={'/'} action={btnDivition} />
            </View>

            <View style={ styles.row }>
                <ButtonCalc color='#2d2d2d' textColor='#fff' text={'7'} action={ buildNumber } />
                <ButtonCalc color='#2d2d2d' textColor='#fff' text={'8'} action={ buildNumber } />
                <ButtonCalc color='#2d2d2d' textColor='#fff' text={'9'} action={ buildNumber } />
                <ButtonCalc color='#ff9427' textColor='#fff' text={'X'} action={btnMultiplication} />
            </View>

            <View style={ styles.row }>
                <ButtonCalc color='#2d2d2d' textColor='#fff' text={'4'} action={ buildNumber } />
                <ButtonCalc color='#2d2d2d' textColor='#fff' text={'5'} action={ buildNumber } />
                <ButtonCalc color='#2d2d2d' textColor='#fff' text={'6'} action={ buildNumber } />
                <ButtonCalc color='#ff9427' textColor='#fff' text={'-'} action={btnSubstraction} />
            </View>

            <View style={ styles.row }>
                <ButtonCalc color='#2d2d2d' textColor='#fff' text={'1'} action={ buildNumber } />
                <ButtonCalc color='#2d2d2d' textColor='#fff' text={'2'} action={ buildNumber } />
                <ButtonCalc color='#2d2d2d' textColor='#fff' text={'3'} action={ buildNumber } />
                <ButtonCalc color='#ff9427' textColor='#fff' text={'+'} action={btnAdition} />
            </View>

            <View style={ styles.row }>
                <ButtonCalc color='#2d2d2d' textColor='#fff' text={'0'} action={ buildNumber } width />
                <ButtonCalc color='#2d2d2d' textColor='#fff' text={'.'} action={ buildNumber } />
                <ButtonCalc color='#ff9427' textColor='#fff' text={'='} action={calcular} />
            </View>


        </View>
    )
}
