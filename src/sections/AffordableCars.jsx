import { useState, useMemo } from "react" // Added useMemo for performance
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

const AffordableCard = ({ car, onBook }) => (
    <div className="flex flex-col bg-brand-card rounded-2xl overflow-hidden h-full">
        <div className="relative overflow-hidden group/img" style={{ height: "175px" }}>
            <img
                src={car.image}
                alt={car.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
            />
            <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to bottom, transparent 40%, #111827 100%)" }}
            />
        </div>

        <div className="flex flex-col gap-3 p-4 flex-grow">
            <div className="flex flex-col items-center gap-0.5 text-center">
                <span className="font-heading text-caption font-semibold text-brand-gold tracking-[0.2em] uppercase">
                    {car.brand}
                </span>
                <h3 className="font-heading font-bold text-brand-white text-body leading-snug">
                    {car.name}
                </h3>
            </div>

            <div className="flex justify-center gap-5 py-2 border-t border-b border-brand-border">
                <div className="flex flex-col items-center gap-1">
                    <div className="w-7 h-7 rounded-full border border-brand-border flex items-center justify-center">
                        <Gauge size={12} className="text-brand-gray" />
                    </div>
                    <span className="font-body text-caption text-brand-gray">{car.specs.speed} km/h</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <div className="w-7 h-7 rounded-full border border-brand-border flex items-center justify-center">
                        <Zap size={12} className="text-brand-gray" />
                    </div>
                    <span className="font-body text-caption text-brand-gray">{car.specs.hp} HP</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <div className="w-7 h-7 rounded-full border border-brand-border flex items-center justify-center">
                        <Users size={12} className="text-brand-gray" />
                    </div>
                    <span className="font-body text-caption text-brand-gray">{car.specs.seats} Seats</span>
                </div>
            </div>

            <div className="flex items-center justify-center gap-3">
                <div className="flex items-baseline gap-1">
                    <span className="font-body text-caption text-brand-gray">AED</span>
                    <span className="font-heading font-bold text-brand-gold text-body">{car.priceDay.toLocaleString()}</span>
                    <span className="font-body text-caption text-brand-gray">/ day</span>
                </div>
                <div className="w-px h-4 bg-brand-border" />
                <div className="flex items-baseline gap-1">
                    <span className="font-body text-caption text-brand-gray">AED</span>
                    <span className="font-heading font-bold text-brand-gold text-body">{car.priceMonth.toLocaleString()}</span>
                    <span className="font-body text-caption text-brand-gray">/ mo</span>
                </div>
            </div>

            <div className="flex gap-2 mt-auto">
                <button
                    onClick={() => onBook(car)}
                    className="flex-1 flex items-center justify-center gap-1.5 bg-brand-card-hover border border-brand-border text-brand-white font-heading font-semibold text-caption py-2 rounded-lg hover:border-brand-gold hover:text-brand-gold transition-colors duration-200 cursor-pointer"
                >
                    <MessageCircle size={13} />
                    Book Now
                </button>
                <Link
                    to={`/car/${car.id}`}
                    className="flex-1 flex items-center justify-center gap-1.5 border border-brand-border text-brand-gray font-heading font-semibold text-caption py-2 rounded-lg hover:border-brand-gold hover:text-brand-gold transition-colors duration-200 no-underline"
                >
                    <Tag size={12} />
                    View Offer
                </Link>
            </div>
        </div>
    </div>
)

const AffordableCars = () => {
    const [selectedCar, setSelectedCar] = useState(null)

    // Filter cars where priceDay is below 500
    const filteredCars = useMemo(() => {
        return fleetCars.filter(car => car.priceDay < 500)
    }, [])

    return (
        <>
            <AnimatePresence>
                {selectedCar && (
                    <BookingModal car={selectedCar} onClose={() => setSelectedCar(null)} />
                )}
            </AnimatePresence>

            <section id="affordable" className="section-padding bg-brand-darker">
                <div className="container-custom">
                    <div className="flex flex-col items-center gap-3 mb-12">
                        <span className="font-heading font-semibold text-brand-gray text-caption tracking-[0.3em] uppercase">
                            Budget Friendly
                        </span>
                        <div className="flex items-center gap-4">
                            <img
                                src={pointerArrow}
                                alt=""
                                className="shrink-0 hidden md:block"
                                style={{ transform: "scaleX(-1)" }}
                            />
                            <h2 className="font-heading font-bold text-brand-gold text-heading-md md:text-heading-xl leading-tight text-center">
                                Affordable Car Rental Dubai
                            </h2>
                            <img src={pointerArrow} alt="" className="shrink-0 hidden md:block" />
                        </div>
                        <p className="font-body text-brand-gray text-body-sm text-center">
                            Luxury experiences don't always need a luxury price tag.
                        </p>
                    </div>

                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7"
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-5% 0px" }}
                        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
                    >
                        {filteredCars.map((car, index) => (
                            <motion.div
                                key={car.id}
                                variants={cardVariants}
                                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                            >
                                <AffordableCard car={car} onBook={setSelectedCar} />
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Only show "See More" if there are cars to show, or link it to your fleet page */}
                    <div className="flex items-center justify-center mt-12">
                        <Link to="/cars" className="no-underline">
                            <button className="font-heading font-semibold text-body-sm text-brand-gray border border-brand-border px-8 py-2.5 rounded-lg hover:border-brand-gold hover:text-brand-gold transition-colors duration-200 cursor-pointer bg-transparent">
                                View Full Fleet
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AffordableCars