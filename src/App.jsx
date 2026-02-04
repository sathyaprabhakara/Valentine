import { useEffect, useMemo, useRef, useState } from 'react';

const randomBetween = (min, max) => Math.random() * (max - min) + min;

export default function App() {
  const yesAreaRef = useRef(null);
  const yesButtonRef = useRef(null);
  const [yesPos, setYesPos] = useState({ x: 120, y: 80 });
  const [noClicked, setNoClicked] = useState(false);
  const [message, setMessage] = useState('');
  const sadGif = `${import.meta.env.BASE_URL}sad-baby.gif`;

  const hearts = useMemo(
    () =>
      Array.from({ length: 14 }, (_, index) => ({
        id: index,
        left: `${randomBetween(5, 95)}%`,
        top: `${randomBetween(10, 95)}%`,
        delay: `${randomBetween(0, 6)}s`,
        duration: `${randomBetween(5, 9)}s`,
        size: randomBetween(14, 26)
      })),
    []
  );

  const moveYesButton = () => {
    const area = yesAreaRef.current;
    const button = yesButtonRef.current;
    if (!area || !button) return;
    const areaRect = area.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();

    const maxX = Math.max(0, areaRect.width - buttonRect.width);
    const maxY = Math.max(0, areaRect.height - buttonRect.height);

    const x = randomBetween(0, maxX);
    const y = randomBetween(0, maxY);

    setYesPos({ x, y });
  };

  useEffect(() => {
    const handleResize = () => moveYesButton();
    moveYesButton();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNoClick = () => {
    setNoClicked(true);
    const responses = [
      'Oh no 🥺',
      'My heart is melting 😢',
      'That hurts a little... 💔',
      'Please reconsider? 🫶'
    ];
    setMessage(responses[Math.floor(Math.random() * responses.length)]);
  };

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="sparkle" />

      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="heart pointer-events-none animate-drift"
          style={{
            left: heart.left,
            top: heart.top,
            animationDelay: heart.delay,
            animationDuration: heart.duration,
            width: `${heart.size}px`,
            height: `${heart.size}px`
          }}
        />
      ))}

      <section className="relative z-10 mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-6 py-16 text-center">
        <div className="ribbon shadow-sweet relative w-full rounded-[32px] border border-white/60 px-6 py-12 sm:px-12">
          <div className="mx-auto mb-6 flex items-center justify-center gap-3 text-sm font-semibold tracking-[0.4em] text-[#ff2d55]">
            <span className="h-2 w-2 rounded-full bg-[#ff2d55]"></span>
            Sathya’s Valentine Mode
            <span className="h-2 w-2 rounded-full bg-[#ff2d55]"></span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl">
            Will you be my Valentine?
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-[#7d3048] sm:text-lg">
            I made this just for you - with extra hearts, a touch of code, and a whole lot of Sathya 💗
          </p>

          <div
            ref={yesAreaRef}
            className="relative mx-auto mt-10 flex h-[220px] w-full max-w-2xl items-center justify-center"
          >
            <button
              ref={yesButtonRef}
              type="button"
              className="button-soft absolute rounded-full bg-white/80 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-[#ff2d55] transition-transform duration-200 hover:scale-105"
              style={{
                transform: `translate(${yesPos.x}px, ${yesPos.y}px)`
              }}
              onMouseEnter={moveYesButton}
              onMouseDown={moveYesButton}
              onTouchStart={moveYesButton}
              onFocus={moveYesButton}
              aria-label="Yes"
            >
              YES 💖
            </button>

            <button
              type="button"
              className="button-soft animate-beat rounded-[999px] bg-[#ff2d55] px-12 py-5 text-lg font-extrabold uppercase tracking-[0.2em] text-white shadow-xl transition-transform duration-200 hover:-translate-y-1 hover:scale-110 hover:shadow-[0_0_35px_rgba(255,45,85,0.7)]"
              onClick={handleNoClick}
            >
              NO 💔
            </button>
          </div>

          <div className="mt-6 min-h-[48px] text-xl font-semibold text-[#ff2d55]">
            {noClicked && (
              <div className="flex flex-col items-center gap-4">
                <span className="animate-floaty font-script text-3xl">{message}</span>
                <img
                  src={sadGif}
                  alt="Sad baby"
                  className="w-56 rounded-2xl shadow-lg"
                  loading="lazy"
                />
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 text-sm font-semibold uppercase tracking-[0.5em] text-[#ff5c8a]">
          xoxo
        </div>
      </section>
    </main>
  );
}
