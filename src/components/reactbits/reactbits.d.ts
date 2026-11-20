declare module '@/components/reactbits/SplitFlapText' {
  import React from 'react';
  export interface SplitFlapTextProps {
    words?: string[];
    text?: string;
    flipDuration?: number;
    stagger?: number;
    cycleDelay?: number;
    charset?: 'alpha' | 'alphanumeric' | 'numeric' | string;
    flipsPerChar?: number;
    tileColor?: string;
    textColor?: string;
    tileRadius?: number;
    gap?: number;
    fontSize?: number;
    loop?: boolean;
    padTo?: number;
    align?: 'left' | 'center' | 'right';
    intro?: boolean;
    glare?: number;
    depth?: number;
    order?: 'left' | 'right' | 'random';
    tileStyle?: string;
    className?: string;
    style?: React.CSSProperties;
    [key: string]: any;
  }
  const SplitFlapText: React.FC<SplitFlapTextProps>;
  export default SplitFlapText;
}

declare module '@/components/reactbits/SpecularButton' {
  import React from 'react';
  export interface SpecularButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    size?: 'small' | 'medium' | 'large' | string;
    radius?: number;
    tint?: string;
    tintOpacity?: number;
    blur?: number;
    textColor?: string;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    [key: string]: any;
  }
  const SpecularButton: React.FC<SpecularButtonProps>;
  export default SpecularButton;
}

declare module '@/components/reactbits/CircularCarousel' {
  import React from 'react';
  export interface CircularCarouselItem {
    src: string;
    alt?: string;
    title?: string;
    subtitle?: string;
    [key: string]: any;
  }
  export interface CircularCarouselProps {
    items?: CircularCarouselItem[];
    preset?: string;
    intro?: string;
    cardWidth?: number;
    aspectRatio?: number;
    gap?: number;
    curve?: number;
    tilt?: number;
    perspective?: number;
    autoplay?: string | boolean;
    speed?: number;
    interval?: number;
    direction?: 'left' | 'right';
    draggable?: boolean;
    momentum?: number;
    snap?: boolean;
    pauseOnHover?: boolean;
    focusOnClick?: boolean;
    parallax?: number;
    stretch?: number;
    depthFade?: number;
    fadeColor?: string;
    innerShade?: number;
    cornerRadius?: number;
    captions?: boolean;
    onChange?: (index: number) => void;
    onItemClick?: (item: any, index: number) => void;
    className?: string;
    style?: React.CSSProperties;
    [key: string]: any;
  }
  const CircularCarousel: React.FC<CircularCarouselProps>;
  export default CircularCarousel;
}

declare module '@/components/reactbits/DepthCarousel' {
  import React from 'react';
  export interface DepthCarouselItem {
    image: string;
    alt?: string;
    [key: string]: any;
  }
  export interface DepthCarouselProps {
    items?: DepthCarouselItem[];
    cardWidth?: number;
    cardHeight?: number;
    radius?: number;
    tint?: string;
    depth?: number;
    spread?: number;
    tilt?: number;
    tiltDirection?: 'left' | 'right';
    perspective?: number;
    visibleCards?: number;
    falloff?: number;
    blur?: number;
    duration?: number;
    ease?: string;
    autoplay?: boolean;
    autoplayDelay?: number;
    loop?: boolean;
    showControls?: boolean;
    showIndicators?: boolean;
    onChange?: (index: number) => void;
    className?: string;
    style?: React.CSSProperties;
    [key: string]: any;
  }
  const DepthCarousel: React.FC<DepthCarouselProps>;
  export default DepthCarousel;
}

declare module '@/components/reactbits/ReflectiveCard' {
  import React from 'react';
  export interface ReflectiveCardProps {
    palette?: 'dark' | 'light' | string;
    name?: string;
    role?: string;
    idLabel?: string;
    idValue?: string;
    badge?: string;
    status?: string;
    statusColor?: string;
    width?: number | string;
    height?: number | string;
    radius?: number;
    videoSrc?: string;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    [key: string]: any;
  }
  const ReflectiveCard: React.FC<ReflectiveCardProps>;
  export default ReflectiveCard;
}

declare module '@/components/reactbits/Lanyard' {
  import React from 'react';
  export interface LanyardProps {
    frontImage?: string;
    backImage?: string;
    imageFit?: 'cover' | 'contain';
    cardColor?: string;
    orientation?: 'portrait' | 'landscape';
    finish?: 'glossy' | 'matte' | 'holographic' | 'metallic';
    cornerRadius?: number;
    size?: number;
    anchor?: 'left' | 'center' | 'right';
    strapLength?: number;
    strapImage?: string;
    strapColor?: string;
    strapWidth?: number;
    metal?: 'graphite' | 'silver' | 'gold';
    gravity?: number;
    damping?: number;
    elasticity?: number;
    breeze?: number;
    interactive?: boolean;
    intro?: boolean;
    className?: string;
    style?: React.CSSProperties;
    [key: string]: any;
  }
  const Lanyard: React.FC<LanyardProps>;
  export default Lanyard;
}

