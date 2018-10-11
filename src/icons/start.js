import React, { Component } from 'react';
import Svg,{
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
    Stop
} from 'react-native-svg';

export default class Star extends Component {
    render() {
        return (
            <Svg height="26.5" width="16">
                <Path d="M-5,28l5-4h-6l-2-6l-2,6h-6l5,4l-2,6l5-4l5,4L-5,28z"/>
            </Svg>
        );
    }
}
