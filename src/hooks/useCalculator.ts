import { useCallback, useRef, useState } from 'react';

enum Operations {
    ADDITION = '+',
    SUBTRACTION = '-',
    MULTIPLICATION = '*',
    DIVISION = '/',
    EQUAL = '=',
}


export const useCalculator = () => {

    const [number, setNumber] = useState('0');
    const [prevNumber, setPrevNumber] = useState('0');
    const LastOperation = useRef<Operations>();

    const clear = () => {
        setNumber('0');
        setPrevNumber('0');
        LastOperation.current = undefined;
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

    const changeNumberByPrev = ( num = '0' ) => {
        if( num.endsWith('.') )
            setPrevNumber( num.slice(0, -1) );
        else
            setPrevNumber( num );
        setNumber( '0' );
    }

    const btnDivition = () => {
        if( number === '0' ) LastOperation.current = Operations.DIVISION;
        else {
            const v = calcular();
            changeNumberByPrev(v);
            LastOperation.current = Operations.DIVISION;
        }
    }
    const btnMultiplication = () => {
        if( number === '0' ) LastOperation.current =Operations.MULTIPLICATION;
        else {
            const v = calcular();
            changeNumberByPrev(v);
            LastOperation.current = Operations.MULTIPLICATION;
        }
    }
    const btnSubstraction = () => {
        if( number === '0' ) LastOperation.current =Operations.SUBTRACTION;
        else {
            const v = calcular();
            changeNumberByPrev(v);
            LastOperation.current = Operations.SUBTRACTION;
        }
    }
    const btnAdition = () => {
        if( number === '0' ) LastOperation.current =Operations.ADDITION;
        else {
            const v = calcular();
            changeNumberByPrev(v);
            LastOperation.current = Operations.ADDITION;
        }
    }

    const btnEqual = () => {
        const v = calcular();
        setNumber( v );
        setPrevNumber('0');
        LastOperation.current = undefined;
    }


    const calcular = ():string => {
        const n1 = Number(prevNumber);
        const n2 = Number(number);

        switch( LastOperation.current ) {
            case Operations.ADDITION:
                return `${n1 + n2}`;

            case Operations.SUBTRACTION:
                return `${n1 - n2}`;

            case Operations.MULTIPLICATION:
                return `${n1 * n2}`;

            case Operations.DIVISION:
                return `${n1 / n2}`;

            default:
                return number;
        }
    
    }

  return {
    number,
    prevNumber,
    
    clear,
    clearLastInput,
    sign,
    buildNumber,
    btnDivition,
    btnMultiplication,
    btnSubstraction,
    btnAdition,
    btnEqual,
    lastOperation: LastOperation.current,
  }

}
