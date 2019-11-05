import { StyleSheet, Dimensions, Platform } from 'react-native'
// const screen = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? 34 : 20,
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#f4f5f7'
    },
    wrapTopAuth: {
        height: 130,
        backgroundColor: 'white',
        width: '100%',
        alignItems: 'center',
    },
    wrapButtonAuth: {
        flexDirection: 'row',
        marginTop: 16
    },
    textLoginAuth: {
        color: 'darkgray',
        fontSize: 18,
        marginTop: 32
    },
    textTitleLogin: {
        color: 'darkgray',
        fontSize: 24,
        marginTop: 32,
        marginTop: 64
    },
    input: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        marginBottom: 10
    },
    buttonLogin: {
        height: 50,
        width: 275,
        borderRadius: 8,
    }
})

export default styles;