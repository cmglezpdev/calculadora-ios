import React from 'react'
import { Text, View } from 'react-native';

import { ButtonCalc } from '../components/ButtonCalc';
import { styles } from '../theme/appTheme';

export const CalculatorScreen = () => {
    return (
        <View style={ styles.CalculatorContainer }>
            <Text style={styles.smallResult}>1,500.000</Text>
            <Text style={styles.result}>1,500.000</Text>

            {/* Button Rows */}
            <View style={ styles.row }>
                <ButtonCalc color='#9b9b9b' textColor='#000' text={'C'} />
                <ButtonCalc color='#9b9b9b' textColor='#000' text={'+/-'} />
                <ButtonCalc color='#9b9b9b' textColor='#000' text={'del'} />
                <ButtonCalc color='#ff9427' textColor='#fff' text={'/'} />
            </View>

            <View style={ styles.row }>
                <ButtonCalc color='#2d2d2d' textColor='#fff' text={'7'} />
                <ButtonCalc color='#2d2d2d' textColor='#fff' text={'8'} />
                <ButtonCalc color='#2d2d2d' textColor='#fff' text={'9'} />
                <ButtonCalc color='#ff9427' textColor='#fff' text={'X'} />
            </View>

            <View style={ styles.row }>
                <ButtonCalc color='#2d2d2d' textColor='#fff' text={'4'} />
                <ButtonCalc color='#2d2d2d' textColor='#fff' text={'5'} />
                <ButtonCalc color='#2d2d2d' textColor='#fff' text={'6'} />
                <ButtonCalc color='#ff9427' textColor='#fff' text={'-'} />
            </View>

            <View style={ styles.row }>
                <ButtonCalc color='#2d2d2d' textColor='#fff' text={'1'} />
                <ButtonCalc color='#2d2d2d' textColor='#fff' text={'2'} />
                <ButtonCalc color='#2d2d2d' textColor='#fff' text={'3'} />
                <ButtonCalc color='#ff9427' textColor='#fff' text={'+'} />
            </View>

            <View style={ styles.row }>
                <ButtonCalc color='#2d2d2d' textColor='#fff' text={'0'} width />
                <ButtonCalc color='#2d2d2d' textColor='#fff' text={'.'} />
                <ButtonCalc color='#ff9427' textColor='#fff' text={'='} />
            </View>


        </View>
    )
}
