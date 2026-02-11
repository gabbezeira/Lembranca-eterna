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
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s. It has survived not only five centuries.
				</p>
			</div>
		</Container>
	)
}
