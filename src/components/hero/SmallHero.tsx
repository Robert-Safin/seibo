'use client'
import { useEffect } from 'react';

const SmallHero = () => {
  useEffect(() => {
    const videos = document.querySelectorAll('video');
    const playVideos = () => {
      videos.forEach(video => {
        video.play().catch(error => {
          console.error('Error trying to play video:', error);
        });
      });
    };

    window.addEventListener('click', playVideos, { once: true });

    return () => {
      window.removeEventListener('click', playVideos);
    };
  }, []);

  return (
    <>
      <div className="pt-[130px] x-pad">
        <h3
          className="text-theme-white text-center
        font-geist text-[16px] leading-[24px] tracking-[-1.2px]
        w-[286px] mx-auto
        "
        >
          We specialize in carefully handcrafted custom web services.{" "}
        </h3>
        <h4 className="text-theme-gray text-center sh2-medium mt-[48px] mb-[46px]">
          EST. 2024
          <br />
          CURRENTLY IN: BALI, IDN
        </h4>
        <div className="flex flex-col space-y-3">
          <video
            autoPlay
            muted
            loop
            src={"/assets/hero/purple.mp4"}
            width={1000}
            height={1000}
            className="h-[48px] object-cover"
          />
          <video
            autoPlay
            muted
            loop
            src={"/assets/hero/white.mp4"}
            width={1000}
            height={1000}
            className="h-[117px] object-cover"
          />
          <video
            autoPlay
            muted
            loop
            src={"/assets/hero/red.mp4"}
            width={1000}
            height={1000}
            className="h-[61px] object-cover"
          />
          <video
            autoPlay
            muted
            loop
            src={"/assets/hero/orange.mp4"}
            width={1000}
            height={1000}
            className="h-[84px] object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default SmallHero;
