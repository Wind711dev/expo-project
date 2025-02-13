import { useMemo } from 'react';
import { TextProps, Text, StyleSheet } from 'react-native';

type FontWeight =
  | 'Thin' // 100
  | 'ExtraLight' // 200
  | 'Light' // 300
  | 'Regular' // 400 (also "Normal")
  | 'Medium' // 500
  | 'SemiBold' // 600 (also "DemiBold")
  | 'Bold' // 700
  | 'ExtraBold' // 800
  | 'Black'; // 900

type FontStyle = 'Italic' | '';

interface ParagraphProps extends TextProps {
  fWeight?: FontWeight;
  fStyle?: FontStyle;
}

export default function Typo(props: ParagraphProps) {
  const fontFamily = useMemo(() => {
    return 'nunito' + (props.fWeight ?? 'Medium') + (props.fStyle ?? '');
  }, [props.fWeight, props.fStyle]) as keyof typeof styles;

  return (
    <Text {...props} style={[props.style, styles[fontFamily]]}>
      {props.children}
    </Text>
  );
}

const styles = StyleSheet.create({
  nunitoBlack: {
    fontFamily: 'Nunito-Black'
  },
  nunitoBlackItalic: {
    fontFamily: 'Nunito-BlackItalic'
  },
  nunitoBold: {
    fontFamily: 'Nunito-Bold'
  },
  nunitoBoldItalic: {
    fontFamily: 'Nunito-BoldItalic'
  },
  nunitoExtraBold: {
    fontFamily: 'Nunito-ExtraBold'
  },
  nunitoExtraBoldItalic: {
    fontFamily: 'Nunito-ExtraBoldItalic'
  },
  nunitoExtraLight: {
    fontFamily: 'Nunito-ExtraLight'
  },
  nunitoExtraLightItalic: {
    fontFamily: 'Nunito-ExtraLightItalic'
  },
  nunitoItalic: {
    fontFamily: 'Nunito-Italic'
  },
  nunitoLight: {
    fontFamily: 'Nunito-Light'
  },
  nunitoLightItalic: {
    fontFamily: 'Nunito-LightItalic'
  },
  nunitoMedium: {
    fontFamily: 'Nunito-Medium'
  },
  nunitoMediumItalic: {
    fontFamily: 'Nunito-MediumItalic'
  },
  nunitoRegular: {
    fontFamily: 'Nunito-Regular'
  },
  nunitoSemiBold: {
    fontFamily: 'Nunito-SemiBold'
  },
  nunitoSemiBoldItalic: {
    fontFamily: 'Nunito-SemiBoldItalic'
  }
});
