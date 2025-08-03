import { useEffect } from "react";
import AOS from "aos";
import Map from "./Map";
const MembersMap = () => {
  useEffect(() => {
    AOS.init({ once: false });
  }, []);
  return (
    <section
      className="h-auto mb-30 flex flex-col justify-center items-center"
      data-aos="fade-up"
    >
      <Map />
    </section>
  );
};

export default MembersMap;
