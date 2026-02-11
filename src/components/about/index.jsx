import { Container } from './styles'

export function About({ illustration }) {
	return (
		<Container>
			<img
				className="illustration"
				src={illustration}
				alt="Um pai ensinado seu filho a andar de skate"
			/>
			<div className="textContent">
				<h1 className="title">Sobre Nós</h1>
				<p className="description">
					A saudade é a prova de que o amor valeu a pena. Criamos este espaço para que as lembranças não se percam no tempo, mas encontrem um lar eterno. Aqui, transformamos o luto em homenagem e garantimos que as histórias, sorrisos e momentos de quem você ama continuem vivos, iluminando corações hoje e sempre.
				</p>
			</div>
		</Container>
	)
}
