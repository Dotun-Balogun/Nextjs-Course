import Card from '@/app/components/Card'
import React from 'react'

const LoginForm = () => {
  return (
    <Card>
        <h2>LoginForm</h2>
        <form className='flex flex-col'>
            <label>
                Email:
                <input type="email" name="email" />
            </label>
            <label>
                Password:
                <input type="password" name="password" />
            </label>
            <button type="submit">Login</button>
        </form>
    </Card>
  )
}

export default LoginForm