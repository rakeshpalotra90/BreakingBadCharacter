import {StyleSheet} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import Colors from '../../constants/colors';
import {getResponsiveHeight} from '../../helper/utils';

export default StyleSheet.create({
  image: {
    height: getResponsiveHeight(60),
    width: '100%',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 10,
  },
  key: {
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
  },
  value: {
    fontSize: 20,
    flex: 1,
  },
  scrollView: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  container: {
    flex: 1,
  },
  backIconContainer: {
    height: 40,
    width: 40,
    borderRadius: 360,
    backgroundColor: Colors.Black,
    top: getStatusBarHeight(),
    left: 10,
    padding: 10,
  },
  backIcon: {
    height: '100%',
    width: '100%',
  },
});
