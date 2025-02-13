import React, { useEffect, useRef } from 'react';
import { Animated, Dimensions, Easing, StyleSheet, View } from 'react-native';
import { theme } from '../../assets/theme';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    left: 0,
    top: 0,
    width,
    height
  },
  spinner: {
    width: 50,
    height: 50,
    borderWidth: 5,
    borderBottomColor: theme.light.primary,
    borderRightColor: theme.light.primary,
    borderLeftColor: theme.light.primary,
    borderTopColor: '#ffffff',
    borderRadius: 25
  }
});

export default function Loading() {
  const rotateValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const rotateAnimation = () => {
      rotateValue.setValue(0);
      Animated.timing(rotateValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true
      }).start(() => rotateAnimation());
    };

    rotateAnimation();
  }, [rotateValue]);

  const rotate = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.spinner, { transform: [{ rotate }] }]} />
    </View>
  );
}
