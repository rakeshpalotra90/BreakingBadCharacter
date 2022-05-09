import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import Colors from '../../constants/colors';
import {getResponsiveWidth} from '../../helper/utils';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '94%',
  },
  imageContainer: {
    width: '100%',
    height: 260,
    marginBottom: 10,
    backgroundColor: Colors.White,
    borderRadius: 10,
    overflow: 'hidden',
    borderColor: colors.Gray,
    borderWidth: 0.5,
  },
  image: {
    height: 220,
    width: '100%',
    backgroundColor: colors.header,
  },
  flatlist: {flex: 1, width: '100%'},
  nameContainer: {
    padding: 10,
  },
  name: {
    fontSize: 18,
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  filterContainer: {
    borderRadius: 5,
    alignItems: 'center',
    marginLeft: 5,
  },
  filter: {
    height: 40,
    width: 40,
  },
  dropdown: {
    borderColor: colors.Gray,
    borderWidth: 1,
    height: 40,
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  arrow: {
    height: 20,
    width: 20,
  },
  dropdownList: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
    elevation: 20,
    backgroundColor: colors.White,
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
  },
  dropdownItem: {
    marginBottom: 10,
  },
});
