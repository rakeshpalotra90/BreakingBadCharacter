import {Dimensions, Linking} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export const HEIGHT = Dimensions.get('window').height;
export const WIDTH = Dimensions.get('window').width;

/**
 * getResponsiveHeight - To get responsive height.
 * @param per percentage value.
 */
export const getResponsiveHeight = per => {
  return (HEIGHT * per) / 100;
};

/**
 * getResponsiveWidth - To get responsive width.
 * @param per percentage value.
 */
export const getResponsiveWidth = per => {
  return (WIDTH * per) / 100;
};

/**
 * statusBarHeight - To get status bar height.
 */
export const statusBarHeight = getStatusBarHeight();

/**
 * Message - To show flash message.
 * @param message String argument.
 * @param type Message type('danger', 'warning', 'success', 'info').
 */
export const Message = (message, type) => {
  return showMessage({
    message: message,
    type: type,
    duration: 5000,
    position: 'top',
    style: {alignItems: 'center', justifyContent: 'center'},
  });
};
