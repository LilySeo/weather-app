import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Loading() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Getting the wonderful Weather</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 40,
        paddingVertical: 100,
        backgroundColor: "#fdf6aa",
    },
    text: {
        fontSize: 30,
        color: "#474747"
    }
});