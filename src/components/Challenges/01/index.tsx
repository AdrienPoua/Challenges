import { useEffect, useMemo } from 'react';
import styles from './styles.module.scss';

export default function Index() {
  const audioElements: { [key: number]: HTMLAudioElement } = useMemo(() => {
    const publicUrl = import.meta.env.VITE_PUBLIC_URL;
    return {
      65: new Audio(`${publicUrl}/sounds/clap.wav`),
      83: new Audio(`${publicUrl}/sounds/hihat.wav`),
      68: new Audio(`${publicUrl}/sounds/kick.wav`),
      70: new Audio(`${publicUrl}/sounds/openhat.wav`),
      71: new Audio(`${publicUrl}/sounds/boom.wav`),
      72: new Audio(`${publicUrl}/sounds/ride.wav`),
      74: new Audio(`${publicUrl}/sounds/snare.wav`),
      75: new Audio(`${publicUrl}/sounds/tom.wav`),
      76: new Audio(`${publicUrl}/sounds/tink.wav`),
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const audio = audioElements[e.keyCode];
      if (!audio) return;
      audio.currentTime = 0;
      audio.play();
      const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
      key?.classList.add(styles.playing);
      setTimeout(() => {
        if (key) {
          key.classList.remove(styles.playing);
        }
      }, 1000);
    };

    const handleTransitionEnd = (e: TransitionEvent) => {
      if (e.propertyName !== 'transform') return;
      if (e.target instanceof HTMLElement) {
        e?.target?.classList.remove(styles.playing);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('transitionend', handleTransitionEnd);

    // Fonction de nettoyage à exécuter lors du démontage du composant
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('transitionend', handleTransitionEnd);
    };
  }, [audioElements]);

  return (
    <div className={styles.container}>
      <div className={styles.keys}>
        {Object.entries(audioElements).map(([keyCode, audio]) => {
          const startIndex = audio.src.indexOf('sounds') + 7;
          const endIndex = audio.src.indexOf('.wav');

          return (
            <div key={keyCode} data-key={keyCode} className={styles.key}>
              <kbd>{String.fromCharCode(Number(keyCode))}</kbd>
              <span className={styles.sound}>
                {' '}
                {audio.src.slice(startIndex, endIndex)}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
