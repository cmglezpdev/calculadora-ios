import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#000',
    },
    CalculatorContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
    },
    result: {
        color: '#fff',
        fontSize: 60,
        textAlign: 'right',
    },
    smallResult: {
        color: 'rgba(255, 255, 255, 0.5)',
        fontSize: 30,
        textAlign: 'right',
    },



    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10,
        paddingHorizontal: 10
    },
    button: {
        height: 70,
        width: 70,
        marginHorizontal: 5,
        backgroundColor: '#9b9b9b',
        borderRadius: 100,
        justifyContent: 'center',
    },
    buttonText: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: '#fff',
        fontWeight: '300',
    },

})