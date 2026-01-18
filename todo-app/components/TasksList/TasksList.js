import React from "react";
import { StyleSheet, FlatList, SafeAreaView } from "react-native";
import TodoItem from "../TodoItem/TodoItem";

const TasksList = props => {

    // O taskId agora será recebido diretamente do TodoItem quando clicado
    const deleteTaskHandler = taskId => {
        props.onDeletedTask(taskId);
    };

    return (
        <SafeAreaView style={styles.screenlist}>
            <FlatList
                keyExtractor={(item, index) => item.id}
                data={props.tasksToPrint}
                renderItem={itemData => (
                    <TodoItem
                        title={itemData.item.value}
                        // Passamos a referência da função e o id
                        onDelete={() => deleteTaskHandler(itemData.item.id)}
                        id={itemData.item.id}
                    />
                )}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    screenlist: {
        marginLeft: 20,
        marginRight: 20,
        paddingBottom: 50 // Adicionado para garantir que a lista não fique colada na base
    }
});

export default TasksList;