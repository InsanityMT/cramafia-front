import React, { FunctionComponent } from 'react'
import {
  LoginContainer,
  MainText,
  LoginInput,
  HelperButtons,
  SubText,
  RememberUser,
  CheckBox,
  SubmiteButton,
  MinText,
} from './Login.styles'

export const Login: FunctionComponent = () => {
  return (
    <LoginContainer>
      <MainText>Войти</MainText>
      <LoginInput placeholder="Никнейм/Email" />
      <LoginInput type="password" placeholder="Пароль" />
      <HelperButtons>
        <SubText>Забыли пароль?</SubText>
        <RememberUser>
          <CheckBox />
          <SubText>Запомнить меня</SubText>
        </RememberUser>
      </HelperButtons>
      <SubmiteButton variant="warning">Войти</SubmiteButton>
      <HelperButtons>
        <MinText>Нет аккаунта?</MinText>
        <MinText isBorder={true}>Зарегистрировать аккаунт</MinText>
      </HelperButtons>
    </LoginContainer>
  )
}