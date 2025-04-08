import {
    View,
    TextInput,
    Button,
    StyleSheet,
    Modal,
    Image,
} from "react-native";
import { useState } from "react";

function GoalInput({ onAddGoal, visible, onCancel }) {
    const [enteredGoalText, setEnteredGoalText] = useState("");

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        onAddGoal(enteredGoalText);
        setEnteredGoalText("");
    }

    return (
        <Modal visible={visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image
                    source={require("../assets/goal.png")}
                    style={styles.image}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Your course goal!"
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button
                            title="Add goal"
                            onPress={addGoalHandler}
                            color="#5e0acc"
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title="Cancel"
                            onPress={onCancel}
                            color="#f31282"
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        backgroundColor: "#311b6b",
    },

    textInput: {
        borderWidth: 1,
        borderColor: "#cccccc",
        width: "100%",
        marginRight: 8,
        padding: 8,
        color: "white",
        backgroundColor: "#e4d0ff",
        borderRadius: 6,
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 8,
    },
    image: {
        width: 100,
        height: 100,
        margin: 20,
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: "row",
    },
    button: {
        width: "100",
        marginHorizontal: 8,
    },
});
