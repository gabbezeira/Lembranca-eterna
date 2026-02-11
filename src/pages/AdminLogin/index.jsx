import { Footer, LoginForm, Menu } from '@components'
import { PageWrapper } from '@globalStylesJSX'
import { Container } from './styles'

export function AdminLogin() {
	return (
		<PageWrapper>
			<Menu showAddMessage="none" />
			<Container className="bodyAdminForm">
				<LoginForm title="Administrador" linkTo="/adminPainel" />
			</Container>
			<Footer />
		</PageWrapper>
	)
}
