import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import Colors from '../constants/colors';
import images from '../constants/images';

const InputComponent = props => {
  const {
    placeholder = '',
    value = '',
    textStyle,
    onChangeText,
    inputContainer,
    showCancelIcon = false,
    onPressCancel,
  } = props;

  return (
    <View style={[styles.inputContainer, inputContainer]} testID="input">
      <TextInput
        placeholder={placeholder}
        autoCapitalize="none"
        placeholderTextColor={Colors.LightGray}
        value={value}
        onChangeText={onChangeText}
        autoCorrect={false}
        style={[styles.textInputStyle, textStyle]}
        {...props}
      />
      {showCancelIcon && (
        <TouchableOpacity testID="clearSearch" onPress={onPressCancel}>
          <Image source={images.CANCEL} style={styles.cancelIcon} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default InputComponent;

const styles = StyleSheet.create({
  textInputStyle: {
    height: 40,
    flex: 1,
    width: '100%',
    color: Colors.Black,
  },
  inputContainer: {
    alignSelf: 'center',
    marginVertical: 20,
    borderColor: Colors.Gray,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  cancelIcon: {
    height: 25,
    width: 25,
  },
});
