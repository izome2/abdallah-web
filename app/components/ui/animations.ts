// Animation Variants for Framer Motion

// Fade In Variants
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// Slide Up Variants
export const slideUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

// Slide From Left
export const slideFromLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

// Slide From Right
export const slideFromRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

// Scale In
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

// Stagger Container
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

// Stagger Item
export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

// Card Hover Effect
export const cardHover = {
  rest: { 
    scale: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeInOut" }
  },
  hover: { 
    scale: 1.02,
    y: -8,
    transition: { duration: 0.3, ease: "easeInOut" }
  }
};

// Button Hover Effect
export const buttonHover = {
  rest: { 
    scale: 1,
    transition: { duration: 0.2 }
  },
  hover: { 
    scale: 1.05,
    transition: { duration: 0.2 }
  },
  tap: { 
    scale: 0.98,
    transition: { duration: 0.1 }
  }
};

// Rotate In
export const rotateIn = {
  hidden: { opacity: 0, rotate: -10 },
  visible: { 
    opacity: 1, 
    rotate: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// Blur In
export const blurIn = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  visible: { 
    opacity: 1, 
    filter: "blur(0px)",
    transition: { duration: 0.6 }
  }
};

// Float Animation (for continuous floating effect)
export const float = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Pulse Animation
export const pulse = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};
