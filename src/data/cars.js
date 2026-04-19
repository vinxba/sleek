import lamborghiniImg from "@/assets/cars/fleet/lamborghini_aventador.jpg"
import rollsRoyceImg from "@/assets/cars/fleet/rolls_royce_ghost.jpg"
import rangeRoverImg from "@/assets/cars/fleet/range_rover_autobiography.jpg"
import ferrariImg from "@/assets/cars/fleet/ferrari_f8.jpg"
import bentleyImg from "@/assets/cars/fleet/bentley_continental_gt.jpg"
import cadillacImg from "@/assets/cars/fleet/cadillac_escalade.jpg"

import LRD from "@/assets/cars/fleet/LRD.jpg"
import amg from "@/assets/cars/fleet/amg63.jpg"
import a6 from "@/assets/cars/fleet/audi_a6.jpg"
import a3 from "@/assets/cars/fleet/audi_a3.jpg"
import rs5 from "@/assets/cars/fleet/audi_rs5.jpg"
import rs7 from "@/assets/cars/fleet/audi_rs7.jpg"
import q8 from "@/assets/cars/fleet/audi_q8.jpg"
import BMW7 from "@/assets/cars/fleet/bmw_7series.jpg"
import BMW5 from "@/assets/cars/fleet/bmw_5series.jpg"
import BMW4C from "@/assets/cars/fleet/bmw_4series.jpg"
import BMW3 from "@/assets/cars/fleet/bmw_3series.jpg"
import BMW2 from "@/assets/cars/fleet/bmw_2series.jpg" 
import tahoeImg from "@/assets/cars/fleet/tahoeImg.jpg" 
import malibuImg from "@/assets/cars/fleet/malibuImg.jpg" 
import yukonImg from "@/assets/cars/fleet/yukonImg.jpg" 
import acadiaImg from  "@/assets/cars/fleet/acadiaImg.jpg" 
import accordImg from  "@/assets/cars/fleet/accordImg.jpg" 
import civicImg from  "@/assets/cars/fleet/civicImg.jpg"
import odysseyImg from  "@/assets/cars/fleet/odysseyImg.jpg"

