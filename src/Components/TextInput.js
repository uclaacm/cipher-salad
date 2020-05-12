import React, { Component } from "react";

export default ({ type, placeholder, data, onChange }) => (
    <div className="field">
        <div className="control">
            <input 
                className="input"
                type="text"
                name={type}
                placeholder={placeholder}
                value={data}
                onChange={e => onChange(e.target.value)}
            />
        </div>
    </div>
);