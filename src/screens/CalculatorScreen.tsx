import React, { useRef, useState } from 'react'
import { Text, View } from 'react-native';

import { ButtonCalc } from '../components/ButtonCalc';
import { styles } from '../theme/appTheme';

enum Operations {
    ADDITION = '+',
    SUBTRACTION = '-',
    MULTIPLICATION = '*',
    DIVISION = '/',
}

export const CalculatorScreen = () => {

    const [number, setNumber] = useState('100');
    const [prevNumber, setPrevNumber] = useState('0');

    const LastOperation = useRef<Operations>();


    const clear = () => {
        setNumber('0');
        setPrevNumber('0');
    }

    const clearLastInput = () => {
        if( number.length === 1 ) setNumber( '0' );
        else
        if( number.length === 2 && number[0] == '-' ) setNumber( '0' );
        else
        setNumber( number.slice(0, -1) );
    } 

    const sign = () => {
        if( number.includes('-') ) 
            setNumber( number.replace('-', '') );
        else if( number != '0' )
            setNumber( '-' + number );
    }

    const buildNumber = (textBtn: string) => {
        // Si el numbero es cero, poner el texto del boton excepto si es un punto
        if( number === '0' && textBtn !== '.' ) setNumber(textBtn);
        else // Agregar el punto si no hay otro ya
        if( textBtn === '.' && !number.includes('.') ) setNumber(number + '.');
        else
        if( textBtn !== '.' ) setNumber(number + textBtn);
    }

    const changeNumberByPrev = () => {
        if( number.endsWith('.') )
            setPrevNumber( number.slice(0, -1) );
        else
            setPrevNumber( number );
        setNumber( '0' );
    }

    const btnDivition = () => {
        changeNumberByPrev();
        LastOperation.current = Operations.DIVISION;
    }
    const btnMultiplication = () => {
        changeNumberByPrev();
        LastOperation.current = Operations.MULTIPLICATION;
    }
    const btnSubstraction = () => {
        changeNumberByPrev();
        LastOperation.current = Operations.SUBTRACTION;
    }
    const btnAdition = () => {
        changeNumberByPrev();
        LastOperation.current = Operations.ADDITION;
    }

    const calcular = () => {
        const n1 = Number(prevNumber);
        const n2 = Number(number);

        switch( LastOperation.current ) {
            case Operations.ADDITION:
                setNumber( `${n1 + n2}` );
                break;
            case Operations.SUBTRACTION:
                setNumber( `${n1 - n2}` );
                break;
            case Operations.MULTIPLICATION:
                setNumber( `${n1 * n2}` );
                break;
            case Operations.DIVISION:
                setNumber( `${n1 / n2}` );
                break;
            default:
                return;
        }
    }


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