export const fleetCars = [
    {
    "id": 1,

    "brand": "Audi",

    "name": "Audi A6",

    "category": "sedan",

    "image": a6,

    "priceDay": 400,

    "priceWeek": 2500,

    "priceMonth": 8000,

    "mileageLimit": 250,

    "additionalMileage": 5,

    "minRental": 2,

    "location": "Dubai Marina, Dubai",

    "specs": {
        "speed": 250,
        "hp": 261,
        "seats": 5
    },

    "overview": {
        "bodyType": "Sedan",
        "make": "Audi",
        "model": "A6",
        "engineCapacity": "2.0L Turbocharged",
        "doors": 4,
        "fuelType": "Petrol",
        "tollCharges": "AED 4",
        "gearbox": "Auto",
        "bagsCapacity": 3,
        "color": "White / Black Interior"
    },

    "features": {
        "interior": [
        "Leather Seats",
        "Ambient Lighting",
        "Digital Driver Display",
        "Dual-zone Climate Control",
        "Premium Cabin Finish"
        ],

        "exterior": [
        "LED Headlights",
        "Alloy Wheels",
        "Sunroof",
        "Chrome Accents"
        ],

        "safety": [
        "ABS",
        "Traction Control",
        "Lane Assist",
        "Blind Spot Monitoring",
        "Parking Sensors",
        "Rear Camera"
        ],

        "comfort": [
        "Keyless Entry",
        "Push Start Button",
        "Cruise Control",
        "Electric Seat Adjustment",
        "Drive Select Modes"
        ],

        "infotainment": [
        "10-inch Touchscreen",
        "Apple CarPlay",
        "Android Auto",
        "Premium Sound System",
        "Bluetooth",
        "Navigation System"
        ]
    },

    "description": "Rent and drive the Audi A6 in Dubai for AED 400 per day. This luxury sedan offers a smooth and refined driving experience, perfect for city travel and business trips. Includes basic insurance and 250 km/day mileage limit. Comfortable seating for 5 passengers with advanced tech and safety features."
    },
    {
    "id": 2,

    "brand": "Audi",

    "name": "Audi A3",

    "category": "sedan",

    "image": a3,

    "priceDay": 250,

    "priceWeek": 1600,

    "priceMonth": 5200,

    "mileageLimit": 250,

    "additionalMileage": 5,

    "minRental": 2,

    "location": "Dubai Marina, Dubai",

    "specs": {
        "speed": 240,
        "hp": 201,
        "seats": 5
    },

    "overview": {
        "bodyType": "Sedan",
        "make": "Audi",
        "model": "A3",
        "engineCapacity": "1.4L Turbocharged",
        "doors": 4,
        "fuelType": "Petrol",
        "tollCharges": "AED 4",
        "gearbox": "Auto",
        "bagsCapacity": 2,
        "color": "Silver / Black Interior"
    },

    "features": {
        "interior": [
        "Leather Seats",
        "Digital Driver Display",
        "Ambient Lighting",
        "Dual-zone Climate Control"
        ],

        "exterior": [
        "LED Headlights",
        "Alloy Wheels",
        "Sunroof"
        ],

        "safety": [
        "ABS",
        "Traction Control",
        "Lane Assist",
        "Parking Sensors",
        "Rear Camera"
        ],

        "comfort": [
        "Keyless Entry",
        "Push Start Button",
        "Cruise Control",
        "Electric Seat Adjustment"
        ],

        "infotainment": [
        "Touchscreen Display",
        "Apple CarPlay",
        "Android Auto",
        "Bluetooth",
        "Navigation System"
        ]
    },

    "description": "Rent and drive the Audi A3 in Dubai for AED 250 per day. This compact luxury sedan is perfect for city driving, offering a balance of performance, comfort, and modern technology. Includes basic insurance and 250 km/day mileage limit. Ideal for up to 5 passengers."
    },
    {
    "id": 3,

    "brand": "Audi",

    "name": "Audi RS5",

    "category": "sports",

    "image": rs5,

    "priceDay": 1500,

    "priceWeek": 9500,

    "priceMonth": 30000,

    "mileageLimit": 250,

    "additionalMileage": 8,

    "minRental": 2,

    "location": "Dubai Marina, Dubai",

    "specs": {
        "speed": 280,
        "hp": 444,
        "seats": 4
    },

    "overview": {
        "bodyType": "Coupe",
        "make": "Audi",
        "model": "RS5",
        "engineCapacity": "2.9L Twin-Turbo V6",
        "doors": 2,
        "fuelType": "Petrol",
        "tollCharges": "AED 4",
        "gearbox": "Auto",
        "bagsCapacity": 2,
        "color": "Nardo Grey / Black Interior"
    },

    "features": {
        "interior": [
        "Leather & Alcantara Seats",
        "Heated Seats",
        "Virtual Cockpit Display",
        "Ambient Lighting",
        "Tri-zone Climate Control",
        "Carbon Fiber Interior Trim"
        ],

        "exterior": [
        "RS Sport Body Kit",
        "Matrix LED Headlights",
        "Panoramic Roof",
        "Frameless Doors",
        "20-inch Alloy Wheels",
        "Quad Exhaust System"
        ],

        "safety": [
        "ABS",
        "Traction Control",
        "Lane Keep Assist",
        "Blind Spot Assist",
        "360° Camera",
        "Parking Sensors"
        ],

        "comfort": [
        "Adaptive Sport Suspension",
        "Keyless Entry",
        "Push Start Button",
        "Drive Select Modes",
        "Cruise Control",
        "Electric Seat Adjustment"
        ],

        "infotainment": [
        "10.1-inch Touchscreen",
        "Apple CarPlay",
        "Android Auto",
        "Bang & Olufsen Sound System",
        "Bluetooth",
        "Navigation System"
        ]
    },

    "description": "Rent and drive the Audi RS5 in Dubai for AED 1500 per day. This high-performance sports coupe delivers thrilling acceleration and dynamic handling, making it perfect for luxury and performance enthusiasts. Includes basic insurance and 250 km/day mileage limit. A refundable security deposit is required. Ideal for up to 4 passengers seeking a premium driving experience."
    },
    {
    "id": 4,

    "brand": "Audi",

    "name": "Audi RS7",

    "category": "sports",

    "image": rs7,

    "priceDay": 1900,

    "priceWeek": 12000,

    "priceMonth": 38000,

    "mileageLimit": 250,

    "additionalMileage": 10,

    "minRental": 2,

    "location": "Dubai Marina, Dubai",

    "specs": {
        "speed": 305,
        "hp": 591,
        "seats": 5
    },

    "overview": {
        "bodyType": "Sportback",
        "make": "Audi",
        "model": "RS7",
        "engineCapacity": "4.0L Twin-Turbo V8",
        "doors": 4,
        "fuelType": "Petrol",
        "tollCharges": "AED 4",
        "gearbox": "Auto",
        "bagsCapacity": 3,
        "color": "Daytona Grey / Black Interior"
    },

    "features": {
        "interior": [
        "Leather & Alcantara Seats",
        "Heated & Ventilated Seats",
        "Audi Virtual Cockpit",
        "Ambient Lighting",
        "Four-zone Climate Control",
        "Carbon Fiber Interior Trim"
        ],

        "exterior": [
        "RS Sport Body Kit",
        "Matrix LED Headlights",
        "Panoramic Roof",
        "Soft-Close Doors",
        "22-inch Alloy Wheels",
        "Quad Exhaust System"
        ],

        "safety": [
        "ABS",
        "Traction Control",
        "Lane Keep Assist",
        "Blind Spot Assist",
        "360° Camera",
        "Parking Sensors",
        "Adaptive Cruise Assist"
        ],

        "comfort": [
        "Adaptive Air Suspension",
        "Keyless Entry",
        "Push Start Button",
        "Drive Select Modes",
        "Cruise Control",
        "Electric Seat Adjustment",
        "Soft Close Doors"
        ],

        "infotainment": [
        "Dual Touchscreen Displays",
        "Apple CarPlay",
        "Android Auto",
        "Bang & Olufsen 3D Sound System",
        "Bluetooth",
        "Navigation System"
        ]
    },

    "description": "Rent and drive the Audi RS7 in Dubai for AED 1900 per day. This high-performance luxury sportback delivers exceptional power, cutting-edge technology, and premium comfort. Includes basic insurance and 250 km/day mileage limit. A refundable security deposit is required. Perfect for those seeking a blend of performance and luxury with seating for up to 5 passengers."
    },
    {
    "id": 5,

    "brand": "Audi",

    "name": "Audi Q8",

    "category": "suv",

    "image": q8,

    "priceDay": 2000,

    "priceWeek": 13000,

    "priceMonth": 42000,

    "mileageLimit": 250,

    "additionalMileage": 10,

    "minRental": 2,

    "location": "Dubai Marina, Dubai",

    "specs": {
        "speed": 250,
        "hp": 335,
        "seats": 5
    },

    "overview": {
        "bodyType": "SUV",
        "make": "Audi",
        "model": "Q8",
        "engineCapacity": "3.0L Turbocharged V6",
        "doors": 5,
        "fuelType": "Petrol",
        "tollCharges": "AED 4",
        "gearbox": "Auto",
        "bagsCapacity": 5,
        "color": "Black / Brown Interior"
    },

    "features": {
        "interior": [
        "Leather Seats",
        "Heated & Ventilated Seats",
        "Audi Virtual Cockpit",
        "Ambient Lighting",
        "Four-zone Climate Control",
        "Premium Cabin Finish"
        ],

        "exterior": [
        "S-Line Body Kit",
        "Matrix LED Headlights",
        "Panoramic Roof",
        "Soft Close Doors",
        "21-inch Alloy Wheels",
        "Frameless Doors"
        ],

        "safety": [
        "ABS",
        "Traction Control",
        "Lane Keep Assist",
        "Blind Spot Assist",
        "360° Camera",
        "Parking Sensors",
        "Adaptive Cruise Assist"
        ],

        "comfort": [
        "Adaptive Air Suspension",
        "Keyless Entry",
        "Push Start Button",
        "Drive Select Modes",
        "Cruise Control",
        "Electric Seat Adjustment",
        "Soft Close Doors"
        ],

        "infotainment": [
        "Dual Touchscreen Displays",
        "Apple CarPlay",
        "Android Auto",
        "Bang & Olufsen Sound System",
        "Bluetooth",
        "Navigation System"
        ]
    },

    "description": "Rent and drive the Audi Q8 in Dubai for AED 2000 per day. This luxury SUV combines bold design, advanced technology, and powerful performance, making it perfect for premium city driving and long-distance comfort. Includes basic insurance and 250 km/day mileage limit. A refundable security deposit is required. Seats up to 5 passengers in ultimate comfort."
    },
    {
    "id": 6,

    "brand": "BMW",

    "name": "BMW 7 Series",

    "category": "sedan",

    "image": BMW7,

    "priceDay": 1200,

    "priceWeek": 7800,

    "priceMonth": 25000,

    "mileageLimit": 250,

    "additionalMileage": 7,

    "minRental": 2,

    "location": "Dubai Marina, Dubai",

    "specs": {
        "speed": 250,
        "hp": 335,
        "seats": 5
    },

    "overview": {
        "bodyType": "Sedan",
        "make": "BMW",
        "model": "7 Series",
        "engineCapacity": "3.0L TwinPower Turbo",
        "doors": 4,
        "fuelType": "Petrol",
        "tollCharges": "AED 4",
        "gearbox": "Auto",
        "bagsCapacity": 4,
        "color": "Black / Beige Interior"
    },

    "features": {
        "interior": [
        "Leather Seats",
        "Heated & Ventilated Seats",
        "Digital Driver Display",
        "Ambient Lighting",
        "Four-zone Climate Control",
        "Premium Wood Trim"
        ],

        "exterior": [
        "LED Headlights",
        "Panoramic Sunroof",
        "Soft Close Doors",
        "19-inch Alloy Wheels",
        "Chrome Exterior Accents"
        ],

        "safety": [
        "ABS",
        "Traction Control",
        "Lane Keep Assist",
        "Blind Spot Assist",
        "360° Camera",
        "Parking Sensors",
        "Adaptive Cruise Control"
        ],

        "comfort": [
        "Adaptive Air Suspension",
        "Keyless Entry",
        "Push Start Button",
        "Drive Modes",
        "Cruise Control",
        "Electric Seat Adjustment",
        "Rear Seat Entertainment"
        ],

        "infotainment": [
        "12.3-inch Touchscreen",
        "Apple CarPlay",
        "Android Auto",
        "Harman Kardon Sound System",
        "Bluetooth",
        "Navigation System"
        ]
    },

    "description": "Rent and drive the BMW 7 Series in Dubai for AED 1200 per day. This flagship luxury sedan delivers exceptional comfort, advanced technology, and a smooth driving experience. Includes basic insurance and 250 km/day mileage limit. A refundable security deposit is required. Ideal for business trips or premium travel with seating for up to 5 passengers."
    },
    {
    "id": 7,

    "brand": "BMW",

    "name": "BMW 5 Series",

    "category": "sedan",

    "image": BMW5,

    "priceDay": 400,

    "priceWeek": 2600,

    "priceMonth": 8500,

    "mileageLimit": 250,

    "additionalMileage": 5,

    "minRental": 2,

    "location": "Dubai Marina, Dubai",

    "specs": {
        "speed": 250,
        "hp": 248,
        "seats": 5
    },

    "overview": {
        "bodyType": "Sedan",
        "make": "BMW",
        "model": "5 Series",
        "engineCapacity": "2.0L TwinPower Turbo",
        "doors": 4,
        "fuelType": "Petrol",
        "tollCharges": "AED 4",
        "gearbox": "Auto",
        "bagsCapacity": 3,
        "color": "White / Black Interior"
    },

    "features": {
        "interior": [
        "Leather Seats",
        "Heated Seats",
        "Digital Driver Display",
        "Ambient Lighting",
        "Dual-zone Climate Control",
        "Premium Cabin Finish"
        ],

        "exterior": [
        "LED Headlights",
        "Alloy Wheels",
        "Sunroof",
        "Chrome Accents"
        ],

        "safety": [
        "ABS",
        "Traction Control",
        "Lane Keep Assist",
        "Blind Spot Assist",
        "Parking Sensors",
        "Rear Camera"
        ],

        "comfort": [
        "Keyless Entry",
        "Push Start Button",
        "Drive Modes",
        "Cruise Control",
        "Electric Seat Adjustment"
        ],

        "infotainment": [
        "10.25-inch Touchscreen",
        "Apple CarPlay",
        "Android Auto",
        "Premium Sound System",
        "Bluetooth",
        "Navigation System"
        ]
    },

    "description": "Rent and drive the BMW 5 Series in Dubai for AED 400 per day. This executive sedan offers a perfect balance of performance, comfort, and advanced technology. Includes basic insurance and 250 km/day mileage limit. Ideal for business trips or daily luxury travel with seating for up to 5 passengers."
    },
    {
    "id": 8,

    "brand": "BMW",

    "name": "BMW 4 Series Convertible",

    "category": "convertible",

    "image": BMW4C,

    "priceDay": 600,

    "priceWeek": 3800,

    "priceMonth": 12000,

    "mileageLimit": 250,

    "additionalMileage": 6,

    "minRental": 2,

    "location": "Dubai Marina, Dubai",

    "specs": {
        "speed": 250,
        "hp": 255,
        "seats": 4
    },

    "overview": {
        "bodyType": "Convertible",
        "make": "BMW",
        "model": "4 Series Convertible",
        "engineCapacity": "2.0L TwinPower Turbo",
        "doors": 2,
        "fuelType": "Petrol",
        "tollCharges": "AED 4",
        "gearbox": "Auto",
        "bagsCapacity": 2,
        "color": "Blue / Beige Interior"
    },

    "features": {
        "interior": [
        "Leather Seats",
        "Heated Seats",
        "Digital Driver Display",
        "Ambient Lighting",
        "Dual-zone Climate Control",
        "Premium Cabin Finish"
        ],

        "exterior": [
        "Soft Top Convertible Roof",
        "LED Headlights",
        "Alloy Wheels",
        "Sporty Body Design"
        ],

        "safety": [
        "ABS",
        "Traction Control",
        "Lane Keep Assist",
        "Blind Spot Assist",
        "Parking Sensors",
        "Rear Camera"
        ],

        "comfort": [
        "Keyless Entry",
        "Push Start Button",
        "Cruise Control",
        "Drive Modes",
        "Electric Seat Adjustment",
        "Convertible Roof Control"
        ],

        "infotainment": [
        "10.25-inch Touchscreen",
        "Apple CarPlay",
        "Android Auto",
        "Premium Sound System",
        "Bluetooth",
        "Navigation System"
        ]
    },

    "description": "Rent and drive the BMW 4 Series Convertible in Dubai for AED 600 per day. This stylish convertible offers an open-top driving experience combined with BMW performance and luxury. Includes basic insurance and 250 km/day mileage limit. A refundable security deposit is required. Perfect for leisure drives and city cruising with seating for up to 4 passengers."
    },
    {
    "id": 9,

    "brand": "BMW",

    "name": "BMW 3 Series",

    "category": "sedan",

    "image": BMW3,

    "priceDay": 300,

    "priceWeek": 1900,

    "priceMonth": 6500,

    "mileageLimit": 250,

    "additionalMileage": 5,

    "minRental": 2,

    "location": "Dubai Marina, Dubai",

    "specs": {
        "speed": 250,
        "hp": 181,
        "seats": 5
    },

    "overview": {
        "bodyType": "Sedan",
        "make": "BMW",
        "model": "3 Series",
        "engineCapacity": "2.0L TwinPower Turbo",
        "doors": 4,
        "fuelType": "Petrol",
        "tollCharges": "AED 4",
        "gearbox": "Auto",
        "bagsCapacity": 3,
        "color": "Grey / Black Interior"
    },

    "features": {
        "interior": [
        "Leather Seats",
        "Digital Driver Display",
        "Ambient Lighting",
        "Dual-zone Climate Control",
        "Premium Cabin Finish"
        ],

        "exterior": [
        "LED Headlights",
        "Alloy Wheels",
        "Sunroof",
        "Sporty Design"
        ],

        "safety": [
        "ABS",
        "Traction Control",
        "Lane Keep Assist",
        "Parking Sensors",
        "Rear Camera"
        ],

        "comfort": [
        "Keyless Entry",
        "Push Start Button",
        "Drive Modes",
        "Cruise Control",
        "Electric Seat Adjustment"
        ],

        "infotainment": [
        "10.25-inch Touchscreen",
        "Apple CarPlay",
        "Android Auto",
        "Bluetooth",
        "Navigation System"
        ]
    },

    "description": "Rent and drive the BMW 3 Series in Dubai for AED 300 per day. This sporty sedan offers a balance of performance, comfort, and efficiency, making it ideal for daily drives and business trips. Includes basic insurance and 250 km/day mileage limit. Suitable for up to 5 passengers."
    },
    {
    "id": 10,

    "brand": "BMW",

    "name": "BMW 2 Series",

    "category": "coupe",

    "image": BMW2,

    "priceDay": 250,

    "priceWeek": 1600,

    "priceMonth": 5200,

    "mileageLimit": 250,

    "additionalMileage": 5,

    "minRental": 2,

    "location": "Dubai Marina, Dubai",

    "specs": {
        "speed": 240,
        "hp": 181,
        "seats": 4
    },

    "overview": {
        "bodyType": "Coupe",
        "make": "BMW",
        "model": "2 Series",
        "engineCapacity": "2.0L TwinPower Turbo",
        "doors": 2,
        "fuelType": "Petrol",
        "tollCharges": "AED 4",
        "gearbox": "Auto",
        "bagsCapacity": 2,
        "color": "White / Black Interior"
    },

    "features": {
        "interior": [
        "Leather Seats",
        "Digital Driver Display",
        "Ambient Lighting",
        "Dual-zone Climate Control",
        "Premium Cabin Finish"
        ],

        "exterior": [
        "LED Headlights",
        "Alloy Wheels",
        "Sporty Coupe Design"
        ],

        "safety": [
        "ABS",
        "Traction Control",
        "Lane Assist",
        "Parking Sensors",
        "Rear Camera"
        ],

        "comfort": [
        "Keyless Entry",
        "Push Start Button",
        "Drive Modes",
        "Cruise Control",
        "Electric Seat Adjustment"
        ],

        "infotainment": [
        "8.8-inch Touchscreen",
        "Apple CarPlay",
        "Bluetooth",
        "Navigation System"
        ]
    },

    "description": "Rent and drive the BMW 2 Series in Dubai for AED 250 per day. This compact coupe delivers a sporty driving experience with modern features and premium comfort. Includes basic insurance and 250 km/day mileage limit. Ideal for up to 4 passengers looking for a stylish and fun ride."
    },

    {
        id: 100,

        brand: "Land Rover",

        name: "Land Rover Defender",

        category: "suv",

        image: LRD,

        priceDay: 900,

        priceWeek: 5800,

        priceMonth: 18000,

        mileageLimit: 250,

        additionalMileage: 5,

        minRental: 2,

        location: "Dubai Marina, Dubai",

        specs: {
            speed: 200,
            hp: 296,
            seats: 5,
        },

        overview: {
            bodyType: "SUV",
            make: "Land Rover",
            model: "Defender",
            engineCapacity: "2.0L Turbocharged",
            doors: 5,
            fuelType: "Petrol",
            tollCharges: "AED 4",
            gearbox: "Auto",
            bagsCapacity: 4,
            color: "Matte Grey / Black Interior",
        },

        features: {
            interior: [
                "Leather Seats",
                "Heated Seats",
                "Digital Driver Display",
                "Ambient Lighting",
                "Dual-zone Climate Control",
                "Premium Cabin Finish"
            ],

            exterior: [
                "All-Terrain Wheels",
                "LED Headlights",
                "Panoramic Roof",
                "Side Steps",
                "Roof Rails",
                "Spare Wheel Mounted on Tailgate"
            ],

            safety: [
                "ABS",
                "Traction Control",
                "Lane Keep Assist",
                "Blind Spot Assist",
                "360° Camera",
                "Parking Sensors"
            ],

            comfort: [
                "Adaptive Air Suspension",
                "Keyless Entry",
                "Push Start Button",
                "Terrain Response System",
                "Cruise Control",
                "Electric Seat Adjustment"
            ],

            infotainment: [
                "10-inch Touchscreen",
                "Apple CarPlay",
                "Android Auto",
                "Meridian Sound System",
                "Bluetooth",
                "Navigation System"
            ],
        },

        description: "Rent and drive the versatile Land Rover Defender in Dubai, UAE for AED 900 per day. Rental includes basic comprehensive insurance and a standard mileage limit of 250 km per day. A refundable security deposit of AED 3000 is required. Perfect for both city drives and off-road adventures, this SUV comfortably seats up to 5 passengers with advanced safety and terrain capabilities."
    },
    
    {
        id: 101,

        brand: "Mercedes-Benz",

        name: "Mercedes-Benz G63 AMG",

        category: "suv",

        image: amg,

        priceDay: 1900,

        priceWeek: 12000,

        priceMonth: 38000,

        mileageLimit: 250,

        additionalMileage: 5,

        minRental: 2,

        location: "Dubai Marina, Dubai",

        specs: {
            speed: 240,
            hp: 577,
            seats: 5,
        },

        overview: {
            bodyType: "SUV",
            make: "Mercedes-Benz",
            model: "G63 AMG",
            engineCapacity: "4.0L V8 Biturbo",
            doors: 5,
            fuelType: "Petrol",
            tollCharges: "AED 4",
            gearbox: "Auto",
            bagsCapacity: 4,
            color: "Black / Red Interior",
        },

        features: {
            interior: [
                "Nappa Leather Seats",
                "Ambient Lighting (64 Colors)",
                "Heated & Ventilated Seats",
                "Digital Instrument Cluster",
                "Leather Dashboard",
                "Panoramic Sunroof"
            ],

            exterior: [
                "AMG Styling Package",
                "22-inch Alloy Wheels",
                "LED Intelligent Light System",
                "Side Exhaust Pipes",
                "Electric Sunroof",
                "Spare Wheel Cover"
            ],

            safety: [
                "ABS",
                "Adaptive Cruise Control",
                "Blind Spot Assist",
                "Lane Keeping Assist",
                "360° Camera",
                "Parking Sensors"
            ],

            comfort: [
                "Adaptive Suspension",
                "Keyless Entry & Start",
                "Soft Close Doors",
                "Multi-zone Climate Control",
                "Memory Seats",
                "Wireless Charging"
            ],

            infotainment: [
                "12.3-inch Touchscreen",
                "Apple CarPlay",
                "Android Auto",
                "Burmester Sound System",
                "Bluetooth",
                "Navigation System"
            ],
        },

        description: "Rent and drive the powerful Mercedes-Benz G63 AMG in Dubai, UAE for AED 1900 per day. Rental includes basic comprehensive insurance and a standard mileage limit of 250 km per day. A refundable security deposit of AED 4000 is required. Ideal for luxury SUV lovers, this vehicle comfortably seats up to 5 passengers with premium features and advanced technology."
    },
    {
        id: 103,
        brand: "Land Rover",
        name: "Range Rover Autobiography",
        category: "suv",
        image: rangeRoverImg,
        priceDay: 1800,
        priceWeek: 11000,
        priceMonth: 34000,
        mileageLimit: 250,
        additionalMileage: 5,
        minRental: 1,
        location: "Jumeirah, Dubai",
        specs: {
            speed: 225,
            hp: 530,
            seats: 7,
        },
        overview: {
            bodyType: "SUV",
            make: "Land Rover",
            model: "Range Rover Autobiography",
            engineCapacity: "4.4L V8",
            doors: 4,
            fuelType: "Petrol",
            tollCharges: "AED 4",
            gearbox: "Auto",
            bagsCapacity: 5,
            color: "Santorini Black / Ebony",
        },
        features: {
            interior: ["SV Autobiography Interior", "Windsor Leather Seats", "Configurable Ambient Lighting", "Panoramic Sunroof", "Executive Class Rear Seats", "Refrigerator"],
            exterior: ["22-inch Gloss Black Wheels", "Sliding Panoramic Roof", "Full LED Lights", "Deployable Running Boards"],
            safety: ["Adaptive Cruise Control", "Emergency Braking", "Terrain Response 2", "Wade Sensing"],
            comfort: ["Rear Seat Entertainment", "Air Suspension", "Massage Seats", "4-zone Climate Control"],
            infotainment: ["Pivi Pro Infotainment", "Meridian Sound System", "Apple CarPlay", "Android Auto"],
        },
        description: "Rent the Range Rover Autobiography in Dubai for AED 1800 per day. Perfect for families and groups seeking luxury combined with off-road capability. Comprehensive insurance included with a standard mileage of 250 km per day. Security deposit AED 5000. Fits up to 7 passengers comfortably.",
    },
    {
        id: 104,
        brand: "Ferrari",
        name: "Ferrari F8 Tributo",
        category: "sport",
        image: ferrariImg,
        priceDay: 3200,
        priceWeek: 20000,
        priceMonth: 62000,
        mileageLimit: 200,
        additionalMileage: 6,
        minRental: 2,
        location: "Business Bay, Dubai",
        specs: {
            speed: 340,
            hp: 710,
            seats: 2,
        },
        overview: {
            bodyType: "Coupe",
            make: "Ferrari",
            model: "F8 Tributo",
            engineCapacity: "3.9L V8",
            doors: 2,
            fuelType: "Petrol",
            tollCharges: "AED 4",
            gearbox: "Auto",
            bagsCapacity: 2,
            color: "Rosso Corsa / Nero",
        },
        features: {
            interior: ["Rosso Ferrari Leather", "Carbon Fibre Racing Seats", "Manettino Dial", "Digital Instrument Cluster", "Alcantara Headliner", "LED Interior Lighting"],
            exterior: ["20-inch Diamond Alloys", "Aerodynamic Side Skirts", "Carbon Fibre Rear Diffuser", "Retractable Rear Spoiler"],
            safety: ["Ferrari Side Slip Control", "Electronic Stability Control", "Carbon Ceramic Brakes", "Reversing Camera"],
            comfort: ["Electric Seat Adjustment", "Dual-zone Climate Control", "Keyless Entry", "Electric Windows"],
            infotainment: ["Ferrari 7-inch Display", "Apple CarPlay", "JBL Sound System", "Wireless Charging"],
        },
        description: "Drive the Ferrari F8 Tributo in Dubai, the most powerful V8 Ferrari road car ever. Available for AED 3200 per day. Comprehensive insurance included with 200 km daily limit. Security deposit AED 8000. This is a pure driving machine that delivers an unforgettable experience on Dubai roads.",
    },
    {
        id: 105,
        brand: "Bentley",
        name: "Bentley Continental GT",
        category: "luxury",
        image: bentleyImg,
        priceDay: 2600,
        priceWeek: 16000,
        priceMonth: 50000,
        mileageLimit: 250,
        additionalMileage: 5,
        minRental: 1,
        location: "Palm Jumeirah, Dubai",
        specs: {
            speed: 333,
            hp: 650,
            seats: 4,
        },
        overview: {
            bodyType: "Grand Tourer",
            make: "Bentley",
            model: "Continental GT",
            engineCapacity: "6.0L W12",
            doors: 2,
            fuelType: "Petrol",
            tollCharges: "AED 4",
            gearbox: "Auto",
            bagsCapacity: 3,
            color: "Onyx / Beluga",
        },
        features: {
            interior: ["Hand-crafted Leather Interior", "Diamond-in-Diamond Quilting", "Rotating Display", "Heated Rear Seats", "Panoramic Sunroof", "Mood Lighting"],
            exterior: ["22-inch Mulliner Wheels", "Flying B Hood Ornament", "Matrix LED Headlights", "Chrome Side Vents"],
            safety: ["Night Vision", "Traffic Assist", "Front Cross Traffic Alert", "360-degree Camera"],
            comfort: ["All-wheel Steering", "Bentley Dynamic Ride", "Massage Seats", "Ventilated Front Seats"],
            infotainment: ["12.3-inch Rotating Touchscreen", "Naim Audio System", "Apple CarPlay", "Rear Seat Entertainment"],
        },
        description: "Rent the Bentley Continental GT in Dubai for AED 2600 per day. The Continental GT represents the pinnacle of grand touring motoring. Comprehensive insurance and 250 km daily mileage included. Security deposit AED 8000. Ideal for a memorable drive along Jumeirah Beach Road or Sheikh Zayed Road.",
    },
    {
        id: 106,
        brand: "Cadillac",
        name: "Cadillac Escalade",
        category: "suv",
        image: cadillacImg,
        priceDay: 1400,
        priceWeek: 8500,
        priceMonth: 26000,
        mileageLimit: 300,
        additionalMileage: 4,
        minRental: 1,
        location: "Deira, Dubai",
        specs: {
            speed: 210,
            hp: 420,
            seats: 8,
        },
        overview: {
            bodyType: "Full-size SUV",
            make: "Cadillac",
            model: "Escalade",
            engineCapacity: "6.2L V8",
            doors: 4,
            fuelType: "Petrol",
            tollCharges: "AED 4",
            gearbox: "Auto",
            bagsCapacity: 6,
            color: "Black Raven / Jet Black",
        },
        features: {
            interior: ["Semi-aniline Leather Seats", "36-inch Curved OLED Display", "Super Cruise Driver Assist", "Panoramic Sunroof", "Heated and Ventilated All Seats", "Rear Media System"],
            exterior: ["22-inch Chrome Wheels", "Power Running Boards", "LED Signature Lighting", "Power Liftgate"],
            safety: ["Super Cruise Hands-free", "Automatic Emergency Braking", "Rear Pedestrian Alert", "Surround Vision Camera"],
            comfort: ["Magnetic Ride Control", "4-zone Climate Control", "Power Fold Third Row", "Wireless Charging"],
            infotainment: ["AKG Premium Sound", "Wi-Fi Hotspot", "Apple CarPlay", "Android Auto"],
        },
        description: "Rent the Cadillac Escalade in Dubai for AED 1400 per day. America's premier full-size luxury SUV seats up to 8 passengers in supreme comfort. Comprehensive insurance included with 300 km daily limit. Security deposit AED 4000. Perfect for airport transfers, large families, and group travel across UAE.",
    },

    {
    id: 107,
    brand: "Chevrolet",
    name: "Chevrolet Tahoe",
    category: "suv",
    image: tahoeImg,
    priceDay: 500,
    priceWeek: 3000,
    priceMonth: 9000,
    mileageLimit: 300,
    additionalMileage: 3,
    minRental: 1,
    location: "Deira, Dubai",
    specs: {
        speed: 180,
        hp: 355,
        seats: 7,
    },
    overview: {
        bodyType: "Full-size SUV",
        make: "Chevrolet",
        model: "Tahoe",
        engineCapacity: "5.3L V8",
        doors: 4,
        fuelType: "Petrol",
        tollCharges: "AED 4",
        gearbox: "Auto",
        bagsCapacity: 5,
        color: "Black / White / Silver",
    },
    features: {
        interior: [
            "Leather Seats",
            "Digital Instrument Cluster",
            "Power Adjustable Seats",
            "Tri-zone Climate Control",
            "Spacious Third Row Seating"
        ],
        exterior: [
            "20-inch Alloy Wheels",
            "LED Headlights",
            "Roof Rails",
            "Power Liftgate"
        ],
        safety: [
            "Lane Keep Assist",
            "Forward Collision Alert",
            "Rear Parking Sensors",
            "Airbags System"
        ],
        comfort: [
            "Cruise Control",
            "Keyless Entry",
            "Push Start",
            "Rear AC Vents"
        ],
        infotainment: [
            "Touchscreen Display",
            "Apple CarPlay",
            "Android Auto",
            "Bluetooth Connectivity"
        ],
    },
    description: "Rent the Chevrolet Tahoe in Dubai for AED 500 per day. A spacious and powerful full-size SUV, perfect for families and group travel. Comes with comfortable seating for up to 7 passengers, advanced safety features, and smooth performance. Includes 300 km daily limit. Ideal for city drives and long road trips across the UAE.",
},

{
    id: 108,
    brand: "Chevrolet",
    name: "Chevrolet Malibu",
    category: "sedan",
    image: malibuImg,
    priceDay: 120,
    priceWeek: 700,
    priceMonth: 2200,
    mileageLimit: 300,
    additionalMileage: 2,
    minRental: 1,
    location: "Deira, Dubai",
    specs: {
        speed: 200,
        hp: 160,
        seats: 5,
    },
    overview: {
        bodyType: "Sedan",
        make: "Chevrolet",
        model: "Malibu",
        engineCapacity: "1.5L Turbo",
        doors: 4,
        fuelType: "Petrol",
        tollCharges: "AED 4",
        gearbox: "Auto",
        bagsCapacity: 3,
        color: "White / Black / Silver",
    },
    features: {
        interior: [
            "Premium Fabric Seats",
            "8-inch Touchscreen Display",
            "Power Driver Seat",
            "Dual-zone Climate Control"
        ],
        exterior: [
            "17-inch Alloy Wheels",
            "LED Daytime Running Lights",
            "Chrome Grille",
            "Power Side Mirrors"
        ],
        safety: [
            "Rear Vision Camera",
            "Lane Keep Assist",
            "Forward Collision Alert",
            "10 Airbags"
        ],
        comfort: [
            "Keyless Entry",
            "Push Button Start",
            "Cruise Control",
            "Rear AC Vents"
        ],
        infotainment: [
            "Apple CarPlay",
            "Android Auto",
            "Bluetooth Connectivity",
            "USB Ports"
        ],
    },
    description: "Rent the Chevrolet Malibu in Dubai for AED 120 per day. A stylish and fuel-efficient midsize sedan, perfect for daily commuting and comfortable city driving. Offers smooth handling, modern features, and seating for up to 5 passengers. Includes 300 km daily limit, making it ideal for both short trips and extended rentals across the UAE.",
},
{
    id: 109,
    brand: "GMC",
    name: "GMC Yukon Denali",
    category: "suv",
    image: yukonImg,
    priceDay: 500,
    priceWeek: 3000,
    priceMonth: 9500,
    mileageLimit: 300,
    additionalMileage: 4,
    minRental: 1,
    location: "Deira, Dubai",
    specs: {
        speed: 210,
        hp: 420,
        seats: 7,
    },
    overview: {
        bodyType: "Full-size Luxury SUV",
        make: "GMC",
        model: "Yukon Denali",
        engineCapacity: "6.2L V8",
        doors: 4,
        fuelType: "Petrol",
        tollCharges: "AED 4",
        gearbox: "Auto",
        bagsCapacity: 5,
        color: "Black / White / Metallic Grey",
    },
    features: {
        interior: [
            "Premium Leather Seats",
            "14-inch Infotainment Display",
            "Heads-Up Display",
            "Panoramic Sunroof",
            "Heated & Ventilated Seats",
            "Rear Entertainment Screens"
        ],
        exterior: [
            "22-inch Alloy Wheels",
            "Chrome Denali Grille",
            "LED Headlights & Tail Lamps",
            "Power Running Boards"
        ],
        safety: [
            "Adaptive Cruise Control",
            "Lane Keep Assist",
            "Automatic Emergency Braking",
            "360° Surround Camera"
        ],
        comfort: [
            "Magnetic Ride Control",
            "Tri-zone Climate Control",
            "Power Fold Third Row",
            "Wireless Charging"
        ],
        infotainment: [
            "Bose Premium Sound System",
            "Apple CarPlay",
            "Android Auto",
            "Wi-Fi Hotspot"
        ],
    },
    description: "Rent the GMC Yukon Denali in Dubai for AED 500 per day. A premium full-size SUV offering powerful performance and luxury comfort. Ideal for families and executive travel with seating for up to 7 passengers. Includes 300 km daily limit, perfect for both city and long-distance drives across the UAE.",
},

{
    id: 110,
    brand: "GMC",
    name: "GMC Acadia",
    category: "suv",
    image: acadiaImg,
    priceDay: 250,
    priceWeek: 1500,
    priceMonth: 4800,
    mileageLimit: 300,
    additionalMileage: 3,
    minRental: 1,
    location: "Deira, Dubai",
    specs: {
        speed: 195,
        hp: 310,
        seats: 7,
    },
    overview: {
        bodyType: "Mid-size SUV",
        make: "GMC",
        model: "Acadia",
        engineCapacity: "3.6L V6",
        doors: 4,
        fuelType: "Petrol",
        tollCharges: "AED 4",
        gearbox: "Auto",
        bagsCapacity: 4,
        color: "White / Black / Grey",
    },
    features: {
        interior: [
            "Leather Appointed Seats",
            "8-inch Touchscreen Display",
            "Power Adjustable Front Seats",
            "Tri-zone Climate Control",
            "Fold-flat Third Row"
        ],
        exterior: [
            "18-inch Alloy Wheels",
            "LED Headlights",
            "Roof Rails",
            "Power Liftgate"
        ],
        safety: [
            "Rear Vision Camera",
            "Lane Change Alert",
            "Forward Collision Alert",
            "Rear Cross Traffic Alert"
        ],
        comfort: [
            "Keyless Entry",
            "Push Button Start",
            "Cruise Control",
            "Rear AC Vents"
        ],
        infotainment: [
            "Apple CarPlay",
            "Android Auto",
            "Bluetooth Connectivity",
            "USB Charging Ports"
        ],
    },
    description: "Rent the GMC Acadia in Dubai for AED 250 per day. A versatile mid-size SUV offering a balance of performance, comfort, and space for up to 7 passengers. Ideal for family trips and everyday driving with modern features and smooth handling. Includes 300 km daily limit, perfect for both city and highway travel across the UAE.",
},

{
    id: 111,
    brand: "Honda",
    name: "Honda Accord",
    category: "sedan",
    image: accordImg,
    priceDay: 140,
    priceWeek: 850,
    priceMonth: 2600,
    mileageLimit: 300,
    additionalMileage: 2,
    minRental: 1,
    location: "Deira, Dubai",
    specs: {
        speed: 200,
        hp: 192,
        seats: 5,
    },
    overview: {
        bodyType: "Sedan",
        make: "Honda",
        model: "Accord",
        engineCapacity: "1.5L Turbo",
        doors: 4,
        fuelType: "Petrol",
        tollCharges: "AED 4",
        gearbox: "Auto",
        bagsCapacity: 3,
        color: "White / Black / Silver",
    },
    features: {
        interior: [
            "Leather Seats",
            "10.2-inch Digital Display",
            "Power Driver Seat",
            "Dual-zone Climate Control"
        ],
        exterior: [
            "18-inch Alloy Wheels",
            "LED Headlights",
            "Chrome Accents",
            "Power Mirrors"
        ],
        safety: [
            "Lane Keep Assist",
            "Adaptive Cruise Control",
            "Collision Mitigation Braking",
            "Rear Camera"
        ],
        comfort: [
            "Keyless Entry",
            "Push Start",
            "Cruise Control",
            "Rear AC Vents"
        ],
        infotainment: [
            "Apple CarPlay",
            "Android Auto",
            "Bluetooth",
            "USB Ports"
        ],
    },
    description: "Rent the Honda Accord in Dubai for AED 140 per day. A premium sedan offering a smooth ride, modern technology, and spacious comfort for up to 5 passengers. Ideal for business trips and daily commuting. Includes 300 km daily limit for flexible travel across the UAE.",
},
{
    id: 112,
    brand: "Honda",
    name: "Honda Civic",
    category: "sedan",
    image: civicImg,
    priceDay: 130,
    priceWeek: 780,
    priceMonth: 2400,
    mileageLimit: 300,
    additionalMileage: 2,
    minRental: 1,
    location: "Deira, Dubai",
    specs: {
        speed: 190,
        hp: 158,
        seats: 5,
    },
    overview: {
        bodyType: "Compact Sedan",
        make: "Honda",
        model: "Civic",
        engineCapacity: "2.0L",
        doors: 4,
        fuelType: "Petrol",
        tollCharges: "AED 4",
        gearbox: "Auto",
        bagsCapacity: 2,
        color: "White / Black / Grey",
    },
    features: {
        interior: [
            "Fabric Seats",
            "7-inch Display",
            "Manual Adjustable Seats",
            "Automatic Climate Control"
        ],
        exterior: [
            "16-inch Alloy Wheels",
            "LED Daytime Running Lights",
            "Sporty Design",
            "Power Mirrors"
        ],
        safety: [
            "Rear Camera",
            "Lane Assist",
            "ABS & Airbags",
            "Stability Control"
        ],
        comfort: [
            "Keyless Entry",
            "Push Start",
            "Cruise Control",
            "Rear AC Vents"
        ],
        infotainment: [
            "Apple CarPlay",
            "Android Auto",
            "Bluetooth",
            "USB Ports"
        ],
    },
    description: "Rent the Honda Civic in Dubai for AED 130 per day. A reliable and fuel-efficient compact sedan perfect for city driving and daily use. Offers comfortable seating for 5 passengers and modern features. Includes 300 km daily limit.",
},
{
    id: 113,
    brand: "Honda",
    name: "Honda Odyssey",
    category: "van",
    image: odysseyImg,
    priceDay: 250,
    priceWeek: 1500,
    priceMonth: 4800,
    mileageLimit: 300,
    additionalMileage: 3,
    minRental: 1,
    location: "Deira, Dubai",
    specs: {
        speed: 180,
        hp: 280,
        seats: 8,
    },
    overview: {
        bodyType: "Minivan",
        make: "Honda",
        model: "Odyssey",
        engineCapacity: "3.5L V6",
        doors: 4,
        fuelType: "Petrol",
        tollCharges: "AED 4",
        gearbox: "Auto",
        bagsCapacity: 5,
        color: "White / Black / Silver",
    },
    features: {
        interior: [
            "Premium Leather Seats",
            "Rear Entertainment System",
            "Power Sliding Doors",
            "Tri-zone Climate Control",
            "Flexible Seating Arrangement"
        ],
        exterior: [
            "18-inch Alloy Wheels",
            "LED Headlights",
            "Power Tailgate",
            "Sliding Doors"
        ],
        safety: [
            "Lane Keep Assist",
            "Adaptive Cruise Control",
            "Collision Mitigation",
            "Rear Camera"
        ],
        comfort: [
            "Keyless Entry",
            "Push Start",
            "Cruise Control",
            "Rear AC Vents"
        ],
        infotainment: [
            "Apple CarPlay",
            "Android Auto",
            "Bluetooth",
            "Premium Audio System"
        ],
    },
    description: "Rent the Honda Odyssey in Dubai for AED 250 per day. A spacious and family-friendly minivan with seating for up to 8 passengers. Perfect for group travel, airport transfers, and long trips. Includes 300 km daily limit for comfortable travel across the UAE.",
},


]

