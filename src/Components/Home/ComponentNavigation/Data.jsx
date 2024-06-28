
let ACserviceData = [
    {
        id: 1,
        name: "Power Saver AC Service",
        price: 600,
        rating: 4.82,
        img: "../Assets/servicing1.jpg",
        details: [{
            data1: "Advanceded Foem-jet technology",
            data2: "Deep jet cleaning of outdoor unit"

        }]
    },
    {
        id: 2,
        name: "Anti-rust deep clean AC sercive",
        price: 990,
        rating: 4.86,
        img: "../Assets/scroll2.jpg",
        details: [{
            data1: "Prevents Frequent gas leakages through a unique anti-rust spray",
            data2: "Applicable on both window and split ACs"

        }]
    },
    {
        id: 3,
        name: "AC service lite",
        price: 440,
        rating: 4.84,
        img: "../Assets/scroll3.jpg",
        details: [{
            data1: "Basic cleaning with water jet technology",
            data2: ""
        }]
    },
    {
        id: 4,
        name: "AC repair (split/window)",
        price: 299,
        rating: 4.80,
        img: "../Assets/gasrefill1.jpg",
        details: [{
            data1: "Detailed issue diagnosis with same day resolution",
            data2: "visit charges of 299/- will be adjusted in the final bill"

        }]
    },
    {
        id: 5,
        name: "Gas leak fix & refill",
        price: 1999,
        rating: 4.89,
        img: "../Assets/gasrefill2.jpg",
        details: [{
            data1: " Through diagnosis leak identification & fixing gas refill to avoid leakages",
            data2: ""
        }]
    },
       
    {
        id: 6,
        name: "AC install",
        price: 1299,
        rating: 4.77,
        img: "../Assets/installsc1.jpg",
        details: [{
            data1: "Installation of indoor & outdoor units with free gas check",
            data2: "Procurement of spare parts"
        }]
    },
    {
        id: 7,
        name: "AC uninstall",
        price: 999,
        rating: 4.99,
        img: "../Assets/installsc2.jpg",
        details: [{
            data1: "Unistallation of indoor & outdoor units",
            data2: ""
        }]
    }

]

let ROData = [
    {
        id: 1,
        name: "Native M1 with Copper",
        price: 14499,
        installation: "yes",
    },
    {
        id: 2,
        name: "Native M1",
        price: 13499,
        installation: "yes",
    },
]

let BathroomData = [
    {
        id: 1,
        name: "Classic Cleaning -2 bathroom pack",
        price: 719,
        offer: "yes",
        img: "../Assets/brs2.webp"
    },
    {
        id: 2,
        name: "Cleaning -2 bathroom pack",
        price: 898,
        offer: "yes",
        img: "../Assets/brs2.webp"
    },
    {
        id: 3,
        name: "Cleaning -3 bathroom pack",
        price: 898,
        offer: "yes",
        img: "../Assets/brs2.webp"
    },
    {
        id: 4,
        name: "Classic Bathroom Cleaning",
        price: 399,
        offer: "yes",
        img: "../Assets/brs2.webp"
    },
    {
        id: 5,
        name: "Move-In bathroom cleaningg",
        price: 399,
        offer: "yes",
        img: "../Assets/brs2.webp"
    },
    {
        id: 6,
        name: "Intense bathroom cleaning",
        price: 499,
        offer: "yes",
        img: "../Assets/brs2.webp"
    },
    {
        id: 7,
        name: "Move-in kitchen cleaning",
        price: 1059,
        offer: "yes",
        img: "../Assets/brsk1.webp"
    },
    {
        id: 8,
        name: "Complete kitchen cleaning",
        price: 1799,
        offer: "yes",
        img: "../Assets/brsk1.webp"
    },
    {
        id: 9,
        name: "Chimney cleaning",
        price: 599,
        offer: "yes",
        img: "../Assets/brsk1.webp"
    },
    {
        id: 10,
        name: "Fridge deep cleaning",
        price: 349,
        offer: "yes",
        img: "../Assets/brsk1.webp"
    },
    {
        id: 11,
        name: "Ceiling fan cleaning",
        price: 49,
        offer: "yes",
        img: "../Assets/brsm1.webp"
    },
    {
        id: 12,
        name: "Bathroom exhaust fan cleaning",
        price: 69,
        offer: "yes",
        img: "../Assets/brsm2.webp"
    },
    {
        id: 13,
        name: "Kitchen sink cleaning",
        price: 349,
        offer: "yes",
        img: "../Assets/brsm3.webp"
    },
    {
        id: 14,
        name: "Utensil removal & placing back",
        price: 349,
        offer: "yes",
        img: "../Assets/brsm4.webp"
    },
    {
        id: 15,
        name: "Gas stove cleaning",
        price: 349,
        offer: "yes",
        img: "../Assets/brsm5.webp"
    },
    {
        id: 16,
        name: "Trolley & shelves cleaning",
        price: 349,
        offer: "yes",
        img: "../Assets/brsm6.webp"
    },
    {
        id: 17,
        name: "Balcony cleaning",
        price: 349,
        offer: "yes",
        img: "../Assets/brsm7.webp"
    },

]

