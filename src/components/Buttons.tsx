import React from 'react'
import { View } from 'react-native';
import { styles } from '../theme/appTheme';
import { ButtonCalc } from './ButtonCalc';

interface Props {
    methodsCalculator: {
        btnAdition: ( number:string ) => void;
        btnSubstraction: ( number:string ) => void;
        btnDivition: ( number:string ) => void;
        btnMultiplication: ( number:string ) => void;
        clear: () => void;
        clearLastInput: () => void;
        sign: () => void;
        buildNumber: ( number:string ) => void;
        btnEqual: () => void;
    }
}

export const Buttons = ({ methodsCalculator }:Props) => {

    const {
        btnAdition, btnSubstraction, btnDivition, btnMultiplication,
        clear, clearLastInput, sign, buildNumber, btnEqual
    } = methodsCalculator;

      return (
        <View>
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
                <ButtonCalc color='#ff9427' textColor='#fff' text={'='} action={btnEqual} />
            </View>
        </View>

    )
}
