const publicationsData = [
  {
    title: 'Haptic Rendering of Neural Radiance Fields',
    authors: `<b>H. Zhang</b>, L. Zhu, Y. Xiang, J. Zheng and A. Song`,
    abstract: `We study the haptic interaction with NeRF models in this paper to enable the experience of touching objects reconstructed by NeRF. Existing haptic rendering algorithms do not work well for NeRF-represented models because NeRF is often noisy. We propose a stochastic haptic rendering method to deal with the collision response between the haptic proxy and NeRF.`,
    tags: [
      'Implicit Neural Network',
      'Neural Radiance Fields',
      'Haptic Rendering',
    ],
    date: '2023-10',
    imgSrc: '/static/images/avatar.png',
    links: [{ name: 'UIST 2023', link: 'https://ieeexplore.ieee.org/document/9969440' }],
    show: true,
  },
  {
    title: 'Implicit Neural Field Guidance for Teleoperated Robot-assisted Surgery',
    authors: `<b>H. Zhang</b>, L. Zhu, J. Shen and A. Song`,
    abstract: `We propose a new framework to avoid the collision of surgery robots and human tissue caused by inaccurate inputs. We directly take the medical volume data and propose to use the implicit neural field to guide teleoperated robot-assisted surgery. With guidance, the trajectory of the robot manipulator is optimized to safely work inside a narrow workspace.`,
    tags: [
      'Implicit Neural Network',
      'Robot Control',
    ],
    date: '2023-05',
    imgSrc: '/static/images/google.png',
    links: [{ name: 'ICRA 2023', link: 'https://ieeexplore.ieee.org/document/9969440' }],
    show: true,
  },
  {
    title: 'Augmenting Conversations With Comic-Style Word Balloons',
    authors: `<b>H. Zhang</b>, L. Zhu, Q. Chen, A. Song and L. -F. Yu`,
    abstract: `We propose a novel approach for enabling comic-style conversation in mixed reality to assist face-to-face conversation on-site or remotely. Our approach brings word balloons of comic-style conversation to the real world. The word balloons can adapt to mixed reality scenes, such as the 3-D head motion of the speaker, the comic styles, and the speech.`,
    tags: [
      'Augmented Reality',
      'Word Balloons',
    ],
    date: '2023-04',
    imgSrc: '/static/images/google.png',
    links: [{ name: 'IEEE THMS', link: 'https://ieeexplore.ieee.org/document/9969440' }],
    show: true,
  },
  {
    title: 'TapeTouch: A Handheld Shape-changing Device for Haptic Display of Soft Objects',
    authors: `L. Zhu, X. Jiang, J. Shen, <b>H. Zhang</b>, Y. Mo and A. Song`,
    abstract: `TapeTouch is based on a controllable shape-changing tape, which is mainly composed of four motors and a section of brass tape. We design a structure of the components to fit a portable controller and allow to flexibly adjust the shape of the brass tape. After decoding desired shapes into the signals to control the motor, we automatically reproduce varying shapes and levels of softness to the finger or palm touching the shape-changing tape.`,
    tags: [
      'Haptic Display',
      'Soft Objects',
    ],
    date: '2022-11',
    imgSrc: '/static/images/google.png',
    links: [{ name: 'IEEE TVCG', link: 'https://ieeexplore.ieee.org/document/9969440' }],
    show: true,
  },
  {
    title: 'Differentiable Collaborative Patches for Neural Scene Representations',
    authors: `<b>H. Zhang</b>, L. Zhu`,
    abstract: `We present a new layout solution for the adaptive patches. By allowing the local patches to move freely and scale in the scene, we design a differentiable framework to iteratively compute for the neural representation and update the layout of the local patches. By considering the workload's coverage, overlap, and balance, the patches work collaboratively to cover the scene.`,
    tags: [
      'Implicit Neural Representation',
      'Collaborative Network',
    ],
    date: '2022-11',
    imgSrc: '/static/images/google.png',
    links: [{ name: 'Under Review', link: '' }],
    show: true,
  },
]

export default publicationsData
