import React from "react";
import FacebookIcon from "../../assets/Icons/IconFacebook.svg";
import TwitterIcon from "../../assets/Icons/IconTwitter.svg";
import InstagramIcon from "../../assets/Icons/IconInstagram.svg";
import PinterestIcon from "../../assets/Icons/IconPinterest.svg";
import GoogleIcon from "../../assets/Icons/IconGoogle.svg";
import YoutubeIcon from "../../assets/Icons/IconYoutube.svg";
import TelegramIcon from "../../assets/Icons/IconTelegram.svg";
import EmailIcon from "../../assets/Icons/IconEmail.svg";

const Footer = () => {
    const socialMediaIcons = [
        { src: FacebookIcon, alt: "Facebook" },
        { src: TwitterIcon, alt: "Twitter" },
        { src: InstagramIcon, alt: "Instagram" },
        { src: PinterestIcon, alt: "Pinterest" },
        { src: GoogleIcon, alt: "Google" },
        { src: YoutubeIcon, alt: "Youtube" },
        { src: TelegramIcon, alt: "Telegram" },
        { src: EmailIcon, alt: "Email" },
    ];

    const footerLinks = [
        {
            title: "Hobbycue",
            links: [
                "About Us",
                "Our Services",
                "Work with Us",
                "FAQ",
                "Contact Us",
            ],
        },
        {
            title: "How Do I",
            links: [
                "Sign Up",
                "Add a Listing",
                "Claim Listing",
                "Post a Query",
                "Add a Blog Post",
                "Other Queries",
            ],
        },
        {
            title: "Quick Links",
            links: [
                "Listings",
                "Blog Posts",
                "Claim Listing",
                "Shop / Store",
                "Community",
            ],
        },
    ];

    return (
        <footer>
            <div className="px-[7vw] py-16 flex flex-wrap gap-8 justify-between">
                {footerLinks.map((section, idx) => (
                    <div key={idx} className="text-sm tracking-wide">
                        <h3 className="font-bold">{section.title}</h3>
                        <ul className="mt-4 space-y-2">
                            {section.links.map((link, index) => (
                                <li key={index}>{link}</li>
                            ))}
                        </ul>
                    </div>
                ))}

                <div>
                    <h3 className="text-sm font-bold">Social Media</h3>
                    <div className="flex flex-wrap gap-6 mt-4">
                        {socialMediaIcons.map((icon, index) => (
                            <img
                                key={index}
                                src={icon.src}
                                alt={icon.alt}
                                className="w-6 h-6"
                            />
                        ))}
                    </div>
                    <div className="mt-12">
                        <h3 className="text-sm font-bold mb-4">
                            Invite Friends
                        </h3>
                        <div className="flex text-xs">
                            <input
                                type="email"
                                placeholder="Email ID"
                                className="text-gray-500 rounded-l-lg px-4 py-3 border-2 border-[#8064A2] w-[80%]"
                            />
                            <button className="bg-[#8064A2] text-white font-semibold w-[20%] py-3 border-2 border-[#8064A2] rounded-r-lg">
                                Invite
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center text-gray-900 bg-gray-100 py-6 text-sm font-semibold">
                &copy; Purple Cues Private Limited
            </div>
        </footer>
    );
};

export default Footer;
