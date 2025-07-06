import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";

import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import "swiper/css";

import "./styles.css";

import AOS from "aos";
import "aos/dist/aos.css";
import membersData from "./members.json";
import { useEffect } from "react";

export function Members() {
  useEffect(() => {
    AOS.init({
      once: true, // se deve animar só uma vez
    });
  }, []);
  return (
    <>
      
        <Swiper
          effect={"cards"}
          grabCursor={true}
          slidesPerView={"auto"}
          spaceBetween={20}
          pagination={{ clickable: true }}
          modules={[EffectCards]}
          className="MemberSwiper max-w-6xl mx-auto mt-5"
        >
          {membersData.map((member) => (
            <SwiperSlide
              key={member.id}
              className="max-w-xs max-h-xs min-w-xs p-4 
  bg-[var(--color-bg-self)] 
  hover:bg-[var(--color-bg-self)] 
  rounded-xl
  border-3 border-[var(--color-primary-self)]
   shadow-[0_0_5px_var(--color-primary-self)]
    hover:shadow-[0_0_10px_var(--color-primary-self)]
    m-2
  "
            >
              <img
                className="mt-2 h-32 border-[var(--color-border-self)] border-4 object-cover aspect-square rounded-full mx-auto mb-2"
                src={member.image}
                alt={`${member.name} image`}
              />
              <h3
                className="font-bold text-lg text-center"
                dangerouslySetInnerHTML={{ __html: member.name }}
              />

              <p
                className=""
                dangerouslySetInnerHTML={{ __html: member.description }}
              />

              <ul className="mt-2 gap-2 flex items-center justify-center">
                {member.github && (
                  <li>
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub size={32}/>
                    </a>
                  </li>
                )}

                {member.linkedin && (
                  <li>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin size={32} />
                    </a>
                  </li>
                )}
                {member.discord && (
                  <li>
                    <a
                      href={member.discord}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaDiscord size={32}  />
                    </a>
                  </li>
                )}
              </ul>
            </SwiperSlide>
          ))}
        </Swiper>
        
    </>
  );
}
