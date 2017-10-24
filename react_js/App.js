/**
 * Created by date on 2017/10/17
 * author:xie
 * Desc:
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View
} from 'react-native';
import BaseTitle from './base_title/BaseTitle'

export default class App extends Component<{}> {
    render() {
        var url = require('./photo/back.png');
        return (
        <View style={StyleSheet.absoluteFill} >
            {/*<Image source={require('./photo/back.png')}/>*/}
            <BaseTitle names='首页'
                       imgurl={url}
            />
        </View>

    );
    }
}


