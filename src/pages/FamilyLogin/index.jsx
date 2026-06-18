import illustrationFamily from '@assets/icons/login.svg'
import { About, Footer, LoginForm, Menu } from '@components'
import { PageWrapper } from '@globalStylesJSX'
import { DesktopLayout, MobileLayout, MobileFormContainer } from './styles'

export function FamilyLogin() {
	return (
		<>
			<DesktopLayout>
				<div className="leftContent">
					<About illustration={illustrationFamily} />
				</div>
				<div className="rightContent">
					<div className="formArea">
						<LoginForm title="Área da Família" />
					</div>
					<Footer />
				</div>
			</DesktopLayout>

			<MobileLayout>
				<PageWrapper>
					<Menu showAddMessage="none" />
					<MobileFormContainer>
						<LoginForm title="Área da Família" />
					</MobileFormContainer>
					<Footer />
				</PageWrapper>
			</MobileLayout>
		</>
	)
}
