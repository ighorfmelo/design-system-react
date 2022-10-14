import { Envelope, LockSimple } from 'phosphor-react'
import { FormEvent, useState } from 'react'
import { Button } from '../components/Button'
import { CheckBox } from '../components/CheckBox'
import { Heading } from '../components/Heading'
import { Text } from '../components/Text'
import { TextInput } from '../components/TextInput'
import { Logo } from '../styles/Logo'

export function SignIn() {
    const [isUserSignedIn, setIsUserSignedIn] = useState(false)
    function handleSignIn(event: FormEvent) {
      event.preventDefault()

      setIsUserSignedIn(true)
    }
    return (
      <div className='w-screen h-screen bg-gray-900 flex items-center justify-center flex-col text-gray-100 '>
        <header className='flex flex-col items-center'>
          <Logo />
          <Heading size="lg" className='mt-4'>
            Ignite Lab
          </Heading>
          <Text className='text-gray-400 mt-1'>Faça login nessa tela</Text>
        </header>

        <form  onSubmit={handleSignIn} className='flex flex-col items-stretch w-full max-w-md mt-10 gap-4'>
          { isUserSignedIn && <Text>Login realizado!</Text> }
          <label htmlFor="email" className='flex flex-col items-stretch gap-3'>
            <Text className='font-semibold'>Endereço de e-mail</Text>
            <TextInput.Root>
              <TextInput.Icon>
                <Envelope />
              </TextInput.Icon>

              <TextInput.Input type='email' id='email' placeholder='Digite seu e-mail' />
            </TextInput.Root>
          </label>

          <label htmlFor="password" className='flex flex-col items-stretch gap-3'>
            <Text className='font-semibold'>Senha</Text>
            <TextInput.Root>
              <TextInput.Icon>
                <LockSimple/>
              </TextInput.Icon>

              <TextInput.Input type='password' id='password' placeholder='Digite sua senha' />
            </TextInput.Root>
          </label>

          <label htmlFor="remember" className='flex items-center gap-2'>
            <CheckBox id='remember'/>
            <Text size="sm" className='text-gray-200'>Lembrar de mim por 30 dias</Text>
          </label>

          <Button type='submit' className='mt-4'>Entrar na plataforma</Button>
        </form>

        <footer className='flex flex-col items-center gap-4 mt-8'>
          <Text asChild size='sm'>
            <a href="" className='text-gray-400 underline hover:text-gray-200'>
              Esqueceu sua senha?
            </a>
          </Text>
          <Text asChild size='sm'>
            <a href="" className='text-gray-400 underline hover:text-gray-200'>Não possui conta? Crie uma agora!</a>
          </Text>

        </footer>

      </div>
    )
  }