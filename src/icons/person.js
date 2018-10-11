import React, {Component} from 'react'; import Svg,{
    Circle,
    Ellipse,
    G,
    LinearGradient,
    RadialGradient,
    Line,
    Path,
    Polygon,
    Polyline,
    Rect,
    Symbol,
    Text,
    Use,
    Defs,
    Stop } from 'react-native-svg';

export default class Person extends Component {
    render() {
        return (
            <Svg height="26.5" width="32" viewBox="39 -39 128 128">
                <Path d="M126.9,41c-0.8,0-2,0.4-2.7,0.9c-6.1,4.6-13.3,7.1-21.2,7.1c-7.5,0-14.5-2.5-20.5-7.1c-0.7-0.5-1.8-0.9-2.7-0.9H71
			c-17.7,0-32,14.3-32,32v14.5c0,0.8,0.7,1.5,1.5,1.5h125c0.8,0,1.5-0.7,1.5-1.5V73c0-17.7-14.3-32-32-32H126.9z M135-4
			c0,22.1-10.1,45-32,45C82.9,41,71,18.1,71-4s14.3-35,32-35S135-26.1,135-4z"
                fill="blue"
                />
            </Svg>
        );
    } }
