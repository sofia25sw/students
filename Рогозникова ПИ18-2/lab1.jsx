import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const App = () => {
    return (
        <View style={styles.view}>
            <Text>Hello, world!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default App;
