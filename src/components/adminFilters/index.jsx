import React from 'react'
import { FilterContainer, FilterGroup, Select } from './styles'
import { Filter, ArrowUpDown } from 'lucide-react'

export const AdminFilters = ({
	filterStatus,
	setFilterStatus,
	sortBy,
	setSortBy,
}) => {
	return (
		<FilterContainer>
			<FilterGroup>
				<Filter size={20} />
				<Select
					value={filterStatus}
					onChange={(e) => setFilterStatus(e.target.value)}
				>
					<option value="all">Status: Todos</option>
					<option value="incomplete">Status: Incompletos</option>
				</Select>
			</FilterGroup>

			<FilterGroup>
				<ArrowUpDown size={20} />
				<Select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
					<option value="newest">Ordenar: Mais Recentes</option>
					<option value="oldest">Ordenar: Mais Antigos</option>
					<option value="alpha_resp">Ordenar: A-Z (Responsável)</option>
					<option value="alpha_dec">Ordenar: A-Z (Falecido)</option>
				</Select>
			</FilterGroup>
		</FilterContainer>
	)
}
