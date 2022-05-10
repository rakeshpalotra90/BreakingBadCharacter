import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import colors from '../constants/colors';

export const Button = ({
  title = 'Apply',
  onPress,
  containerStyle,
  titleStyle,
  props,
}) => {
  return (
    <TouchableOpacity
      testID="Apply"
      {...props}
      onPress={onPress}
      style={[styles.container, containerStyle]}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors.header,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: colors.White,
    fontSize: 20,
  },
});
