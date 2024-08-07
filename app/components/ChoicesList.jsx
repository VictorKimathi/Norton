import React, { useState } from "react";
import { TouchableOpacity, View, Text, FlatList, StyleSheet } from 'react-native';
import uidata from "../constants/uidata";
import { COLORS } from "../constants/theme";

const ChoicesList = () => {
    const [selected, setSelected] = useState(null);

    const handlePress = (item) => {
        if (selected === item.value) {
            setSelected(null);
        } else {
            setSelected(item.value);
        }
    };

    return (
        <View>
            <Text style={styles.title}>
                Pick Restaurants
            </Text>
            <FlatList
                data={uidata.choicesList}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                style={styles.list}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => handlePress(item)}
                        style={[
                            styles.button,
                            {
                                backgroundColor: selected === item.value ? COLORS.secondary : COLORS.lightWhite,
                            },
                        ]}
                    >
                        <Text style={[
                            styles.buttonText,
                            {
                                color: selected === item.value ? COLORS.lightWhite : COLORS.gray,
                            },
                        ]}>
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        marginVertical: 12,
        fontFamily: "bold", // Ensure 'bold' is defined in your font settings
    },
    list: {
        marginTop: 5,
    },
    button: {
        height: 40,
        borderRadius: 12,
        marginHorizontal: 8,
        justifyContent: "center",
    },
    buttonText: {
        fontSize: 13,
        fontFamily: 'regular', // Ensure 'regular' is defined in your font settings
        marginHorizontal: 10,
    },
});

export default ChoicesList;
