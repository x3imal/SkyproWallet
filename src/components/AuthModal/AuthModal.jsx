import React from 'react';
import styled from 'styled-components';
import { Input } from '../ui/Input/Input.jsx';
import { Button } from '../ui/Button/Button.jsx';

// ======================== Стили модалки ========================

// Полупрозрачный фон, закрывающий весь экран
const Overlay = styled.div`
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(244, 245, 246, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

// Белая карточка с формой
const Card = styled.div`
  width: 379px;
  min-height: 334px;
  border-radius: 30px;
  background: #ffffff;
  box-shadow: 0px 20px 67px -12px #00000021;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
`;

// Заголовок «Вход» / «Регистрация»
const Title = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 100%;
  text-align: center;
  color: #111827;
  margin: 0;
`;

// Форма (можно отправлять по Enter)
const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
`;

// Футер с текстом «Уже есть аккаунт?» и ссылкой
const Footer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
`;

const HelperText = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  text-align: center;
  color: #9ca3af;
  margin: 0;
`;

// Ссылка-подсказка для переключения между входом и регистрацией
const LinkText = styled.button`
  font-family: 'Montserrat', sans-serif;
  border: none;
  background: transparent;
  cursor: pointer;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  text-decoration: underline;
  color: #9ca3af;

  &:hover {
    opacity: 0.8;
  }
`;

// ======================== Компонент модалки ========================

export const AuthModal = ({ mode = 'login', onModeChange, onSubmit, onClose }) => {
  const isLogin = mode === 'login'; // текущий режим: вход или регистрация

  // Обработчик отправки формы
  const handleSubmit = (e) => {
    e.preventDefault(); // отменяем стандартную отправку формы (перезагрузку страницы)

    if (!onSubmit) return;

    const formData = new FormData(e.target);

    // Собираем данные из полей
    const payload = {
      mode, // "login" или "register" — важно для бэкенда и Layout
      name: (formData.get('name') || '').trim(),
      email: (formData.get('email') || '').trim(),
      password: formData.get('password') || '',
    };

    // Передаём данные наверх (в Layout → AuthContext)
    onSubmit(payload);
  };

  // Переключение между режимами «Вход» ↔ «Регистрация»
  const toggleMode = () => {
    if (onModeChange) {
      onModeChange(isLogin ? 'register' : 'login');
    }
  };

  return (
    <Overlay>
      {' '}
      {/* клик по фону → закрываем модалку */}
      {/* Карточка модалки — клик по ней НЕ должен закрывать модалку */}
      <Card onClick={(e) => e.stopPropagation()}>
        <Title>{isLogin ? 'Вход' : 'Регистрация'}</Title>

        {/* Форма */}
        <Form onSubmit={handleSubmit}>
          {/* Поле имени — только при регистрации */}
          {!isLogin && <Input type="text" name="name" placeholder="Имя" autoComplete="name" />}

          {/* Email — всегда (у тебя используется как логин) */}
          <Input type="email" name="email" placeholder="Email" autoComplete="email" />

          {/* Пароль */}
          <Input
            type="password"
            name="password"
            placeholder="Пароль"
            autoComplete={isLogin ? 'current-password' : 'new-password'}
          />

          {/* Кнопка отправки */}
          <Button type="submit">{isLogin ? 'Войти' : 'Зарегистрироваться'}</Button>
        </Form>

        {/* Футер с переключателем режима */}
        <Footer>
          <HelperText>{isLogin ? 'Нужно зарегистрироваться?' : 'Уже есть аккаунт?'}</HelperText>
          <LinkText type="button" onClick={toggleMode}>
            {isLogin ? 'Регистрируйтесь здесь' : 'Войдите здесь'}
          </LinkText>
        </Footer>
      </Card>
    </Overlay>
  );
};
