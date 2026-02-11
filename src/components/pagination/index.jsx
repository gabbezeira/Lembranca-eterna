import { ChevronLeft, ChevronRight } from 'lucide-react'
import React from 'react'
import { NavButton, PageButton, PaginationContainer } from './styles'

export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
	if (totalPages <= 1) return null

	const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

	return (
		<PaginationContainer>
			<NavButton
				onClick={() => onPageChange(currentPage - 1)}
				disabled={currentPage === 1}
			>
				<ChevronLeft size={16} />
			</NavButton>

			{pages.map((page) => (
				<PageButton
					key={page}
					className={currentPage === page ? 'active' : ''}
					onClick={() => onPageChange(page)}
				>
					{page}
				</PageButton>
			))}

			<NavButton
				onClick={() => onPageChange(currentPage + 1)}
				disabled={currentPage === totalPages}
			>
				<ChevronRight size={16} />
			</NavButton>
		</PaginationContainer>
	)
}
