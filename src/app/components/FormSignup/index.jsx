import Link from 'next/link'
import Input from '../Input'
import Button from '../Button'

const FormSignup = () => {
  const handleSubmitSignup = async (formData) => {
    'use server'
    const fullname = formData.get('fullname')
    const email = formData.get('email')
    const password = formData.get('password')

    console.log(fullname, email, password)
  }
  return (
    <form
      action={handleSubmitSignup}
      className="h-80 w-96 border border-zinc-600 rounded-md p-4 flex flex-col items-center gap-4"
    >
      <Input
        type="text"
        name="fullname"
        placeholder="Digite seu nome completo"
      />
      <Input type="email" name="email" placeholder="Digite seu email" />
      <Input type="password" name="password" placeholder="Digite sua senha" />
      <div className="w-full text-xs mb-2">
        <span>
          Já possui conta?{' '}
          <Link className="underline" href="/">
            Entrar
          </Link>
        </span>
      </div>
      <Button title="Cadastrar" />
    </form>
  )
}

export default FormSignup
