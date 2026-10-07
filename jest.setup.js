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

jest.mock('react-native-vector-icons/Ionicons', () => 'Ionicons');
jest.mock('react-native-vector-icons/FontAwesome6', () => 'FontAwesome6');
jest.mock(
  'react-native-vector-icons/MaterialCommunityIcons',
  () => 'MaterialCommunityIcons',
);

if (typeof window !== 'undefined' && !window.dispatchEvent) {
  window.dispatchEvent = jest.fn();
}
