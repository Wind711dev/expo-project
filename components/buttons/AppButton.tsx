import { useEffect, useState } from 'react';
import { View } from 'react-native';
import Typo from '../Typo';
import Ripple, { RippleProps } from 'react-native-material-ripple';
import { ThemeColor, borderRadius, shadowStyles } from '../../assets/theme';
import { styles } from './AppButtonStyles';

export type ButtonVariant = 'filled' | 'outlined' | 'ghost';
export type ButtonSize = 'large' | 'medium' | 'small';
export type ButtonRounded = 'xlarge' | 'large' | 'medium' | 'small' | 'xsmall';
export type ButtonElevation = 0 | 1 | 2 | 3 | 4 | 5 | 6;
export type ButtonType =
  | 'filledPrimary'
  | 'filledSecondary'
  | 'filledSuccess'
  | 'filledWarning'
  | 'filledDanger'
  | 'filledInfo'
  //
  | 'outlinedPrimary'
  | 'outlinedSecondary'
  | 'outlinedSuccess'
  | 'outlinedWarning'
  | 'outlinedDanger'
  | 'outlinedInfo'
  //
  | 'ghostPrimary'
  | 'ghostSecondary'
  | 'ghostSuccess'
  | 'ghostWarning'
  | 'ghostDanger'
  | 'ghostInfo';

type KeyStyle = keyof typeof styles;
type KeyShadowStyle = keyof typeof shadowStyles;
type KeyBorderRadius = keyof typeof borderRadius;

interface AppButtonProps extends RippleProps {
  variant?: ButtonVariant;
  color?: ThemeColor;
  size?: ButtonSize;
  rounded?: ButtonRounded;
  elevation?: ButtonElevation;
  children: string;
}

export default function AppButton(props: AppButtonProps) {
  const [buttonType, setButtonType] = useState<ButtonType>('filledPrimary');
  const [buttonVariant, setButtonVariant] = useState<ButtonVariant>('filled');
  const [buttonColor, setButtonColor] = useState<ThemeColor>('primary');
  const [buttonSize, setButtonSize] = useState<ButtonSize>('medium');
  const [buttonElevation, setButtonElevation] = useState<ButtonElevation>(0);
  const [buttonRounded, setButtonRounded] = useState<KeyBorderRadius>('small');

  useEffect(() => {
    setButtonVariant(props.variant ?? 'filled');
  }, [props.variant]);

  useEffect(() => {
    setButtonColor(props.color ?? 'primary');
  }, [props.color]);

  useEffect(() => {
    const colorStyle = [
      buttonColor.charAt(0).toUpperCase(),
      buttonColor.slice(1)
    ].join('');
    const buttonStyle = (buttonVariant + colorStyle) as ButtonType;
    setButtonType(buttonStyle);
  }, [buttonVariant, buttonColor]);

  useEffect(() => {
    setButtonSize(props.size ?? 'medium');
  }, [props.size]);

  useEffect(() => {
    setButtonElevation(props.elevation ?? 0);
  }, [props.elevation]);

  useEffect(() => {
    setButtonRounded(props.rounded ?? 'small');
  }, [props.rounded]);
  return (
    <Ripple
      {...props}
      style={[
        styles.ripple,
        {
          borderRadius: borderRadius[buttonRounded as KeyBorderRadius]
        },
        shadowStyles[`level${buttonElevation}` as KeyShadowStyle],
        props.style
      ]}
    >
      <View
        style={[
          { borderRadius: borderRadius[buttonRounded as KeyBorderRadius] },
          styles.base,
          buttonVariant === 'filled' && styles.filledBase,
          buttonVariant === 'outlined' && styles.outlinedBase,
          buttonVariant === 'ghost' && styles.ghostBase,
          styles[buttonSize],
          styles[buttonType]
        ]}
      >
        <Typo style={[styles[`${buttonType}Text` as KeyStyle]]}>
          {props.children}
        </Typo>
      </View>
    </Ripple>
  );
}
