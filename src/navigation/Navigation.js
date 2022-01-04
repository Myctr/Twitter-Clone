import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import AuthenticateStack from './AuthenticateStack';

const initialRoute = () => {
  //Burada uygulamanın hiç açılıp açılmadığı kontrol edilecek.
  return 'Auth';
};

const SwitchNavigator = createSwitchNavigator(
  {
    Auth: AuthenticateStack,
  },
  {
    initialRouteName: initialRoute(),
  },
);
export default createAppContainer(SwitchNavigator);
