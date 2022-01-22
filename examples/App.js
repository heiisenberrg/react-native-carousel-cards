import React from 'react';
import {
  View,
  Text,
  StatusBar,
} from 'react-native';

import { RNCarousel } from 'react-native-carousel-cards';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <StatusBar barStyle="dark-content" />
        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>React Native Carousel</Text>
        </View>
        <RNCarousel data={[
          { url: "https://multimediarepository.amadeus.com/cmr/retrieve/hotel/366DB6FB8EFD44C4B2ADC90D38D82C2E" },
          { url: "https://multimediarepository.amadeus.com/cmr/retrieve/hotel/AF63CB0620F94B6FAE8B5BD390C58213" },
          { url: "https://multimediarepository.amadeus.com/cmr/retrieve/hotel/895A263C718547B38011E65E53A7085A" },
          { url: "https://multimediarepository.amadeus.com/cmr/retrieve/hotel/186D75B7A075470F95C7DF5E99F87380" },
          { url: "https://multimediarepository.amadeus.com/cmr/retrieve/hotel/895A263C718547B38011E65E53A7085A" }
        ]} />
      </View>
    )
  }
};
