import { useState } from 'react'
import { Container } from './styles'

export const MediaSection = ({ title, items = [] }) => {
	const [selected, setSelected] = useState(null)

	const handleClose = () => setSelected(null)

	return (
		<Container>
			<div className="title">{title}</div>
			<div className="mediaGrid">
				{items.slice(0, 4).map((item, index) => (
					<div
						className="mediaItem"
						key={index}
						onClick={() => setSelected(item)}
					>
						{item.type === 'video' || item.type === 'VIDEO' ? (
							<div className="videoWrapper">
								<video
									src={item.url || item.src}
									className="thumbnailVideo"
									preload="metadata"
								/>
								<div className="playOverlay">
									<div className="playIcon">▶</div>
								</div>
							</div>
						) : (
							<img
								className="mediaImage"
								src={item.url || item.src}
								alt={item.alt || `${title}-${index}`}
							/>
						)}
					</div>
				))}
			</div>

			{selected && (
				<div className="modalContainer" onClick={handleClose}>
					<div className="modalContent" onClick={(e) => e.stopPropagation()}>
						<div className="close" onClick={handleClose}>
							×
						</div>
						{selected.type === 'video' || selected.type === 'VIDEO' ? (
							<video controls autoPlay>
								<source src={selected.url || selected.src} type="video/mp4" />
								Seu navegador não suporta vídeos.
							</video>
						) : (
							<img src={selected.url || selected.src} alt={selected.alt} />
						)}
					</div>
				</div>
			)}
		</Container>
	)
}
