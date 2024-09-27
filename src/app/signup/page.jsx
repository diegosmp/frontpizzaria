import FormSignup from '../components/FormSignup'

export default function Signup() {
  return (
    <section className="h-ful w-full xl:max-w-7xl flex flex-col items-center gap-6">
      <h1 className="font-black text-4xl">Cadastrar</h1>
      <FormSignup />
    </section>
  )
}
