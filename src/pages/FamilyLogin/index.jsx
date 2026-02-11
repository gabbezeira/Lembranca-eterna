import illustrationFamily from '@assets/icons/login.svg'
import { About, Footer, LoginForm } from '@components'
import { Container } from './styles'

export function FamilyLogin() {
	return (
		<Container>
			<div className="leftContent">
				<About illustration={illustrationFamily} />
			</div>
			<div className="rightContent">
				<div className="formArea">
					<LoginForm title="Área da Família" />
				</div>
				<Footer />
			</div>
		</Container>
	)
}
