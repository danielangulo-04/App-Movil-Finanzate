// src/components/InfoSection.jsx
import React from "react";

const InfoSection = ({ title, fields = [], children }) => {
    return (
        <div className="section-card">
            <h3 className="section-title">{title}</h3>

            {fields.map((f, i) => (
                <div key={i} className="info-row">
                    <span className="label">{f.label}:</span>
                    <span className="value">{f.value}</span>
                </div>
            ))}

            {/* Para cursos */}
            {children && <div className="children">{children}</div>}
        </div>
    );
};

export default InfoSection;
