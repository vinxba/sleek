import { useEffect } from "react"
import { motion } from "motion/react"

const LOADER_DURATION = 2400

const SPOKE_COUNT = 5

const WheelSvg = () => {

    const spokes = Array.from({ length: SPOKE_COUNT }, (_, i) => {

        const angle = (i * 360) / SPOKE_COUNT
        const rad = (angle * Math.PI) / 180

        const x1 = 50 + 9 * Math.cos(rad)
        const y1 = 50 + 9 * Math.sin(rad)
        const x2 = 50 + 27 * Math.cos(rad)
        const y2 = 50 + 27 * Math.sin(rad)

        return { x1, y1, x2, y2, angle }

    })

    return (
        <svg viewBox="0 0 100 100" width="88" height="88" aria-hidden="true">
            <circle cx="50" cy="50" r="43" stroke="#F5B754" strokeWidth="2.5" fill="none" strokeDasharray="7 3.5" opacity="0.85" />

            <circle cx="50" cy="50" r="29" stroke="#F5B754" strokeWidth="1.2" fill="none" opacity="0.35" />

            {spokes.map((spoke, i) => (
                <line
                    key={i}
                    x1={spoke.x1}
                    y1={spoke.y1}
                    x2={spoke.x2}
                    y2={spoke.y2}
                    stroke="#F5B754"
                    strokeWidth="1.8"
                    opacity="0.7"
                    strokeLinecap="round"
                />
            ))}

            <circle cx="50" cy="50" r="7" fill="#F5B754" />
            <circle cx="50" cy="50" r="3.5" fill="#070C16" />
        </svg>
    )

}


const PageLoader = ({ onComplete }) => {

    useEffect(() => {

        const timer = setTimeout(onComplete, LOADER_DURATION)

        return () => clearTimeout(timer)

    }, [onComplete])

    return (
        <motion.div
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-8 bg-brand-darker"
        >
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
            >
                <WheelSvg />
            </motion.div>

            <motion.p
                className="font-heading font-semibold text-body-sm text-brand-gray tracking-[0.3em] uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0.4, 1] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
                Loading
            </motion.p>
        </motion.div>
    )

}

export default PageLoader
