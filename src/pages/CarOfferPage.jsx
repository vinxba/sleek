import { useState } from "react"
import { useParams, Link } from "react-router-dom"
import { AnimatePresence, motion } from "motion/react"
import {
    MapPin, Calendar, Gauge, Zap, Users, MessageCircle, Tag,
    ChevronDown, ChevronLeft, Check, Shield, Fuel, Settings2,
    DoorOpen, Box, Palette, Car, Clock
} from "lucide-react"
import { fleetCars, faqItems } from "@/data/cars"
import Navbar from "@/components/Navbar"
// import Footer from "@/components/Footer"
import BookingModal from "@/components/BookingModal"
import pointerArrow from "@/assets/svg/pointer-bash.svg"

const OverviewRow = ({ label, value, icon: Icon }) => (

    <div className="flex items-center justify-between py-3 border-b border-brand-border last:border-0">
        <div className="flex items-center gap-2.5 text-brand-gray">
            <Icon size={14} className="shrink-0" />
            <span className="font-body text-body-sm">{label}</span>
        </div>
        <span className="font-body text-body-sm font-medium text-brand-white">{value}</span>
    </div>

)


const FaqItem = ({ item }) => {

    const [open, setOpen] = useState(false)

    return (
        <div className="border border-brand-border rounded-xl overflow-hidden">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left bg-brand-card hover:bg-brand-card-hover transition-colors cursor-pointer border-none"
            >
                <span className="font-heading font-semibold text-brand-white text-body-sm">
                    {item.question}
                </span>
                <ChevronDown
                    size={16}
                    className={`text-brand-gold shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                />
            </button>
            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                        className="overflow-hidden"
                    >
                        <div className="px-5 pb-5 pt-2 bg-brand-darker">
                            <p className="font-body text-body-sm text-brand-gray leading-relaxed">
                                {item.answer}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )

}


const FeatureAccordion = ({ title, items }) => {

    const [open, setOpen] = useState(title === "Interior features")

    return (
        <div className="border border-brand-border rounded-xl overflow-hidden">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between gap-4 p-4 text-left bg-brand-card hover:bg-brand-card-hover transition-colors cursor-pointer border-none"
            >
                <span className="font-heading font-semibold text-brand-white text-body-sm">{title}</span>
                <ChevronDown
                    size={16}
                    className={`text-brand-gray shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                />
            </button>
            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                        className="overflow-hidden"
                    >
                        <div className="px-4 pb-4 pt-2 bg-brand-darker">
                            <div className="flex flex-wrap gap-x-6 gap-y-2.5">
                                {items.map((item) => (
                                    <div key={item} className="flex items-center gap-2">
                                        <Check size={13} className="text-brand-gold shrink-0" />
                                        <span className="font-body text-body-sm text-brand-gray">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )

}


const SimilarCard = ({ car, onBook }) => (

    <div className="flex flex-col bg-brand-card rounded-xl overflow-hidden shrink-0 w-64">
        <div className="relative overflow-hidden group/img" style={{ height: "160px" }}>
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
        <div className="flex flex-col gap-3 p-4">
            <div>
                <span className="font-heading text-caption font-semibold text-brand-gold tracking-[0.2em] uppercase">
                    {car.brand}
                </span>
                <h4 className="font-heading font-bold text-brand-white text-body leading-snug mt-0.5">
                    {car.name}
                </h4>
            </div>
            <div className="flex items-center gap-4">
                <div className="flex items-baseline gap-1">
                    <span className="font-heading font-bold text-brand-gold text-body-sm">AED {car.priceDay.toLocaleString()}</span>
                    <span className="font-body text-caption text-brand-gray">/ day</span>
                </div>
                <div className="w-px h-4 bg-brand-border" />
                <div className="flex items-baseline gap-1">
                    <span className="font-heading font-bold text-brand-gold text-body-sm">AED {car.priceMonth.toLocaleString()}</span>
                    <span className="font-body text-caption text-brand-gray">/ mo</span>
                </div>
            </div>
            <div className="flex gap-2">
                <button
                    onClick={() => onBook(car)}
                    className="flex-1 flex items-center justify-center gap-1.5 bg-brand-gold text-brand-dark font-heading font-semibold text-caption py-2 px-3 rounded-lg hover:bg-brand-gold-dark transition-colors cursor-pointer border-none"
                >
                    <MessageCircle size={13} />
                    Book Now
                </button>
                <Link
                    to={`/car/${car.id}`}
                    className="flex-1 flex items-center justify-center gap-1.5 border border-brand-border text-brand-white font-heading font-semibold text-caption py-2 px-3 rounded-lg hover:border-brand-gold hover:text-brand-gold transition-colors no-underline"
                >
                    <Tag size={13} />
                    View Offer
                </Link>
            </div>
        </div>
    </div>

)


const CarOfferPage = () => {

    const { id } = useParams()
    const [bookingCar, setBookingCar] = useState(null)
    const [activeImage, setActiveImage] = useState(0)

    const car = fleetCars.find((c) => c.id === Number(id))

    if (!car) {
        return (
            <div className="min-h-screen bg-brand-dark flex items-center justify-center">
                <div className="text-center flex flex-col gap-4">
                    <p className="font-heading text-brand-white text-heading-md">Car not found</p>
                    <Link to="/" className="font-heading font-semibold text-brand-gold text-body-sm hover:underline">
                        Back to Home
                    </Link>
                </div>
            </div>
        )
    }

    const similarCars = fleetCars.filter((c) => c.id !== car.id).slice(0, 5)
    const galleryImages = [car.image, car.image, car.image, car.image]

    return (
        <div className="min-h-screen bg-brand-dark">

            <AnimatePresence>
                {bookingCar && (
                    <BookingModal car={bookingCar} onClose={() => setBookingCar(null)} />
                )}
            </AnimatePresence>

            <Navbar />

            <main className="pt-24">

                <div className="container-custom py-8">

                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 font-body text-body-sm text-brand-gray hover:text-brand-gold transition-colors no-underline mb-6"
                    >
                        <ChevronLeft size={16} />
                        Back to Fleet
                    </Link>

                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-full bg-brand-card border border-brand-border flex items-center justify-center shrink-0">
                            <Car size={18} className="text-brand-gold" />
                        </div>
                        <div>
                            <p className="font-heading text-caption font-semibold text-brand-gold tracking-[0.15em] uppercase">
                                {car.brand}
                            </p>
                            <h1 className="font-heading font-bold text-brand-white text-heading-md leading-tight">
                                Rent {car.name} in Dubai
                            </h1>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mb-3">
                        <div className="lg:col-span-2 relative rounded-2xl overflow-hidden" style={{ height: "360px" }}>
                            <img
                                src={galleryImages[activeImage]}
                                alt={car.name}
                                className="w-full h-full object-cover"
                            />
                            <div
                                className="absolute inset-0"
                                style={{ background: "linear-gradient(to bottom, transparent 60%, rgba(11,17,32,0.6) 100%)" }}
                            />
                        </div>
                        <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
                            {galleryImages.slice(1).map((img, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveImage(i + 1)}
                                    className={`relative rounded-xl overflow-hidden cursor-pointer border-2 transition-colors ${activeImage === i + 1 ? "border-brand-gold" : "border-transparent hover:border-brand-gold/40"}`}
                                    style={{ height: "108px" }}
                                >
                                    <img src={img} alt={car.name} className="w-full h-full object-cover" />
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center gap-6 mb-8 text-brand-gray">
                        <div className="flex items-center gap-2">
                            <MapPin size={14} className="text-brand-gold shrink-0" />
                            <span className="font-body text-body-sm">{car.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar size={14} className="shrink-0" />
                            <span className="font-body text-body-sm">Available Now</span>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8">

                        <div className="flex-1 flex flex-col gap-8 min-w-0">

                            <div className="flex flex-col gap-4">
                                <h2 className="font-heading font-bold text-brand-gold text-body uppercase tracking-widest border-l-2 border-brand-gold pl-3">
                                    Pricing
                                </h2>
                                <div className="grid grid-cols-3 gap-3">
                                    <div className="flex flex-col gap-1.5 p-4 rounded-xl bg-brand-card border border-brand-border">
                                        <span className="font-body text-caption text-brand-gray">AED</span>
                                        <span className="font-heading font-bold text-brand-gold text-heading-sm">
                                            {car.priceDay.toLocaleString()}
                                        </span>
                                        <span className="font-body text-caption text-brand-gray">/ day</span>
                                    </div>
                                    <div className="flex flex-col gap-1.5 p-4 rounded-xl bg-brand-card border border-brand-border">
                                        <span className="font-body text-caption text-brand-gray">AED</span>
                                        <span className="font-heading font-bold text-brand-gold text-heading-sm">
                                            {car.priceWeek.toLocaleString()}
                                        </span>
                                        <span className="font-body text-caption text-brand-gray">/ week</span>
                                    </div>
                                    <div className="flex flex-col gap-1.5 p-4 rounded-xl bg-brand-card border border-brand-border">
                                        <span className="font-body text-caption text-brand-gray">AED</span>
                                        <span className="font-heading font-bold text-brand-gold text-heading-sm">
                                            {car.priceMonth.toLocaleString()}
                                        </span>
                                        <span className="font-body text-caption text-brand-gray">/ month</span>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 p-4 rounded-xl bg-brand-darker border border-brand-border">
                                    <div className="flex justify-between font-body text-body-sm">
                                        <span className="text-brand-gray">Included mileage limit</span>
                                        <span className="text-brand-white font-medium">{car.mileageLimit} km</span>
                                    </div>
                                    <div className="flex justify-between font-body text-body-sm">
                                        <span className="text-brand-gray">Additional mileage charge</span>
                                        <span className="text-brand-white font-medium">AED {car.additionalMileage} / km</span>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-card border border-brand-border">
                                        <div className="w-2 h-2 rounded-full bg-green-400" />
                                        <span className="font-body text-caption text-brand-gray">
                                            Minimum {car.minRental} day{car.minRental > 1 ? "s" : ""} rental
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-card border border-brand-border">
                                        <div className="w-2 h-2 rounded-full bg-green-400" />
                                        <span className="font-body text-caption text-brand-gray">Insurance included</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-4">
                                <h2 className="font-heading font-bold text-brand-gold text-body uppercase tracking-widest border-l-2 border-brand-gold pl-3">
                                    Car Overview
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 rounded-xl bg-brand-card border border-brand-border overflow-hidden">
                                    <div className="flex flex-col border-r border-brand-border px-5 sm:pr-8">
                                        <OverviewRow label="Body Type" value={car.overview.bodyType} icon={Car} />
                                        <OverviewRow label="Toll Charges" value={car.overview.tollCharges} icon={Settings2} />
                                        <OverviewRow label="Model" value={car.overview.model} icon={Tag} />
                                        <OverviewRow label="Engine Capacity" value={car.overview.engineCapacity} icon={Zap} />
                                        <OverviewRow label="No. of Doors" value={car.overview.doors} icon={DoorOpen} />
                                        <OverviewRow label="Fuel Type" value={car.overview.fuelType} icon={Fuel} />
                                    </div>
                                    <div className="flex flex-col px-5 sm:pl-8">
                                        <OverviewRow label="Make" value={car.overview.make} icon={Car} />
                                        <OverviewRow label="Gearbox" value={car.overview.gearbox} icon={Settings2} />
                                        <OverviewRow label="Seating Capacity" value={`${car.specs.seats} passengers`} icon={Users} />
                                        <OverviewRow label="Fits No. of Bags" value={car.overview.bagsCapacity} icon={Box} />
                                        <OverviewRow label="Top Speed" value={`${car.specs.speed} km/h`} icon={Gauge} />
                                        <OverviewRow label="Exterior Color" value={car.overview.color} icon={Palette} />
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-4">
                                <h2 className="font-heading font-bold text-brand-gold text-body uppercase tracking-widest border-l-2 border-brand-gold pl-3">
                                    Features & Specs
                                </h2>
                                <div className="flex flex-col gap-2">
                                    <FeatureAccordion title="Interior features" items={car.features.interior} />
                                    <FeatureAccordion title="Exterior features" items={car.features.exterior} />
                                    <FeatureAccordion title="Safety features" items={car.features.safety} />
                                    <FeatureAccordion title="Comfort & Convenience features" items={car.features.comfort} />
                                    <FeatureAccordion title="Infotainment features" items={car.features.infotainment} />
                                </div>
                            </div>

                            <div className="flex flex-col gap-4">
                                <h2 className="font-heading font-bold text-brand-gold text-body uppercase tracking-widest border-l-2 border-brand-gold pl-3">
                                    Description & Highlights
                                </h2>
                                <p className="font-body text-body-sm text-brand-gray leading-relaxed">
                                    {car.description}
                                </p>
                            </div>

                        </div>

                        <div className="lg:w-72 shrink-0">
                            <div className="sticky top-24 flex flex-col gap-4">

                                <div className="flex flex-col gap-4 p-5 rounded-2xl bg-brand-card border border-brand-border">
                                    <div className="flex flex-col items-center gap-2 pb-4 border-b border-brand-border">
                                        <div className="w-14 h-14 rounded-full bg-brand-gold/15 flex items-center justify-center">
                                            <Car size={24} className="text-brand-gold" />
                                        </div>
                                        <p className="font-heading font-bold text-brand-white text-body text-center">
                                            Sleek Rent a Car
                                        </p>
                                        <p className="font-body text-caption text-brand-gray text-center">
                                            Book directly from the dealer
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => setBookingCar(car)}
                                        className="w-full flex items-center justify-center gap-2 bg-brand-gold text-brand-dark font-heading font-bold text-body-sm py-3 rounded-xl hover:bg-brand-gold-dark transition-colors cursor-pointer border-none"
                                    >
                                        <MessageCircle size={16} />
                                        Book Now
                                    </button>
                                    <p className="font-body text-caption text-brand-gray text-center leading-relaxed">
                                        5% VAT applicable. Vehicle is brand new with zero km.
                                    </p>
                                </div>

                                <div className="flex flex-col gap-3 p-5 rounded-2xl bg-brand-card border border-brand-border">
                                    <p className="font-heading font-semibold text-brand-white text-body-sm">
                                        Rental Terms
                                    </p>
                                    <div className="grid grid-cols-2 gap-3">
                                        {[
                                            { label: "Mileage Policy", icon: Gauge },
                                            { label: "Fuel Policy", icon: Fuel },
                                            { label: "Deposit Policy", icon: Shield },
                                            { label: "Rental Policy", icon: Clock },
                                        ].map(({ label, icon: Icon }) => (
                                            <button
                                                key={label}
                                                className="flex items-center gap-2 font-body text-caption text-brand-gray hover:text-brand-gold transition-colors cursor-pointer bg-transparent border-none text-left p-0"
                                            >
                                                <Icon size={12} className="shrink-0" />
                                                {label}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>

                <section className="section-padding bg-brand-darker mt-4">
                    <div className="container-custom flex flex-col gap-8">
                        <h2 className="font-heading font-bold text-brand-white text-heading-sm">
                            Similar Cars
                        </h2>
                        <div className="flex gap-5 overflow-x-auto pb-2" style={{ scrollbarWidth: "none" }}>
                            {similarCars.map((c) => (
                                <SimilarCard key={c.id} car={c} onBook={setBookingCar} />
                            ))}
                        </div>
                    </div>
                </section>

                <section className="section-padding bg-brand-dark">
                    <div className="container-custom flex flex-col gap-10">
                        <div className="flex flex-col items-center gap-3">
                            <span className="font-heading font-semibold text-brand-gray text-caption tracking-[0.3em] uppercase">
                                FAQ
                            </span>
                            <div className="flex items-center gap-4">
                                <img
                                    src={pointerArrow}
                                    alt=""
                                    className="shrink-0"
                                    style={{ transform: "scaleX(-1)" }}
                                />
                                <h2 className="font-heading font-bold text-brand-gold text-heading-md md:text-heading-lg leading-tight text-center whitespace-nowrap">
                                    Frequently Asked Questions
                                </h2>
                                <img src={pointerArrow} alt="" className="shrink-0" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 max-w-3xl mx-auto w-full">
                            {faqItems.map((item) => (
                                <FaqItem key={item.question} item={item} />
                            ))}
                        </div>
                    </div>
                </section>

            </main>

         

        </div>
    )

}

export default CarOfferPage
