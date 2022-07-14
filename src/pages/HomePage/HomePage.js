import studyjson from "../../assets/study.json";
import Lottie from "lottie-react";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen">
      <div className="p-5 container mx-auto h-full w-full">
        <h1 className="font-bold text-[47px] my-5 text-center text-color-primary">
          ADMIN - ELEARNING
        </h1>
        <div className="w-1/2 mx-auto">
          <Lottie animationData={studyjson} loop={true} />
        </div>
      </div>
    </div>
  );
}
