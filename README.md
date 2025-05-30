# React Native Guide

## Index

1. [Getting Started](#1-getting-started)
   - [Creating a React Native Application](#11-creating-a-react-native-application)
   - [Running the Application](#12-running-the-application)
2. [React Native basics](#2-react-native-basics)
   - [React Native components](#21-react-native-components)
   - [Expo elements](#23-expo-elements)
   - [Styling React Native apps](#24-styling-react-native-apps)
     - [Layouts and Flexbox](#241-layouts-and-flexbox)
   - [Handling events](#25-handling-events)
   - [FlatList](#26-flatlist)
   - [Pressable](#27-pressable)
3. [Debugging React Native Apps](#3-debugging-react-native-apps)
   - [See console and network traffic in browser](#31-see-console-and-network-traffic-in-browser)
   - [React DevTools](#32-react-devtools)
4. [Deeper dive into components, layouts and styling](#4-deeper-dive-into-components-layouts-and-styling)
   - [Creating a custom button](#41-creating-a-custom-button)
   - [Shadows in Android and iOS](#42-shadows-in-android-and-ios)
   - [Linear gradients](#43-linear-gradients)
   - [Background images](#44-background-images)
   - [Alerts](#45-alerts)
   - [SafeAreaView](#46-safeareaview)
   - [Managing colors globally](#47-managing-colors-globally)
   - [Using cascading styles](#48-using-cascading-styles)
     - [Style arrays](#481-style-arrays)
   - [Buttons with icons](#49-buttons-with-icons)
     - [Using Expo Vector Icons](#491-using-expo-vector-icons)
   - [Custom fonts](#410-custom-fonts)
   - [Expo AppLoading](#411-expo-apploading)
5. [Building adaptive user interfaces](#5-building-adaptive-user-interfaces)
   - [Dimensions API](#51-dimensions-api)
   - [Screen orientations](#52-screen-orientations)
   - [UseWindowDimensions](#53-usewindowdimensions)
   - [KeyboardAvoidingView](#54-keyboardavoidingview)
   - [Adapting interface depending on Platform](#55-adapting-interface-depending-on-platform)
     - [Using the Platform module](#551-using-the-platform-module)
     - [Using Platform.select](#552-using-platformselect)
   - [Styling the status bar](#56-styling-the-status-bar)
6. [React Navigation](#6-react-navigation)
   - [Installation](#61-installation)
   - [Navigation Container](#62-navigation-container)
   - [Navigators](#63-navigators)
     - [Stack Navigator](#631-stack-navigator)
       - [Navigation inside nested navigators components](#6311-navigation-inside-nested-navigators-components)
       - [Sending parameters to a screen](#6312-sending-parameters-to-a-screen)
       - [Changing header properties](#6313-changing-header-properties)
       - [native-stack vs stack](#6315-native-stack-vs-stack)
     - [Drawer Navigator](#632-drawer-navigator)
       - [Configuring the drawer](#6321-configuring-the-drawer)
       - [Opening the drawer](#6322-opening-the-drawer)
     - [Bottom Tab Navigator](#633-bottom-tab-navigator)
     - [Nesting Navigators](#634-nesting-navigators)
7. [App state with Redux and Context API](#7-app-state-with-redux-and-context-api)
   - [Context API](#71-context-api)
   - [Redux](#72-redux)
8. [Handling user input](#8-handling-user-input)
   - [Custom text input](#81-custom-text-input)
   - [Handling user input in a generic way](#82-handling-user-input-in-a-generic-way)
   - [Managing form state and submission](#83-managing-form-state-and-submission)
9. [Sending HTTP requests](#9-sending-http-requests)
   - [Sending a POST request](#91-sending-a-post-request)
   - [Sending a GET request](#92-sending-a-get-request)
   - [Sending a PUT request](#93-sending-a-put-request)
   - [Sending a DELETE request](#94-sending-a-delete-request)
   - [Managing the Loading state and ActivityIndicator](#95-managing-the-loading-state-and-activityindicator)
   - [Handling request errors](#96-handling-request-errors)

## 1. Getting Started

This guide is based on this Udemy course: [React Native - The Practical Guide [2025]
](https://www.udemy.com/course/react-native-the-practical-guide)

### 1.1 Creating a React Native Application

To create a new React Native application using Expo, run:

```bash
npx create-expo-app --template blank [projectName]
```

Expo is a framework and platform built around React Native that simplifies development.

#### Project Structure

```
my-project/
├── assets/          # Images, fonts, and other static files
├── components/      # Reusable React components
├── screens/         # Screen components
├── App.js          # Root component
├── package.json    # Project dependencies and scripts
└── app.json        # Expo configuration
```

### 1.2 Running the Application

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm start
```

#### Running on Simulators/Emulators

- Press `i` to open iOS simulator (requires macOS and Xcode)
- Press `a` to open Android emulator (requires Android Studio)
- Press `w` to open in web browser

#### Running on Physical Devices

1. Install Expo Go app on your device
2. Scan QR code from terminal
3. App will load on your device

## 2. React Native basics

### 2.1 React Native components

To build React Native apps we should use core components provided by React Native that will be translated into native Android and iOS components:

| Web browser       | React Native JSX                                                             | Function                                                                                                                                                                                                                                                        |
| ----------------- | ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \<div>            | [\<View>](https://reactnative.dev/docs/view)                                 | Is a container that supports layout with flexbox, style, some touch handling, and accessibility controls.                                                                                                                                                       |
| \<input>          | [\<TextInput>](https://reactnative.dev/docs/textinput)                       | For inputting text into the app via a keyboard.                                                                                                                                                                                                                 |
| \<button>         | [\<Button>](https://reactnative.dev/docs/button)                             | A basic button component. **Style prop can't be applied to buttons.**                                                                                                                                                                                           |
| \<p>              | [\<Text>](https://reactnative.dev/docs/text)                                 | For displaying text                                                                                                                                                                                                                                             |
| \<img>            | [\<Image>](https://reactnative.dev/docs/image)                               | Component for displaying different types of images, including network images, static resources, temporary local images, and images from local disk.                                                                                                             |
| \<ul>, \<ol>      | [\<FlatList>](https://reactnative.dev/docs/flatlist)                         | A performant interface for rendering basic, flat lists. **Requires "data" and "renderItem" props.**                                                                                                                                                             |
| \<section> \<div> | [\<View>](https://reactnative.dev/docs/view)                                 | Same as \<div> or \<section> equivalent                                                                                                                                                                                                                         |
| ...               | [\<ScrollView>](https://reactnative.dev/docs/scrollview)                     | Wraps platform ScrollView while providing integration with touch locking "responder" system. **Keep in mind that ScrollViews must have a bounded height in order to work** [many configurations can be applied to it.](https://reactnative.dev/docs/scrollview) |
| ...               | [\<Pressable>](https://reactnative.dev/docs/pressable)                       | It is a Core Component wrapper that can detect various stages of press interactions on any of its defined children.                                                                                                                                             |
| ...               | [\<Modal>](https://reactnative.dev/docs/modal)                               | It is a basic way to present content above an enclosing view.                                                                                                                                                                                                   |
| ...               | [\<ImageBackground>](https://reactnative.dev/docs/imagebackground)           | A component that displays an image as the background for its children.                                                                                                                                                                                          |
| ...               | [\<KeyboardAvoidingView>](https://reactnative.dev/docs/keyboardavoidingview) | This component will automatically adjust its height, position, or bottom padding based on the keyboard height to remain visible while the virtual keyboard is displayed.                                                                                        |
| ...               | [\<ActivityIndicator>](https://reactnative.dev/docs/activityindicator)       | Displays a circular loading indicator.                                                                                                                                                                                                                          |

                                                                                        |

You can check all core components in this [link](https://reactnative.dev/docs/components-and-apis).

To use this components, you must import them:

```jsx
import { StyleSheet, Text, View } from "react-native";
```

### 2.3 Expo elements

| Element                                                                         | Function                                                                                                                                                                                             |
| ------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [\<StatusBar>](https://docs.expo.dev/versions/latest/sdk/status-bar/)           | A component and imperative interface to control the app status bar to change its text color, background color, hide it, make it translucent or opaque, and apply animations to any of these changes. |
| [\<LinearGradient>](https://docs.expo.dev/versions/latest/sdk/linear-gradient/) | Provides a native React view that transitions between multiple colors in a linear direction. Needs to be installed with `expo install expo-linear-gradient`                                          |
| [\<AppLoading>](https://docs.expo.dev/versions/latest/sdk/app-loading/)         | A simple way to add a loading screen to your app.                                                                                                                                                    |
| [expo-font](https://docs.expo.dev/versions/latest/sdk/font/)                    | Allows you to load custom fonts in your app. Install with `expo install expo-font`.                                                                                                                  |
| [@expo/vector-icons](https://docs.expo.dev/guides/icons/)                       | A comprehensive icon library that comes pre-installed with Expo projects.                                                                                                                            |

### 2.4 Styling React Native apps

When styling React Native applications we don't use CSS, we use some props provided by React and we can work with:

- Inline styling:

```jsx
<Text style={{ margin: 16, padding: 16 }}> Example </Text>
```

- StyleSheet Objects: First we need to define a style and then apply it to a component:

```jsx
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    margin: 16,
    padding: 16,
  },
});
```

```jsx
<View style={styles.container}>
  <Text style={styles.text}> Example </Text>
</View>
```

#### 2.4.1 Layouts and Flexbox

It's very similar to CSS:

```jsx
const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },
});
```

You can check all properties [here](https://reactnative.dev/docs/flexbox).

### 2.5 Handling events

Events are handled the same way as in React:

```jsx
const [enteredGoalText, setEnteredGoalText] = useState("");

function goalInputHandler(enteredText) {
  setEnteredGoalText(enteredText);
}

function addGoalHandler() {
  console.log(enteredGoalText);
}
```

```jsx
<TextInput
  style={styles.textInput}
  placeholder="Your course goal!"
  onChangeText={goalInputHandler}
/>

<button title="Add goal" onPress="{addGoalHandler}" />
```

### 2.6 FlatList

FlatLists are a performant interface for rendering basic, flat lists.
They need at least two props:

- `data`: data to be displayed as a list.
- `renderItem`: function that return how to render a item from the list.

**FlatLists needs the data to have a `key` property:**

```jsx
function addGoalHandler() {
  setCourseGoals((currentCourseGoals) => [
    ...currentCourseGoals,
    {
      text: enteredGoalText,
      key: Math.random().toString(),
    },
  ]);
}
```

```jsx
<FlatList
  data={courseGoals}
  renderItem={(itemData) => {
    return (
      <View>
        <Text style={styles.goalItem}>{itemData.item.text}</Text>
      </View>
    );
  }}
></FlatList>
```

In some cases we will not have a `key` property, but for example an `id` one, we can use that unique property this way:

```jsx
keyExtractor={(item, index) => { return item.id; }}
```

### 2.7 Pressable

Component wrapper that can detect various stages of press interactions on any of its defined children. It has several props:

- `onPress`: function to be executed when pressed.
- `style`: function to apply some styling when the element is pressed.

```jsx
<Pressable
  onPress={onDeleteItem.bind(this, id)}
  style={({ pressed }) => pressed && styles.pressedItem}
>
  <Text style={styles.goalText}>{text}</Text>
</Pressable>
```

## 3. Debugging React Native Apps

### 3.1 See console and network traffic in browser

When starting a React Native we have an option that says `Press m │ toggle menu`. If we type `m` and in the emulator menu choose `Open JS Debugger` browser is opened and there we can see the network traffic and also the console.

### 3.2 React DevTools

We can install React DevTools globally:

```bash
npm install -g react-devtools
```

And to launch this application we type:

```bash
react-devtools
```

To connect the application with these tools we should open the developer menu `m` and click on `Open JS Debugger`.

## 4. Deeper dive into components, layouts and styling

### 4.1 Creating a custom button

```jsx
<View style={styles.buttonOuterContainer}>
  <Pressable
    onPress={pressHandler}
    android_ripple={{ color: "#640233" }} //Touch feedback on Android
    style={({ pressed }) =>
      pressed
        ? [styles.buttonInnerContainer, styles.pressed] //Touch feedback on iOS
        : styles.buttonInnerContainer
    }
  >
    <Text style={styles.buttonText}>Confirm</Text>
  </Pressable>
</View>
```

```jsx
const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
```

### 4.2 Shadows in Android and iOS

| Android     | iOS                                           |
| ----------- | --------------------------------------------- |
| `elevation` | `shadowColor`, `shadowOffset`, `shadowRadius` |

### 4.3 Linear gradients

[Expo](https://docs.expo.dev/versions/latest/sdk/linear-gradient/) provides an easy way to use linear gradients. It needs to be installed with `expo install expo-linear-gradient`:

```jsx
<LinearGradient colors={["red", "yellow"]}></LinearGradient>
```

### 4.4 Background images

```jsx
<ImageBackground
  source={require("path/to/image")}
  resizeMode="cover"
  style={styles.rootScreen}
  imageStyle={styles.backgroundImage} //styles for the image
></ImageBackground>
```

### 4.5 Alerts

Alerts are used to display popup messages to the user. They're typically used for confirmations, warnings, or simple notifications.

```jsx
Alert.alert(
  "Invalid number!", //title
  "Number has to be a number between 1 and 99", //message
  [
    //buttons
    {
      text: "Ok",
      style: "destructive",
      onPress: resetInputHandler,
    },
  ]
);
```

### 4.6 SafeAreaView

SafeAreaView is a component that automatically applies padding to ensure content is not obscured by the device's notch, status bar, or home indicator.

```jsx
import { SafeAreaView } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Your app content */}
    </SafeAreaView>
  );
}
```

### 4.7 Managing colors globally

Managing colors globally in your React Native app helps maintain consistency and makes theme changes easier.

Create a dedicated file to store all your app's colors:

```jsx
// Colors.js
export default {
  primary: "#72063c",
  primary600: "#640233",
  primary800: "#4e0329",
  accent: "#f7bc0c",
  white: "#ffffff",
  black: "#000000",
  gray: "#cccccc",
  error: "#ff0000",
};
```

Then import and use these colors throughout your app:

```jsx
import Colors from "../constants/Colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    padding: 16,
    borderRadius: 8,
  },
  text: {
    color: Colors.white,
    fontWeight: "bold",
  },
});
```

### 4.8 Using cascading styles

In React Native, you can apply multiple styles to a component by using an array of styles. Styles positioned later in the array (to the right) will override conflicting properties from earlier styles (to the left).

#### 4.8.1 Style arrays

```jsx
import { View, Text, StyleSheet } from "react-native";

export default function StyleArrayExample() {
  return (
    <View
      style={[
        styles.container, // Applied first
        styles.containerWithBorder, // Overrides conflicting properties from container
        { backgroundColor: "lightblue" }, // Overrides backgroundColor from both previous styles
      ]}
    >
      <Text
        style={[
          styles.text, // Base text styles
          styles.boldText, // Adds or overrides with font weight
        ]}
      >
        Hello World
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "white",
    alignItems: "center",
  },
  containerWithBorder: {
    backgroundColor: "beige",
    borderWidth: 2,
    borderColor: "navy",
    borderRadius: 8,
  },
  text: {
    fontSize: 16,
    color: "black",
  },
  boldText: {
    fontWeight: "bold",
  },
});
```

### 4.9 Buttons with icons

Expo provides a comprehensive icon library through the `@expo/vector-icons` package, which includes popular icon sets like FontAwesome, MaterialIcons, and Ionicons.

#### 4.9.1 Using Expo Vector Icons

The package comes pre-installed with Expo projects. To use icons:

```jsx
import { Ionicons } from "@expo/vector-icons";
import { View, Text } from "react-native";

export default function IconExample() {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Ionicons name="heart" size={24} color="red" />
      <Text style={{ marginLeft: 8 }}>Favorite</Text>
    </View>
  );
}
```

### 4.10 Custom fonts

React Native allows you to use custom fonts in your applications through the `expo-font` package.

```bash
expo install expo-font
```

```jsx
import { useFonts } from "expo-font";
import { View, Text } from "react-native";
export default function FontExample() {
  const [loaded] = useFonts({
    "CustomFont-Regular": require("./assets/fonts/CustomFont-Regular.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <View>
      <Text style={{ fontFamily: "CustomFont-Regular", fontSize: 24 }}>
        Hello World
      </Text>
    </View>
  );
}
```

The code above demonstrates how to:

1. Import the useFonts hook from expo-font
2. Load a custom font by providing a name and path to the font file
3. Check if the font has loaded before rendering the component
4. Apply the custom font to a Text component using the fontFamily style property
   Font files should be placed in the assets/fonts directory of your project. You can use any name for the font mapping, but it's common to use the actual font name.

### 4.11 Expo AppLoading

Expo provides a simple way to add a loading screen to your app.

```jsx
import { useFonts } from "expo-font";
import { AppLoading } from "expo";
import { View, Text } from "react-native";
export default function FontExample() {
  const [loaded] = useFonts({
    "CustomFont-Regular": require("./assets/fonts/CustomFont-Regular.ttf"),
  });
  if (!loaded) {
    return <AppLoading />; // Show loading screen while fonts are loading;
  }
  return (
    <View>
      <Text style={{ fontFamily: "CustomFont-Regular", fontSize: 24 }}>
        Hello World
      </Text>
    </View>
  );
}
```

## 5. Building adaptive user interfaces

### 5.1 Dimensions API

The Dimensions API allows you to get the device screen dimensions and adapt your UI accordingly. This is essential for creating responsive layouts that work well across different device sizes.

```jsx
import { Dimensions, View } from "react-native";

export default function DimensionsExample() {
  // Get the window dimensions
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  return <View></View>;
}
```

### 5.2 Screen orientations

React Native applications can support different screen orientations. By default, most apps are set to portrait mode, but you can configure your app to support landscape mode or both orientations.

You can specify which orientations your app supports in the Expo `app.json` file:

```json
{
  "expo": {
    "orientation": "portrait"
    // Other configuration options...
  }
}
```

### 5.3 UseWindowDimensions

The `useWindowDimensions` hook from the `react-native` library provides a convenient way to get the current window dimensions. This hook returns an object with `width` and `height` properties representing the current window dimensions.

Unlike the Dimensions API, `useWindowDimensions` automatically updates when the screen dimensions change (such as during device rotation). This is because it's a React hook that subscribes to dimension updates and triggers re-renders when needed.

**Key advantages over Dimensions API:**

- Automatically responds to dimension changes without manual event listeners
- Can be used directly within functional components

```jsx
import { useWindowDimensions, View, Text } from "react-native";

export default function WindowDimensionsExample() {
  // This hook will automatically update when dimensions change
  const { width, height } = useWindowDimensions();

  return (
    <View>
      <Text>Window Width: {width}</Text>
      <Text>Window Height: {height}</Text>
      {/* This component will automatically re-render with new dimensions */}
      <View
        style={{
          width: width * 0.8,
          height: height * 0.2,
          backgroundColor: width > 500 ? "blue" : "red",
        }}
      />
    </View>
  );
}
```

### 5.4 KeyboardAvoidingView

The `KeyboardAvoidingView` component from the `react-native` library is designed to help prevent the keyboard from covering up parts of your UI when it appears. This is particularly useful for forms or input fields where the user might need to type in a large amount of text.

```jsx
import { KeyboardAvoidingView, TextInput, View } from "react-native";
export default function KeyboardAvoidingViewExample() {
  return (
    <ScrollView>
      <KeyboardAvoidingView behavior="padding">
        <TextInput placeholder="Type something..." />
        {/* Other components */}
      </KeyboardAvoidingView>
    </ScrollView>
  );
}
```

**Modes**

- `height` : Adjusts the height of the container to avoid the keyboard. This is useful when you have a small form at the bottom of the screen.
- `padding` : Adds padding to the container to avoid the keyboard. This is useful when you have a large form or a list of items.
- `position` : Moves the container up when the keyboard appears. This is useful when you have a large form or a list of items.
- `none` : Does not adjust the container. This is useful when you have a large form or a list of items.

### 5.5 Adapting interface depending on Platform

React Native provides tools to adapt your UI and logic depending on whether your app is running on iOS, Android, or Web. This is useful for handling platform-specific styles, components, or behaviors.

#### 5.5.1 Using the Platform module

The `Platform` module from `react-native` allows you to check the current platform and conditionally render components or styles.

```jsx
import { Platform, Text, View, StyleSheet } from "react-native";

export default function PlatformExample() {
  return (
    <View style={styles.container}>
      <Text>
        {Platform.OS === "ios"
          ? "Running on iOS"
          : Platform.OS === "android"
          ? "Running on Android"
          : "Running on another platform"}
      </Text>
      <View
        style={[
          styles.box,
          Platform.OS === "ios"
            ? styles.iosBox
            : Platform.OS === "android"
            ? styles.androidBox
            : null,
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: "center", marginTop: 40 },
  box: { width: 100, height: 100, marginTop: 20 },
  iosBox: { backgroundColor: "skyblue" },
  androidBox: { backgroundColor: "lightgreen" },
});
```

#### 5.5.1 Using Platform.select

The Platform.select method allows you to define platform-specific values or styles in a concise way. It returns the value for the current platform, making your code cleaner and easier to maintain.

```jsx
import { Platform, StyleSheet, Text } from "react-native";

export default function PlatformSelectExample() {
  return (
    <Text style={styles.platformText}>
      This text size and color adapts to the platform!
    </Text>
  );
}

const styles = StyleSheet.create({
  platformText: {
    fontSize: Platform.select({
      ios: 22,
      android: 18,
      default: 16,
    }),
    color: Platform.select({
      ios: "navy",
      android: "darkgreen",
      default: "black",
    }),
    padding: 10,
  },
});
```

**Note:**
You can use Platform.select for any value, not just styles. For example, you can select different component props or logic depending on the platform.

### 5.6 Styling the status bar

The status bar is the bar at the top of the screen that shows the battery level, time, and network status. You can customize the status bar by using the `StatusBar` component from the `expo-status-bar` package.

```jsx
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
export default function StatusBarExample() {
  return (
    <View>
      <StatusBar style="light" />
      {/* Other components */}
    </View>
  );
}
```

## 6. React Navigation

[React Navigation](https://reactnavigation.org/) is the standard library for handling navigation and routing between screens in React Native applications. It allows you to easily create stack navigation, tab navigation, drawer menus, and nested navigation structures.

### 6.1 Installation

To install React Navigation and its core dependencies, run:

```bash
npm install @react-navigation/native
```

Then, install the required peer dependencies when using **_expo_**:

```bash
expo install react-native-screens react-native-safe-area-context
```

### 6.2 Navigation Container

The `NavigationContainer` component is the root component for all navigation-related components. It should wrap your entire app's navigation structure.

```jsx
import { NavigationContainer } from "@react-navigation/native";
export default function App() {
  return (
    <NavigationContainer>{/* Your navigation structure */}</NavigationContainer>
  );
}
```

### 6.3 Navigators

Navigators are the building blocks for navigation in React Navigation. There are three main types of navigators:

- **StackNavigator**:  
  Use a stack navigator when your app has a flow where users move forward and backward between screens, such as moving from a list to a details page and then back.  
  _Example_: In a shopping app, users start on a product list, tap a product to see its details, and then can go back to the list.

- **TabNavigator**:  
  Use a tab navigator when your app has several main sections that users should be able to switch between quickly, usually via a bar at the bottom of the screen.  
  _Example_: In a social media app, tabs might be used for "Feed", "Search", "Notifications", and "Profile".

- **DrawerNavigator**:  
  Use a drawer navigator when your app has a menu with many options or sections that don't fit well in a tab bar, and you want to provide access via a side menu.  
  _Example_: In a productivity app, the drawer might contain links to "Tasks", "Calendar", "Settings", and "Help".

#### 6.3.1 Stack Navigator

To use the Stack Navigator, you need to install the corresponding package:

```bash
npm install @react-navigation/native-stack
```

Then, you can create a stack navigator like this:

```jsx
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

**Explanation:**

- `<Stack.Navigator>`: Manages the navigation stack and transitions between screens.
- `<Stack.Screen>`: Each one defines a route (page) in your app. The `name` prop is used as the route name and as the default header title.
- A header (title bar) is shown automatically by the stack navigator, displaying the screen’s name by default.
- The default (initial) screen is the first `<Stack.Screen>` declared inside `<Stack.Navigator>` . In this example, "Home" will be the first screen shown when the app starts. The order of the `<Stack.Screen>` components determines the navigation stack's default order.

And we can use the `navigation` prop to navigate between screens:

```jsx
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}
```

**Note:**
The `navigation` prop is automatically passed to your screen components by the stack navigator. You can use `navigation.navigate('ScreenName')` to move to another screen.

#### 6.3.1.1 Navigation inside nested navigators components

Sometimes, you need to navigate from a component that is not a direct screen (for example, a button inside a custom component or a deeply nested child). In these cases, you can use the `useNavigation` hook provided by React Navigation.

**Example:**

```jsx
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native";

export default function MyCustomButton() {
  const navigation = useNavigation(); // Get the navigation object

  return (
    <Button
      title="Go to Details"
      onPress={() => navigation.navigate("Details")}
    />
  );
}
```

This can only be used inside a child component of a screen component.

#### 6.3.1.2 Sending parameters to a screen

You can pass parameters to a screen when navigating to it. This is useful when you want to pass data from one screen to another.
**Example:**

```jsx
navigation.navigate("Details", { itemId: 123 });
```

In the destination screen, you can access the parameters using the `route.params` object:

```jsx
function DetailsScreen({ route }) {
  const itemId = route.params.itemId;
  return <Text>Details for item {itemId}</Text>;
}
```

Alternatively, you can use the `useRoute` hook to access the route object:

```jsx
import { useRoute } from "@react-navigation/native";
function DetailsScreen() {
  const route = useRoute();
  const itemId = route.params.itemId;
  return <Text>Details for item {itemId}</Text>;
}
```

#### 6.3.1.3 Changing header properties

You can **_change the header title_** of a screen using the `options` prop. This is useful when you want to display a different title for a screen than its name.
**Example:**

```jsx
<Stack.Screen
  name="Details"
  component={DetailsScreen}
  options={{ title: "Item Details" }}
/>
```

This will change the title of the "Details" screen to "Item Details".

In order to change the header styles, you can use the `headerStyle` and `headerTintColor` options:

```jsx
<Stack.Screen
  name="Details"
  component={DetailsScreen}
  options={{
    headerStyle: { backgroundColor: "skyblue" },
    headerTintColor: "white",
    headerTitleStyle: { fontWeight: "bold" },
    contentStyle: {
      backgroundColor: "beige",
      borderWidth: 2,
      borderColor: "navy",
      borderRadius: 8,
    },
  }}
/>
```

**Note:**
`headerStyle` is used to set the background color of the header.
`headerTintColor` is used to set the color of the header title and back button.
`headerTitleStyle` is used to set the style of the header title.
`contentStyle` is used to set the style of the content area below the header.
**Note:**
These options can be set globally for the entire stack navigator or individually for each screen.

**Setting navigation options dynamically**

You can set navigation options dynamically using the `options` prop. This is useful when you want to change the header title based on the route parameters or other conditions.
**Example:**

```jsx
<Stack.Screen
  name="Details"
  component={DetailsScreen}
  options={({ route }) => ({
    title: route.params.itemId,
  })}
/>
```

This will set the title of the "Details" screen to the itemId passed as a parameter.

**Alternative**
You can use the `setOptions` navigation method to set the navigation options dynamically inside of a screen component:

```jsx
const navigation = useNavigation();
navigation.setOptions({
  title: "Custom Title",
});
```

This will set the title of the current screen to "Custom Title".

**HeaderRight and HeaderLeft**
You can add custom components to the header using the `headerRight` and `headerLeft` options. This is useful when you want to add buttons or other UI elements to the header.
**Example:**

```jsx
<Stack.Screen
  name="Details"
  component={DetailsScreen}
  options={{
    headerRight: () => <Button title="Share" onPress={() => {}} />,
    headerLeft: () => <Button title="Back" onPress={() => {}} />,
  }}
/>
```

#### 6.3.1.5 native-stack vs stack

React Navigation provides two main stack navigator implementations:

- **native-stack**: Uses native navigation components under the hood (via the `react-native-screens` library). It offers better performance and smoother transitions, especially for large or complex apps. Recommended for most projects.
- **stack**: The original JavaScript-based stack navigator (`@react-navigation/stack`). Easier to customize and works in environments where native modules are not available (like web), but transitions may be less smooth.

In summary:  
Use `native-stack` for best performance and native feel on mobile. Use `stack` if you need advanced customizations or web support.

#### 6.3.2 Drawer Navigator

To use the Drawer Navigator, you need to install the corresponding package:

```bash
npm install @react-navigation/drawer
```

Then, you can create a drawer navigator like this:

```jsx
import { createDrawerNavigator } from "@react-navigation/drawer";
const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
```

**Note:**

- `<Drawer.Navigator>`: Manages the drawer navigation and transitions between screens.
- `<Drawer.Screen>`: Each one defines a route (page) in your app. The `name` prop is used as the route name and as the default header title.
- A drawer menu (sidebar) is shown automatically by the drawer navigator, displaying the screen’s name by default.
- The default (initial) screen is the first `<Drawer.Screen>` declared inside `<Drawer.Navigator>`. In this example, "Home" will be the first screen shown when the app starts. The order of the `<Drawer.Screen>` components determines the navigation stack's default order. Alternatively you can define an initial route name that is the name of the screen that will be shown by default when the app starts.

#### 6.3.2.1 Configuring the drawer

You can configure the drawer using the `options` prop. This is useful when you want to change the header title or add custom components to the header.
**Example:**

```jsx
<Drawer.Screen
  name="Settings"
  component={SettingsScreen}
  options={{
    headerTitle: "Settings",
    headerStyle: { backgroundColor: "skyblue" },
    headerTintColor: "white",
    headerTitleStyle: { fontWeight: "bold" },
    contentStyle: {
      backgroundColor: "beige",
      borderWidth: 2,
      borderColor: "navy",
      borderRadius: 8,
    },
    drawerLabel: "Settings",
    drawerIcon: ({ color, size }) => (
      <MaterialCommunityIcons name="settings" color={color} size={size} />
    ),
    headerRight: () => <Button title="Share" onPress={() => {}} />,
    headerLeft: () => <Button title="Back" onPress={() => {}} />,
  }}
/>
```

**Note:**
`headerStyle` is used to set the background color of the header.
`headerTintColor` is used to set the color of the header title and back button.
`headerTitleStyle` is used to set the style of the header title.
`contentStyle` is used to set the style of the content area below the header.
`drawerLabel` is used to set the label of the drawer item.
`drawerIcon` is used to set the icon of the drawer item.
`headerRight` is used to add a custom component to the right side of the header.
`headerLeft` is used to add a custom component to the left side of the header.

#### 6.3.2.2 Opening the drawer

You can also open the drawer programmatically using the `openDrawer` method:

```jsx
const navigation = useNavigation();
navigation.openDrawer();
```

This will open the drawer.

#### 6.3.3 Bottom Tab Navigator

To use the Bottom Tab Navigator, you need to install the corresponding package:

```bash
npm install @react-navigation/bottom-tabs
```

Then, you can create a bottom tab navigator like this:

```jsx
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="settings"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
```

#### 6.3.4 Nesting Navigators

You can also nest navigators inside each other. This is useful when you want to create a complex navigation structure.
**Example:**

```jsx
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Profile" component={DrawerNavigator} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

## 7. App state with Redux and Context API

App state is the data that your app needs to keep track of. It can include things like user preferences, app settings, and data that needs to be shared across different parts of your app.
There are two main ways to manage app state in React Native:

- **Redux**: A predictable state container for JavaScript apps. It's widely used for managing complex state in large-scale React Native apps.
- **Context API**: A built-in way to share data between components without having to pass props through every level. It's simpler to use but less powerful than Redux.

### 7.1 Context API

It's common to create a store folder with a `.js` file that contains the context.

**Creating the context**

```jsx
import { createContext, useReducer } from "react";

// create the context and set the default values
export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

// create a component that will wrap the app and provide the context to all the children
// the children are the components that will use the context
function FavoritesContextProvider({ children }) {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);

  const addFavorite = (id) => {
    setFavoriteMealIds((currentIds) => [...currentIds, id]);
  };

  const removeFavorite = (id) => {
    setFavoriteMealIds((currentIds) => currentIds.filter((i) => i !== id));
  };

  const value = {
    ids: favoriteMealIds,
    addFavorite,
    removeFavorite,
  };

  // the value is set so that all the children can access the ids and the functions
  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}
```

**Using the context**

```jsx
import { useContext } from "react";
import { FavoritesContext } from "../store/context";

function MealDetailScreen() {
  const mealId = route.params.mealId;
  // get the context
  const favoriteMealCtx = useContext(FavoritesContext);

  const isFavorite = favoriteMealCtx.ids.find((id) => id === mealId); // using the ids from the context

  // using the functions from the context api
  function changeFavoriteStatusHandler() {
    if (isFavorite) {
      favoriteMealCtx.removeFavorite(mealId);
    } else {
      favoriteMealCtx.addFavorite(mealId);
    }
  }
}
```

### 7.2 Redux

To start using Redux, you need to install redux and the redux toolkit:

```bash
npm install react-redux @reduxjs/toolkit
```

**Creating the store**

```jsx
// store.js
import { createStore } from "@reduxjs/toolkit";
import favoritesReducer from "./favoritesSlice";

// store contains the state of the app
const store = configureStore({
  reducer: {
    favoriteMeals: favoritesReducer,
  },
});
```

```jsx
// favoritesSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ids: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    ids: [],
  },
  // the reducer is a function that takes the current state and an action and returns the new state
  // the reducer is called when an action is dispatched
  // the reducer is called with the current state and the action
  // the reducer returns the new state
  reducers: {
    addFavorite: (state, action) => {
      state.ids.push(action.payload.id);
    },
    removeFavorite: (state, action) => {
      state.ids = state.ids.filter((id) => id !== action.payload.id);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
```

Then we need to wrap the app with the `Provider` component:

```jsx
import { Provider } from "react-redux";
import store from "./store/store";

export default function App() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
```

**Using the store**

```jsx
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/favoritesSlice";

function MealDetailScreen() {
  const mealId = route.params.mealId;
  const dispatch = useDispatch();
  const favoriteMeals = useSelector((state) => state.favoriteMeals.ids);
  const isFavorite = favoriteMeals.find((id) => id === mealId);

  function changeFavoriteStatusHandler() {
    if (isFavorite) {
      dispatch(removeFavorite({ id: mealId }));
    } else {
      dispatch(addFavorite({ id: mealId }));
    }
  }
}
```

## 8. Handling user input

### 8.1 Custom text input

We can use the `TextInput` component to handle user input. But also we can create a custom component to handle user input.

```jsx
import { TextInput } from "react-native";
import { View, Text } from "react-native";

function Input({ label, textInputConfig }) {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput {...textInputConfig} />
    </View>
  );
}

export default Input;
```

And then we can use it like this:

```jsx
<Input
  label="Amount"
  textInputConfig={{
    keyboardType: "decimal-pad",
    onChangeText= amountChangedHandler,
  }}
/>

<Input
  label="Date"
  textInputConfig={{
    placeholder: "DD/MM/YYYY",
    onChangeText= () => {},
  }}
/>
```

### 8.2 Handling user input in a generic way

**_Note:_** In React Native when you fetch an input value, it always returns a string.

We could manage user input using a state for each input:

```jsx
function ExpenseForm() {
  const [enteredAmount, setEnteredAmount] = useState(""); // string
  const [enteredDate, setEnteredDate] = useState(""); // string

  //connected to onChangeText, it will receive a string
  function amountChangedHandler(amount) {
    setEnteredAmount(amount);
  }

  function dateChangedHandler(date) {
    setEnteredDate(date);
  }

  return (
    <View>
      <Input
        label="Amount"
        textInputConfig={{
          keyboardType: "decimal-pad",
          onChangeText: amountChangedHandler,
          value: enteredAmount, // set the value of the input to the enteredAmount state
        }}
      />
      <Input
        label="Date"
        textInputConfig={{
          placeholder: "DD/MM/YYYY",
          onChangeText: dateChangedHandler,
        }}
      />
    </View>
  );
}
```

But also we can use a single state for all the inputs:

```jsx
function ExpenseForm() {
  const [inputValues, setInputValues] = useState({
    amount: "",
    date: "",
  });

  function inputChangeHandler(inputIdentifier, inputValue) {
    setInputValues((prevState) => {
      return {
        ...prevState,
        [inputIdentifier]: inputValue,
      };
    });
  }
  return (
    <View>
      <Input
        label="Amount"
        textInputConfig={{
          keyboardType: "decimal-pad",
          onChangeText: (amount) => inputChangeHandler("amount", amount),
          value: inputValues.amount,
        }}
      />
      <Input
        label="Date"
        textInputConfig={{
          placeholder: "DD/MM/YYYY",
          onChangeText: (date) => inputChangeHandler("date", date),
          value: inputValues.date,
        }}
      />
    </View>
  );
}
```

### 8.3 Managing form state and submission

In order to submit the form we added two buttons and the two handlers are passed as props:

```jsx
function ExpenseForm({ onCancel, onSubmit }) {
  //...

  //function to cast string to their types
  function submitHandler() {
    const expenseData = {
      amount: +inputValues.amount,
      date: new Date(inputValues.date),
    };

    //validations
    const amountIsValid =
      !isNaN(+inputValues.amount) && inputValues.amount.length > 0;
    const dateIsValid =
      !!inputValues.date && inputValues.date.trim().length > 0;

    if (!amountIsValid || !dateIsValid) {
      Alert.alert("Invalid input", "Please enter valid amount and date!", [
        { text: "Okay" },
      ]);
      return;
    }

    onSubmit(expenseData); // pass the data to the parent component
  }

  return (
    <View>
      //...
      <View>
        <Button title="Add Expense" onPress={onSubmit} />
        <Button title="Cancel" onPress={onCancel} />
      </View>
    </View>
  );
}
```

Now where this parent component is used we can pass the handlers:

```jsx
function addExpenseHandler(expenseData) {
  //save to database, save to context, etc.
  console.log(expenseData);
}

return (
  //...
  <ExpenseForm
    onCancel={() => {
      navigation.goBack();
    }}
    onSubmit={addExpenseHandler}
  />
  //...
);
```

## 9. Sending HTTP requests

To send HTTP requests in React Native, you can use the `fetch` API. But also we can use the `axios` library. To use [axios](https://github.com/axios/axios) we need to install it:

```bash
npm install axios
```

### 9.1 Sending a POST request

To send a POST request, we can use the `axios.post` method.

```jsx
import axios from "axios";

async function sendRequest() {
  const response = axios.post("URL_ADDRESS.com/api", {
    data: {
      name: "John",
      age: 30,
    },
  });

  //response.data contains the data returned by the server
  console.log(response.data);
}
```

### 9.2 Sending a GET request

To send a GET request, we can use the `axios.get` method.

```jsx
import axios from "axios";

async function sendRequest() {
  const response = await axios.get("URL_ADDRESS.com/api");

  console.log(response.data);
}
```

To use this async function we need to use the `useEffect` hook:

```jsx
//UseEffect is needed to execute the function once when the component is mounted.
useEffect(() => {
  async function getData() {
    await sendRequest();
  }

  getData();
}, []);
```

### 9.3 Sending a PUT request

To send a UPDATE request, we can use the `axios.put` method.

```jsx
import axios from "axios";

async function sendRequest() {
  const response = await axios.put("URL_ADDRESS.com/api", {
    data: {
      name: "John",
      age: 32,
    },
  });

  console.log(response.data);
}
```

### 9.4 Sending a DELETE request

To send a DELETE request, we can use the `axios.delete` method.

```jsx
import axios from "axios";

async function sendRequest() {
  const response = await axios.delete("URL_ADDRESS.com/api");
  console.log(response.data);
}
```

### 9.5 Managing the Loading state and ActivityIndicator

To show a loading indicator, we can use the `ActivityIndicator` component.
And to show the loading indicator, we can create a `isLoading` state.

```jsx
import { ActivityIndicator } from "react-native";
import { View } from "react-native";
import { useState, useEffect } from "react";

//we could create a component for the loading screen
function LoadingScreen() {
  return (
    <View>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      await sendRequest();
      setIsLoading(false);
    }
    getData();
  }, []);

  return <View>{isLoading && <LoadingScreen />}</View>;
}
```

### 9.6 Handling request errors

To handle request errors, we can use the `try-catch` statement.

```jsx
import { ActivityIndicator } from "react-native";
import { View } from "react-native";
import { useState, useEffect } from "react";

function LoadingScreen() {
  return (
    <View>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    async function getData() {
      setIsLoading(true);

      try {
        await sendRequest();
      } catch (error) {
        setError(error.message);
      }

      setIsLoading(false);
    }

    getData();
  }, []);

  if (error) {
    return (
      <View>
        <Text>{error}</Text>
      </View>
    );
  }
  if (isLoading) {
    return <LoadingScreen />;
  }

  return <View>{/*...*/}</View>;
}
```

## 10. Using native device features

### 10.1 Using the camera

To use the camera there are two options:

1.  Use the `Camera` component from `expo-camera`
2.  Use the `CameraRoll` component from `expo-image-picker`

In this case we will use the `expo-image-picker` library. To use it, we need to install it:

```bash
npm install expo-image-picker
```

Then we need to add the permissions to the `app.json` file. We need to add this plugin to the `expo` object in the `app.json` file:

```json
{
  "expo": {
    "plugins": [
      "expo-image-picker",
      {
        "cameraPermission": "The app needs access to your camera to take pictures"
      }
    ]
  }
}
```

### 10.1.1 Taking photos on Android

To take photos on Android, we need to use the `launchCameraAsync` method from `expo-image-picker`.

```jsx
import { launchCameraAsync } as ImagePicker from "expo-image-picker";

function ImagePicker() {
  async function takePictureHandler() {
    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.5,
    });
    console.log(image);
  }

  return (
    <View>
      <Button title="Take Picture" onPress={takePictureHandler} />
    </View>
  );
}

```

**Note:**

- The `allowsEditing` option allows the user to crop the image.
- The `aspect` option allows the user to select the aspect ratio of the image.
- The `quality` option allows the user to select the quality of the image.

In Android permissions are handled automatically. But in iOS we need to request the permission manually.

### 10.1.2 Taking photos on iOS

```jsx
import { launchCameraAsync, useCameraPermissions, PermissionStatus } as ImagePicker from "expo-image-picker";

function ImagePicker() {
  const [cameraPermission, requestCameraPermission] = useCameraPermissions();

  // Manage permissions function needed for iOS
  async function verifyPermissions() {
    if (cameraPermission.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestCameraPermission();

      return permissionResponse.granted;
    }

    if (cameraPermission.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient permissions!",
        "You need to grant camera permissions to use this app.",
        [{ text: "Okay" }]
      );
      return false;
    }

    return true;
  }


  async function takePictureHandler() {
    // Request permissions
    const hasPermission = await verifyPermissions();

    if (!hasPermission) {
      return;
    }

    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.5,
    });
    console.log(image);
  }

  return (
    <View>
      <Button title="Take Picture" onPress={takePictureHandler} />
    </View>
  );
}

```

**Note:**

- Android has a camera emulator.
- iOS does not have a camera emulator.
- We need to test the app on a real device.

### 10.2 Location data

To get the location data, we can use the package `expo-location`. To install it, we need to run:

```bash
npm install expo-location
```

We don't need to add any permissions to the `app.json` file while using this package. It is handled automatically.

#### 10.2.1 Getting the current location

```jsx
import {
  getCurrentPositionAsync,
  useForegroundPermissions,
} from "expo-location";

function LocationPicker() {
  const [locationPermission, requestLocationPermission] =
    useForegroundPermissions();

  // Function to get the permissions
  async function verifyPermissions() {
    if (locationPermission.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestLocationPermission();
      return permissionResponse.granted;
    }
    if (locationPermission.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient permissions!",
        "You need to grant location permissions to use this app.",
        [{ text: "Okay" }]
      );
      return false;
    }
    return true;
  }

  // Function to get the current location
  async function getLocationHandler() {
    const hasPermission = await verifyPermissions();

    if (!hasPermission) {
      return;
    }

    const location = await getCurrentPositionAsync();
    console.log(location);
  }

  return (
    <View>
      <Button title="Get Location" onPress={getLocationHandler} />
    </View>
  );
}
```

### 10.3 Interactive maps

To show interactive maps, we are going to use `react-native-maps`. To install it, we need to run:

```bash
npm install react-native-maps
```

```jsx
import MapView, { Marker } from "react-native-maps";

function Map() {
  return (
    <MapView
      onPress={(event) => {
        console.log(event.nativeEvent.coordinate);
      }}
      style={{ width: "100%", height: "100%" }}
      initialRegion={{
        latitude: 37.78825, //latitude of the center of the map
        longitude: -122.4324, //longitude of the center of the map
        latitudeDelta: 0.0922, //how much latitude to show on the map
        longitudeDelta: 0.0421, //how much longitude to show on the map
      }}
    >
      <Marker
        coordinate={{
          latitude: 37.78825,
          longitude: -122.4324,
        }}
        title="My Location"
        description="This is my current location"
      />
    </MapView>
  );
}
```

### 10.4 Embedded database with SQLite

To use SQLite, we are going to use the package `expo-sqlite`. To install it, we need to run:

```bash
npm install expo-sqlite
```

```jsx
import * as SQLite from "expo-sqlite";

const database = SQLite.openDatabase("places.db");

function init() {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS places (
      id INTEGER PRIMARY KEY NOT NULL,
      title TEXT NOT NULL,
      imageUri TEXT NOT NULL,
      address TEXT NOT NULL,
      lat REAL NOT NULL,
      lng REAL NOT NULL);`,
        [], //empty array for the parameters
        () => {
          //success callback
          resolve();
        },
        (_, error) => {
          //error callback
          reject(error);
          return;
        }
      );
    });
  });

  return promise;
}

function insertPlace(title, imageUri, address, lat, lng) {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO places (title, imageUri, address, lat, lng) VALUES (?, ?, ?, ?, ?);",
        [title, imageUri, address, lat, lng],
        (_, result) => {
          resolve(result);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
}

function fetchPlaces() {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM places;",
        [],
        (_, result) => {
          resolve(result);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
}
```
