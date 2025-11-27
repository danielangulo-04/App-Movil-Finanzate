import { ScrollView, View } from "react-native";
import globalStyles from "../styles/globalStyles.jsx";
import ProfileHeader from "../components/ProfileHeader.jsx";
import InfoRow from "../components/InfoRow.jsx";
import { useStudentData } from "../hooks/useStudentData.jsx";

const StudentProfileScreen = () => {
    const student = useStudentData();

    return (
        <ScrollView contentContainerStyle={globalStyles.screenContainer}>
            <ProfileHeader
                name={student.name}
                photo={require("../../assets/images/student.jpg")}
            />

            <View style={{ backgroundColor: "#fff", padding: 20, borderRadius: 15 }}>
                <InfoRow label="Carrera" value={student.career} />
                <InfoRow label="Semestre" value={student.semester} />
                <InfoRow label="Email" value={student.email} />
            </View>
        </ScrollView>
    );
};

export default StudentProfileScreen;
