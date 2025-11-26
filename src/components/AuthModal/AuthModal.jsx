import React from "react";
import styled from "styled-components";
import { Input } from "../ui/Input/Input.jsx";
import { Button } from "../ui/Button/Button.jsx";

const Overlay = styled.div`
    position: fixed;
    inset: 0;        
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
`;

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

const Title = styled.h2`
    font-weight: 700;
    font-size: 24px;
    line-height: 100%;
    text-align: center;
    color: #111827;
    margin: 0;
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
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    text-align: center;
    color: #9ca3af;
    margin: 0;
`;

const LinkText = styled.button`
    font-family: "Montserrat", sans-serif;
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


export const AuthModal = ({ mode = "login", onModeChange, onSubmit }) => {
    const isLogin = mode === "login";

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!onSubmit) return;

        const formData = new FormData(e.target);

        const payload = {
            mode,
            name: (formData.get("name") || "").trim(),
            email: (formData.get("email") || "").trim(),
            password: formData.get("password") || "",
        };

        onSubmit(payload);
    };

    const toggleMode = () => {
        if (onModeChange) {
            onModeChange(isLogin ? "register" : "login");
        }
    };

    return (
        <Overlay>
            <Card onClick={(e) => e.stopPropagation()}>
                <Title>{isLogin ? "Вход" : "Регистрация"}</Title>

                {/* Форма */}
                <Form onSubmit={handleSubmit}>
                    {!isLogin && (
                        <Input
                            type="text"
                            name="name"
                            placeholder="Имя"
                            autoComplete="name"
                        />
                    )}

                    <Input
                        type="text"
                        name="email"
                        placeholder="Email"
                        autoComplete="email"
                    />

                    <Input
                        type="password"
                        name="password"
                        placeholder="Пароль"
                        autoComplete={isLogin ? "current-password" : "new-password"}
                    />

                    <Button type="submit">
                        {isLogin ? "Войти" : "Зарегистрироваться"}
                    </Button>
                </Form>

                <Footer>
                    <HelperText>
                        {isLogin ? "Нужно зарегистрироваться?" : "Уже есть аккаунт?"}
                    </HelperText>
                    <LinkText type="button" onClick={toggleMode}>
                        {isLogin ? "Регистрируйтесь здесь" : "Войдите здесь"}
                    </LinkText>
                </Footer>
            </Card>
        </Overlay>
    );
};