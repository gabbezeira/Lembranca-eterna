import { ExternalLink } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../button'
import { Container } from './styles'

export function MemorialSearch() {
	const [code, setCode] = useState('')
	const navigate = useNavigate()

	const handleSearch = () => {
		if (code.trim()) {
			navigate(`/memorial/${code}`)
		}
	}

	const handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			handleSearch()
		}
	}

	return (
		<Container>
			<h1 className="title">Encontrar Memorial</h1>
			<input
				className="searchInput"
				type="text"
				placeholder="Digite o código do memorial..."
				value={code}
				onChange={(e) => setCode(e.target.value)}
				onKeyDown={handleKeyDown}
				maxLength={6}
			/>
			<Button
				variant="primary"
				fontWeight="500"
				fontSize="0.875rem"
				borderRadius={'0.5rem'}
				onClick={handleSearch}
				width="auto"
			>
				<ExternalLink
					className="buttonIcon"
					size={18}
					style={{ marginRight: 8 }}
				/>
				Ir para o memorial
			</Button>
			<p className="helpLink">preciso de ajuda</p>
		</Container>
	)
}
