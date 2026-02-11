import { Edit, Link2, Trash2 } from 'lucide-react'
import { Container } from './styles'

export function UserCard({ userData, onLink, onEdit, onDelete }) {
	const defaultData = {
		responsible: 'Fulano de Tal',
		phone: '349999-9999',
		email: 'fulano@gmail.com',
		code: '202501',
	}

	const data = userData || defaultData

	const usersData = [
		{
			itemLabel: 'Responsável:',
			itemData: data.responsible,
		},
		{
			itemLabel: 'Telefone:',
			itemData: data.phone,
		},
		{
			itemLabel: 'Email:',
			itemData: data.email,
		},
		{
			itemLabel: 'Código:',
			itemData: data.code || 'N/A',
		},
	]

	return (
		<Container>
			{usersData.map((item, index) => (
				<div key={index} className="data">
					<span className="itemLabel">{item.itemLabel}</span>
					<span className="itemData">{item.itemData}</span>
				</div>
			))}
			<div className="actions">
				<button
					className="actionButton link"
					title="Link"
					onClick={() => onLink && onLink(data)}
				>
					<Link2 size={16} />
				</button>
				<button
					className="actionButton update"
					title="Editar"
					onClick={() => onEdit && onEdit(data)}
				>
					<Edit size={16} />
				</button>
				<button
					className="actionButton trash"
					title="Excluir"
					onClick={() => onDelete && onDelete(data)}
				>
					<Trash2 size={16} />
				</button>
			</div>
		</Container>
	)
}
