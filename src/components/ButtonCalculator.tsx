import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme'

interface Props {
    text: string;
    color?: string;
    large?: boolean;
    action: ( textNumber:string ) => void;
}

export const ButtonCalculator = ({ text, color = '#2D2D2D', large = false, action }: Props) => {
    return (
        <TouchableOpacity
            onPress={ () => action(text) }
        >
            <View style={{
                ...styles.button,
                backgroundColor: color,
                width: (large) ? 180 : 80,
            }}>
                <Text style={{
                    ...styles.textButtton,
                    color: (color === '#9B9B9B') ? 'black' : 'white',
                }}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}
