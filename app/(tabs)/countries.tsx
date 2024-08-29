import { Image, StyleSheet, Platform, View, Text } from 'react-native';
import { Link } from 'expo-router';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Collapsible } from '@/components/Collapsible';

import { countries } from '@/constants/Countries'

export default function Countries() {

  const mappedCountries = (
    Object.keys(countries).map(countryName => <Collapsible title={countryName} titleStyle={styles.countryText}>

        {countries[countryName].map(dish => {
            return (
                <View style={{borderWidth: 2, borderColor: 'black'}}>
                    <Link href={`/dish/${dish.name}`}>
                    <Text style={styles.dishTitle}>{dish.name}</Text>

                    <Text style={styles.dishDescription}>{dish.description}</Text>                
                    </Link>
                </View>
            )
        })}

    </Collapsible>)
    )

  return (
    <>
      <ThemedView style={styles.titleContainer}>
        <ThemedText style={styles.titleText} type="title">Countries!</ThemedText>
      </ThemedView>

      <View>

        {
         mappedCountries   
        }

      </View>
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
