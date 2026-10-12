# X Clone

A React Native recreation of the X (formerly Twitter) mobile interface: the onboarding flow
(welcome, sign in, password reset, registration) followed by a five-tab app with Home,
Explore, Grok, Notifications and Messages.

Dark and light themes come from a single token layer and the UI copy is Turkish. The
project is a study clone: its only brand artwork is one supplied logo image, and no icon
font or bundled asset is taken from the X apps.

Architecture, design system and asset details live in [PROJECT.md](PROJECT.md).

## Features

- Onboarding with sign in, password reset and registration through a native date picker
- Home timeline with post cards and a floating composer
- Explore with search, category tabs, headlines and trends
- Grok assistant screen, notifications and a searchable inbox
- Drawer with profile stats and a light/dark switch

## Requirements

| Platform | Tooling                                                                      |
| -------- | ---------------------------------------------------------------------------- |
| Both     | Node.js 22 or newer with npm                                                 |
| iOS      | Xcode 16.1+ and CocoaPods 1.13+                                              |
| Android  | JDK 17+ and the Android SDK (platform 37, build-tools 37, NDK 27.1.12297006) |

## Install

```bash
npm install
```

The install also applies the fix stored in `patches/` through `patch-package`. It is
required: without it the native builds fail on React Native 0.87.

## iOS

```bash
cd ios && pod install && cd ..
npm run ios
```

The project targets iOS 15.1 and adopts the `UIScene` lifecycle, which iOS 26 and newer
require.

## Android

Gradle needs a JDK 17 or newer on `JAVA_HOME`. Android Studio already ships a compatible
one:

```bash
export JAVA_HOME="/Applications/Android Studio.app/Contents/jbr/Contents/Home"
npm run android
```

## Tests and linting

```bash
npm test
npm run lint
```

## Patched dependencies

`patches/react-native-date-picker+5.0.13.patch` keeps the native date picker building on
React Native 0.87: it imports the React core headers through the prebuilt module, removes an
invalid iOS module provider and uses the proguard file Android Gradle Plugin 9 still
supports.

## License

Released under the [MIT License](LICENSE). The X name and mark belong to their respective
owners; this project is not affiliated with or endorsed by them.
