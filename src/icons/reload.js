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

export default class Reload extends Component {
    render() {
        return (
            <Svg height="50" width="50" viewBox="39 -39 128 128">

               {/* <Path  d="M39.7,82.3l62.6-115.4c0.4-0.7,1-0.7,1.4,0l62.6,115.4c0.4,0.7,0,1.3-0.8,1.3h-125C39.7,83.6,39.3,83,39.7,82.3z"
                       fill="red"
                       stroke="red"/>
*/}


                <Path d="M39.7,82.3l62.6-115.4c0.4-0.7,1-0.7,1.4,0l62.6,115.4c0.4,0.7,0,1.3-0.8,1.3h-125C39.7,83.6,39.3,83,39.7,82.3z"/>


                <Path
                    fill="red"
                      d="M103,55.8c-2.1,0-3.8,1.7-3.8,3.8s1.7,3.8,3.8,3.8s3.8-1.7,3.8-3.8S105.1,55.8,103,55.8z M99,33.7l2,13.9h4  l2-13.8V15.6h-8V33.7z"/>

            </Svg>
        );
    }
}
