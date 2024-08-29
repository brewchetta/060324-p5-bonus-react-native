import { Image, StyleSheet, Platform, View, Text, Button } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import { countries } from '@/constants/Countries'

export default function Countries() {

  const { dish } = useLocalSearchParams();

  const allDishes = Object.values(countries).flat()

  const foundDish = allDishes.find(dishObj => dishObj.name === dish)

  function handleGoBack() {
    router.navigate('/countries')
  }

  return (
    <>
      <ThemedView style={styles.titleContainer}>
        <ThemedText style={styles.titleText} type="title">{dish}</ThemedText>
      </ThemedView>

      <View>
        <Text style={styles.dishDescription}>{foundDish?.description || "No description found"}</Text>
      </View>

      <Button title="Back" onPress={handleGoBack} />
    </>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  titleText: {
    margin: 50,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'green',
    padding: 30,
    borderRadius: 30,
  },
  countryText: {
    fontSize: 30
  },
  dishTitle: {
    fontWeight: 'bold',
    fontSize: 20
  },
  dishDescription: {
    fontStyle: 'italic',
    fontSize: 18
  }
});
