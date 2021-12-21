import { useRef, useState } from 'react'

enum Operators {
    ADD = '+',
    SUBTRACT = '-',
    MULTIPLY = '*',
    DIVIDE = '/',
}

export const useCalculator = () => {

    const [number, setNumber] = useState('0');
    const [prevNumber, setPrevNumber] = useState('0');

    const lastOperation = useRef<Operators>();

    const clear = () => {
        setNumber('0');
        setPrevNumber('0');
    }

    const addNumber = ( textNumber: string) => {
        //Doens't allow more than one dot
        if (number.includes('.') && textNumber === '.') return;
        if( textNumber === '.' && number.includes('.')) return;

        setNumber(number !== '0' || textNumber === '.' ? number + textNumber : textNumber);
    }

    const positiveNegative = () => {
        if(number === '0') return;
        if( number.includes('-')) {
            setNumber(number.replace('-', ''));
        } else {
            setNumber('-' + number);
        }
    }

    const deleteLastItem = () => {
        if( number.length === 1) {
            setNumber('0');
        } else if( number.includes('-') && number.length === 2) {
            setNumber('0');
        }else {
            setNumber(number.slice(0, -1));
        }
    }

    const changePrevNumber = ( operator?: string ) => {
        if(number.endsWith('.')) {
            setPrevNumber(number.slice(0, -1));
        } else {
            setPrevNumber(number);
        }
        setNumber('0');
    }

    const divide = () => {
        changePrevNumber();
        lastOperation.current = Operators.DIVIDE;
    }

    const multiply = () => {
        changePrevNumber();
        lastOperation.current = Operators.MULTIPLY;
    }

    const substract = () => {
        changePrevNumber();
        lastOperation.current = Operators.SUBTRACT;
    }

    const add = () => {
        changePrevNumber();
        lastOperation.current = Operators.ADD;
    }


    const calculate = () => {
        const currentNumber = parseFloat(number);
        const prevNumberNumber = parseFloat(prevNumber);

        switch(lastOperation.current) {
            case Operators.ADD:
                setNumber(` ${currentNumber + prevNumberNumber}`);
                break;
            case Operators.SUBTRACT:
                setNumber(` ${prevNumberNumber - currentNumber}`);
                break;
            case Operators.MULTIPLY:
                setNumber(` ${prevNumberNumber * currentNumber}`);
                break;
            case Operators.DIVIDE:
                setNumber(` ${prevNumberNumber / currentNumber}`);
                break;
            default:
                setNumber(` ${currentNumber}`);
                break;
        }
        setPrevNumber('0');
    }

    return {
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
    }
}