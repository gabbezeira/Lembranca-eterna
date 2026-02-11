export const phoneMask = (value) => {
	if (!value) return ''
	const cleanValue = value.replace(/\D/g, '')
	const limitedValue = cleanValue.slice(0, 11)
	return limitedValue
		.replace(/^(\d{2})(\d)/g, '($1) $2')
		.replace(/(\d)(\d{4})$/, '$1-$2')
}

export const formatDateForInput = (dateString) => {
	if (!dateString) return ''
	// If already in YYYY-MM-DD, return it
	if (/^\d{4}-\d{2}-\d{2}$/.test(dateString)) return dateString

	const date = new Date(dateString)
	if (isNaN(date.getTime())) return ''

	return date.toISOString().split('T')[0]
}
