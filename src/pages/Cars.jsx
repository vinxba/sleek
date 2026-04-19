import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Search, SlidersHorizontal, Car, Check } from "lucide-react"
import { fleetCars } from "@/data/cars"
import Navbar from "@/components/Navbar"
import BookingModal from "@/components/BookingModal"
import FleetCard from "@/components/FleetCard"
import pointerArrow from "@/assets/svg/pointer-bash.svg"

const CarsPage = () => {
    const [bookingCar, setBookingCar] = useState(null)
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedBrand, setSelectedBrand] = useState("All")

    // Get unique brands from the data
    const brands = useMemo(() => {
        return ["All", ...new Set(fleetCars.map(car => car.brand))]
    }, [])

    // Filter Logic
    const filteredCars = useMemo(() => {
        return fleetCars.filter(car => {
            const matchesSearch = car.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                car.brand.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesBrand = selectedBrand === "All" || car.brand === selectedBrand;
            return matchesSearch && matchesBrand;
        })
    }, [searchQuery, selectedBrand])

    return (
        <div className="min-h-screen bg-brand-dark">
            <AnimatePresence>
                {bookingCar && (
                    <BookingModal car={bookingCar} onClose={() => setBookingCar(null)} />
                )}
            </AnimatePresence>

            <Navbar />

            <main>
                {/* Hero Header */}
                <section className="relative pt-40 pb-16 overflow-hidden">
                    <div className="container-custom relative z-10">
                        <div className="flex flex-col items-center text-center">
                            <motion.div 
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex items-center gap-4 mb-4"
                            >
                                <img src={pointerArrow} alt="" className="w-10 opacity-40" style={{ transform: "scaleX(-1)" }} />
                                <span className="font-heading font-semibold text-brand-gold text-caption tracking-[0.3em] uppercase">
                                    Luxury Experience
                                </span>
                                <img src={pointerArrow} alt="" className="w-10 opacity-40" />
                            </motion.div>
                            
                            <h1 className="font-heading font-bold text-brand-white text-heading-lg md:text-display-sm mb-10">
                                Our <span className="text-brand-gold">Exclusive</span> Fleet
                            </h1>

                            {/* Professional Brand Selector */}
                            <div className="w-full max-w-5xl mb-12">
                                <div className="flex flex-wrap justify-center gap-3">
                                    {brands.map((brand) => (
                                        <button
                                            key={brand}
                                            onClick={() => setSelectedBrand(brand)}
                                            className={`relative px-8 py-3 rounded-xl font-heading font-bold text-caption uppercase tracking-widest transition-all duration-300 cursor-pointer border
                                                ${selectedBrand === brand 
                                                    ? "bg-brand-gold text-brand-dark border-brand-gold shadow-[0_0_20px_rgba(212,175,55,0.3)]" 
                                                    : "bg-brand-card text-brand-gray border-brand-border hover:border-brand-gold/50 hover:text-brand-white"}`}
                                        >
                                            {brand}
                                            {selectedBrand === brand && (
                                                <motion.div 
                                                    layoutId="active-pill"
                                                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brand-dark"
                                                />
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Search Input */}
                            <div className="w-full max-w-xl relative group">
                                <div className="absolute inset-0 bg-brand-gold/5 blur-xl group-hover:bg-brand-gold/10 transition-colors rounded-2xl" />
                                <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-brand-gray group-hover:text-brand-gold transition-colors" size={18} />
                                <input 
                                    type="text" 
                                    placeholder="Search specific model..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="relative w-full bg-brand-card/80 backdrop-blur-md border border-brand-border rounded-2xl py-4 pl-14 pr-6 text-brand-white font-body focus:outline-none focus:border-brand-gold transition-all"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Fleet Grid */}
                <section className="pb-32">
                    <div className="container-custom">
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
                                <h2 className="font-heading font-bold text-brand-white text-body-sm uppercase tracking-widest">
                                    {selectedBrand} Models
                                </h2>
                            </div>
                            <span className="font-body text-caption text-brand-gray">
                                <span className="text-brand-white">{filteredCars.length}</span> Premium vehicles found
                            </span>
                        </div>

                        {filteredCars.length > 0 ? (
                            <motion.div 
                                layout
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                            >
                                <AnimatePresence mode="popLayout">
                                    {filteredCars.map((car, index) => (
                                        <FleetCard 
                                            key={car.id} 
                                            car={car} 
                                            index={index} 
                                            onBook={setBookingCar} 
                                        />
                                    ))}
                                </AnimatePresence>
                            </motion.div>
                        ) : (
                            <div className="py-32 flex flex-col items-center text-center">
                                <div className="w-20 h-20 rounded-full bg-brand-card border border-brand-border flex items-center justify-center mb-6">
                                    <Car size={32} className="text-brand-gray/20" />
                                </div>
                                <h3 className="font-heading text-brand-white text-heading-sm">Vehicle unavailable</h3>
                                <p className="font-body text-brand-gray mt-2">Try adjusting your filters or search terms.</p>
                                <button 
                                    onClick={() => {setSelectedBrand("All"); setSearchQuery("")}}
                                    className="mt-8 px-8 py-3 bg-brand-gold text-brand-dark font-heading font-bold rounded-lg hover:scale-105 transition-transform cursor-pointer"
                                >
                                    Reset Filters
                                </button>
                            </div>
                        )}
                    </div>
                </section>
            </main>
        </div>
    )
}

export default CarsPage;