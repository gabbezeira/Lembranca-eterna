import { LogInIcon } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useAuth } from '../../contexts/AuthContext'
import { Button } from '../button'
import { Container } from './styles'

export function LoginForm({ title, linkTo }) {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [loading, setLoading] = useState(false)
	const { login } = useAuth()
	const navigate = useNavigate()

	const handleSubmit = async (e) => {
		e.preventDefault()
		setLoading(true)
		try {
			await login(email, password)
			if (linkTo) {
				navigate(linkTo)
			} else {
				navigate('/clientPainel')
			}
			toast.success('Login realizado com sucesso!')
		} catch (err) {
			console.error('Erro ao fazer login:', err)
			toast.error('Falha no login. Verifique suas credenciais.')
		} finally {
			setLoading(false)
		}
	}

	return (
		<Container>
			<h1 className="title">{title}</h1>
			<form className="formContainer" onSubmit={handleSubmit}>
				<div className="input">
					<label className="textLabel">Email</label>
					<input
						className="textInput"
						type="email"
						placeholder="Digite seu email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</div>
				<div className="input">
					<label className="textLabel">Senha</label>
					<input
						className="textInput"
						type="password"
						placeholder="Senha"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</div>

				<Button
					className="buttonLogin"
					variant="primary"
					fontWeight="500"
					fontSize="0.875rem"
					width="100%"
					height="3.75rem"
					borderRadius={'0.5rem'}
					type="submit"
					disabled={loading}
				>
					<LogInIcon className="buttonIcon" />
					{loading ? 'Entrando...' : 'Entrar'}
				</Button>
			</form>
			<a
				href="https://wa.me/5534999999999"
				target="_blank"
				rel="noopener noreferrer"
				className="helpLink"
			>
				preciso de ajuda
			</a>
		</Container>
	)
}
