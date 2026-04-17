import { useState, useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "motion/react"
import { Menu, X } from "lucide-react"

import { useApp } from "@/context/AppContext"
import logoFull from "@/assets/icons/logo.png"

const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Cars", href: "#categories" },
    { label: "Brands", href: "#brands" },
    { label: "Categories", href: "#categories" },
    { label: "Blogs", href: "#blogs" },
    { label: "Contact Us", href: "#contact" },
]

const Navbar = () => {

    const { isMenuOpen, toggleMenu, closeMenu } = useApp()
    const navigate = useNavigate()
    const { pathname } = useLocation()

    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {

        const handleScroll = () => setIsScrolled(window.scrollY > 60)

        window.addEventListener("scroll", handleScroll, { passive: true })

        return () => window.removeEventListener("scroll", handleScroll)

    }, [])

    const handleNavClick = (href) => {

        closeMenu()

        if (pathname !== "/") {
            navigate("/")
            setTimeout(() => {
                const el = document.querySelector(href)
                if (el) el.scrollIntoView({ behavior: "smooth" })
            }, 100)
            return
        }

        const el = document.querySelector(href)
        if (el) el.scrollIntoView({ behavior: "smooth" })

    }

    return (
        <motion.header
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-brand-darker/95 backdrop-blur-md border-b border-brand-border shadow-card"
                : "bg-transparent border-b border-transparent"
                }`}
        >
            <div className="container-custom">
                <div className="flex items-center justify-between h-20">
                    <button onClick={() => handleNavClick("#home")} className="bg-transparent border-none cursor-pointer p-0">
                        <img src={logoFull} alt="Sleek" className="h-9 object-contain" />
                    </button>

                    <nav className="hidden lg:flex items-end gap-8">
                        {navLinks.map(link => (
                            <button
                                key={link.label}
                                onClick={() => handleNavClick(link.href)}
                                className=" uppercase text-brand-gray hover:text-brand-gold font-body text-body-sm transition-colors duration-200 cursor-pointer bg-transparent border-none"
                            >
                                {link.label}
                            </button>
                        ))}
                    </nav>

                    <button
                        className="lg:hidden text-brand-gray hover:text-brand-gold transition-colors bg-transparent border-none cursor-pointer p-2"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="lg:hidden bg-brand-darker/98 backdrop-blur-md border-t border-brand-border"
                    >
                        <div className="container-custom py-6 flex flex-col gap-6">
                            {navLinks.map(link => (
                                <button
                                    key={link.label}
                                    onClick={() => handleNavClick(link.href)}
                                    className="text-brand-gray hover:text-brand-gold font-body text-body-lg text-left transition-colors duration-200 py-2 border-b border-brand-border bg-transparent border-x-0 border-t-0 cursor-pointer"
                                >
                                    {link.label}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    )

}

export default Navbar
