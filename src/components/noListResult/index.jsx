import Archive from '@assets/icons/archive.svg'
import { Button } from '@components'
import { UserPlus } from 'lucide-react'
import { Container } from './styles'

export function NoListResult({ onCreateUser }) {
	return (
		<Container>
			<img className="image" src={Archive} alt="nenhum resultado" />
			<div className="texts">
				<h1 className="title">Você não tem usuários cadastradas</h1>
				<p className="subtitle">Crie um pelo botão abaixo.</p>
			</div>
			<Button variant="primary" onClick={onCreateUser}>
				<UserPlus />
				Criar Usuário
			</Button>
		</Container>
	)
}
