import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import AuthenticateStack from './AuthenticateStack';
import AppBottomTabs from './AppBottomTabs';

const initialRoute = () => {
  //Burada uygulamanın hiç açılıp açılmadığı kontrol edilecek.
  return 'Auth';
};

const SwitchNavigator = createSwitchNavigator(
  {
    Auth: AuthenticateStack,
    App: AppBottomTabs,
  },
  {
    initialRouteName: initialRoute(),
  },
);
export default createAppContainer(SwitchNavigator);