let wallData = [
    {
        id: 1,
        name: "wall decor",
        price: 49,
        offer: "yes",
    }
]

let salonData = [
    {
        id: 1,
        name: "Full chocolate | Full chocolate waxing",
        price: 1140,
        package: "yes",
        img: "../Assets/wedding1.jpg"
    },
    {
        id: 2,
        name: "Complete honey waxing",
        price: 349,
        package: "yes",
        img: "../Assets/wedding1.jpg"
    },
    {
        id: 3,
        name: "Wax & Glow",
        price: 1199,
        package: "yes",
        img: "../Assets/wedding1.jpg"
    },
    {
        id: 4,
        name: "Medicure & Pedicure",
        price: 1599,
        package: "yes",
        img: "../Assets/wedding1.jpg"
    },
    {
        id: 5,
        name: "Full arms + Full legs + underarms waxing",
        price: 1199,
        package: "yes",
        img: "../Assets/wedding2.jpg"
    },
    {
        id: 6,
        name: "Full arms & underarms waxing",
        price: 409,
        package: "yes",
        img: "../Assets/waxing1.jpg"
    },
    {
        id: 7,
        name: "Full legs waxing",
        price: 499,
        package: "yes",
        img: "../Assets/waxing2.jpg"
    },
    {
        id: 8,
        name: "Cut, file & polish",
        price: 249,
        package: "yes",
        img: "../Assets/pedicure1.jpg"
    },
    {
        id: 9,
        name: "Crystal rose pedicure ",
        price: 799,
        package: "yes",
        img: "../Assets/pedicure2.jpg"
    },
    {
        id: 10,
        name: "Elysian British Rose Manicure",
        price: 799,
        package: "yes",
        img: "../Assets/maincure1.jpg"
    },
    {
        id: 11,
        name: "Aroma magic instant glow facial",
        price: 999,
        package: "yes",
        img: "../Assets/wedding4.jpg"
    },
    {
        id: 12,
        name: "Glovate lightening facial",
        price: 1199,
        package: "yes",
        img: "../Assets/wedding4.jpg"
    },
    {
        id: 13,
        name: "Kumkumadi ubtan glow facial",
        price: 1299,
        package: "yes",
        img: "../Assets/wedding5.jpg"
    },
    {
        id: 14,
        name: "Ashwagantha tan removal facial",
        price: 1299,
        package: "yes",
        img: "../Assets/wedding5.jpg"
    },
    {
        id: 15,
        name: "Sara furit cleanup",
        price: 799,
        package: "yes",
        img: "../Assets/wedding6.jpg"
    },
    {
        id: 16,
        name: "Elysian pinacolada fruit cleanupl",
        price: 859,
        package: "yes",
        img: "../Assets/wedding6.jpg"
    },
]

let massageData = [
    {
        id: 1,
        name: "Stress relief therapy",
        price: 1299,
        img: "../Assets/mass1.webp"
    },
    {
        id: 2,
        name: "Pain Relief Tissue Therapy",
        price: 1399,
        img: "../Assets/mass2.webp"
    },
    {
        id: 3,
        name: "Back Pain Relief",
        price: 849,
        img: "../Assets/massc4.webp"
    },
    {
        id: 4,
        name: "Leg Pain Relief Therapy",
        price: 849,
        img: "../Assets/massc5.webp"
    },
    {
        id: 5,
        name: "Leg Pain Relief Therapy",
        price: 849,
        img: "../Assets/massc5.webp"
    },
    {
        id: 6,
        name: "Top to Toe Therapy",
        price: 1949,
        img: "../Assets/massc7.webp"
    },
    {
        id: 7,
        name: "Stress relief swedish therapy",
        price: 1299,
        img: "../Assets/massc7.webp"
    },
    {
        id: 8,
        name: "Leg Pain Relief Therapy",
        price: 899,
        img: "../Assets/massc9.webp"
    },
    {
        id: 9,
        name: "Sports Recovery Massage",
        price: 1349,
        img: "../Assets/massc10.webp"
    },
    {
        id: 10,
        name: "Head massage top-up",
        price: 349,
        img: "../Assets/massc10.webp"
    }
]

let lockData = [
    {
        id: 1,
        name: "Native L1 Professional",
        price: 13499,
        installation: "yes",
    },
    {
        id: 2,
        name: "Native A1-Fingerprint ",
        price: 4999,
        installation: "yes",
    }
]

export default { ACserviceData, ROData, BathroomData, wallData, salonData, massageData ,lockData }