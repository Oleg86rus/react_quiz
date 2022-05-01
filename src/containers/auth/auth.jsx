import React from 'react'
import './auth.css'
import Button from '../../components/UI/button/button'

const Auth = () => {
  const loginHandler = () => {
  
  }
  const registerHandler = () => {
  
  }
  const submitHandler = (event) => {
    event.preventDefault()
  }
  return (
    <div className='Auth'>
      <div>
        <h1>Авторизация</h1>
        <form onSubmit={submitHandler} className='AuthForm'>
          <input type="text"/>
          <input type="text"/>
          <Button
            type='success'
            onClick={loginHandler}
          >
            Войти
          </Button>
          <Button
            type='primary'
            onClick={registerHandler}
          >
            Зарегестрироваться
          </Button>
        </form>
      </div>
    </div>
  )
}
export default Auth