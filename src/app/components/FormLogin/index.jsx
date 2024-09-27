import Link from 'next/link'
import Button from '../Button'
import Input from '../Input'
import { api } from '@/api'

const FormLogin = () => {
  const handleSubmitLogin = async (formData) => {
    'use server'
    const email = formData.get('email')
    const password = formData.get('password')

    console.log(email, password)

    const user = await api.post('/session', {
      email,
      password,
    })
    console.log(user.data)
  }
  return (
    <form
      action={handleSubmitLogin}
      className="h-64 w-72 border border-zinc-600 rounded-md p-3 flex flex-col items-center gap-6"
    >
      <Input type="email" name="email" placeholder="Digite seu email" />
      <Input type="password" name="password" placeholder="Digite sua senha" />
      <div className="w-full text-xs">
        <span>
          Não possui conta?{' '}
          <Link className="underline" href="/signup">
            Cadastre-se
          </Link>
        </span>
      </div>
      <Button title="Entrar" />
    </form>
  )
}

export default FormLogin
