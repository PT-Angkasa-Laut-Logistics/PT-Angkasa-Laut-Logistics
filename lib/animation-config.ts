// container for staggered animation
export const CONTAINER_ANIMATION = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    duration: 0.3,
    transition: {
      ease: [0.33, 1, 0.68, 1],
      staggerChildren: 0.2,
    },
  },
};

export const CONTAINER_NON_STAGGER = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export const ANIMATE_LEFT = {
  hidden: {
    x: -50,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};

export const ANIMATE_DOWN = {
  hidden: {
    y: -50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};

export const ANIMATE_UP = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,

    transition: {
      duration: 0.6,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};
export const ANIMATE_SCALE_DOWN = {
  hidden: {
    scale: 1.05,
    opacity: 0,
    y: 50,
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,

    transition: {
      duration: 0.8,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};
export const ANIMATE_SCALE_UP = {
  hidden: {
    scale: 0.95,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};
