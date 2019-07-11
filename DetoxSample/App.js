/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, SafeAreaView, ScrollView, StyleSheet, Text} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView
                    testID="detoxScroll"
                >
                    <Text
                        style={styles.welcome}
                        testID="welcomeText"
                    >
                        Welcome to React Native!
                    </Text>
                    <Text
                        style={styles.instructions}
                        testID="getStarted"
                    >
                        To get started, edit App.js
                    </Text>
                    <Text style={styles.instructions}>{instructions}</Text>
                    <Text style={styles.instructions}>Making this long so we can scroll for testing</Text>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontSize: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 50,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
        fontSize: 50,
    },
});
