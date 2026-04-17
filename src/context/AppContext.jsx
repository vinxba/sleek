import { createContext, useContext, useState } from "react"

const AppContext = createContext(null)

const AppProvider = ({ children }) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [selectedFilter, setSelectedFilter] = useState("all")

    const toggleMenu = () => setIsMenuOpen(prev => !prev)

    const closeMenu = () => setIsMenuOpen(false)

    return (
        <AppContext.Provider value={{ isMenuOpen, toggleMenu, closeMenu, selectedFilter, setSelectedFilter }}>
            {children}
        </AppContext.Provider>
    )

}

const useApp = () => {

    const context = useContext(AppContext)

    if (!context) {
        throw new Error("useApp must be used within AppProvider")
    }

    return context

}

export { AppProvider, useApp }
