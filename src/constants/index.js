import { fbIcon, instaIcon, checkMark, helpSupport, fastDelivery, twitIcon } from "../assets/icons";
import { mainShoe1, mainShoe2, mainShoe3, thumbnail1, thumbnail2, thumbnail3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, menuicon } from "../assets/images";

export const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoesGallery = [
    {
        thumbnail: thumbnail1,
        largeImage: mainShoe1,
    },
    {
        thumbnail: thumbnail2,
        largeImage: mainShoe2,
    },
    {
        thumbnail: thumbnail3,
        largeImage: mainShoe3,
    },
];

export const analytics = [
    { value: '2k+', label: 'Brands' },
    { value: '1k+', label: 'Stores' },
    { value: '350k+', label: 'Customers' },
];

export const productArray = [
    {
        imgURL: shoe4,
        name: "Sporty Trek-01",
        price: "$200.20",
    },
    {
        imgURL: shoe5,
        name: "Sporty Trek-10",
        price: "$210.20",
    },
    {
        imgURL: shoe6,
        name: "Sporty Trek-100",
        price: "$220.20",
    },
    {
        imgURL: shoe7,
        name: "Sporty Trek-001",
        price: "$230.20",
    },
];

export const serviceList = [
    {
        imgURL: fastDelivery,
        label: "Free Delivery",
        subtext: "Enjoy seamless shopping with our free delivery service."
    },
    {
        imgURL: checkMark,
        label: "Secure Checkout",
        subtext: "Your payment is safe with our secure transaction methods."
    },
    {
        imgURL: helpSupport,
        label: "24/7 Support",
        subtext: "Our support team is ready to assist you anytime."
    },
];

export const customerReviews = [
    {
        imgURL: customer1,
        customerName: 'John Bold',
        rating: 4.5,
        feedback: "Outstanding quality, far beyond expectations. Highly recommend!"
    },
    {
        imgURL: customer2,
        customerName: 'Alice Wonderland',
        rating: 4.7,
        feedback: "Exceeded my expectations in every aspect, great product!"
    }
];

export const footerLinks = [
    {
        title: "Catalog",
        links: [
            { name: "Classic", link: "/" },
            { name: "Retro", link: "/" },
            { name: "Running", link: "/" },
            { name: "Training", link: "/" },
            { name: "Lifestyle", link: "/" },
            { name: "Sneakers", link: "/" },
        ],
    },
    {
        title: "Support",
        links: [
            { name: "Company Info", link: "/" },
            { name: "Help Center", link: "/" },
            { name: "How We Work", link: "/" },
            { name: "Privacy Policy", link: "/" },
            { name: "Payment Terms", link: "/" },
        ],
    },
    {
        title: "Contact Us",
        links: [
            { name: "support@puma.com", link: "mailto:support@puma.com" },
            { name: "+1234567890", link: "tel:+1234567890" },
        ],
    },
];

export const socialMediaLinks = [
    { src: fbIcon, alt: "Facebook" },
    { src: twitIcon, alt: "Twitter" },
    { src: instaIcon, alt: "Instagram" },
];
