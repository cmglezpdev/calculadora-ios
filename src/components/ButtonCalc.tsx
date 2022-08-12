import React, { memo } from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props {
    text: string;
    color: string;
    textColor: string;
    width?: boolean;
}


export const ButtonCalc = ({ text, color, textColor, width = false }: Props) => {
  
    return (
        <TouchableOpacity activeOpacity={0.5}>
            <View style={{ 
                ...styles.button, 
                backgroundColor: color, 
                width: width ? 150 : 70,
            }}>
                <Text style={{ ...styles.buttonText, color: textColor }}>{ text }</Text>
            </View>
        </TouchableOpacity>
    )
}
