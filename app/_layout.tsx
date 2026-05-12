import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Image, StyleSheet, Text, View } from 'react-native';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
            header: () => (
              <View style={styles.bannerContainer}>
                <Image source={require('../assets/images/icon.png')} style={styles.bannerImage} />
                <Text style={styles.bannerText}>FIRST AID IN EMERGENCY</Text>
              </View>
            ),
          }}
        />
        {/* require('../assets/images/poisoning.png') */}
        <Stack.Screen
          name="guide/[id]"
          options={{
            title: 'First Aid Guide',
            headerShown: false,
          }}
        />
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  bannerContainer: {
    backgroundColor: Colors.light.tint,
    padding: 16,
    alignItems: 'center',
  },
  bannerImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  bannerText: {
    color: Colors.light.tint,
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
});
