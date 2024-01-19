import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';
import {Text} from '../../components/Themed';
import {Image} from "react-native";
import { Ionicons, FontAwesome } from '@expo/vector-icons';

import Colors from '../../constants/Colors';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

function LogoTitle() {
  return ( 
      <Image
      style={{ width: 40, height: 40,  marginLeft: 5 }}
      source={require('../../assets/images/quill3.png')}
    />
  );
}

function ProfilePicture() {
  return ( 
      <Image
      style={{ width: 40, height: 40,  marginLeft: 5, borderRadius: 100 }}
      source={require('../../assets/images/profile_pic.jpg')}
    />
  );
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerRight: () => (
            <Link href="/AboutModal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={22}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 20, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
          headerLeft: () => (
            <Link href="/Profile" asChild>
              <Pressable>
                {({ pressed }) => (
                  <Image
                  style={{ width: 40, height: 40,  marginLeft: 12, borderRadius: 100, opacity: pressed ? 0.5 : 1 }}
                  source={require('../../assets/images/profile_pic.jpg')}
                />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="Social"
        options={{
          title: 'Social',
          tabBarIcon: ({ color }) => <Ionicons name="people" size={30} color={color} />,
          headerLeft: () => (
            <Link href="/Profile" asChild>
              <Pressable>
                {({ pressed }) => (
                  <Image
                  style={{ width: 40, height: 40,  marginLeft: 12, borderRadius: 100, opacity: pressed ? 0.5 : 1 }}
                  source={require('../../assets/images/profile_pic.jpg')}
                />
                )}
              </Pressable>
            </Link>
          ),
          headerRight: () => (
            // search button
            <Link href="/Search" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="search"
                    size={22}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 20, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
              </Link>
          )
        }}
      />
      <Tabs.Screen
        name="ventures"
        options={{
          title: 'Ventures',
          tabBarIcon: ({ color }) => <FontAwesome name="map" size={24} color={color} />,
          headerRight: () => (
            <Link href="/Search" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="search"
                    size={22}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 20, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
          headerLeft: () => (
          <Link href="/Profile" asChild>
            <Pressable>
              {({ pressed }) => (
                <Image
                style={{ width: 40, height: 40,  marginLeft: 12, borderRadius: 100, opacity: pressed ? 0.5 : 1 }}
                source={require('../../assets/images/profile_pic.jpg')}
              />
              )}
            </Pressable>
          </Link>)
        }}
      />
    </Tabs>
  );
}
