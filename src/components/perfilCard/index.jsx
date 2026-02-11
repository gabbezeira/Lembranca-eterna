import SkyCover from '@assets/placeholders/sky.jpg'
import defaultProfileImage from '@assets/placeholders/perfilphotoplaceholders.webp'
import { Container, PerfilPhoto, PerfilPhotoImage, TopArea } from './styles'

export const PerfilCard = ({ name, bio, birthDate, deathDate, image }) => {
	const formatYear = (dateString) => {
		if (!dateString) return '????'
		return new Date(dateString).getFullYear()
	}

	return (
		<Container>
			<TopArea $coverImage={SkyCover}>
				<PerfilPhoto className="perfilPhoto">
					<PerfilPhotoImage
						src={image || defaultProfileImage}
						alt={name}
						onError={(e) => {
							e.target.onerror = null
							e.target.src = defaultProfileImage
						}}
					/>
				</PerfilPhoto>
			</TopArea>
			<div className="bottomArea">
				<div className="title">
					<h1 className="name">{name}</h1>
					<p className="dates">
						⭐️ {formatYear(birthDate)} - {formatYear(deathDate)} ✝️
					</p>
				</div>
				<div className="description">{bio}</div>
			</div>
		</Container>
	)
}
