import React, { Component } from "react";

export default ({ type, placeholder, data, onChange }) => (
    <div class="field">
        <div class="control">
            <input 
                class="input"
                type="text"
                name={type}
                placeholder={placeholder}
                value={data}
                onChange={e => onChange(e.target.value)}
            />
        </div>
    </div>
);