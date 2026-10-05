jest.mock('react-native-gesture-handler', () => {
  const React = require('react');
  const {View} = require('react-native');
  const passthrough = props => React.createElement(View, props);
  return {
    GestureHandlerRootView: passthrough,
    PanGestureHandler: passthrough,
    NativeViewGestureHandler: passthrough,
    TapGestureHandler: passthrough,
    LongPressGestureHandler: passthrough,
    FlingGestureHandler: passthrough,
    ForceTouchGestureHandler: passthrough,
    RotationGestureHandler: passthrough,
    PinchGestureHandler: passthrough,
    Swipeable: passthrough,
    DrawerLayout: passthrough,
    State: {},
    Directions: {},
    createNativeWrapper: Component => Component,
  };
});

jest.mock('react-native-nav', () => {
  const React = require('react');
  const {View} = require('react-native');
  const NavBar = ({children}) => React.createElement(View, null, children);
  const NavGroup = ({children}) => React.createElement(View, null, children);
  return {__esModule: true, default: NavBar, NavGroup};
});

jest.mock('react-native-navigation-bar-color', () => {
  const changeNavigationBarColor = jest.fn();
  return {
    __esModule: true,
    default: changeNavigationBarColor,
    hideNavigationBar: jest.fn(),
    showNavigationBar: jest.fn(),
  };
});

if (typeof window !== 'undefined' && !window.dispatchEvent) {
  window.dispatchEvent = jest.fn();
}
