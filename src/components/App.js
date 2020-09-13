import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
const App = props => {
    return (
        <View style={styles.contianer}>
            <Text style={styles.header}>
                BakeSale
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    contianer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        fontSize: 40,
    }
})


export default App;