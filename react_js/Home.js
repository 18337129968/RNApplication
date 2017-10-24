/**
 * Created by date on 2017/10/19
 * author:xie
 * Desc:
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    AppRegistry,
    Navigator,
    DrawerLayoutAndroid,
    ScrollView,
    View,
    Text
} from 'react-native';
import BaseTitle from './base_title/BaseTitle'


const content = React.createElement(BaseTitle);

var viewWidth = 0;
let naviewWidth = 0.0;

export default class Home extends Component<{}> {

    constructor(props) {
        super(props);
        this.state = {
            drawer: null,
            navigator: null,
            offsetX: 0.00
        };
    }

    _onLayout = (event) => {
        // viewWidth = event.navigator.layout.width;
        // console.log("onLayout：" + event.navigator.layout.width);
    }

    _onDrawerSlide = (event) => {
        var X = event.nativeEvent.offset;
        this.refs.naview.measure((x, y, width, height, pageX, pageY) => {
            naviewWidth = width;
            // console.log(x,y,width,pageX,pageY,height);
        })
        console.log('\n event.nativeEvent.offset=' + X);
        console.log('naviewWidth=' + 250);
        console.log('X*parseFloat(naviewWidth)=' + X * parseFloat(250));
        // requestAnimationFrame(()=>{
        // })
        this.setState({offsetX:X * parseFloat(250)});
        // this.setState({offsetX: event.nativeEvent.offset * parseFloat(naviewWidth)});
    }

    render() {
        console.log('render:this.state.offsetX=' + this.state.offsetX )
        var navigationView = (
            <View
                ref='naview'
                style={styles.drawerLayoutStytle}/>
        );
        return (
            <DrawerLayoutAndroid
                drawerWidth={250}
                drawerPosition={DrawerLayoutAndroid.positions.left}
                renderNavigationView={() => navigationView}
                onDrawerSlide={this._onDrawerSlide}
            >
                <View
                    style={{
                        flex: 1,
                        transform: [{translateX: this.state.offsetX}]
                    }}>
                    <BaseTitle names='首页'/>
                </View>

            </DrawerLayoutAndroid>
        );
    };
}

const styles = StyleSheet.create({
    drawerLayoutStytle: {
        flex: 1,
        backgroundColor: '#000000',
    },
    drawerChileStytle: {
        flex: 1
    }
});