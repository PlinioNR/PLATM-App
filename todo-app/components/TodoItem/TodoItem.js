import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import CheckBox from 'expo-checkbox';

const TodoItem = props => {
    const [check, setCheck] = useState(false);

    return (
        <View style={styles.screen}>
            {/* Agrupamos o Checkbox e o Texto para ficarem juntos à esquerda */}
            <View style={styles.itemContainer}>
                <CheckBox 
                    value={check} 
                    onValueChange={() => setCheck(!check)} 
                    color={check ? '#4630EB' : undefined}
                />
                <View style={styles.listItem}>
                    <Text style={[
                        styles.itemText, 
                        check && styles.completedText // Aplica estilo se estiver checado
                    ]}>
                        {props.title}
                    </Text>
                </View>
            </View>

            <TouchableOpacity
                onPress={() => props.onDelete(props.id)}
                style={styles.button}
                activeOpacity={0.7}
            >
                <Text style={styles.text}>Delete</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flexDirection: "row",
        marginTop: 15,
        justifyContent: "space-between",
        alignItems: "center", // Garante que tudo fique alinhado no meio da linha
        width: "100%",
        paddingHorizontal: 5
    },
    itemContainer: {
        flexDirection: "row",
        alignItems: "center",
        flex: 1 // Faz o container de texto ocupar o máximo de espaço possível
    },
    listItem: {
        marginLeft: 10,
        width: "70%"
    },
    itemText: {
        fontSize: 16,
        color: "black"
    },
    completedText: {
        textDecorationLine: 'line-through', // Risca o texto
        color: 'gray'
    },
    button: {
        height: 35,
        borderRadius: 5,
        paddingHorizontal: 15,
        backgroundColor: "red",
        justifyContent: "center"
    },
    text: {
        fontSize: 12,
        color: "white",
        fontWeight: "bold"
    }
});

export default TodoItem;