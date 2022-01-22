# react-native-carousel-cards

A simple and fully customizable React Native carousel card component.

![](demo/demo.gif)

## Getting started

`npm i react-native-carousel-cards`

## Usage

```js
import React from 'react';
import {
  View,
  Text
} from 'react-native';

import { RNCarousel } from 'react-native-carousel-cards';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>React Native Carousel</Text>
        </View>
        <RNCarousel 
          data={[
            { url: "https://multimediarepository.amadeus.com/cmr/retrieve/hotel/366DB6FB8EFD44C4B2ADC90D38D82C2E" },
            { url: "https://multimediarepository.amadeus.com/cmr/retrieve/hotel/AF63CB0620F94B6FAE8B5BD390C58213" },
            { url: "https://multimediarepository.amadeus.com/cmr/retrieve/hotel/895A263C718547B38011E65E53A7085A" },
            { url: "https://multimediarepository.amadeus.com/cmr/retrieve/hotel/186D75B7A075470F95C7DF5E99F87380" }
          ]} 
        />
      </View>
    )
  }
};
```

## Props

|Prop|Type|Description|
|-|:----------:|:---------:|
|`data`|Array|Images data
|`imageResizeMode`|String| Image resize mode, similar to resize mode in Images in react native.default: `cover`
|`indicatorBorderColor`|String| Bullets border color.default: `white`
|`indicatorActiveBackgroundColor`|String| Bullets active fill color.default: `white`
|`height`|Number| Height of the container.default: `200`
|`arrowSize`|Number| Size of the navigation arrow.default: `25`
|`loop`|Boolean| Auto looping the images for every `4seconds`.default: `true`
|`showArrows`|Boolean| To show the arrow or not.default: `true`
|`showIndicator`|Boolean| To show the bullets or not.default: `true`
|`showsHorizontalScrollIndicator`|Boolean| To show the scroll view default horizontal scroll indicator or not.default: `false`
|`isCustomCarouselContent`|Boolean| To show the custom carousel content.default: `false`
|`indicatorStyle`|Object| To change indicator style.
|`contentContainerStyle`|Object| To change scroll view container style.
|`indicatorContainerStyle`|Object| To change indicator container style.
|`carouselContent`|React component| Custom carousel content component.
|`onImagePressCb`|Function| Callback function called when the image item is pressed.
