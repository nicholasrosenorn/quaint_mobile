import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  Switch,
  useColorScheme
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import {Text, View} from '../components/Themed';
import Colors from '../constants/Colors';

const SECTIONS = [
  {
    header: 'Preferences',
    icon: 'settings',
    items: [
      {
        icon: 'moon',
        color: '#707f8f',
        label: 'Dark Mode',
        value: false,
        type: 'boolean',
      },
      {
        icon: 'bell',
        color: '#D1C87C',
        label: 'Notifications',
        value: true,
        type: 'boolean',
      },
    ],
  },
  {
    header: 'Help',
    icon: 'help-circle',
    items: [
      { icon: 'flag', color: '#8590C8', label: 'Report Bug', type: 'link' },
      { icon: 'mail', color: '#D17C90', label: 'Contact Us', type: 'link' },
    ],
  },
  {
    header: 'Content',
    icon: 'align-center',
    items: [
      { icon: 'save', color: '#7CD1BD', label: 'Saved', type: 'link' },
      { icon: 'download', color: '#7C9ED1', label: 'Downloads', type: 'link' },
    ],
  },
];

export default function Example() {
  const colorScheme = useColorScheme();
  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.profile}>
          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}>
            <View style={styles.profileAvatarWrapper}>
              <Image
                alt=""
                source={require('../assets/images/profile_pic.jpg')}
                style={styles.profileAvatar}
              />

              <TouchableOpacity
                onPress={() => {
                  // handle onPress
                }}>
                <View style={styles.profileAction}>
                  <FeatherIcon color="#fff" name="edit-3" size={15} />
                </View>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>

          <View style={styles.profileBody}>
            <Text style={styles.profileName}>John Doe</Text>

            <Text style={styles.profileAddress}>
              123 Maple Street. Anytown, PA 17101
            </Text>
          </View>
        </View>

        {SECTIONS.map(({ header, items }) => (
          <View style={styles.section} key={header}>
            <Text style={styles.sectionHeader}>{header}</Text>
            {items.map(({ label, icon, type, value, color }, index) => {
              return (
                <TouchableOpacity
                  key={label}
                  onPress={() => {
                    // handle onPress
                  }}>
                  <View style={[styles.row, {borderColor:Colors[colorScheme ?? 'light'].text} ]}>
                    <View style={[styles.rowIcon, { backgroundColor: color }]}>
                      <FeatherIcon color="#fff" name={icon} size={18} />
                    </View>

                    <Text style={styles.rowLabel}>{label}</Text>

                    <View style={styles.rowSpacer} />

                    {type === 'boolean' && <Switch value={value} />}

                    {type === 'link' && (
                      <FeatherIcon
                        color={Colors[colorScheme ?? 'light'].text}
                        name="chevron-right"
                        size={22}
                      />
                    )}
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
  },
  section: {
    paddingHorizontal: 24,
  },
  sectionHeader: {
    paddingVertical: 12,
    fontSize: 12,
    fontWeight: '600',
    color: '#9e9e9e',
    textTransform: 'uppercase',
    letterSpacing: 1.1,
  },
  profile: {
    padding: 24,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileAvatar: {
    width: 72,
    height: 72,
    borderRadius: 9999,
  },
  profileAvatarWrapper: {
    position: 'relative',
  },
  profileAction: {
    position: 'absolute',
    right: -4,
    bottom: -10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 28,
    height: 28,
    borderRadius: 9999,
    backgroundColor: '#007bff',
  },
  profileName: {
    marginTop: 20,
    fontSize: 19,
    fontWeight: '600',
    textAlign: 'center',
  },
  profileAddress: {
    marginTop: 5,
    fontSize: 16,
    color: '#989898',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 50,
    borderRadius: 20,
    marginBottom: 12,
    paddingLeft: 12,
    paddingRight: 12,
	  borderWidth	: 1,
  },
  rowIcon: {
    width: 32,
    height: 32,
    borderRadius: 9999,
    marginRight: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowLabel: {
    fontSize: 17,
    fontWeight: '400',
  },
  rowSpacer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
});