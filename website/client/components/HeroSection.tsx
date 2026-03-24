import { useEffect, useRef } from "react";
import { useMouseSticky } from "../hooks/useMouseSticky";
import { useFadeInSection } from "../hooks/useFadeInSection";
import UnicornStudioEffect from "./UnicornStudioEffect";

export default function HeroSection() {
  const sectionRef = useFadeInSection();
  const headingRef = useRef<HTMLHeadingElement>(null);
  const { ref: videoButtonRef } = useMouseSticky(30);
  const { ref: switchButtonRef } = useMouseSticky(30);


  // 3D parallax effect on heading based on mouse movement - DISABLED
  // useEffect(() => {
  //   const handleMouseMove = (e: MouseEvent) => {
  //     if (!headingRef.current) return;

  //     const rect = headingRef.current.getBoundingClientRect();
  //     const centerX = rect.left + rect.width / 2;
  //     const centerY = rect.top + rect.height / 2;

  //     const mouseX = e.clientX;
  //     const mouseY = e.clientY;

  //     // Calculate angle based on mouse position relative to heading
  //     const angleX = (mouseY - centerY) * 0.02; // Vertical mouse movement affects X rotation
  //     const angleY = (mouseX - centerX) * 0.02; // Horizontal mouse movement affects Y rotation

  //     headingRef.current.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
  //     headingRef.current.style.transition = "transform 0.1s ease-out";
  //   };

  //   const handleMouseLeave = () => {
  //     if (!headingRef.current) return;
  //     headingRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
  //   };

  //   window.addEventListener("mousemove", handleMouseMove);
  //   headingRef.current?.addEventListener("mouseleave", handleMouseLeave);

  //   return () => {
  //     window.removeEventListener("mousemove", handleMouseMove);
  //     headingRef.current?.removeEventListener("mouseleave", handleMouseLeave);
  //   };
  // }, []);

  return (
    <section ref={sectionRef} className="relative bg-white m-0 pt-10 pb-8 fade-in-section">
      {/* Unicorn Studio WebGL Effect Background */}
      <UnicornStudioEffect />

      {/* Content layer — sits OVER WebGL effect and image (z-30), all content in one layer, shifted up, with side margins */}
      <div className="relative z-30 w-full px-4 sm:px-6 lg:px-[60px] pt-4 lg:pt-6 pb-0">
        <div>

          {/* Fruitpie pie icon */}
          <div className="mb-5">
            <svg
              width="53"
              height="54"
              viewBox="0 0 76 77"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M37.4389 0.0161115C40.4762 -0.135483 41.8927 0.790421 44.2274 2.4674C49.9819 0.920071 52.8175 2.21599 56.3031 6.86692C62.2752 6.97182 64.2493 10.0682 66.1008 15.0739C71.0257 17.5298 72.7747 20.2316 72.3264 25.7986C76.5858 30.1062 76.5665 32.9334 74.7175 38.3738C77.0066 43.5893 76.2244 46.5015 72.4271 50.5758C73.5419 56.5926 70.6124 58.8287 66.1056 61.5259C65.2863 63.2146 64.9568 64.7716 63.7731 66.3131C61.8035 68.879 59.193 69.3761 56.2039 69.7899C53.1819 74.1937 49.7745 75.9381 44.4151 74.2597C42.353 75.6894 41.5412 76.1253 39.1029 76.6709C35.8771 76.9365 33.9561 76.2022 31.4764 74.2368C25.8684 75.7431 22.9013 74.2449 19.4984 69.8222C13.5202 68.513 11.8252 67.8357 9.8797 61.6706C4.26687 58.4473 3.51267 57.1915 3.52744 50.7841C-0.609232 46.7201 -0.535378 43.3705 1.36551 38.2213C-1.08189 32.6446 -0.169733 30.4037 3.54281 25.9493C3.45539 19.9308 4.45256 18.0254 9.81066 15.1442C11.5536 9.35833 13.547 7.71909 19.5159 6.81688C19.9183 6.43797 20.2909 5.91558 20.6282 5.46854C23.412 1.77882 27.1553 1.32521 31.4306 2.40078C33.6013 0.962845 34.8568 0.334855 37.4389 0.0161115ZM31.9943 5.65031C30.0539 5.11796 26.6479 4.12351 24.7784 5.22588C23.3894 6.04489 23.1696 8.21918 21.4176 9.17807C18.8804 10.5671 17.2267 9.47469 14.8465 11.4527C12.8697 13.095 13.4584 15.2871 12.5468 16.5814C10.986 18.7976 7.23485 18.6231 6.62203 22.3824C6.3438 24.0891 6.39866 25.3941 6.8047 27.1096C2.60353 31.0639 1.57079 33.2044 4.98761 38.3183C1.31486 43.9432 2.90376 45.3693 6.81013 49.764C6.45956 51.6001 5.92962 54.2175 7.10343 55.8601C8.33813 57.5873 10.6668 57.8686 12.0953 59.6404C13.3957 61.2531 13.1205 63.6975 14.5122 64.9783C16.0843 66.4253 19.6168 66.2613 21.2199 67.2892C23.242 68.5857 23.6028 71.4126 26.5774 71.796C28.2793 72.0152 30.1826 71.3843 31.8502 70.9324C34.8932 72.3694 34.9466 73.8745 38.8897 73.8398C41.6651 72.7971 41.8445 71.8795 43.7655 70.9589C46.0077 71.6423 48.4017 72.5041 50.6553 71.3038C52.3575 70.397 53.1593 68.6879 54.2587 67.25C57.1387 66.4747 59.9981 67.036 61.9053 64.1069C62.8531 62.8104 62.7834 60.8812 63.6998 59.6236C64.6765 58.283 67.0582 57.7365 68.2115 56.7846C69.7506 55.5143 69.6065 51.4343 69.5119 49.6546C70.9024 47.0484 74.1245 45.5626 73.002 41.989C72.5157 40.4411 71.9792 39.5404 71.1155 38.161C74.3156 32.6817 73.3266 31.5826 69.3512 27.1807C69.6409 22.8629 69.9641 20.07 65.7041 18.6005C64.1056 18.0489 62.9739 16.2704 62.7659 14.7632C61.6982 10.2699 58.5316 10.1828 54.7151 9.61546C50.5151 4.52895 49.9981 4.12622 43.3688 5.67412C41.1162 3.91793 39.7609 2.8032 36.7022 3.11881C34.3651 3.81574 33.8789 4.66821 31.9943 5.65031Z" fill="black"/>
              <path d="M37.3806 7.4458C54.402 7.10819 68.486 20.6103 68.8664 37.6309C69.2468 54.6514 55.7799 68.7694 38.7603 69.1923C21.6801 69.6167 7.50119 56.0917 7.11957 39.0106C6.73795 21.9294 20.2986 7.78462 37.3806 7.4458ZM19.532 59.3008C21.914 61.287 23.8335 62.343 26.5323 63.8022C27.1666 63.8824 27.2272 63.9014 27.8225 63.417C30.3643 61.3479 32.9283 58.1879 35.4182 56.145C34.6752 55.355 29.6245 50.0282 29.0705 49.7801C26.3629 52.346 23.8556 55.1168 21.1586 57.6956C20.6232 58.2075 20.03 58.7582 19.532 59.3008ZM40.524 55.9916C42.1087 57.4319 47.5711 63.1201 48.7621 63.7992C49.3116 63.7703 49.4536 63.6642 49.9428 63.4309C52.2247 62.251 54.3891 60.9738 56.2851 59.2158C54.0641 56.914 49.1862 51.6358 46.7834 49.7994C44.7168 51.8836 42.6302 53.9475 40.524 55.9916ZM29.0042 31.8718C26.9489 33.8906 24.9118 35.9277 22.8925 37.9823C24.037 39.2396 27.9648 43.6793 29.28 44.3825C31.3292 42.3333 33.3145 40.2272 35.3664 38.1783C34.5461 37.277 29.8193 32.3792 29.0042 31.8718ZM58.404 38.1834C59.8045 39.5342 61.1869 40.9039 62.5506 42.2923C63.2533 43.0098 64.5416 44.4015 65.2747 44.9869C65.6765 41.8354 66.3949 34.5794 65.0764 31.7941L64.9317 31.7136C62.8177 33.836 60.4474 36.0643 58.404 38.1834ZM40.5934 38.2377C41.5329 39.1055 46.4172 44.3494 47.0785 44.3346C49.1383 42.3514 51.1504 40.3194 53.114 38.2407C52.3984 37.4617 47.2859 32.1953 46.718 31.996C44.8015 33.8656 42.2938 36.2289 40.5934 38.2377ZM20.0933 40.749C17.3836 43.546 14.8907 46.1146 12.0828 48.8104C13.609 51.8959 14.6592 53.6169 16.794 56.4163L17.935 55.4475L26.4006 46.9927C25.083 45.6389 21.4211 41.7118 20.0933 40.749ZM38.098 53.385C39.7478 51.7081 42.8306 48.7793 44.2013 47.0789C42.7981 45.654 39.3095 41.9656 37.8843 40.894C35.8876 42.9395 33.8679 44.9619 31.825 46.9613C32.6281 47.8259 37.3342 53.0245 38.098 53.385ZM31.6722 29.321C33.7295 31.278 35.9774 33.6965 38.0998 35.4605C39.6339 33.8707 42.7984 30.8111 44.1036 29.2469C43.1176 28.0019 39.1187 23.7715 37.9093 23.0957C35.7815 25.119 33.7947 27.274 31.6722 29.321ZM10.9096 31.6647C9.95341 36.5849 9.59078 40.1367 10.9641 45.1262C11.8998 44.038 12.8572 42.9688 13.8351 41.9185C15.0918 40.6694 16.3536 39.35 17.7185 38.2283C15.7311 36.3271 12.9027 33.3453 10.9096 31.6647ZM26.4344 29.4335C25.572 28.5159 17.5723 20.5404 16.8633 20.248C15.1937 22.1823 13.1017 25.2983 12.0424 27.6393C14.4997 29.8775 17.7903 33.2814 20.0791 35.7261L20.9877 34.9266C22.8153 32.8416 24.5875 31.3651 26.4344 29.4335ZM37.1853 10.4165C35.3028 10.6365 33.1508 10.9956 31.3358 11.174C32.128 11.9508 37.5108 17.6273 38.0064 17.6866L38.2813 17.4789C39.8967 15.8548 42.9455 12.9703 44.3445 11.3238C41.7277 10.6694 39.8681 10.3749 37.1853 10.4165ZM58.5957 56.0769L58.9475 56.2352C60.5123 55.6359 62.8041 51.2294 63.4691 49.7542C63.6207 49.4157 63.766 49.0741 63.905 48.7302C62.7459 47.5905 56.6276 41.3977 55.6223 41.0492C53.6111 42.8856 51.5435 45.0189 49.6001 46.9514C52.3387 49.7548 56.1085 53.2705 58.5957 56.0769ZM37.9684 58.5858C36.847 59.6258 35.839 60.8294 34.7713 61.93C33.6506 63.0854 32.4927 64.1817 31.3741 65.3396C33.6702 65.8146 36.0633 66.1782 38.416 66.1055C40.7169 66.0031 42.4174 65.8159 44.7089 65.4327C43.5164 64.1986 38.9945 59.365 37.9684 58.5858ZM48.3012 12.5516C45.9554 15.0138 42.5696 18.0167 40.5017 20.3737L46.8464 26.7341L47.8002 25.7827C50.6208 22.7789 53.0199 20.1645 56.1534 17.4714C54.4002 15.8994 50.6283 13.0963 48.3012 12.5516ZM58.8748 20.1172C56.444 22.4096 51.6499 26.9602 49.4994 29.4103C51.3693 31.2533 53.2291 33.1065 55.0788 34.9697C55.6072 35.3523 55.3323 35.2905 55.9032 35.2627C57.6103 34.3165 61.9724 29.432 63.5661 27.7349C62.7667 25.9133 60.4764 21.3048 58.8748 20.1172ZM26.8826 12.586C24.3656 13.9831 21.7753 15.4976 19.5413 17.3147C22.62 20.3185 25.6811 23.3399 28.7247 26.379L29.0226 26.4537C30.0658 25.7809 34.4289 21.58 35.3028 20.5271C34.3918 19.3443 27.9027 12.7087 26.8826 12.586Z" fill="black"/>
            </svg>
          </div>

          {/* Main heading — 40px, Roboto + Georgia italic mix (30% smaller, then 10% more), 80% width on desktop */}
          <h1
            ref={headingRef}
            className="text-[40px] leading-tight font-sans font-normal text-black mb-4 max-w-[100%] lg:max-w-[60%]"
            style={{ transformStyle: "preserve-3d" }}
          >
            Het <strong className="font-bold">AI-native</strong> boekhoudkantoor. Met meer tijd voor advies en{" "}
            <span className="font-serif italic">aan halve prijs.</span>
          </h1>

          {/* Body text — 16px Roboto (same as header slogan) */}
          <p className="text-[16px] font-sans font-normal text-black leading-normal mb-6 max-w-[580px]">
            Fruitpie combineert <strong>AI</strong> met <strong>echte expertise</strong> — dus <strong>actuele cijfers</strong> én een <strong>boekhouder die meedenkt.</strong>
          </p>

          {/* Buttons — same size as Plan intake button in header */}
          <div className="flex flex-row" style={{ gap: "5px" }}>
            <button
              ref={videoButtonRef as any}
              onClick={() => {
                document.querySelector('[data-section="video"]')?.scrollIntoView({ behavior: 'smooth' });
                setTimeout(() => window.dispatchEvent(new CustomEvent('play-video')), 600);
              }}
              className="h-8 px-5 bg-black text-white text-[12px] font-mono font-normal rounded-[3px] whitespace-nowrap hover:bg-gray-900 transition-colors"
            >
              Bekijk de video
            </button>
            <button
              ref={switchButtonRef as any}
              onClick={() => document.querySelector('[data-section="overstappen"]')?.scrollIntoView({ behavior: 'smooth' })}
              className="h-8 px-5 bg-fp-gray-btn border border-fp-gray-stroke text-black text-[12px] font-mono font-normal rounded-[3px] whitespace-nowrap hover:bg-[#c8ced1] transition-colors"
            >
              Overstappen?
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
