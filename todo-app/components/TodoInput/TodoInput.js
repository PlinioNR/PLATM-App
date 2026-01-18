import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal, Alert } from "react-native";
import Header from "../Header/Header"; // Verifique se o caminho está correto

const TodoInput = props => {
  const [enteredTask, setEnteredTask] = useState("");

  const TodoInputHandler = enteredText => {
    setEnteredTask(enteredText);
  };

  const addTaskHandler = () => {
    props.onAddTask(enteredTask);
    setEnteredTask(""); 
  };

  const checkInput = () => {
    if (enteredTask.trim().length > 0) {
      addTaskHandler();
    } else {
      Alert.alert("Error", "Please enter a Task", [{ text: "OK" }]);
    }
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <Header title="To-Do App" />
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="What needs to be done?"
          style={styles.input}
          onChangeText={TodoInputHandler}
          value={enteredTask}
          autoFocus={true} 
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="ADD" color="green" onPress={checkInput} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
  },
  button: {
    width: "40%",
  },
});

export default TodoInput; // ESSA LINHA É OBRIGATÓRIA