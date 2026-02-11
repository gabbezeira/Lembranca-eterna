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
					saudade é a prova de que o amor valeu a pena. Criamos este espaço para transformar essa saudade em homenagem e dar um lar eterno às lembranças. Aqui, as histórias, fotos e sorrisos de quem você ama continuam vivos para sempre.
				</p>
			</div>
		</Container>
	)
}
