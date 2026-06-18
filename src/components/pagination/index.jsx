import { ChevronLeft, ChevronRight } from 'lucide-react'
import React from 'react'
import { NavButton, PageButton, PaginationContainer, Ellipsis } from './styles'

export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
	if (totalPages <= 1) return null

	const getPages = () => {
		const pages = []
		const maxVisible = 5

		if (totalPages <= maxVisible) {
			for (let i = 1; i <= totalPages; i++) pages.push(i)
		} else {
			let start = Math.max(1, currentPage - 1)
			let end = Math.min(totalPages, currentPage + 1)

			if (currentPage === 1) {
				end = 3
			} else if (currentPage === totalPages) {
				start = totalPages - 2
			}

			if (start > 1) {
				pages.push(1)
				if (start > 2) pages.push('...')
			}

			for (let i = start; i <= end; i++) pages.push(i)

			if (end < totalPages) {
				if (end < totalPages - 1) pages.push('...')
				pages.push(totalPages)
			}
		}
		return pages
	}

	const pages = getPages()

	return (
		<PaginationContainer>
			<NavButton
				onClick={() => onPageChange(currentPage - 1)}
				disabled={currentPage === 1}
			>
				<ChevronLeft size={16} />
			</NavButton>

			{pages.map((page, index) => {
				if (page === '...') {
					return <Ellipsis key={`ellipsis-${index}`}>...</Ellipsis>
				}
				return (
					<PageButton
						key={page}
						className={currentPage === page ? 'active' : ''}
						onClick={() => onPageChange(page)}
					>
						{page}
					</PageButton>
				)
			})}

			<NavButton
				onClick={() => onPageChange(currentPage + 1)}
				disabled={currentPage === totalPages}
			>
				<ChevronRight size={16} />
			</NavButton>
		</PaginationContainer>
	)
}
