import { GenericModal } from '@components'
import { ButtonGroup, WarningText } from './styles'
import TrashIcon from '@assets/icons/trash.svg'
import { Button } from '../button'
import { AlertTriangle } from 'lucide-react'

export const DeleteUserModal = ({ isOpen, onClose, onConfirm, userName }) => {
	const handleConfirm = () => {
		onConfirm()
		onClose()
	}

	return (
		<GenericModal
			image={TrashIcon}
			isOpen={isOpen}
			onClose={onClose}
			title="Excluir Usuário"
			subtitle={`Tem certeza que deseja excluir o usuário ${userName}?`}
			showCloseButton
		>
			<WarningText>
				<AlertTriangle size={16} />
				<span>
					O acesso do usuário será removido imediatamente. Os dados do memorial
					(fotos, vídeos e homenagens) serão mantidos por{' '}
					<strong>60 dias</strong> para possível recuperação, após esse período
					serão excluídos permanentemente.
				</span>
			</WarningText>
			<ButtonGroup>
				<Button type="button" variant="blue" onClick={onClose}>
					Cancelar
				</Button>
				<Button type="button" variant="primary" onClick={handleConfirm}>
					Excluir
				</Button>
			</ButtonGroup>
		</GenericModal>
	)
}
