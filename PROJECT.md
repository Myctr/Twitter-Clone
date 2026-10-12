# X Clone — Project Overview

A React Native recreation of the X (formerly Twitter) mobile interface. It covers the
onboarding flow — welcome, sign in, password reset, registration — and the main app with
five tabs: Home, Explore, Grok, Notifications and Messages.

The project is a study clone. Its only brand artwork is a single logo image supplied by
the project owner, and no icon font or bundled asset is taken from the X apps. The UI copy
is Turkish, the code is written in English.

## Features

- **Onboarding** — welcome screen with the brand mark, sign in (account field plus a
  password field with visibility toggle), password reset with a sent-confirmation state,
  and registration (username, password and date of birth through a native date picker).
- **Home** — timeline with the "Sizin için" / "Takip edilenler" tabs, post cards with
  local like and repost state, and a floating composer button.
- **Explore** — search field, horizontally scrollable category tabs, today's headlines
  and a trends list.
- **Grok** — prompt suggestions, an in-memory conversation history and a composer.
- **Notifications** — tabs for all, verified and mentions, with an empty state.
- **Messages** — searchable conversation list with an empty state.
- **Drawer** — profile header with follower counts, navigation shortcuts and a
  "Lights out" switch bound to the theme.
- **Theming** — every screen resolves its colours and typography from one provider and
  follows the light/dark toggle.

## Tech stack

| Area | Choice |
| ---- | ------ |
| Runtime | React Native 0.87.1, React 19.3, Hermes, New Architecture |
| Navigation | React Navigation 7 (native 7.5, stack 7.12, bottom tabs 7.20) |
| Native modules | gesture handler 3.3, safe-area-context 5.10, screens 4.28, date picker 5.0 |
| Icons | react-native-vector-icons 10.3 (Ionicons, FontAwesome6 Brands) |
| Tooling | Jest 29, ESLint 8.57, patch-package 8.0, Node.js 22+ |

## Project structure

```
App.js                     navigation container, theme provider, status bar
index.js                   React Native entry point
src/
  theme/                   colour, spacing, radius and typography tokens + provider
  components/              reusable pieces (avatar, buttons, text field, post card, ...)
  scenes/
    Auth/                  welcome, sign in, password reset, registration
    App/                   the five tab screens
  navigation/              root stack, bottom tabs, drawer provider
  data.js                  fixtures for the feed, trends, news, notifications and chats
  assets/images/           logo and sample media
android/                   Gradle project, adaptive app icon, bundled icon fonts
ios/                       Xcode project, asset catalog, CocoaPods integration
patches/                   patch-package fixes applied on install
```

## Design system

`src/theme/index.js` exports `ThemeProvider`, `useTheme`, `palettes`, `spacing`, `radius`
and `typography`. Components never hardcode colours; they resolve them on every render:

```js
const {colors, spacing, typography} = useTheme();
```

The dark and light palettes share one set of token names — `background`, `surface`,
`elevated`, `border`, `text`, `textMuted`, `textInverse`, `accent`, `accentPressed`,
`like`, `repost`, `danger`, `overlay` and `skeleton` — so a screen stays theme-aware
without branching. Spacing runs from `xs` (4) to `xxl` (32), radii from `sm` (8) to
`pill`, and typography from `caption` (13) to `brand` (32). The selected mode is kept in
memory; it is not persisted yet.

## Navigation

`src/navigation/AuthenticateStack.js` is the root stack: `Welcome → PreLogin → Login`,
`Forgot`, `PreRegister → Register` and finally `App`. The `App` screen mounts the bottom
tab navigator inside the drawer provider, so the drawer is reachable from every tab.

## Data layer

`src/data.js` holds every fixture the screens render: `currentUser`, the default exported
post list, and the named exports `trends`, `news`, `notifications` and `conversations`.
Replacing it with an API client only requires keeping those shapes.

## Branding and assets

- `src/assets/images/x_logo.png` (250 px, transparent) is the single source of the brand
  mark. `XLogo` renders it with `tintColor`, so it follows the active palette.
- The app icons are generated from that image: an opaque 1024 px icon for iOS, and for
  Android an adaptive icon (`mipmap-anydpi-v26`, black background with the mark as the
  foreground) plus the legacy `ic_launcher` and `ic_launcher_round` bitmaps for API 24-25.
- Only the icon fonts the app uses are shipped: `Ionicons.ttf` and
  `FontAwesome6_Brands.ttf`. On Android they sit in `android/app/src/main/assets/fonts`,
  on iOS the `RNVectorIcons` pod copies them and `Info.plist` registers them.
- `assets/fonts/Helvetica.ttf` stays registered for the interface font.

## Scripts

```bash
npm install        # also applies the patches in patches/
npm start          # Metro bundler
npm run ios        # build and run on iOS
npm run android    # build and run on Android
npm test           # jest
npm run lint       # eslint
```

## Native notes

- **iOS** — deployment target 15.1, CocoaPods 1.13+ (`pod install` inside `ios/`) and the
  `UIScene` lifecycle that iOS 26 requires. The Swift entry point lives in
  `ios/twitterclone/AppDelegate.swift`.
- **Android** — Gradle needs JDK 17 or newer on `JAVA_HOME`
  (`export JAVA_HOME="/Applications/Android Studio.app/Contents/jbr/Contents/Home"`),
  compileSdk 37, minSdk 24 and NDK 27.1.
- **Patched dependency** — `patches/react-native-date-picker+5.0.13.patch` is applied by
  `patch-package` on every install; without it the native builds fail on React Native 0.87.

## Repository metadata

Suggested description:

> A React Native recreation of the X interface: onboarding, a five-tab home experience and
> a token-driven design system. Study clone — no proprietary artwork or brand assets.

Suggested topics:

`react-native` · `react` · `javascript` · `x-clone` · `ui-clone` · `mobile-app` · `ios` ·
`android` · `cross-platform` · `react-navigation` · `design-system` · `dark-mode` ·
`new-architecture` · `vector-icons`

## License

Released under the [MIT License](LICENSE).

## Disclaimer

Educational project. The X name and mark belong to their respective owners; this repository
is not affiliated with or endorsed by them.
