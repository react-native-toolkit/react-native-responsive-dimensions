/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
  useResponsiveHeight,
  useResponsiveWidth,
  useResponsiveFontSize,
} from 'react-native-responsive-dimensions';

const App = () => {
  const requiredHeight = useResponsiveHeight(25);
  const requiredWidth = useResponsiveWidth(100);
  const requiredFontSize = useResponsiveFontSize(3);

  const responsiveStyles = {
    hooksResponsiveContainer: {
      height: requiredHeight,
      width: requiredWidth,
      backgroundColor: 'red',
    },
    hooksText: {
      color: 'white',
      fontSize: requiredFontSize,
    },
  };

  return (
    <SafeAreaView style={styles.appContainer}>
      <ScrollView>
        <View style={styles.legacyResponsiveContainer}>
          <Text style={styles.legacyText}>Responsive Height: 25</Text>
          <Text style={styles.legacyText}>Responsive Width: 100</Text>
          <Text style={styles.legacyText}>Responsive Font Size: 3</Text>
        </View>

        <View style={responsiveStyles.hooksResponsiveContainer}>
          <Text style={responsiveStyles.hooksText}>
            Responsive Hooks Height: 25
          </Text>
          <Text style={responsiveStyles.hooksText}>
            Responsive Hooks Width: 100
          </Text>
          <Text style={responsiveStyles.hooksText}>
            Responsive Hooks Font Size: 3
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  legacyResponsiveContainer: {
    height: responsiveHeight(25),
    width: responsiveWidth(100),
    backgroundColor: 'blue',
    justifyContent: 'flex-end',
  },
  legacyText: {
    color: 'white',
    fontSize: responsiveFontSize(3),
  },
});

export default App;
