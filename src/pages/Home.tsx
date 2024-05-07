import { Parallax, ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';

import { BannerLayer } from 'react-scroll-parallax/dist/components/ParallaxBanner/types';
import { CloudsLeft, CloudsRight } from '../backgrounds/Clouds';

import LandImage from '../backgrounds/land.png';
import MarioImage from '../backgrounds/mario.png';

const AdvancedBannerTop = () => {
  const cloudsLeft: BannerLayer = {
    translateX: [0, -30],
    translateY: [1, -30],
    scale: [1, 1.05, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: <CloudsLeft />,
  };

  const cloudsRight: BannerLayer = {
    translateX: [1, 30],
    translateY: [1, -30],
    scale: [1, 1.05, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: <CloudsRight />,
  };

  const foreground: BannerLayer = {
    image: LandImage,
    translateY: [0, 15],
    scale: [1, 1.5, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
  };

  const gradientOverlay: BannerLayer = {
    opacity: [0, 1, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: <div className="gradient inset" />,
  };

  return <ParallaxBanner layers={[cloudsRight, cloudsLeft, foreground, gradientOverlay]} className="full" />;
};

const Mario = () => {
  return (
    <>
      <Parallax scale={[0, 1, 'easeOutCubic']}>
        <h1 className="white">This is scroll animation using parallax.</h1>
      </Parallax>
      <Parallax translateX={[100, 0, 'easeOutCubic']}>
        <img src={MarioImage} />
      </Parallax>
    </>
  );
};

function Home() {
  return (
    <ParallaxProvider>
      <AdvancedBannerTop />
      <div className="center full bg-dark overflow-hidden">
        <Mario />
      </div>
    </ParallaxProvider>
  );
}

export default Home;
