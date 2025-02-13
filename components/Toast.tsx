import React from 'react';
import { resolveValue, Toast } from '@backpackapp-io/react-native-toast';
import { borderRadius, theme, ThemeColor } from '../assets/theme';
import { View, Dimensions, StyleSheet } from 'react-native';
import { Typo } from '../components';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useMemo } from 'react';

export type CustomToastType = ThemeColor;

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    width: width * 0.9,
    borderRadius: borderRadius.medium,
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  icon: {
    marginRight: 10,
    width: 20,
    textAlign: 'center'
  }
});

export default function CustomToast(
  props: Toast & { customToastType?: CustomToastType }
) {
  const iconName = useMemo(() => {
    switch (props.customToastType) {
      case 'success':
        return 'check';
      case 'danger':
        return 'warning';
      default:
        return 'info';
    }
  }, [props.customToastType]);

  return (
    <View style={styles.container}>
      <Icon
        name={iconName}
        size={20}
        style={[
          styles.icon,
          { color: theme.light[props.customToastType ?? 'info'] }
        ]}
      />
      <Typo
        style={{
          color: theme.light[props.customToastType ?? 'info']
        }}
      >
        {resolveValue(props.type, props.message)}
      </Typo>
    </View>
  );
}
