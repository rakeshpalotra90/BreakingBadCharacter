import React, {useState} from 'react';
import {
  View,
  Image,
  ScrollView,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import images from '../../constants/images';

const Info = ({id = '', value = ''}) => {
  return (
    <View style={styles.infoContainer}>
      <Text style={styles.key}>
        {id}:{'   '}
      </Text>
      <Text style={styles.value}>
        {typeof value === 'string' ? value : value?.toString()}
      </Text>
    </View>
  );
};
const BadCharactersDetailsScreen = props => {
  const [details] = useState(props?.route?.params?.item || {});
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <ImageBackground
          resizeMode="stretch"
          style={styles.image}
          source={{uri: details.img}}>
          <TouchableOpacity
            onPress={() => props.navigation.goBack()}
            style={styles.backIconContainer}>
            <Image style={styles.backIcon} source={images.BACK} />
          </TouchableOpacity>
        </ImageBackground>

        <View style={styles.container}>
          <Info id="Name" value={details?.name} />
          <Info id="Occupation" value={details?.occupation} />
          <Info id="Status " value={details?.status} />
          <Info id="Nickname " value={details?.nickname} />
          <Info id="Season appearance " value={details?.appearance} />
        </View>
      </View>
    </ScrollView>
  );
};

export default BadCharactersDetailsScreen;
