// Animation utilities for the romantic web app
// Created by Kartik for Rhydem ❤️

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
}

export const fadeInLeft = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
}

export const fadeInRight = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
}

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: 'easeOut' }
}

export const heartBeat = {
  animate: {
    scale: [1, 1.1, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
}

export const float = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
}

export const floatDelayed = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
      delay: 1
    }
  }
}

export const floatSlow = {
  animate: {
    y: [-15, 15, -15],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
}

export const slideInFromBottom = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export const slideInFromTop = {
  initial: { opacity: 0, y: -50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export const rotateIn = {
  initial: { opacity: 0, rotate: -180 },
  animate: { opacity: 1, rotate: 0 },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export const pulseGlow = {
  animate: {
    boxShadow: [
      '0 0 20px rgba(244, 63, 94, 0.3)',
      '0 0 40px rgba(244, 63, 94, 0.6)',
      '0 0 20px rgba(244, 63, 94, 0.3)'
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
}

export const typewriter = (text: string, delay: number = 100) => ({
  initial: { width: 0 },
  animate: { width: 'auto' },
  transition: {
    duration: text.length * delay / 1000,
    ease: 'linear'
  }
})

export const heartRain = {
  initial: { y: -100, opacity: 0 },
  animate: { y: window?.innerHeight || 800, opacity: [0, 1, 0] },
  transition: {
    duration: 3,
    ease: 'linear',
    repeat: Infinity
  }
}

export const bounceIn = {
  initial: { opacity: 0, scale: 0.3 },
  animate: { 
    opacity: 1, 
    scale: [0.3, 1.1, 0.9, 1.03, 0.97, 1],
  },
  transition: {
    duration: 0.8,
    ease: 'easeOut',
    times: [0, 0.2, 0.4, 0.6, 0.8, 1]
  }
}

export const shimmer = {
  animate: {
    backgroundPosition: ['200% 0', '-200% 0'],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'linear'
    }
  }
}

export const cardHover = {
  whileHover: {
    scale: 1.05,
    y: -5,
    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
    transition: { duration: 0.3 }
  },
  whileTap: {
    scale: 0.98
  }
}

export const buttonHover = {
  whileHover: {
    scale: 1.05,
    boxShadow: '0 10px 30px rgba(244, 63, 94, 0.3)',
    transition: { duration: 0.2 }
  },
  whileTap: {
    scale: 0.95
  }
}

// CSS class animations for Tailwind
export const cssAnimations = {
  'animate-fade-in-up': 'animate-[fadeInUp_0.6s_ease-out_forwards]',
  'animate-fade-in-left': 'animate-[fadeInLeft_0.6s_ease-out_forwards]',
  'animate-fade-in-right': 'animate-[fadeInRight_0.6s_ease-out_forwards]',
  'animate-scale-in': 'animate-[scaleIn_0.5s_ease-out_forwards]',
  'animate-heart-beat': 'animate-[heartBeat_1s_ease-in-out_infinite]',
  'animate-float': 'animate-[float_3s_ease-in-out_infinite]',
  'animate-float-delayed': 'animate-[floatDelayed_3s_ease-in-out_infinite]',
  'animate-float-slow': 'animate-[floatSlow_4s_ease-in-out_infinite]',
  'animate-float-down': 'animate-[floatDown_3s_linear_forwards]',
  'animate-slide-up': 'animate-[slideUp_0.8s_ease-out_forwards]',
  'animate-rotate-in': 'animate-[rotateIn_0.8s_ease-out_forwards]',
  'animate-pulse-glow': 'animate-[pulseGlow_2s_ease-in-out_infinite]',
  'animate-bounce-in': 'animate-[bounceIn_0.8s_ease-out_forwards]',
  'animate-shimmer': 'animate-[shimmer_2s_linear_infinite]'
}

// Keyframes for custom animations (to be added to globals.css)
export const keyframes = `
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeInLeft {
  from { opacity: 0; transform: translateX(-20px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes fadeInRight {
  from { opacity: 0; transform: translateX(20px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.8); }
  to { opacity: 1; transform: scale(1); }
}

@keyframes heartBeat {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

@keyframes float {
  0%, 100% { transform: translateY(-10px); }
  50% { transform: translateY(10px); }
}

@keyframes floatDelayed {
  0%, 100% { transform: translateY(-10px); }
  50% { transform: translateY(10px); }
}

@keyframes floatSlow {
  0%, 100% { transform: translateY(-15px); }
  50% { transform: translateY(15px); }
}

@keyframes floatDown {
  from { transform: translateY(-100px); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  to { transform: translateY(100vh); opacity: 0; }
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes rotateIn {
  from { opacity: 0; transform: rotate(-180deg); }
  to { opacity: 1; transform: rotate(0deg); }
}

@keyframes pulseGlow {
  0%, 100% { box-shadow: 0 0 20px rgba(244, 63, 94, 0.3); }
  50% { box-shadow: 0 0 40px rgba(244, 63, 94, 0.6); }
}

@keyframes bounceIn {
  0% { opacity: 0; transform: scale(0.3); }
  20% { transform: scale(1.1); }
  40% { transform: scale(0.9); }
  60% { opacity: 1; transform: scale(1.03); }
  80% { transform: scale(0.97); }
  100% { opacity: 1; transform: scale(1); }
}

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
`