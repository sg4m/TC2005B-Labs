import axios from 'axios';

const API_URL = 'http://localhost:5000/api/countries';

export const getCountries = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error al obtener los paises:', error);
        throw error;
    }
};

export const getCountry = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error al obtener el pais:', error);
        throw error;
    }
};

export const createCountry = async (country) => {
    try {
        const response = await axios.post(API_URL, country);
        return response.data;
    } catch (error) {
        console.error('Error al crear el pais:', error);
        throw error;
    }
};

export const updateCountry = async (id, country) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, country);
        return response.data;
    } catch (error) {
        console.error('Error al actualizar el pais:', error);
        throw error;
    }
};

export const deleteCountry = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error al eliminar el pais:', error);
        throw error;
    }
};