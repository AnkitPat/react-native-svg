import React, {Component} from 'react';

import {
    StyleSheet,
    View,
    Text,
    AppRegistry
} from 'react-native';



import Deliver from './icons/deliver.js';
import Heart from './icons/heart.js';
import Back from "./icons/back";
import Reload from "./icons/reload";
import Star from "./icons/start";
import Person from "./icons/person";

export default class Pin extends Component{
    render(){
        return(
            <View style={styles.PinContainer}>
                <View style={styles.PinHeader}>
                    <View style={styles.HeaderUitility}>
                        <Back />
                        <Heart />
                        <Deliver />
                        <Reload/>
                    </View>

                    <View style={styles.HeaderPinButtonContainer}>
                        <View style={styles.PinButton}>
                            <Text style={styles.PinText}>SAVE</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.PinMiddle}>

                    <Text>hello</Text>
                    <Reload/>
                    <Person/>
                        <Heart/>
                </View>

                <View style={styles.PinFooter}>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    PinContainer:{
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#cecece'
    },

    PinHeader:{
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        height: 56,
        padding: 8,
        paddingBottom: 12
    },

    HeaderUitility:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    PinButton: {
        flexDirection: 'row',
        backgroundColor: 'red',
        padding:8,
        borderRadius: 6,
        justifyContent: 'space-around',
        width: 70
    },

    HeaderPinButtonContainer:{
        flex: 1,
        alignItems: 'flex-end',
    },

    PinText:{
        color: 'white',
    }

})
