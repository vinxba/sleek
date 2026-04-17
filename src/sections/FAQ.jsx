import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { Plus, Minus } from "lucide-react"
import { faqItems } from "@/data/cars"
import pointerArrow from "@/assets/svg/pointer-bash.svg"

const FAQItem = ({ item }) => {

    const [open, setOpen] = useState(false)

    return (
        <div className="rounded-xl overflow-hidden">
            <button
                onClick={() => setOpen(!open)}
                className={`w-full flex items-center gap-4 px-5 py-4 text-left transition-colors duration-200 cursor-pointer border-none ${open ? "bg-brand-card-hover" : "bg-brand-card hover:bg-brand-card-hover"}`}
            >
                <span className="shrink-0 text-brand-gold">
                    {open ? <Minus size={16} /> : <Plus size={16} />}
                </span>
                <span className="font-heading font-semibold text-brand-white text-body-sm">
                    {item.question}
                </span>
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
                        <div className="px-5 py-4 bg-brand-card/60">
                            <p className="font-body text-body-sm text-brand-gray leading-relaxed pl-8">
                                {item.answer}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )

}


const FAQ = () => {

    return (
        <section id="faq" className="section-padding bg-brand-darker">
            <div className="container-custom flex flex-col gap-12">

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
                        <h2 className="font-heading font-bold text-brand-gold text-heading-md md:text-heading-xl leading-tight text-center">
                            Frequently Asked Questions
                        </h2>
                        <img src={pointerArrow} alt="" className="shrink-0" />
                    </div>
                </div>

                <div className="flex flex-col gap-3 max-w-4xl mx-auto w-full">
                    {faqItems.map((item) => (
                        <FAQItem key={item.question} item={item} />
                    ))}
                </div>

            </div>
        </section>
    )

}

export default FAQ
