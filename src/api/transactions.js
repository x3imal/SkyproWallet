import axios from 'axios';

const API_URL = 'https://wedev-api.sky.pro/api/transactions';

export async function fetchTransactions({token}) {
    if (!token) {
        throw new Error('Отсутствует токен авторизации');
    }

    try {
        const response = await axios.get(API_URL, {
            headers: {
                Authorization: 'Bearer ' + token,
            },
        });
        return response.data.transactions;
    } catch (error) {
        const message = error?.response?.data?.error || error.message || "Ошибка загрузки транзакций";
        throw new Error(message);
    }
}


