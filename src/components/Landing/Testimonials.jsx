import React from "react";
import Quote from "../../assets/Icons/Quote.svg";
import Track from "../../assets/Icons/Track.svg";
import Profile from "../../assets/Icons/Profile.svg";

const Testimonials = () => {
    return (
        <div className="container mx-auto py-24 px-10">
            <div className="shadow-lg bg-gray-100 rounded-xl p-12">
                <div className="flex items-center gap-4">
                    <img src={Quote} alt="Quote Icon" className="w-8 h-8" />
                    <h2 className="text-xl font-bold text-gray-700">
                        Testimonials
                    </h2>
                </div>

                <p className="text-gray-600 mt-6 text-lg leading-relaxed">
                    In a fast-growing and ever-changing city like Bangalore, it
                    sometimes becomes very difficult to find or connect with
                    like-minded people. Websites like hobbycue.com provide an
                    excellent platform to communicate, connect, and exchange
                    ideas. They also offer a curated selection of products and
                    services recommended by the community. The ability to have
                    discussions, gain visibility, and safely explore various
                    hobbies under one roof is invaluable. I highly recommend it.
                </p>

                <div className="flex flex-wrap justify-between items-center mt-10 gap-6">
                    <img
                        src={Track}
                        alt="Track"
                        className="sm:order-1 order-2"
                    />
                    <div className="flex items-center gap-4 sm:order-2 order-1">
                        <img
                            src={Profile}
                            alt="Profile"
                            className="w-16 h-16 rounded-full"
                        />
                        <div>
                            <h3 className="text-lg font-semibold text-purple-700">
                                Shubha Nagarajan
                            </h3>
                            <p className="text-sm text-blue-500 mt-1">
                                Classical Dancer
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
