import React from "react";
import ContentHeroImage from "../../assets/Images/ContentHeroImage.svg";

const Attraction = () => {
    return (
        <div className="px-[7vw] pt-[100px] bg-[#F7FDFF]">
            <div>
                <h1 className="sm:text-[36px] text-[20px] font-medium italic">
                    Your <span className="text-[#8064A2]">Hobby</span>, Your{" "}
                    <span className="text-[#0096C8]">Community...</span>
                </h1>
                <button className="text-[18px] font-semibold text-white bg-[#8064A2] rounded-lg px-8 py-4 mt-8">
                    Get started
                </button>
            </div>
            <img
                src={ContentHeroImage}
                alt="Content Hero"
                className="mt-[100px] w-full h-auto"
            />
        </div>
    );
};

export default Attraction;
