import { useState, useMemo } from "react" // Added useMemo
import { Link } from "react-router-dom"
import { AnimatePresence, motion } from "motion/react"
import { Gauge, Zap, Users, MessageCircle, Tag } from "lucide-react"
import { fleetCars } from "@/data/cars"
import pointerArrow from "@/assets/svg/pointer-bash.svg"
import BookingModal from "@/components/BookingModal"

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
}

const FleetCard = ({ car, index, onBook }) => {
    return (
        <motion.div
            variants={cardVariants}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col bg-brand-card rounded-2xl overflow-hidden h-full"
        >
            <div className="relative overflow-hidden group/img" style={{ height: "210px" }}>
                <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                />
                <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to bottom, transparent 30%, #111827 100%)" }}
                />
            </div>

            <div className="flex flex-col gap-4 p-5 flex-grow">
                <div className="flex flex-col gap-1">
                    <span className="font-heading text-caption font-semibold text-brand-gold tracking-[0.2em] uppercase">
                        {car.brand}
                    </span>
                    <h3 className="font-heading font-bold text-brand-white text-heading-sm leading-snug">
                        {car.name}
                    </h3>
                </div>

                <div className="grid grid-cols-3 gap-2 py-3 border-t border-b border-brand-border">
                    <div className="flex flex-col items-center gap-1.5">
                        <div className="w-8 h-8 rounded-full border border-brand-border flex items-center justify-center">
                            <Gauge size={14} className="text-brand-gray" />
                        </div>
                        <span className="font-body text-caption text-brand-white font-medium">{car.specs.speed} km/h</span>
                    </div>
                    <div className="flex flex-col items-center gap-1.5">
                        <div className="w-8 h-8 rounded-full border border-brand-border flex items-center justify-center">
                            <Zap size={14} className="text-brand-gray" />
                        </div>
                        <span className="font-body text-caption text-brand-white font-medium">{car.specs.hp} HP</span>
                    </div>
                    <div className="flex flex-col items-center gap-1.5">
                        <div className="w-8 h-8 rounded-full border border-brand-border flex items-center justify-center">
                            <Users size={14} className="text-brand-gray" />
                        </div>
                        <span className="font-body text-caption text-brand-white font-medium">{car.specs.seats} Seats</span>
                    </div>
                </div>

                <div className="flex items-center gap-6">
                    <div className="flex flex-col gap-0.5">
                        <span className="font-body text-caption text-brand-gray">AED</span>
                        <div className="flex items-baseline gap-1">
                            <span className="font-heading font-bold text-brand-gold text-heading-sm">{car.priceDay.toLocaleString()}</span>
                            <span className="font-body text-caption text-brand-gray">/ day</span>
                        </div>
                    </div>
                    <div className="w-px h-8 bg-brand-border" />
                    <div className="flex flex-col gap-0.5">
                        <span className="font-body text-caption text-brand-gray">AED</span>
                        <div className="flex items-baseline gap-1">
                            <span className="font-heading font-bold text-brand-gold text-heading-sm">{car.priceMonth.toLocaleString()}</span>
                            <span className="font-body text-caption text-brand-gray">/ month</span>
                        </div>
                    </div>
                </div>

                <div className="flex gap-3 mt-auto">
                    <button
                        onClick={() => onBook(car)}
                        className="flex-1 flex items-center justify-center gap-2 bg-brand-gold text-brand-dark font-heading font-semibold text-body-sm py-2.5 px-4 rounded-lg hover:bg-brand-gold-dark transition-colors duration-200 cursor-pointer border-none"
                    >
                        <MessageCircle size={15} />
                        Book Now
                    </button>
                    <Link
                        to={`/car/${car.id}`}
                        className="flex-1 flex items-center justify-center gap-2 border border-brand-border text-brand-white font-heading font-semibold text-body-sm py-2.5 px-4 rounded-lg hover:border-brand-gold hover:text-brand-gold transition-colors duration-200 no-underline"
                    >
                        <Tag size={14} />
                        View Offer
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}

const Fleet = () => {
    const [selectedCar, setSelectedCar] = useState(null)

    // FILTER: Shows only cars with priceDay >= 500
    const premiumCars = useMemo(() => {
        return fleetCars.filter(car => car.priceDay >= 500)
    }, [])

    return (
        <>
            <AnimatePresence>
                {selectedCar && (
                    <BookingModal car={selectedCar} onClose={() => setSelectedCar(null)} />
                )}
            </AnimatePresence>

            <section id="categories" className="section-padding bg-brand-dark">
                <div className="container-custom">
                    <div className="flex flex-col items-center gap-3 mb-14">
                        <span className="font-heading font-semibold text-brand-gray text-caption tracking-[0.3em] uppercase">
                            Premium Inventory
                        </span>

                        <div className="flex items-center gap-4">
                            <img
                                src={pointerArrow}
                                alt=""
                                className="shrink-0"
                                style={{ transform: "scaleX(-1)" }}
                            />
                            <h2 className="font-heading font-black text-brand-gold text-heading-md md:text-[2.6rem] tracking-wide text-center">
                                Find Your Signature 
                            </h2>
                            <img src={pointerArrow} alt="" className="shrink-0" />
                        </div>
                    </div>

                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-5% 0px" }}
                        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
                    >
                        {premiumCars.map((car, index) => (
                            <FleetCard key={car.id} car={car} index={index} onBook={setSelectedCar} />
                        ))}
                    </motion.div>

                    <div className="flex items-center justify-center mt-14">
                        <Link to="/cars" className="no-underline">
                            <button className="font-heading font-semibold text-body-sm text-brand-gray border border-brand-border px-8 py-2.5 rounded-lg hover:border-brand-gold hover:text-brand-gold transition-colors duration-200 cursor-pointer bg-transparent">
                                See Full Fleet
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Fleet