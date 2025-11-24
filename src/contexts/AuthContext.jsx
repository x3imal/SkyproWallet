import { createContext, useContext, useEffect, useState } from "react";

// Создаём контекст для авторизации — через него все компоненты будут получать данные о пользователе
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    // Текущий пользователь (null = не авторизован)
    const [user, setUser] = useState(null);

    // Открыта ли модалка входа/регистрации
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

    // Текущий режим модалки: "login" (вход) или "register" (регистрация)
    const [mode, setMode] = useState("login");

    // При загрузке приложения проверяем — есть ли сохранённый пользователь в localStorage?
    useEffect(() => {
        const stored = localStorage.getItem("fakeUser");

        if (stored) {
            try {
                const parsed = JSON.parse(stored);
                // Если данные валидные — автоматически логиним пользователя
                setUser(parsed);
                setIsAuthModalOpen(false); // модалка не нужна — он уже "в системе"
            } catch (error) {
                // Если JSON сломан — чистим и показываем модалку
                console.error("Ошибка парсинга fakeUser из localStorage", error);
                localStorage.removeItem("fakeUser");
                setUser(null);
                setIsAuthModalOpen(true);
            }
        } else {
            // Если ничего нет в localStorage — это первый вход → показываем модалку
            setIsAuthModalOpen(true);
        }
    }, []); // выполнится только один раз при монтировании приложения

    // Регистрация нового пользователя
    const register = (data) => {
        const newUser = {
            name: data.name || "",
            login: data.login || data.email, // в твоём проекте логин = email
            email: data.email,
            password: data.password,
        };

        // Сохраняем в localStorage как "фейковый бэкенд"
        localStorage.setItem("fakeUser", JSON.stringify(newUser));

        // Автоматически логиним после регистрации
        setUser(newUser);
        setIsAuthModalOpen(false); // закрываем модалку
    };

    // Вход в систему
    const login = (data) => {
        const stored = localStorage.getItem("fakeUser");

        // Если пользователь ещё не регистрировался
        if (!stored) {
            return { ok: false, reason: "no_user" }; // → "Сначала зарегистрируйтесь"
        }

        let storedUser;
        try {
            storedUser = JSON.parse(stored);
        } catch {
            return { ok: false, reason: "invalid_storage" };
        }

        // Проверяем совпадение логина (email) и пароля
        if (storedUser.email === data.email && storedUser.password === data.password) {
            setUser(storedUser);
            setIsAuthModalOpen(false); // успех → закрываем модалку
            return { ok: true };
        }

        // Неверные данные
        return { ok: false, reason: "invalid_credentials" };
    };

    // Выход из аккаунта
    const logout = () => {
        setUser(null);
        // localStorage НЕ очищаем — пусть пользователь может войти заново без перерегистрации
        // Но модалку открываем снова
        setIsAuthModalOpen(true);
    };

    // Возвращаем провайдер со всеми нужными значениями и функциями
    return (
        <AuthContext.Provider
            value={{
                user,                    // объект пользователя или null
                isAuth: !!user,          // булевое: авторизован ли (удобно для условий)
                isAuthModalOpen,         // открыта ли модалка
                setIsAuthModalOpen,      // открыть/закрыть модалку вручную
                mode,                    // "login" | "register"
                setMode,                 // переключить режим
                login,                   // функция входа
                register,                // функция регистрации
                logout,                  // функция выхода
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

// Хук для удобного использования контекста в любом компоненте
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);