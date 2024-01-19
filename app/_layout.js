import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack, Link } from 'expo-router';
import { useEffect } from 'react';
import {useColorScheme, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Ionicons, FontAwesome, Feather } from '@expo/vector-icons';
import { Text } from '../components/Themed';

import Colors from '../constants/Colors';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [isCompletedTask, setIsCompletedTask] = useState([false, false, false]);
  const [buttonState, setButtonState] = useState(0);
  const [tempState, setTempState] = useState(true);

  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav tempState={tempState}/>;
}

function RootLayoutNav({isCompletedTask, setIsCompletedTask, buttonState, setButtonState}) {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} buttonState={buttonState} setButtonState={setButtonState} isCompletedTask={isCompletedTask} setIsCompletedTask={setIsCompletedTask} />
        <Stack.Screen name="AboutModal" options={{ presentation: 'modal', headerShown: false }} />
        <Stack.Screen name="DeclutterModal" options={{ presentation: 'modal', headerShown: false }} isCompletedTask={isCompletedTask} setIsCompletedTask={setIsCompletedTask}/>
        <Stack.Screen name="MindfulnessModal" options={{ presentation: 'modal', headerShown: false }} />
        <Stack.Screen name="Profile" options={{ 
          title: '',
          headerLeft: () => (
            <Link href="../">
              <Ionicons name="arrow-back" size={30} color={Colors[colorScheme ?? 'light'].text} />
            </Link>
          ) }}/>
        <Stack.Screen name="NewPostForm" options={{ 
          title: '',
          headerLeft: () => (
            <Link href="../">
              <Feather name="x" size={30} color={Colors[colorScheme ?? 'light'].text} />
            </Link>
          ),
          headerRight: () => (
            <Link href="/(tabs)/Social">
                <Text style={{fontSize: 20}}>Post</Text>
            </Link>
          ) }}
        />
        <Stack.Screen name="Search" options={{ 
          title: '',
          headerLeft: () => (
            <Link href="../">
              <Ionicons name="arrow-back" size={30} color={Colors[colorScheme ?? 'light'].text} />
            </Link>
          ),
           }}
        />
        <Stack.Screen name="Stats" options={{ 
          title: '',
          headerLeft: () => (
            <Link href="../">
              <Ionicons name="arrow-back" size={30} color={Colors[colorScheme ?? 'light'].text} />
            </Link>
          ),
           }}
        />
        <Stack.Screen name="Settings" options={{ 
          title: '',
          headerLeft: () => (
            <Link href="../">
              <Ionicons name="arrow-back" size={30} color={Colors[colorScheme ?? 'light'].text} />
            </Link>
          ),
           }}
        />
        <Stack.Screen name="Comments" options={{ 
          title: '',
          headerLeft: () => (
            <Link href="../">
              <Ionicons name="arrow-back" size={30} color={Colors[colorScheme ?? 'light'].text} />
            </Link>
          ),
           }}
        />
      </Stack>
    </ThemeProvider>
  );
}
