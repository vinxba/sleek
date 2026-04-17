import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Car } from "lucide-react"
import landingBg from "@/assets/background/landing_bg.webp"
import car1 from "@/assets/cars/landing_car_1.png"
import car2 from "@/assets/cars/landing_car_2.png"
import car3 from "@/assets/cars/landing_car_3.png"

const cars = [car1, car2, car3]

const CAR_INTERVAL = 3800

const contentVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
}

const carVariants = {
    enter: {
        x: "75%",
        opacity: 0,
        scale: 0.88,
        filter: "blur(6px)",
    },
    center: {
        x: 0,
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
    },
    exit: {
        x: "-30%",
        opacity: 0,
        scale: 0.95,
        filter: "blur(4px)",
        transition: { duration: 0.45, ease: [0.7, 0, 1, 0.6] },
    },
}

const Hero = () => {

    const [carIndex, setCarIndex] = useState(0)
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {

        const interval = setInterval(() => {
            setCarIndex(prev => (prev + 1) % cars.length)
        }, CAR_INTERVAL)

        if (document.readyState === "complete") {
            setLoaded(true)
        } else {
            const handleLoad = () => setLoaded(true)
            window.addEventListener("load", handleLoad)
            return () => {
                clearInterval(interval)
                window.removeEventListener("load", handleLoad)
            }
        }

        return () => clearInterval(interval)

    }, [])

    const handleScrollToFleet = () => {

        document.querySelector("#fleet")?.scrollIntoView({ behavior: "smooth" })

    }

    const handleScrollToContact = () => {

        document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })

    }

    return (
        <section id="home" className="relative min-h-screen min-w-full flex items-center overflow-hidden pt-20" >
            <div className="absolute inset-0 w-full h-full overflow-hidden">
                <motion.img
                    src={landingBg}
                    alt=""
                    className="w-full h-full object-cover object-center"
                    style={{ minHeight: "100vh", minWidth: "100vw", transformOrigin: "center center" }}
                    animate={{
                        scale: [1, 1.06, 1.03, 1],
                        x: ["0%", "-1.2%", "0.6%", "0%"],
                        y: ["0%", "-0.6%", "0.4%", "0%"],
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "easeInOut",
                        times: [0, 0.35, 0.65, 1],
                    }}
                />

                <div
                    className="absolute inset-0"
                    style={{
                        background: "linear-gradient(to right, rgba(7,12,22,0.92) 0%, rgba(7,12,22,0.55) 50%, rgba(7,12,22,0.25) 100%)",
                    }}
                />
                <div
                    className="absolute inset-0"
                    style={{
                        background: "linear-gradient(to top, rgba(11,17,32,1) 0%, transparent 45%)",
                    }}
                />
                <div
                    className="absolute inset-0"
                    style={{
                        background: "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 60%, rgba(7,12,22,0.5) 100%)",
                    }}
                />
            </div>

            <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: loaded ? 1 : 0 }}
                transition={{ duration: 1.5, delay: 0.2 }}
                style={{
                    background: "radial-gradient(ellipse 50% 50% at 70% 40%, rgba(245,183,84,0.06) 0%, transparent 70%)",
                }}
            />

            <div className="container-custom relative z-10 w-full py-16 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                    <motion.div
                        className="flex flex-col order-2 lg:order-1"
                        initial="hidden"
                        animate={loaded ? "show" : "hidden"}
                        transition={{ staggerChildren: 0.12, delayChildren: 0.3 }}
                    >

                        <motion.div variants={contentVariants} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
                            <h1 className="font-hero font-bold text-brand-gold leading-none uppercase text-6xl md:text-6xl">
                                SLEEK
                            </h1>
                            <h2 className="font-hero font-bold text-brand-white leading-tight text-4xl md:text-6xl mt-1">
                                Rent a Car in Dubai
                            </h2>
                        </motion.div>


                        <motion.div
                            variants={contentVariants}
                            transition={{ duration: 0.6 }}
                            className="flex flex-wrap gap-4 text-xl md:text-2xl mt-4 text-gray-200"
                        >Luxury, Economy and Sports Cars</motion.div>

                        <motion.div
                            variants={contentVariants}
                            transition={{ duration: 0.6 }}
                            className="flex flex-wrap gap-4 text-gray-500"
                        >Drive your dream from our luxury fleet.</motion.div>

                        <motion.div
                            variants={contentVariants}
                            transition={{ duration: 0.6 }}
                            className="flex flex-wrap gap-4 mt-12"
                        >
                            <Button size="default" variant="default" onClick={handleScrollToFleet} className="gap-2 rounded-lg text-brand-dark">
                                View Details
                                <ArrowRight size={18} />
                            </Button>
                            <Button size="default" variant="outline" onClick={handleScrollToContact} className="rounded-lg text-brand-white border gap-2">
                                Rent Now
                                <Car size={18} />
                            </Button>
                        </motion.div>

                    </motion.div>

                    <div className="relative order-1 lg:order-2 min-h-[260px] flex items-center">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={carIndex}
                                src={cars[carIndex]}
                                alt="Featured car available for rent"
                                className="w-full max-w-2xl mx-auto object-contain"
                                style={{ filter: "drop-shadow(0 30px 60px rgba(245,183,84,0.18))" }}
                                variants={carVariants}
                                initial="enter"
                                animate={loaded ? "center" : "enter"}
                                exit="exit"
                            />
                        </AnimatePresence>

                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2">
                            {cars.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCarIndex(i)}
                                    className={`h-0.5 transition-all duration-300 bg-brand-gold cursor-pointer border-none ${i === carIndex ? "w-6 opacity-100" : "w-2 opacity-30"
                                        }`}
                                    aria-label={`Show car ${i + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
                style={{ background: "linear-gradient(to top, #0B1120, transparent)" }}
            />
        </section>
    )

}

export default Hero
