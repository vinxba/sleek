import { motion } from "motion/react"
import { Car, KeyRound } from "lucide-react"
import pointerArrow from "@/assets/svg/pointer-bash.svg"

const steps = [
    {
        number: "1",
        title: "Choose A Car",
        description: "View our range of cars, find your perfect car for the coming days.",
    },
    {
        number: "2",
        title: "Come In Contact",
        description: "Our advisor team is ready to help you with the booking process or any questions.",
    },
    {
        number: "3",
        title: "Enjoy Driving",
        description: "Receive the key and enjoy your car. We treat all our cars with respect.",
    },
]

const connectorIcons = [Car, KeyRound]

const RentalProcess = () => {

    return (
        <section id="process" className="section-padding bg-brand-dark">
            <div className="container-custom flex flex-col gap-12">

                <div className="flex flex-col items-center gap-3">
                    <span className="font-heading font-semibold text-brand-gray text-caption tracking-[0.3em] uppercase">
                        Steps
                    </span>
                    <div className="flex items-center gap-4">
                        <img
                            src={pointerArrow}
                            alt=""
                            className="shrink-0"
                            style={{ transform: "scaleX(-1)" }}
                        />
                        <h2 className="font-heading font-black text-brand-gold text-heading-md md:text-[2.6rem] tracking-wide text-center">
                            Car Rental Process
                        </h2>
                        <img src={pointerArrow} alt="" className="shrink-0" />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-stretch gap-0">
                    {steps.map((step, index) => (
                        <div key={step.number} className="flex flex-col md:flex-row items-center flex-1 min-w-0">

                            <motion.div
                                className="flex flex-col gap-4 p-6 bg-brand-card rounded-2xl w-full"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-5% 0px" }}
                                transition={{ duration: 0.6, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                            >
                                <div className="w-10 h-10 rounded-full bg-brand-darker border border-brand-border flex items-center justify-center">
                                    <span className="font-heading font-bold text-brand-white text-body">
                                        {step.number}
                                    </span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h3 className="font-heading font-bold text-brand-white text-heading-sm">
                                        {step.title}
                                    </h3>
                                    <p className="font-body text-body-sm text-brand-gray leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>

                            {index < steps.length - 1 && (() => {

                                const ConnectorIcon = connectorIcons[index]

                                return (
                                    <div className="flex md:flex-col items-center gap-0 shrink-0 py-4 md:py-0 md:px-2">
                                        <div className="w-12 h-px md:w-px md:h-8 bg-brand-border" />
                                        <div className="w-9 h-9 rounded-full border border-brand-border bg-brand-card flex items-center justify-center shrink-0">
                                            <ConnectorIcon size={15} className="text-brand-gray" />
                                        </div>
                                        <div className="w-12 h-px md:w-px md:h-8 bg-brand-border" />
                                    </div>
                                )

                            })()}

                        </div>
                    ))}
                </div>

                <motion.p
                    className="font-body text-body-sm text-brand-gray leading-relaxed text-center max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-5% 0px" }}
                    transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                >
                    The car rental process begins with browsing and selecting a suitable vehicle based on budget, preference, and availability. The customer then provides necessary documents such as a valid driving license, ID proof, and security deposit. Once the details are verified, the rental terms and conditions are explained, and the agreement is signed. Payment is completed based on the chosen rental plan, whether daily, weekly, or monthly. The customer receives the vehicle in good condition with fuel and safety checks completed. During the rental period, the customer is responsible for the vehicle's care and adherence to traffic rules. At the end of the rental period, the car is returned and inspected for any damages or additional charges before the final settlement.
                </motion.p>

            </div>
        </section>
    )

}

export default RentalProcess
