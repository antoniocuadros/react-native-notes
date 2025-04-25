# React Native Guide

## 1. Getting Started

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

### 2.1 Web elements in React Native

To build React Native apps we should use core components provided by React Native that will be translated into native Android and iOS components:

| Web browser       | React Native JSX                                                   | Function                                                                                                                                                                                                                                                        |
| ----------------- | ------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \<div>            | [\<View>](https://reactnative.dev/docs/view)                       | Is a container that supports layout with flexbox, style, some touch handling, and accessibility controls.                                                                                                                                                       |
| \<input>          | [\<TextInput>](https://reactnative.dev/docs/textinput)             | For inputting text into the app via a keyboard.                                                                                                                                                                                                                 |
| \<button>         | [\<Button>](https://reactnative.dev/docs/button)                   | A basic button component. **Style prop can't be applied to buttons.**                                                                                                                                                                                           |
| \<p>              | [\<Text>](https://reactnative.dev/docs/text)                       | For displaying text                                                                                                                                                                                                                                             |
| \<img>            | [\<Image>](https://reactnative.dev/docs/image)                     | Component for displaying different types of images, including network images, static resources, temporary local images, and images from local disk.                                                                                                             |
| \<ul>, \<ol>      | [\<FlatList>](https://reactnative.dev/docs/flatlist)               | A performant interface for rendering basic, flat lists. **Requires "data" and "renderItem" props.**                                                                                                                                                             |
| \<section> \<div> | [\<View>](https://reactnative.dev/docs/view)                       | Same as \<div> or \<section> equivalent                                                                                                                                                                                                                         |
| ...               | [\<ScrollView>](https://reactnative.dev/docs/scrollview)           | Wraps platform ScrollView while providing integration with touch locking "responder" system. **Keep in mind that ScrollViews must have a bounded height in order to work** [many configurations can be applied to it.](https://reactnative.dev/docs/scrollview) |
| ...               | [\<Pressable>](https://reactnative.dev/docs/pressable)             | It is a Core Component wrapper that can detect various stages of press interactions on any of its defined children.                                                                                                                                             |
| ...               | [\<Modal>](https://reactnative.dev/docs/modal)                     | It is a basic way to present content above an enclosing view.                                                                                                                                                                                                   |
| ...               | [\<ImageBackground>](https://reactnative.dev/docs/imagebackground) | A component that displays an image as the background for its children.                                                                                                                                                                                          |

You can check all core components in this [link](https://reactnative.dev/docs/components-and-apis).

To use this components, you must import them:

```jsxx
import { StyleSheet, Text, View } from "react-native";
```

### 2.3 Expo elements

| Element                                                                         | Function                                                                                                                                                                                             |
| ------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [\<StatusBar>](https://docs.expo.dev/versions/latest/sdk/status-bar/)           | A component and imperative interface to control the app status bar to change its text color, background color, hide it, make it translucent or opaque, and apply animations to any of these changes. |
| [\<LinearGradient>](https://docs.expo.dev/versions/latest/sdk/linear-gradient/) | Provides a native React view that transitions between multiple colors in a linear direction. Needs to be installed with `expo install expo-linear-gradient`                                          |

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

## 5. Building adaptative user interfaces
