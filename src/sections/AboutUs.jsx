import { motion } from "motion/react"
import aboutImage from "@/assets/images/about.webp"
import pointerArrow from "@/assets/svg/pointer-bash.svg"

const AboutUs = () => {

    return (
        <section id="about" >
            <div className="section-padding bg-brand-dark overflow-hidden mt-6">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-5% 0px" }}
                            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <img
                                src={aboutImage}
                                alt="Two people leaning on a luxury car in Dubai"
                                className="w-full h-full object-cover rounded-2xl"
                                style={{ maxHeight: "480px" }}
                            />
                        </motion.div>

                        <motion.div
                            className="flex flex-col"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-5% 0px" }}
                            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                        >
                            <span className="spaced-text text-gray-100 ">
                                Sleek
                            </span>

                            <div className="flex flex-col gap-1">
                                <h2 className="font-heading font-bold text-brand-gold text-heading-xl leading-tight">
                                    Built for the
                                </h2>
                                <div className="flex items-center gap-4">
                                    <h2 className="font-heading font-bold text-brand-gold text-heading-xl leading-tight">
                                        Drive Ahead
                                    </h2>
                                    <img src={pointerArrow} alt="" className="mt-1 shrink-0" />
                                </div>
                            </div>

                            <div className="flex flex-col gap-4 font-light mt-6">
                                <p className="font-body text-body-sm text-gray-400 body-text">
                                    At Sleek Rent a Car, we redefine mobility in the heart of Dubai — a city where luxury, speed, and innovation meet. We provide premium and reliable car rental solutions designed for those who value comfort, style, and seamless travel.
                                </p>
                                <p className="font-body text-body-sm text-gray-400 body-text">
                                    Whether you're visiting Dubai for business, leisure, or a long-term stay, Sleek offers a diverse fleet of well-maintained vehicles — from stylish sedans and luxury cars to powerful SUVs — ensuring a smooth and effortless driving experience. Our vehicles are equipped with modern features, delivering safety, performance, and sophistication on every journey.
                                </p>
                            </div>

                            {/* <div className="mt-8">
                                <button className="flex items-center gap-3 bg-brand-gold text-brand-dark font-heading font-semibold text-body px-6 py-3 rounded-lg hover:bg-brand-gold-dark transition-colors duration-200 cursor-pointer border-none">
                                    Read More
                                    <span className="w-7 h-7 flex items-center justify-center rounded-full bg-brand-dark/20">
                                        <MoveRight />
                                    </span>
                                </button>
                            </div> */}

                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    )

}

export default AboutUs
