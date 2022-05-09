import React, {useState, useEffect, useRef} from 'react';
import {View, SafeAreaView, Image, FlatList, Text} from 'react-native';
import styles from './styles';
import globalStyles from '../../constants/globalStyles';
import InputComponent from '../../components/Input';
import Loader from '../../components/LoaderLayout';
import {Message} from '../../helper/utils';
import {STRINGS} from '../../constants/strings';
import {getBadCharactersList} from '../../api';
import {TouchableOpacity} from 'react-native-gesture-handler';
import images from '../../constants/images';
import RBSheet from 'react-native-raw-bottom-sheet';
import {Button} from '../../components/Button';
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard';
import colors from '../../constants/colors';

const BadCharactersScreen = props => {
  const RBSheetRef = useRef();

  const [searchedCharacter, setSearchedCharacter] = useState('');
  const [season, setSeason] = useState('');
  const [characterList, setCharacterList] = useState([]);
  const [searchedList, setSearchedList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showSeasonList, setShowSeasonList] = useState(false);
  const [seasonList, setSeasonList] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  /**
   * getList - Called to get Character's list.
   */
  const getList = async () => {
    const res = await getBadCharactersList();
    if (res) {
      if (res?.length > 0) {
        let data = res;
        setCharacterList(data);
      } else {
        Message(STRINGS.API_FAILURE_MSG, 'danger');
      }
    }
    let tempArray = [];
    res.map(item => {
      tempArray.push(item?.appearance);
    });

    let maxAppearanceIndex = tempArray
      .map(a => a.length)
      .indexOf(Math.max(...tempArray.map(a => a.length)));
    setSeasonList(tempArray[maxAppearanceIndex]);
    setIsLoading(false);
  };

  /**
   * getSearchedList - Called to get searched Character's list.
   */
  const getSearchedList = () => {
    let list = [...characterList];
    let searchList = list.filter(item =>
      item.name.toLowerCase().includes(searchedCharacter.toLowerCase()),
    );
    setSearchedList(searchList);
    if (searchList.length === 0) {
      Message('No data found', 'warning');
    }
    setIsLoading(false);
  };

  /**
   * getFilteredList - Called to get selected season's list.
   */
  const getFilteredList = () => {
    let list = [...characterList];
    let filteredList = list.filter(item =>
      item.appearance.toString().includes(season),
    );
    setSearchedList(filteredList);
    if (filteredList.length === 0) {
      Message('No data found', 'warning');
    }
    setIsLoading(false);
  };

  /**
   * renderListItem - To render list item.
   * @param item Render each element of the object.
   * @param index Unique key of the perticular item.
   */
  const renderListItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={styles.imageContainer}
        onPress={() =>
          props.navigation.navigate('BadCharactersDetails', {
            item: item,
          })
        }>
        <Image
          resizeMode="stretch"
          style={styles.image}
          source={{uri: item.img}}
        />
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{item?.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <InputComponent
            returnKeyType="search"
            onSubmitEditing={() => {
              if (searchedCharacter.length !== 0) {
                setIsLoading(true);
                setTimeout(() => {
                  getSearchedList();
                }, 1000);
              }
            }}
            showCancelIcon={searchedCharacter.length !== 0 ? true : false}
            onPressCancel={() => {
              dismissKeyboard();
              setSearchedCharacter('');
              setIsLoading(true);
              setTimeout(() => {
                setSearchedList([]);
                setIsLoading(false);
              }, 1000);
            }}
            inputContainer={{width: '86%'}}
            placeholder="Search Name"
            value={searchedCharacter}
            onChangeText={val => setSearchedCharacter(val)}
          />
          <TouchableOpacity
            onPress={() => RBSheetRef?.current?.open()}
            style={styles.filterContainer}>
            <Image source={images.FILTER} style={styles.filter} />
          </TouchableOpacity>
        </View>
        {isLoading ? (
          <Loader size={'small'} />
        ) : (
          <FlatList
            data={searchedList.length === 0 ? characterList : searchedList}
            style={styles.flatlist}
            bounces={false}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(_, i) => i.toString()}
            renderItem={renderListItem}
            onEndReachedThreshold={0.01}
          />
        )}
      </View>
      <RBSheet
        ref={RBSheetRef}
        height={450}
        openDuration={250}
        customStyles={{
          container: {
            padding: 20,
            borderRadius: 20,
          },
        }}>
        <View>
          <TouchableOpacity
            onPress={() => setShowSeasonList(!showSeasonList)}
            style={styles.dropdown}>
            <Text
              style={{color: season.length === 0 ? colors.Gray : colors.Black}}>
              {season.length === 0 ? 'Select Season' : season}
            </Text>
            <Image source={images.ARROW_UP} style={styles.arrow} />
          </TouchableOpacity>
          {showSeasonList && seasonList.length !== 0 && (
            <View style={styles.dropdownList}>
              {seasonList.map((item, i) => {
                return (
                  <TouchableOpacity
                    key={i}
                    style={styles.dropdownItem}
                    onPress={() => {
                      setSeason(item);
                      setShowSeasonList(false);
                    }}>
                    <Text>{item}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          )}
          <Button
            onPress={() => {
              dismissKeyboard();
              RBSheetRef?.current?.close();
              setIsLoading(true);
              setTimeout(() => {
                getFilteredList();
              }, 1000);
            }}
          />
        </View>
      </RBSheet>
    </SafeAreaView>
  );
};

export default BadCharactersScreen;
