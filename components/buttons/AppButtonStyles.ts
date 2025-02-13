import { StyleSheet } from 'react-native';
import { theme } from '../../assets/theme';
import { hexToRgba } from '../../utilities';

export const styles = StyleSheet.create({
  //
  ripple: {
    backgroundColor: '#ffffff',

    overflow: 'hidden'
  },
  base: {},
  //
  filledBase: {
    borderWidth: 1
  },
  filledPrimary: {
    backgroundColor: theme.light.primary,
    borderColor: theme.light.primary
  },
  filledPrimaryText: {
    color: '#ffffff'
  },
  filledSecondary: {
    backgroundColor: theme.light.secondary,
    borderColor: theme.light.secondary
  },
  filledSecondaryText: {
    color: '#ffffff'
  },
  filledSuccess: {
    backgroundColor: theme.light.success,
    borderColor: theme.light.success
  },
  filledSuccessText: {
    color: '#ffffff'
  },
  filledWarning: {
    backgroundColor: theme.light.warning,
    borderColor: theme.light.warning
  },
  filledWarningText: {
    color: '#ffffff'
  },
  filledDanger: {
    backgroundColor: theme.light.danger,
    borderColor: theme.light.danger
  },
  filledDangerText: {
    color: '#ffffff'
  },
  filledInfo: {
    backgroundColor: theme.light.info,
    borderColor: theme.light.info
  },
  filledInfoText: {
    color: '#ffffff'
  },

  //
  outlinedBase: {
    borderWidth: 1,
    backgroundColor: '#ffffff'
  },
  outlinedPrimary: {
    borderColor: theme.light.primary
  },
  outlinedPrimaryText: {
    color: theme.light.primary
  },
  outlinedSecondary: {
    borderColor: theme.light.secondary
  },
  outlinedSecondaryText: {
    color: theme.light.secondary
  },
  outlinedSuccess: {
    borderColor: theme.light.success
  },
  outlinedSuccessText: {
    color: theme.light.success
  },
  outlinedWarning: {
    borderColor: theme.light.warning
  },
  outlinedWarningText: {
    color: theme.light.warning
  },
  outlinedDanger: {
    borderColor: theme.light.danger
  },
  outlinedDangerText: {
    color: theme.light.danger
  },
  outlinedInfo: {
    borderColor: theme.light.info
  },
  outlinedInfoText: {
    color: theme.light.info
  },
  outlinedText: {},

  //
  ghostBase: {},
  ghostPrimary: {
    backgroundColor: hexToRgba(theme.light.primary, 0.1)
  },
  ghostPrimaryText: {
    color: theme.light.primary
  },
  ghostSecondary: {
    backgroundColor: hexToRgba(theme.light.secondary, 0.1)
  },
  ghostSecondaryText: {
    color: theme.light.secondary
  },
  ghostSuccess: {
    backgroundColor: hexToRgba(theme.light.success, 0.1)
  },
  ghostSuccessText: {
    color: theme.light.success
  },
  ghostWarning: {
    backgroundColor: hexToRgba(theme.light.warning, 0.1)
  },
  ghostWarningText: {
    color: theme.light.warning
  },
  ghostDanger: {
    backgroundColor: hexToRgba(theme.light.danger, 0.1)
  },
  ghostDangerText: {
    color: theme.light.danger
  },
  ghostInfo: {
    backgroundColor: hexToRgba(theme.light.info, 0.1)
  },
  ghostInfoText: {
    color: theme.light.info
  },

  //
  large: {
    paddingVertical: 9,
    paddingHorizontal: 12
  },
  medium: {
    paddingVertical: 3,
    paddingHorizontal: 12
  },
  small: {
    paddingVertical: 3,
    paddingHorizontal: 4
  }
});
