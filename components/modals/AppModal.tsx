import {
  Modal,
  ModalProps,
  NativeSyntheticEvent,
  NativeTouchEvent,
  StyleSheet,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import { borderRadius, shadowStyles, theme } from '../../assets/theme';
import Typo from '../Typo';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,.3)'
  },
  content: {
    width: '50%',
    ...shadowStyles.level6
  },
  title: {
    color: '#fff',
    paddingVertical: 5,
    paddingHorizontal: 10
  },
  body: {
    minHeight: 100,
    padding: 10,
    borderBottomLeftRadius: borderRadius.medium,
    borderBottomRightRadius: borderRadius.medium,
    backgroundColor: '#fff'
  }
});

interface AppModalProps extends ModalProps {
  title: JSX.Element | string;
  onClose?: () => void;
}

export default function AppModal(props: AppModalProps) {
  const onPress = () => {
    props?.onClose?.();
  };

  const onPressInside = (event: NativeSyntheticEvent<NativeTouchEvent>) => {
    event.stopPropagation();
  };

  return (
    <Modal animationType="fade" transparent={true} {...props}>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.container}>
          <TouchableWithoutFeedback onPress={onPressInside}>
            <View style={styles.content}>
              <View
                style={{
                  backgroundColor: theme.light.primary,
                  borderTopLeftRadius: borderRadius.medium,
                  borderTopRightRadius: borderRadius.medium
                }}
              >
                <Typo style={styles.title}>{props.title}</Typo>
              </View>
              <View style={styles.body}>{props.children}</View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
