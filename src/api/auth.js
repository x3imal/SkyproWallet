import axios from "axios";

const API_URL = "https://wedev-api.sky.pro/api/user";

export async function signIn({ login, password }) {
    try {
        const response = await axios.post(
            API_URL + "/login",
            { login, password },
            {
                headers: {
                    "Content-Type": "",
                },
            }
        );

        return response.data.user;
    } catch (error) {
        const message = error?.response?.data?.error || "Ошибка авторизации";
        throw new Error(message);
    }
}

export async function signUp({ name, login, password }) {
    try {
        const response = await axios.post(
            API_URL,
            { login, name, password },
            {
                headers: {
                    "Content-Type": "",
                },
            }
        );

        return response.data.user;
    } catch (error) {
        const message = error?.response?.data?.error || "Ошибка регистрации";
        throw new Error(message);
    }
}
