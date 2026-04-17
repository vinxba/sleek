import { useState } from "react"
import { motion } from "motion/react"
import { Phone, Mail, MapPin } from "lucide-react"
import logoFull from "@/assets/icons/logo.png"

// Quick links mirror the navbar
const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Cars", href: "#recommended" },
    { label: "Car Types", href: "#categories" },
    { label: "Contact", href: "#contact" },
]

const contactInfo = [
    {
        icon: Phone,
        label: "Call us",
        value: "050 955 8865",
        href: "tel:+9710509558865",
    },
    {
        icon: Mail,
        label: "Write to us",
        value: "csr@armeny.ae",
        href: "mailto:csr@armeny.ae",
    },
    {
        icon: MapPin,
        label: "Address",
        value: "Dubai, Garhoud Community Building office#213",
        href: "https://maps.google.com/?q=Garhoud+Dubai",
    },
]

// Social icons as inline SVGs to avoid lucide gaps (LinkedIn, TikTok, X)
const SocialIcons = {
    Facebook: () => (
        <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
    ),
    LinkedIn: () => (
        <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zm2-6a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
        </svg>
    ),
    Instagram: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
        </svg>
    ),
    X: () => (
        <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
    ),
    TikTok: () => (
        <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.26 8.26 0 0 0 4.83 1.55V6.78a4.85 4.85 0 0 1-1.06-.09z" />
        </svg>
    ),
    YouTube: () => (
        <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20.06 12 20.06 12 20.06s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
        </svg>
    ),
}

const socialLinks = [
    { Icon: SocialIcons.Facebook, label: "Facebook", href: "#", color: "#1877F2" },
    { Icon: SocialIcons.LinkedIn, label: "LinkedIn", href: "#", color: "#0A66C2" },
    { Icon: SocialIcons.Instagram, label: "Instagram", href: "#", color: "#E1306C" },
    { Icon: SocialIcons.X, label: "X", href: "#", color: "#ffffff" },
    { Icon: SocialIcons.TikTok, label: "TikTok", href: "#", color: "#ffffff" },
    { Icon: SocialIcons.YouTube, label: "YouTube", href: "#", color: "#FF0000" },
]

// Payment method pills (text-based, styled like the Visa/Mastercard etc in the image)
const paymentMethods = ["VISA", "MC", "UnionPay", "₿", "💳"]

const PaymentBadge = ({ method }) => (
    <span className="inline-flex items-center justify-center px-2.5 py-1 rounded text-[11px] font-bold border border-brand-border bg-brand-card text-brand-gray-light select-none">
        {method}
    </span>
)

const Footer = () => {

    const [email, setEmail] = useState("")

    const handleNavClick = (href) => {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
    }

    const handleSubscribe = (e) => {
        e.preventDefault()
        setEmail("")
    }

    return (
        <motion.footer
            id="contact"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-5% 0px" }}
            transition={{ duration: 0.7 }}
            className="bg-brand-darker border-t border-brand-border"
        >
            {/* ── Top strip: Map + Contact cards ── */}
            <div className="border-b border-brand-border">
                <div className="container-custom py-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

                        {/* Google Maps embed */}
                        <div className="rounded-2xl overflow-hidden border border-brand-border" style={{ height: "240px" }}>
                            <iframe
                                title="Sleek Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.7!2d55.3375!3d25.2485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d3b6b6b6b6b%3A0x0!2zR2FyaG91ZCwgRHViYWk!5e0!3m2!1sen!2sae!4v1234567890"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>

                        {/* Contact cards */}
                        <div className="flex flex-col gap-5 justify-center h-full">
                            {contactInfo.map(({ icon: Icon, label, value, href }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target={href.startsWith("http") ? "_blank" : undefined}
                                    rel="noreferrer"
                                    className="flex items-center gap-4 group no-underline"
                                >
                                    <div className="w-12 h-12 rounded-full bg-brand-gold flex items-center justify-center shrink-0 shadow-gold group-hover:bg-brand-gold-light transition-colors duration-200">
                                        <Icon size={20} className="text-brand-dark" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="font-heading font-semibold text-brand-white text-body-sm leading-tight">
                                            {label}
                                        </span>
                                        <span className="font-body text-body-sm text-brand-gray group-hover:text-brand-gold transition-colors duration-200">
                                            {value}
                                        </span>
                                    </div>
                                </a>
                            ))}
                        </div>

                    </div>
                </div>
            </div>

            {/* ── Bottom section: Logo / Quick Links / Subscribe ── */}
            <div className="container-custom py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                    {/* Logo + tagline + payment */}
                    <div className="flex flex-col gap-5">
                        <img src={logoFull} alt="Sleek" className="h-9 object-contain object-left" />

                        <p className="font-body text-body-sm text-brand-gray leading-relaxed max-w-xs">
                            It's time to makeover your drive! Rent a car today and hit the road in style!
                        </p>

                        <div className="flex flex-col gap-2">
                            <span className="font-body text-caption text-brand-gray-dark">
                                Flexible ways to pay your partner directly
                            </span>
                            <div className="flex items-center gap-2 flex-wrap">
                                {paymentMethods.map(m => (
                                    <PaymentBadge key={m} method={m} />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Quick links */}
                    <div className="flex flex-col gap-4">
                        <h4 className="font-heading font-bold text-brand-white text-heading-sm">
                            Quick Links
                        </h4>
                        <ul className="flex flex-col gap-3">
                            {quickLinks.map(link => (
                                <li key={link.label} className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" />
                                    <button
                                        onClick={() => handleNavClick(link.href)}
                                        className="font-body text-body-sm text-brand-gray hover:text-brand-gold transition-colors duration-200 bg-transparent border-none cursor-pointer text-left"
                                    >
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Subscribe + social */}
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-1.5">
                            <h4 className="font-heading font-bold text-brand-white text-heading-sm">
                                Subscribe
                            </h4>
                            <p className="font-body text-body-sm text-brand-gray leading-relaxed">
                                Want to be notified about our services. Just sign up and we'll send you a notification by email.
                            </p>
                        </div>

                        <form onSubmit={handleSubscribe} className="flex items-center gap-0 rounded-full border border-brand-border bg-brand-card overflow-hidden pr-1">
                            <input
                                type="email"
                                placeholder="Email Address"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                className="flex-1 bg-transparent px-4 py-3 font-body text-body-sm text-brand-white placeholder:text-brand-gray outline-none border-none"
                                required
                            />
                            <button
                                type="submit"
                                className="w-9 h-9 rounded-full bg-brand-gold flex items-center justify-center shrink-0 hover:bg-brand-gold-light transition-colors duration-200 cursor-pointer border-none"
                                aria-label="Subscribe"
                            >
                                <svg viewBox="0 0 24 24" fill="none" stroke="#0B1120" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="15" height="15">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </button>
                        </form>

                        <div className="flex flex-col gap-2.5">
                            <span className="font-body text-body-sm text-brand-gray">Follow us on:</span>
                            <div className="flex items-center gap-2">
                                {socialLinks.map(({ Icon, label, href, color }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        aria-label={label}
                                        className="w-8 h-8 rounded-full flex items-center justify-center bg-brand-card border border-brand-border hover:border-brand-gold transition-all duration-200"
                                        style={{ color }}
                                    >
                                        <Icon />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* ── Copyright bar ── */}
            <div className="border-t border-brand-border">
                <div className="container-custom py-4 text-center">
                    <p className="font-body text-caption text-brand-gray-dark">
                        ©Sleek 2024 Corporation. All rights reserved.
                    </p>
                </div>
            </div>

        </motion.footer>
    )

}

export default Footer
