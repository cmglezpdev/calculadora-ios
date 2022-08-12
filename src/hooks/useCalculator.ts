import { useRef, useState } from 'react';

enum Operations {
    ADDITION = '+',
    SUBTRACTION = '-',
    MULTIPLICATION = '*',
    DIVISION = '/',
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

        // console.log({number,})
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
        calcular();
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
        calcular();
        changeNumberByPrev();
        LastOperation.current = Operations.ADDITION;
    }

    const calcular = () => {
        const n1 = Number(prevNumber);
        const n2 = Number(number);

        switch( LastOperation.current ) {
            case Operations.ADDITION:
                setNumber( `${n1 + n2}` );
                setPrevNumber('0');
                LastOperation.current = undefined;
                break;
            case Operations.SUBTRACTION:
                setNumber( `${n1 - n2}` );
                setPrevNumber('0');
                LastOperation.current = undefined;
                break;
            case Operations.MULTIPLICATION:
                setNumber( `${n1 * n2}` );
                setPrevNumber('0');
                LastOperation.current = undefined;
                break;
            case Operations.DIVISION:
                setNumber( `${n1 / n2}` );
                setPrevNumber('0');
                LastOperation.current = undefined;
                break;
            default:
                break;
        }
    
        // console.log({number, prevNumber})
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
    calcular,
    lastOperation: LastOperation.current,
  }

}
