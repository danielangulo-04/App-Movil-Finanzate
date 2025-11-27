import { View, Text, Image, StyleSheet } from "react-native";
import colors from "../styles/colors.jsx";

const ProfileHeader = ({ name, photo }) => {
    return (
        <View style={styles.container}>
            <Image source={photo} style={styles.photo} />
            <Text style={styles.name}>{name}</Text>
        </View>
    );
};

export default ProfileHeader;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        marginBottom: 20,
    },
    photo: {
        width: 130,
        height: 130,
        borderRadius: 65,
        marginBottom: 10,
    },
    name: {
        fontSize: 24,
        fontWeight: "bold",
        color: colors.text,
    },
});
