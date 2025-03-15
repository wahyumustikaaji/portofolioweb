import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

function PixelTransition({
  contents = [], // Array of content elements to cycle through
  gridSize = 7,
  pixelColor = "currentColor",
  animationStepDuration = 0.3,
  className = "",
  style = {},
  aspectRatio = "100%",
}) {
  const containerRef = useRef(null);
  const pixelGridRef = useRef(null);
  const contentsRef = useRef([]);
  const delayedCallRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const isTouchDevice =
    typeof window !== "undefined" &&
    ("ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    window.matchMedia("(pointer: coarse)").matches);

  // Initialize the pixel grid
  useEffect(() => {
    const pixelGridEl = pixelGridRef.current;
    if (!pixelGridEl) return;

    pixelGridEl.innerHTML = "";

    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        const pixel = document.createElement("div");
        pixel.classList.add("pixelated-image-card__pixel");
        pixel.classList.add("absolute", "hidden");
        pixel.style.backgroundColor = pixelColor;

        const size = 100 / gridSize;
        pixel.style.width = `${size}%`;
        pixel.style.height = `${size}%`;
        pixel.style.left = `${col * size}%`;
        pixel.style.top = `${row * size}%`;

        pixelGridEl.appendChild(pixel);
      }
    }
  }, [gridSize, pixelColor]);

  // Prepare content refs
  useEffect(() => {
    contentsRef.current = contentsRef.current.slice(0, contents.length);
  }, [contents]);

  const animateToNextImage = () => {
    if (contents.length <= 1) return;
    
    const nextIndex = (activeIndex + 1) % contents.length;
    animateTransition(nextIndex);
  };

  const animateTransition = (newIndex) => {
    const pixelGridEl = pixelGridRef.current;
    if (!pixelGridEl || contents.length === 0) return;

    const pixels = pixelGridEl.querySelectorAll(".pixelated-image-card__pixel");
    if (!pixels.length) return;

    gsap.killTweensOf(pixels);
    if (delayedCallRef.current) {
      delayedCallRef.current.kill();
    }

    // Hide all content elements except current
    contentsRef.current.forEach((ref, index) => {
      if (ref && index !== activeIndex) {
        ref.style.display = "none";
      }
    });

    // First phase: show pixels to hide current content
    gsap.set(pixels, { display: "none" });
    
    const totalPixels = pixels.length;
    const staggerDuration = animationStepDuration / totalPixels;

    gsap.to(pixels, {
      display: "block",
      duration: 0,
      stagger: {
        each: staggerDuration,
        from: "random",
      },
    });

    // After first animation phase, switch content
    delayedCallRef.current = gsap.delayedCall(animationStepDuration, () => {
      // Hide current content
      if (contentsRef.current[activeIndex]) {
        contentsRef.current[activeIndex].style.display = "none";
      }
      
      // Show new content
      if (contentsRef.current[newIndex]) {
        contentsRef.current[newIndex].style.display = "block";
      }
      
      setActiveIndex(newIndex);
    });

    // Second phase: hide pixels to reveal new content
    gsap.to(pixels, {
      display: "none",
      duration: 0,
      delay: animationStepDuration,
      stagger: {
        each: staggerDuration,
        from: "random",
      },
    });
  };

  const handleClick = () => {
    animateToNextImage();
  };

  return (
    <div
      ref={containerRef}
      className={`
        ${className}
        bg-[#222]
        w-full
        h-screen
        max-w-full
        relative
        overflow-hidden
      `}
      style={style}
      onClick={handleClick}
    >
      <div style={{ paddingTop: aspectRatio }} />

      {contents.map((content, index) => (
        <div
          key={index}
          ref={(el) => (contentsRef.current[index] = el)}
          className="absolute inset-0 w-full h-full"
          style={{ display: index === 0 ? "block" : "none" }}
        >
          {content}
        </div>
      ))}

      <div
        ref={pixelGridRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-[3]"
      />
    </div>
  );
}

export default PixelTransition;