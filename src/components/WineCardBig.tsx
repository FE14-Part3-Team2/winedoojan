import React from 'react';
import { FaStar } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface Props {
  wine: {
    id: number;
    name: string;
    region: string;
    image: string;
    price: number;
    type: 'RED' | 'WHITE' | 'SPARKLING';
    avgRating: number;
    reviewCount: number;
    recentReview: {
      user: {
        id: number;
        nickname: string;
        image: string;
      };
      updatedAt: string;
      createdAt: string;
      content: string;
      aroma: string[];
      rating: number;
      id: number;
    };
    userId: number;
  };
}

const WineCardBig = ({ wine }: Props) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="flex flex-col rounded-2xl border-[1px] border-[#CFDBEA] lg:w-[800px] md:w-[600px] w-[300px] lg:mt-[42px] lg:pb-[19px] pt-[36.5px] md:mt-[36px] md:pb-[10px] pb-[15px] mt-[30px] shadow-lg"
    >
      <div className="flex flex-row">
        <Link href={`wines/${wine.id}`}>
          <motion.img
            src={wine.image}
            alt="wineImage"
            className="lg:w-[60px] lg:h-[208px] md:w-[74px] md:h-[208px] w-[60px] h-[212px] lg:ml-[60px] md:ml-[20px] ml-[10px] cursor-pointer"
            whileHover={{ scale: 1.2, y: -20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          />
        </Link>

        <div className="flex lg:flex-row md:flex-row flex-col lg:ml-[81px] md:ml-[37px] lg:mr-[60px] md:mr-[20px] ml-[15px] mr-[15px] w-full">
          <div className="flex flex-col lg:w-[300px] md:w-[250px] w-[180px]">
            <Link href={`wines/${wine.id}`}>
              <span className="lg:text-[32px] md:text-[24px] text-[16px] text-[#2D3034] font-semibold cursor-pointer break-keep">
                {wine.name}
              </span>
            </Link>
            <span className="lg:text-[16px] md:text-[16px] text-[12px] text-[#9FACBD] lg:mt-[20px] md:mt-[20px] font-normal">
              {wine.region}
            </span>
            <div className="flex flex-row items-center justify-center lg:w-[124px] lg:h-[42px] md:w-[124px] md:h-[42px] w-[85px] h-[24px] lg:mt-[16px] md:mt-[14px] mt-[10px] rounded-xl bg-[#FFE1E1] lg:mb-[10px] md:mb-[15px]">
              <span className="lg:text-[18px] md:text-[18px] text-[12px] text-[#800020] font-bold">
                ₩ {Number(wine.price).toLocaleString()}
              </span>
            </div>
          </div>

          <div className="flex lg:flex-col md:flex-col flex-row lg:ml-auto md:ml-auto lg:mt-0 md:mt-0 mt-[20px]">
            <span className="lg:text-[34px] md:text-[28px] text-[22px] lg:text-[#2D3034] font-extrabold">
              {wine.avgRating.toFixed(1)}
            </span>
            <div className="lg:ml-0 md:ml-0 ml-[20px] mr-auto">
              <div className="flex gap-[2px] lg:mt-[8px] md:mt-[3px] ">
                {Array.from({ length: 5 }).map((_, index) => (
                  <FaStar
                    key={index}
                    className="lg:w-[20px] lg:h-[20px] md:w-[15px] md:h-[15px] w-[10px] h-[10px]"
                    color={
                      index < Math.floor(wine.avgRating) % 10
                        ? '#FFD700'
                        : '#E0E0E0'
                    }
                  />
                ))}
              </div>
              <span className="lg:text-[16px] md:text-[16px] text-[12px] text-[#9FACBD] lg:mt-[20px] md:mt-[20px] font-normal">
                {wine.reviewCount}개의 후기
              </span>
            </div>
            <Link href={`wines/${wine.id}`}>
              <FaArrowRight
                className="lg:w-[23px] lg:h-[23px] md:w-[23px] md:h-[23px] w-[20px] h-[20px] ml-auto lg:mt-[25.6px] md:mt-[25.6px] cursor-pointer"
                color="#CFDBEA"
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-[1px] border-[#CFDBEA]"></div>

      <span className="lg:text-[16px] lg:mx-[60px] md:mx-[30px] mx-[10px] mt-[10px] md:mt-[19px] lg:mt-[19.5px] md:text-[16px] text-[14px] text-[#2D3034] font-semibold">
        최신후기
      </span>
      <span className="lg:mx-[60px] md:mx-[30px] mx-[10px] lg:mt-[3px] md:mt-[10px] lg:text-[16px] md:text-[16px] text-[14px] text-[#9FACBD] font-normal overflow-hidden text-ellipsis">
        {wine.recentReview?.content}
      </span>
    </motion.div>
  );
};

export default WineCardBig;