export const faqItems = [
    {
        question: "What documents are required to rent a car in Dubai?",
        answer: "You will need a valid driving licence (UAE licence or international driving permit), a valid passport, Emirates ID for residents, and a credit or debit card for the security deposit. Tourists may drive with their home country licence for visits up to 6 months.",
    },
    {
        question: "What is the minimum age requirement to rent a car?",
        answer: "The minimum age to rent a car in Dubai is 21 years old. For luxury and sports vehicles, the minimum age is 25 years. A young driver surcharge may apply for drivers under 25.",
    },
    {
        question: "Is insurance included in the car rental price?",
        answer: "Yes, basic comprehensive insurance is included in all our rental prices. This covers third-party liability and accidental damage. Additional coverage options such as collision damage waiver and personal accident insurance are available.",
    },
    {
        question: "Is there a mileage limit on rentals?",
        answer: "Each vehicle has a daily mileage limit as specified in the listing. Additional kilometres beyond the limit are charged at the rate shown. For monthly rentals, separate monthly mileage allowances apply.",
    },
    {
        question: "Can I rent a car for a one-way trip or drive to Abu Dhabi?",
        answer: "Yes, inter-emirate driving within the UAE is permitted on all our vehicles at no extra charge. One-way rentals between emirates are available, subject to a drop-off fee. International travel outside the UAE is not permitted.",
    },
]
