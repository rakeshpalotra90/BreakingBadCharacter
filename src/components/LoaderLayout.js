import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import Colors from '../constants/colors';

const LoaderLayout = ({color = Colors.header, size = 'large', props}) => {
  return (
    <View>
      <ActivityIndicator color={color} size={size} {...props} />
    </View>
  );
};

export default LoaderLayout;
