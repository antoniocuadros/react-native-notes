# React Native guide

## 1. Getting Started

### 1.1 Creating a React Native application:

In order to create a React Native application using "expo":

```bash
npx create-expo-app --template blank [proyectName]
```

### 1.2 Run application

First we need to run:

```bash
npm install
```

to install all dependencies.

Then we can run this command to start our project:

```bash
npm start
```

![alt text](/doc-images/section-2/2-1.jpg)

- If we press `a` it will open Android app. _(You need to install Android Studio and configure an emulator first)_
- If we press `i` it will open iOS app. _(You need to have a Mac and install xCode first)_

## 2. React Native basics

### 2.1 Web elements in React Native

To build React Native apps we should use core components provided by React Native that will be translated into native Android and iOS components:

| Web browser | React Native JSX                                         | Function                                                                                                                                                                                                                                                        |
| ----------- | -------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \<div>      | [\<View>](https://reactnative.dev/docs/view)             | Is a container that supports layout with flexbox, style, some touch handling, and accessibility controls.                                                                                                                                                       |
| \<input>    | [\<TextInput>](https://reactnative.dev/docs/textinput)   | For inputting text into the app via a keyboard.                                                                                                                                                                                                                 |
| \<button>   | [\<Button>](https://reactnative.dev/docs/button)         | A basic button component. **Style prop can't be applied to buttons.**                                                                                                                                                                                           |
| \<p>        | [\<Text>](https://reactnative.dev/docs/text)             | For displaying text                                                                                                                                                                                                                                             |
| ...         | [\<ScrollView>](https://reactnative.dev/docs/scrollview) | Wraps platform ScrollView while providing integration with touch locking "responder" system. **Keep in mind that ScrollViews must have a bounded height in order to work** [many configurations can be applied to it.](https://reactnative.dev/docs/scrollview) |
| \<ul>       | [\<FlatList>](https://reactnative.dev/docs/flatlist)     | A performant interface for rendering basic, flat lists. **Requires "data" and "renderItem" props.**                                                                                                                                                             |
| ...         | ...                                                      | ...                                                                                                                                                                                                                                                             |

You can check all core components in this [link](https://reactnative.dev/docs/components-and-apis).

To use this components, you must import them:

```js
import { StyleSheet, Text, View } from "react-native";
```

### 2.2 Styling React Native apps

When styling React Native applications we don't use CSS, we use some props provided by React and we can work with:

- Inline styling:

```html
 <Text style={{margin: 16, padding: 16}} > Example </Text>
```

- StyleSheet Objects: First we need to define a style and then apply it to a component:

```js
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

```html
<View style="{styles.container}">
  <Text style="{styles.text}"> Example </Text>
</View>
```

#### 2.2.1 Layouts and Flexbox

It's very similar to CSS:

```js
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

### 2.3 Handling events

Events are handled the same way as in React:

```js
const [enteredGoalText, setEnteredGoalText] = useState("");

function goalInputHandler(enteredText) {
  setEnteredGoalText(enteredText);
}

function addGoalHandler() {
  console.log(enteredGoalText);
}
```

```html
<TextInput
  style="{styles.textInput}"
  placeholder="Your course goal!"
  onChangeText="{goalInputHandler}"
/>

<button title="Add goal" onPress="{addGoalHandler}" />
```

### 2.4 FlatList

FlatLists are a performant interface for rendering basic, flat lists.
They need at least two props:

- `data`: data to be displayed as a list.
- `renderItem`: function that return how to render a item from the list.

**FlatLists needs the data to have a `key` property:**

```js
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

```html
<FlatList
    data={courseGoals}
    renderItem={(itemData) => {
        return (
            <View>
                <Text style={styles.goalItem}>
                    {itemData.item.text}
                </Text>
            </View>
        );
    }}
></FlatList>
```

In some cases we will not have a `key` property, but for example an `id` one, we can use that unique property this way:

```js
keyExtractor={(item, index) => { return item.id; }}
```
