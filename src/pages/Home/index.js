import React from 'react';
import {
  SafeAreaView, View, StyleSheet, Image, Text,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Swiper from 'react-native-swiper';
import { Icon } from 'react-native-elements';

const Home = () => (
  <SafeAreaView style={styles.container}>

    <View style={{ marginHorizontal: 17, flexDirection: 'row' }}>

      <Icon
        name="menu"
        style={{
          alignItems: 'center', justifyContent: 'center', marginTop: 18, marginRight: 10, marginLeft: 10,
        }}
      />

      <View style={{ position: 'relative', flex: 1 }}>
        <TextInput style={styles.Textinput} placeholder="Pencarian" />
        <Image style={{ position: 'absolute', top: 22, left: 20 }} source={require('../../assets/Icon/search.png')} />

      </View>

      <View style={{ width: 50, alignItems: 'center', justifyContent: 'center' }}>
        <Icon
          type="font-awesome"
          name="star"
          color="black"
        />
      </View>
      <View style={{ width: 50, alignItems: 'center', justifyContent: 'center' }}>
        <Icon
          name="mail"
          color="black"
        />
      </View>
      <View style={{ width: 50, alignItems: 'center', justifyContent: 'center' }}>
        <Icon
          name="cart"
          color="black"

        />
      </View>
    </View>

    <View style={styles.sliderContainer}>
      <Swiper
        autoplay
        horizontal
        height={200}
        activeDotColor="#FF6347"
      >
        <View style={styles.slide}>
          <Image
            source={require('../../assets/banners/wallpaper0.png')}
            resizeMode="cover"
            style={styles.sliderImage}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require('../../assets/banners/wallpaper1.jpg')}
            resizeMode="cover"
            style={styles.sliderImage}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require('../../assets/banners/wallpaper2.jpg')}
            resizeMode="cover"
            style={styles.sliderImage}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require('../../assets/banners/wallpaper3.jpg')}
            resizeMode="cover"
            style={styles.sliderImage}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require('../../assets/banners/wallpaper4.jpg')}
            resizeMode="cover"
            style={styles.sliderImage}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require('../../assets/banners/wallpaper5.jpg')}
            resizeMode="cover"
            style={styles.sliderImage}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require('../../assets/banners/wallpaper6.jpg')}
            resizeMode="cover"
            style={styles.sliderImage}
          />
        </View>
      </Swiper>

    </View>

    <View style={{
      flexDirection: 'row', flexWrap: 'wrap', marginHorizontal: 20, marginTop: 5,
    }}
    >

      <View style={{
        justifyContent: 'space-between', flexDirection: 'row', width: '100%', marginBottom: 5,
      }}
      >
        <View>
          <View style={{
            width: 150, height: 165, borderRadius: 20, justifyContent: 'center', alignItems: 'center',
          }}

          >
            <Image
              source={require('../../assets/menu/ingot.jpg')}
            />
          </View>

          <Text style={{ textAlign: 'center' }}>
            Alumminium Ingot
          </Text>
        </View>

        <View>
          <View style={{
            width: 150, height: 165, borderRadius: 20, justifyContent: 'center', alignItems: 'center',
          }}
          >
            <Image
              source={require('../../assets/menu/alloy.jpg')}
            />
          </View>
          <Text style={{ textAlign: 'center' }}>
            Alluminium Alloy
          </Text>
        </View>

      </View>

      <View style={{
        justifyContent: 'space-between', flexDirection: 'row', width: '100%', marginBottom: 5,
      }}
      >
        <View>
          <View style={{
            width: 150, height: 165, borderRadius: 20, justifyContent: 'center', alignItems: 'center',
          }}
          >
            <Image
              source={require('../../assets/menu/billet.jpg')}
            />
          </View>
          <Text style={{ textAlign: 'center' }}>
            Alumminium Bilet
          </Text>
        </View>

        <View>
          <View style={{
            width: 150, height: 165, borderRadius: 20, justifyContent: 'center', alignItems: 'center',
          }}
          >
            <Image
              source={require('../../assets/menu/anoda.jpg')}
            />
          </View>
          <Text style={{ textAlign: 'center' }}>
            Anode Assembly
          </Text>
        </View>

      </View>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sliderContainer: {
    height: 200,
    width: '90%',
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
  },
  Textinput: {
    borderWidth: 0.5,
    borderColor: 'black',
    borderRadius: 10,
    marginRight: 10,
    marginTop: 10,
    marginLeft: 5,
    paddingLeft: 50,
    fontSize: 15,
    paddingRight: 25,
  },

});

export default Home;
