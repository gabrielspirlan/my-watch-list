import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FilmCard from './src/components/FilmCard.js';
import "./styles/global.css"
import { useFonts, Poppins_400Regular,Poppins_700Bold,Poppins_300Light, Poppins_500Medium,  Poppins_600SemiBold  } from '@expo-google-fonts/poppins';
import { useEffect } from 'react';

export default function App() {
  const [fontLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_300Light,
    Poppins_500Medium,
    Poppins_600SemiBold
  })

  if(!fontLoaded) {
    return null
  }

  return (
    <View style={styles.container}>
      <FilmCard film={{
        id: 95396,
        name: 'Severance',
        bio: 'Mark leads a team of office workers whose memories have been surgically divided between their work and personal lives. When a mysterious colleague appears outside of work, it begins a journey to disc',
        image: 'https://image.tmdb.org/t/p/original/ixgFmf1X59PUZam2qbAfskx2gQr.jpg',
        media_type: 'TV',
        vote_average: 8.42
      }}></FilmCard>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
