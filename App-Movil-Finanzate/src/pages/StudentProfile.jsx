// src/pages/StudentProfile.jsx
import React from "react";
import ProfileHeader from "../components/ProfileHeader";
import InfoSection from "../components/InfoSection";
import CourseItem from "../components/CourseItem";
import "../styles/profile.css"; // opcional si quieres separar estilos

const StudentProfile = () => {
    const student = {
        name: "Juan Camilo Carvajal",
        career: "Ingeniería de Sistemas",
        email: "juan.carvajal@universidad.com",
        phone: "+57 300 456 7890",
        semester: "7°",
        gpa: "4.3",
        avatar: "/assets/avatar.jpg",
        courses: [
            "Programación Web",
            "Base de Datos II",
            "Ingeniería de Software",
        ],
    };

    return (
        <div className="profile-container">

            <ProfileHeader
                avatar={student.avatar}
                name={student.name}
                career={student.career}
            />

            <InfoSection
                title="Información Personal"
                fields={[
                    { label: "Correo", value: student.email },
                    { label: "Teléfono", value: student.phone },
                    { label: "Semestre", value: student.semester },
                    { label: "Promedio", value: student.gpa },
                ]}
            />

            <InfoSection title="Cursos Actuales">
                {student.courses.map((c, i) => (
                    <CourseItem key={i} title={c} />
                ))}
            </InfoSection>
        </div>
    );
};

export default StudentProfile;
