import React from 'react'
import { FilterContainer, FilterGroup, Select, Input } from './styles'
import { Filter, ArrowUpDown, Calendar, Crown } from 'lucide-react'

export const AdminFilters = ({
	filterStatus,
	setFilterStatus,
	sortBy,
	setSortBy,
	filterPlan,
	setFilterPlan,
	filterDate,
	setFilterDate,
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
				<Crown size={20} />
				<Select
					value={filterPlan}
					onChange={(e) => setFilterPlan(e.target.value)}
				>
					<option value="all">Plano: Todos</option>
					<option value="free">Plano: Free</option>
					<option value="premium">Plano: Premium</option>
				</Select>
			</FilterGroup>

			<FilterGroup>
				<Calendar size={20} />
				<Input
					type="date"
					value={filterDate}
					onChange={(e) => setFilterDate(e.target.value)}
					title="Filtrar por data de validade"
				/>
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
