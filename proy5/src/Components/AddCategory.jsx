import React, { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState('');

    const onInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length <= 1) return;
        onNewCategory(inputValue.trim());
        setInputValue('');
    };

    return (
        <form onSubmit={onSubmit}>
            <label>Input:</label>
            <input
                type="text"
                placeholder="Buscar Imagenes"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    );
};
