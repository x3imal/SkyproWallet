import React from "react";
import styled from "styled-components";
import { Input } from "../ui/Input/Input.jsx";
import { Button } from "../ui/Button/Button.jsx";

const Overlay = styled.div`
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(15, 23, 42, 0.35);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
`;

const Card = styled.div`
    width: 379px;
    height: 334px;
    border-radius: 30px;
    background: #ffffff;
    box-shadow: 0px 20px 67px -12px #00000021;

    padding: 32px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: center;
`;

const Title = styled.h2`
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 24px;
    line-height: 100%;
    text-align: center;
    color: #111827;
`;

const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: center;
`;

const Footer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4px;
    align-items: center;
`;

const HelperText = styled.p`
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
    text-align: center;
    color: #9ca3af;
`;

const LinkText = styled.button`
    border: none;
    background: transparent;
    cursor: pointer;

    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
    text-align: center;
    text-decoration: underline;
    color: #9ca3af;

    &:hover {
        opacity: 0.8;
    }
`;

export const AuthModal = ({ mode = "login", onClose, onModeChange }) => {
  const isLogin = mode === "login";

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const toggleMode = () => {
    if (onModeChange) {
      onModeChange(isLogin ? "register" : "login");
    }
  };

  return (
    <Overlay onClick={onClose}>
      <Card onClick={(e) => e.stopPropagation()}>
        <Title>{isLogin ? "Вход" : "Регистрация"}</Title>

        <Form onSubmit={handleSubmit}>
          {!isLogin && (
            <Input type="text" name="name" placeholder="Имя" autoComplete="name" />
          )}

          <Input
            type="text"
            name="login"
            placeholder="Логин"
            autoComplete="username"
          />

          {!isLogin && (
            <Input
              type="email"
              name="email"
              placeholder="Email"
              autoComplete="email"
            />
          )}

          <Input
            type="password"
            name="password"
            placeholder="Пароль"
            autoComplete={isLogin ? "current-password" : "new-password"}
          />

          {!isLogin && (
            <Input
              type="password"
              name="passwordConfirm"
              placeholder="Повторите пароль"
              autoComplete="new-password"
            />
          )}

          <Button type="submit">
            {isLogin ? "Войти" : "Зарегистрироваться"}
          </Button>
        </Form>

        <Footer>
          <HelperText>
            {isLogin ? "Нужно зарегистрироваться?" : "Уже есть аккаунт?"}
          </HelperText>
          <LinkText type="button" onClick={toggleMode}>
            {isLogin ? "Регистрируйтесь здесь" : "Войти"}
          </LinkText>
        </Footer>
      </Card>
    </Overlay>
  );
};