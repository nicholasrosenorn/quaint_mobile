import React from 'react';
import { StyleSheet, SafeAreaView, useColorScheme } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { FontAwesome6 } from '@expo/vector-icons';
import { View, Text } from '../components/Themed';
import Colors from '../constants/Colors';

export default function Stats() {
  const colorScheme = useColorScheme();
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>Account Statistics</Text>

        <View style={styles.stats}>
          <View style={styles.statsRow}>
            <View style={styles.statsItem}>
              <View style={styles.statsItemIcon}>
                <FeatherIcon color="#fff" name="users" size={22} />
              </View>

              <View>
                <Text style={styles.statsItemLabel}>Clients</Text>

                <Text style={[styles.statsItemValue, {color: Colors[colorScheme ?? 'light'].text}]}>832</Text>
              </View>
            </View>

            <View style={styles.statsItem}>
              <View style={styles.statsItemIcon}>
                <FeatherIcon color="#fff" name="grid" size={22} />
              </View>

              <View>
                <Text style={styles.statsItemLabel}>Views</Text>

                <Text style={[styles.statsItemValue, {color: Colors[colorScheme ?? 'light'].text}]}>8</Text>
              </View>
            </View>
          </View>

          <View style={styles.statsRow}>
            <View style={styles.statsItem}>
              <View style={styles.statsItemIcon}>
                <FeatherIcon color="#fff" name="archive" size={22} />
              </View>

              <View>
                <Text style={styles.statsItemLabel}>Projects</Text>

                <Text style={[styles.statsItemValue, {color: Colors[colorScheme ?? 'light'].text}]}>22</Text>
              </View>
            </View>

            <View style={styles.statsItem}>
              <View style={styles.statsItemIcon}>
                <FeatherIcon color="#fff" name="columns" size={22} />
              </View>

              <View>
                <Text style={styles.statsItemLabel}>Boards</Text>

                <Text style={[styles.statsItemValue, {color: Colors[colorScheme ?? 'light'].text}]}>48</Text>
              </View>
            </View>
          </View>

          <View style={styles.statsRow}>
            <View style={styles.statsItem}>
              <View style={styles.statsItemIcon}>
                <FeatherIcon color="#fff" name="list" size={22} />
              </View>

              <View>
                <Text style={styles.statsItemLabel}>Active Streak</Text>

                <Text style={[styles.statsItemValue, {color: Colors[colorScheme ?? 'light'].text}]}>83</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 12,
  },
  stats: {
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  statsRow: {
    flexDirection: 'row',
    marginHorizontal: -6,
  },
  statsItem: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginHorizontal: 6,
    marginBottom: 12,
  },
  statsItemIcon: {
    backgroundColor: '#7CD1BD',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 46,
    height: 46,
    marginRight: 8,
    borderRadius: 8,
  },
  statsItemLabel: {
    fontSize: 15,
    fontWeight: '500',
    color: '#8e8e93',
    marginBottom: 2,
  },
  statsItemValue: {
    fontSize: 22,
    fontWeight: '600',
  },
});