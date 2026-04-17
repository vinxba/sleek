import { useState, useEffect } from "react"
import { motion } from "motion/react"
import { X, Calendar, Clock, User, Phone, Mail, Baby } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select"

const timeOptions = [
    "06:00 AM", "07:00 AM", "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM",
    "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM",
    "06:00 PM", "07:00 PM", "08:00 PM", "09:00 PM", "10:00 PM", "11:00 PM",
]

const defaultForm = {
    pickupDate: "",
    dropoffDate: "",
    pickupTime: "",
    dropoffTime: "",
    name: "",
    phone: "",
    email: "",
    babySeat: false,
    payNow: false,
}

const calcDays = (from, to) => {

    if (!from || !to) return 1
    const diff = new Date(to) - new Date(from)
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24))
    return days > 0 ? days : 1

}

const BookingModal = ({ car, onClose }) => {

    const [form, setForm] = useState(defaultForm)

    useEffect(() => {
        document.body.style.overflow = "hidden"
        return () => { document.body.style.overflow = "" }
    }, [])

    const days = calcDays(form.pickupDate, form.dropoffDate)
    const babySeatCost = form.babySeat ? 25 * days : 0
    const subtotal = car.priceDay * days + babySeatCost
    const discount = form.payNow ? subtotal * 0.05 : 0
    const vat = (subtotal - discount) * 0.05
    const total = subtotal - discount + vat

    const set = (key) => (val) => setForm((prev) => ({ ...prev, [key]: val }))
    const setInput = (key) => (e) => setForm((prev) => ({ ...prev, [key]: e.target.value }))

    const handleClear = () => setForm(defaultForm)

    const handleConfirm = () => {
        onClose()
    }

    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 z-[52]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
        >
            <div
                className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                onClick={onClose}
            />

            <motion.div
                className="relative w-full max-w-4xl max-h-[92vh] bg-brand-card rounded-2xl overflow-hidden flex flex-col shadow-2xl"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-brand-darker/80 flex items-center justify-center text-brand-gray hover:text-brand-white transition-colors cursor-pointer border-none"
                >
                    <X size={16} />
                </button>

                <div className="flex flex-col lg:flex-row overflow-y-auto lg:overflow-hidden flex-1 min-h-0">

                    <div className="lg:w-[38%] shrink-0 flex flex-col">
                        <div className="relative h-52 lg:h-full min-h-0">
                            <img
                                src={car.image}
                                alt={car.name}
                                className="w-full h-full object-cover"
                            />
                            <div
                                className="absolute inset-0"
                                style={{ background: "linear-gradient(to top, #111827 0%, transparent 50%)" }}
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-5">
                                <span className="font-heading text-caption font-semibold text-brand-gold tracking-[0.2em] uppercase">
                                    {car.brand}
                                </span>
                                <h3 className="font-heading font-bold text-brand-white text-heading-sm leading-snug mt-0.5">
                                    {car.name}
                                </h3>
                                <div className="flex items-baseline gap-1.5 mt-2">
                                    <span className="font-body text-caption text-brand-gray">AED</span>
                                    <span className="font-heading font-bold text-brand-gold text-heading-sm">
                                        {car.priceDay.toLocaleString()}
                                    </span>
                                    <span className="font-body text-caption text-brand-gray">/ day</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 flex flex-col overflow-y-auto lg:overflow-y-auto">
                        <div className="flex flex-col gap-5 p-6 flex-1">

                            <div>
                                <h2 className="font-heading font-bold text-brand-white text-heading-sm">
                                    Book Your Ride
                                </h2>
                                <p className="font-body text-body-sm text-brand-gray mt-1">
                                    Fill in the details to confirm your booking
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                                <div className="flex flex-col gap-1.5">
                                    <label className="font-heading text-caption font-semibold text-brand-gray uppercase tracking-widest flex items-center gap-1.5">
                                        <Calendar size={12} />
                                        Pickup Date
                                    </label>
                                    <Input
                                        type="date"
                                        value={form.pickupDate}
                                        onChange={setInput("pickupDate")}
                                        className="rounded-lg [color-scheme:dark]"
                                    />
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <label className="font-heading text-caption font-semibold text-brand-gray uppercase tracking-widest flex items-center gap-1.5">
                                        <Calendar size={12} />
                                        Drop Off Date
                                    </label>
                                    <Input
                                        type="date"
                                        value={form.dropoffDate}
                                        onChange={setInput("dropoffDate")}
                                        className="rounded-lg [color-scheme:dark]"
                                    />
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <label className="font-heading text-caption font-semibold text-brand-gray uppercase tracking-widest flex items-center gap-1.5">
                                        <Clock size={12} />
                                        Pickup Time
                                    </label>
                                    <Select onValueChange={set("pickupTime")} value={form.pickupTime}>
                                        <SelectTrigger className="rounded-lg">
                                            <SelectValue placeholder="Select time" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {timeOptions.map((t) => (
                                                <SelectItem key={t} value={t}>{t}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <label className="font-heading text-caption font-semibold text-brand-gray uppercase tracking-widest flex items-center gap-1.5">
                                        <Clock size={12} />
                                        Drop Off Time
                                    </label>
                                    <Select onValueChange={set("dropoffTime")} value={form.dropoffTime}>
                                        <SelectTrigger className="rounded-lg">
                                            <SelectValue placeholder="Select time" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {timeOptions.map((t) => (
                                                <SelectItem key={t} value={t}>{t}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <label className="font-heading text-caption font-semibold text-brand-gray uppercase tracking-widest flex items-center gap-1.5">
                                        <User size={12} />
                                        Full Name
                                    </label>
                                    <Input
                                        type="text"
                                        placeholder="John Doe"
                                        value={form.name}
                                        onChange={setInput("name")}
                                        className="rounded-lg"
                                    />
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <label className="font-heading text-caption font-semibold text-brand-gray uppercase tracking-widest flex items-center gap-1.5">
                                        <Phone size={12} />
                                        Phone Number
                                    </label>
                                    <div className="flex">
                                        <div className="flex items-center gap-2 px-3 bg-brand-darker border border-brand-border border-r-0 rounded-l-lg shrink-0">
                                            <span className="text-base leading-none">🇦🇪</span>
                                            <span className="font-body text-body-sm text-brand-gray">+971</span>
                                        </div>
                                        <Input
                                            type="tel"
                                            placeholder="50 123 4567"
                                            value={form.phone}
                                            onChange={setInput("phone")}
                                            className="rounded-l-none rounded-r-lg flex-1"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-1.5 sm:col-span-2">
                                    <label className="font-heading text-caption font-semibold text-brand-gray uppercase tracking-widest flex items-center gap-1.5">
                                        <Mail size={12} />
                                        Email Address
                                    </label>
                                    <Input
                                        type="email"
                                        placeholder="you@example.com"
                                        value={form.email}
                                        onChange={setInput("email")}
                                        className="rounded-lg"
                                    />
                                </div>

                            </div>

                            <div className="flex flex-col gap-3 pt-1">

                                <button
                                    onClick={() => set("babySeat")(!form.babySeat)}
                                    className="flex items-center justify-between p-4 rounded-lg border border-brand-border hover:border-brand-gold/50 transition-colors cursor-pointer bg-transparent w-full text-left"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-brand-gold/15 flex items-center justify-center shrink-0">
                                            <Baby size={15} className="text-brand-gold" />
                                        </div>
                                        <div>
                                            <p className="font-heading font-semibold text-brand-white text-body-sm">
                                                Baby Seat
                                            </p>
                                            <p className="font-body text-caption text-brand-gray">AED 25 / day</p>
                                        </div>
                                    </div>
                                    <div
                                        className={`w-11 h-6 rounded-full transition-colors duration-200 relative shrink-0 ${form.babySeat ? "bg-brand-gold" : "bg-brand-border"}`}
                                    >
                                        <span
                                            className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-all duration-200 ${form.babySeat ? "left-[calc(100%-1.375rem)]" : "left-0.5"}`}
                                        />
                                    </div>
                                </button>

                                <div className="grid grid-cols-2 gap-3">

                                    <button
                                        onClick={() => set("payNow")(false)}
                                        className={`flex flex-col gap-1 p-4 rounded-lg border transition-colors cursor-pointer bg-transparent text-left ${!form.payNow ? "border-brand-gold" : "border-brand-border hover:border-brand-gold/50"}`}
                                    >
                                        <div className="flex items-center gap-2">
                                            <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${!form.payNow ? "border-brand-gold" : "border-brand-border"}`}>
                                                {!form.payNow && <div className="w-2 h-2 rounded-full bg-brand-gold" />}
                                            </div>
                                            <span className="font-heading font-semibold text-brand-white text-body-sm">Pay Later</span>
                                        </div>
                                        <p className="font-body text-caption text-brand-gray pl-6">Pay on pickup</p>
                                    </button>

                                    <button
                                        onClick={() => set("payNow")(true)}
                                        className={`flex flex-col gap-1 p-4 rounded-lg border transition-colors cursor-pointer bg-transparent text-left ${form.payNow ? "border-brand-gold" : "border-brand-border hover:border-brand-gold/50"}`}
                                    >
                                        <div className="flex items-center gap-2">
                                            <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${form.payNow ? "border-brand-gold" : "border-brand-border"}`}>
                                                {form.payNow && <div className="w-2 h-2 rounded-full bg-brand-gold" />}
                                            </div>
                                            <span className="font-heading font-semibold text-brand-white text-body-sm">Pay Now</span>
                                        </div>
                                        <p className="font-body text-caption text-brand-gold text-caption pl-6">5% discount</p>
                                    </button>

                                </div>

                            </div>

                            <div className="flex flex-col gap-3 p-4 rounded-xl bg-brand-darker border border-brand-border">
                                <h4 className="font-heading font-semibold text-brand-white text-body-sm">
                                    Booking Summary
                                </h4>
                                <div className="flex flex-col gap-2">
                                    <div className="flex justify-between">
                                        <span className="font-body text-body-sm text-brand-gray">
                                            {car.priceDay.toLocaleString()} AED × {days} day{days > 1 ? "s" : ""}
                                        </span>
                                        <span className="font-body text-body-sm text-brand-white">
                                            AED {(car.priceDay * days).toLocaleString()}
                                        </span>
                                    </div>
                                    {form.babySeat && (
                                        <div className="flex justify-between">
                                            <span className="font-body text-body-sm text-brand-gray">Baby Seat × {days} day{days > 1 ? "s" : ""}</span>
                                            <span className="font-body text-body-sm text-brand-white">AED {babySeatCost.toLocaleString()}</span>
                                        </div>
                                    )}
                                    {form.payNow && (
                                        <div className="flex justify-between">
                                            <span className="font-body text-body-sm text-brand-gray">Pay Now Discount (5%)</span>
                                            <span className="font-body text-body-sm text-green-400">- AED {discount.toFixed(0)}</span>
                                        </div>
                                    )}
                                    <div className="flex justify-between">
                                        <span className="font-body text-body-sm text-brand-gray">VAT (5%)</span>
                                        <span className="font-body text-body-sm text-brand-white">AED {vat.toFixed(0)}</span>
                                    </div>
                                    <div className="h-px bg-brand-border my-1" />
                                    <div className="flex justify-between">
                                        <span className="font-heading font-bold text-brand-white text-body">Total</span>
                                        <span className="font-heading font-bold text-brand-gold text-body">AED {total.toFixed(0)}</span>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="flex gap-3 p-6 pt-0 shrink-0">
                            <button
                                onClick={handleClear}
                                className="flex-1 font-heading font-semibold text-body-sm text-brand-gray border border-brand-border py-3 rounded-lg hover:border-brand-gold/50 hover:text-brand-white transition-colors cursor-pointer bg-transparent"
                            >
                                Clear
                            </button>
                            <button
                                onClick={handleConfirm}
                                className="flex-[2] font-heading font-semibold text-body-sm text-brand-dark bg-brand-gold py-3 rounded-lg hover:bg-brand-gold-dark transition-colors cursor-pointer border-none"
                            >
                                Confirm Booking
                            </button>
                        </div>

                    </div>

                </div>

            </motion.div>
        </motion.div>
    )

}

export default BookingModal
