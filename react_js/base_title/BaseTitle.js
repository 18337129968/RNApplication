/**
 * Created by date on 2017/10/17
 * author:xie
 * Desc:
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

export default class BaseTitle extends Component<{}> {
    render() {
        return (
            <View style={styles.containerStyle}>
                <View style={styles.imgViewStyle}>
                    <Image source={this.props.imgurl} style={styles.imgStyle}/>
                </View>
                <Text style={styles.titleStyle}>
                    {this.props.names}
                </Text>
                <View style={styles.imgViewStyle}/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    containerStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1CAF9A',
        height: 43,
    },
    titleStyle: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        color: '#f0f0f0',
        // backgroundColor: '#000000',
    },
    imgStyle: {
        width: 10,
        height: 20,
    },
    imgViewStyle: {
        width: 43,
        height: 43,
        justifyContent: 'center',
        paddingLeft: 10,
        // backgroundColor: '#000000',
    }
});