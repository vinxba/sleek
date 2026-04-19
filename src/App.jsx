import { useState, useCallback } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AnimatePresence, motion } from "motion/react"
import { AppProvider } from "@/context/AppContext"
import PageLoader from "@/components/PageLoader"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Hero from "@/sections/Hero"
import Categories from "@/sections/Categories"
import RentalProcess from "@/sections/RentalProcess"
import Blog from "@/sections/Blog"
import FAQ from "@/sections/FAQ"
import Testimonials from "@/sections/Testimonials"
import AboutUs from "@/sections/AboutUs"
import Brands from "@/sections/Brands"
import AffordableCars from "@/sections/AffordableCars"
import RecommendedCars from "@/sections/RecommendedCars"
import CarOfferPage from "@/pages/CarOfferPage"
import ScrollToTop from "@/components/ScrollToTop"
import Cars from "@/pages/Cars"
import WhatsAppButton from "@/components/WhatsAppButton"

const HomePage = () => {
    const [isLoading, setIsLoading] = useState(true)

    const handleLoaderComplete = useCallback(() => {
        setIsLoading(false)
    }, [])

    return (
        <>
            <AnimatePresence>
                {isLoading && <PageLoader onComplete={handleLoaderComplete} />}
            </AnimatePresence>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isLoading ? 0 : 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                {/* IMPORTANT: Navbar and Footer are REMOVED from here 
                   because they are now global in the App component below.
                */}
                <main>
                    <Hero />
                    <AboutUs />
                    <Brands />
                    <Categories />
                    <AffordableCars />
                    <RecommendedCars />
                    <Testimonials />
                    <RentalProcess />
                    <Blog />
                    <FAQ />
                </main>
            </motion.div>
        </>
    )
}

const App = () => {
    return (
        <AppProvider>
            <BrowserRouter>
                <ScrollToTop />
                
                {/* 1. Global Navbar: Shows on every page */}
                <Navbar /> 

                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/cars" element={<Cars />} />
                    <Route path="/car/:id" element={<CarOfferPage />} />
                </Routes>

                {/* 2. Global WhatsApp Button */}
                <WhatsAppButton /> 

                {/* 3. Global Footer: Shows on every page without repeating */}
                <Footer />
                
            </BrowserRouter>
        </AppProvider>
    )
}

export default App