import { toast } from '@backpackapp-io/react-native-toast';
import { CustomToast, CustomToastType } from '../components';

export default function useToast() {
  const addToast = (message: string, type?: CustomToastType) => {
    toast(message, {
      customToast: toastProps =>
        CustomToast({ ...toastProps, customToastType: type })
    });
  };

  return {
    add: addToast
  };
}
