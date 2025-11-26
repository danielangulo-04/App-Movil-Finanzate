// src/components/ProfileHeader.jsx
import React from "react";

const ProfileHeader = ({ avatar, name, career }) => {
    return (
        <div className="header-card">
            <img src={avatar} className="avatar" alt="avatar" />

            <h2 className="name">{name}</h2>
            <p className="career">{career}</p>

            <button className="edit-btn">Editar Perfil</button>
        </div>
    );
};

export default ProfileHeader;
