import { View, Text, StyleSheet } from "react-native";

const InfoRow = ({ label, value }) => (
    <View style={styles.row}>
        <Text style={styles.label}>{label}:</Text>
        <Text style={styles.value}>{value}</Text>
    </View>
);

export default InfoRow;

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderColor: "#ccc",
    },
    label: {
        fontSize: 16,
        fontWeight: "600",
    },
    value: {
        fontSize: 16,
    },
});
