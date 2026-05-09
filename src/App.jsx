import { useState, useCallback } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AnimatePresence, motion } from "motion/react"

import { AppProvider } from "@/context/AppContext"

import PageLoader from "@/components/PageLoader"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import ScrollToTop from "@/components/ScrollToTop"
import WhatsAppButton from "@/components/WhatsAppButton"

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
import Cars from "@/pages/Cars"

const HomePage = () => {
    const [isLoading, setIsLoading] = useState(true)

    const handleLoaderComplete = useCallback(() => {
        setIsLoading(false)
    }, [])

    return (
        <>
            <AnimatePresence mode="wait">
                {isLoading && (
                    <PageLoader onComplete={handleLoaderComplete} />
                )}
            </AnimatePresence>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isLoading ? 0 : 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
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

                {/* WhatsApp Button only mounts when loading is finished */}
                {!isLoading && <WhatsAppButton />}
            </motion.div>
        </>
    )
}

const App = () => {
    return (
        <AppProvider>
            {/* IMPORTANT: basename matches your GitHub repo name */}
            <BrowserRouter basename="/sleek/">
                <ScrollToTop />

                {/* Global Navbar */}
                <Navbar />

                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/cars" element={<Cars />} />
                    <Route path="/car/:id" element={<CarOfferPage />} />
                </Routes>

                {/* Global Footer */}
                <Footer />
            </BrowserRouter>
        </AppProvider>
    )
}

export default App