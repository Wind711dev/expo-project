import { Toasts } from '@backpackapp-io/react-native-toast';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import notifee, {
  AndroidCategory,
  AndroidImportance,
  AuthorizationStatus,
} from '@notifee/react-native';
import messaging, {
  FirebaseMessagingTypes,
} from '@react-native-firebase/messaging'; // FirebaseMessagingTypes
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-reanimated';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import LoadingIndicator from '@/components/loading';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import { useColorScheme } from '@/components/useColorScheme';
import { useDeviceStore, useLoadingStore } from '@/store';

import '../global.css';

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

async function registerAppWithFCM(): Promise<string> {
  // explicit register is required for Ios, android can safely call this without any platform check
  await messaging().registerDeviceForRemoteMessages();
  const token = await messaging().getToken();
  return token;
}

async function checkNotificationPermission() {
  const settings = await notifee.getNotificationSettings();
  if (settings.authorizationStatus === AuthorizationStatus.AUTHORIZED) {
    console.log('Notification permissions has been authorized');
  } else if (settings.authorizationStatus === AuthorizationStatus.DENIED) {
    console.log('Notification permissions has been denied');
  }
}

async function checkChannels() {
  const channels = await notifee.getChannels();
  console.log('channels', channels);
  channels.forEach((c) => {
    if (c.id !== 'default-channel') {
      notifee.deleteChannel(c.id);
    }
  });
}

const channelId = 'default-channel';

async function onMessageReceived(
  message: FirebaseMessagingTypes.RemoteMessage,
) {
  console.log('onMessageReceived');
  // Request permissions (required for iOS)
  await notifee.requestPermission();

  // Create a channel (required for Android)
  await notifee.createChannel({
    id: channelId,
    name: 'Thông báo từ firebase',
    lights: false,
    vibration: true,
    importance: AndroidImportance.HIGH,
  });

  await notifee.displayNotification({
    title: message.notification?.title,
    body: message.notification?.body,
    android: {
      channelId,
      category: AndroidCategory.MESSAGE,
      importance: AndroidImportance.HIGH,
      pressAction: {
        id: 'mark-as-read',
      },
    },
  });
}

export default function RootLayout() {
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

  const { setToken } = useDeviceStore();

  useEffect(() => {
    checkNotificationPermission();
    checkChannels();
    (async () => {
      const deviceToken = await registerAppWithFCM();
      setToken(deviceToken);
    })();

    const unsubscribe = messaging().onMessage(onMessageReceived);

    return unsubscribe;
  }, [setToken]);

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const { isLoading } = useLoadingStore();
  const colorScheme = useColorScheme();

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={styles.container}>
        <GluestackUIProvider>
          <ThemeProvider
            value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
          >
            <Stack>
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
              <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
            </Stack>
            {isLoading && <LoadingIndicator />}
            <Toasts />
          </ThemeProvider>
        </GluestackUIProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
