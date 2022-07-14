import studyjson from "../../assets/study.json";
import Lottie from "lottie-react";

export default function HomePage() {
  return (
    <div className="h-full">
      <div className="p-5 container mx-auto h-full w-full">
        <div className="w-2/3 mx-auto">
          <Lottie animationData={studyjson} loop={true} />
        </div>
      </div>
    </div>
  );
}
