import FormLogin from './components/FormLogin'

export default function Home() {
  return (
    <section className="h-ful w-full xl:max-w-7xl flex flex-col items-center gap-6">
      <h1 className="font-black text-4xl">Entrar</h1>
      <FormLogin />
    </section>
  )
}
