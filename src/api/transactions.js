import axios from 'axios';

const API_URL = 'https://wedev-api.sky.pro/api/transactions';

export async function fetchTransactions({ token }) {
  if (!token) {
    throw new Error('Отсутствует токен авторизации');
  }

  try {
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
    return response.data;
  } catch (error) {
    const message = error?.response?.data?.error || error.message || 'Ошибка загрузки транзакций';
    throw new Error(message);
  }
}

export async function postExpense({ token, expense }) {
  if (!token) {
    throw new Error('Отсутствует токен авторизации');
  }
  try {
    const data = await axios.post(API_URL, expense, {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': '',
      },
    });
    return data.data.expenses;
  } catch (error) {
    console.log(error.response)
    const message = error?.response?.data?.error || error.message || 'Ошибка добавления транзакции';
    throw new Error(message);
  }
}

export async function editExpense({ token, id, expense }) {
  try {
    const data = await axios.patch(API_URL + id, expense, {
      headers: {
        Authorization: 'Bearer' + token,
        'Content-Type': '',
      },
    });
    return data.data.expenses;
  } catch (error) {
    const message = error?.response?.data?.error || error.message || 'Ошибка обновления транзакции';
    throw new Error(message);
  }
}
