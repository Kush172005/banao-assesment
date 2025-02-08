import React from "react";
import HeroBannerImage from "../../assets/Images/HeroBannerImage.svg";
import Form from "../Forms/Form";

const Main = () => {
    return (
        <section className="px-[7vw] pt-[135px] bg-[#F7F5F9]">
            <div className="flex flex-col lg:flex-row xl:gap-28 lg:gap-20 gap-10">
                <div className="flex flex-col">
                    <div className="space-y-6">
                        <h1 className="font-semibold italic sm:text-[40px] text-[22px] tracking-wide">
                            Explore your{" "}
                            <span className="text-[#0096C8]">hobby</span> or{" "}
                            <span className="text-[#8064A2]">passion</span>
                        </h1>
                        <p className="flex text-[#000] flex-col text-[16px] font-light leading-[30px] tracking-wide space-y-4">
                            <span>
                                Sign-in to interact with a community of fellow
                                hobbyists and an eco-system of experts,
                                teachers, suppliers, classes, workshops, and
                                places to practice, participate or perform. Your
                                hobby may be about visual or performing arts,
                                sports, games, gardening, model making, cooking,
                                indoor or outdoor activities…
                            </span>

                            <span>
                                If you are an expert or a seller, you can add
                                your listing and promote yourself, your
                                students, products, services, or events. Hop on
                                your hobbyhorse and enjoy the ride.
                            </span>
                        </p>
                    </div>

                    <img
                        src={HeroBannerImage}
                        alt="Hero Banner"
                        className="mt-[70px] hidden xl:block w-full max-w-[700px]"
                    />
                </div>

                <Form />
            </div>

            <img
                src={HeroBannerImage}
                alt="Hero Banner"
                className="mt-10 mx-auto xl:hidden block w-[80%] max-w-[500px]"
            />
        </section>
    );
};

export default Main;
