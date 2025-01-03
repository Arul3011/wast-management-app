

export default function LoadingPage() {
    return (
        <div className="w-[100%] h-[100vh] flex justify-center items-center">
      <style>
        {`
          @keyframes circle7124 {
            0% {
              top: 60px;
              height: 5px;
              border-radius: 50px 50px 25px 25px;
              transform: scaleX(1.7);
            }
            40% {
              height: 20px;
              border-radius: 50%;
              transform: scaleX(1);
            }
            100% {
              top: 0%;
            }
          }

          @keyframes shadow046 {
            0% {
              transform: scaleX(1.5);
            }
            40% {
              transform: scaleX(1);
              opacity: 0.7;
            }
            100% {
              transform: scaleX(0.2);
              opacity: 0.4;
            }
          }
        `}
      </style>
      <div className="relative w-52 h-15">
        {/* Circles */}
        <div
          className="absolute w-5 h-5 bg-black rounded-full left-[15%] origin-center"
          style={{ animation: "circle7124 0.5s alternate infinite ease" }}
        ></div>
        <div
          className="absolute w-5 h-5 bg-black rounded-full left-[45%] origin-center"
          style={{ animation: "circle7124 0.5s alternate infinite ease", animationDelay: "0.2s" }}
        ></div>
        <div
          className="absolute w-5 h-5 bg-black rounded-full right-[15%] origin-center"
          style={{ animation: "circle7124 0.5s alternate infinite ease", animationDelay: "0.3s" }}
        ></div>

        {/* Shadows */}
        <div
          className="absolute w-5 h-1 bg-black/90 rounded-full top-[62px] origin-center blur-sm left-[15%] z-[-1]"
          style={{ animation: "shadow046 0.5s alternate infinite ease" }}
        ></div>
        <div
          className="absolute w-5 h-1 bg-black/90 rounded-full top-[62px] origin-center blur-sm left-[45%] z-[-1]"
          style={{ animation: "shadow046 0.5s alternate infinite ease", animationDelay: "0.2s" }}
        ></div>
        <div
          className="absolute w-5 h-1 bg-black/90 rounded-full top-[62px] origin-center blur-sm right-[15%] z-[-1]"
          style={{ animation: "shadow046 0.5s alternate infinite ease", animationDelay: "0.3s" }}
        ></div>
      </div>
    </div>
    );
}

