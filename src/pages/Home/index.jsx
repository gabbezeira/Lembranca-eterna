import illustrationHome from '@assets/icons/illustration-login.svg'
import { About, Footer, MemorialSearch, Menu } from '@components'
import { Container } from './styles'

export function Home() {
	return (
		<Container>
			<Menu
				className="homeMenu"
				padding={'0rem 4.375rem'}
				showAddMessage="none"
				position="fixed"
			/>
			<div className="leftContent">
				<About illustration={illustrationHome} />
			</div>
			<div className="rightContent">
				<div className="searchArea">
					<MemorialSearch />
				</div>
				<Footer />
			</div>
		</Container>
	)
}
