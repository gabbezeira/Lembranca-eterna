import React, { createContext, useContext, useState } from 'react'

const MenuContext = createContext()

export const MenuProvider = ({ children }) => {
	const [showTributeButton, setShowTributeButton] = useState(true)

	return (
		<MenuContext.Provider value={{ showTributeButton, setShowTributeButton }}>
			{children}
		</MenuContext.Provider>
	)
}

export const useMenu = () => {
	const context = useContext(MenuContext)
	if (!context) {
		throw new Error('useMenu deve ser usado dentro de MenuProvider')
	}
	return context
}
