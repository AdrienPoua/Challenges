import { useEffect, useMemo } from 'react';
import styles from './styles.module.scss';
import clap from './sounds/clap.wav';
import kick from './sounds/kick.wav';
import snare from './sounds/snare.wav';
import tom from './sounds/tom.wav';
import hihat from './sounds/hihat.wav';
import boom from './sounds/boom.wav';
import ride from './sounds/ride.wav';
import openhat from './sounds/openhat.wav';
import tink from './sounds/tink.wav';


export default function Index() {
  const audioElements: { [key: number]: HTMLAudioElement } = useMemo(() => {
    return {
      65: new Audio(clap),
      83: new Audio(kick),
      68: new Audio(kick),
      70: new Audio(openhat),
      71: new Audio(boom),
      72: new Audio(ride),
      74: new Audio(snare),
      75: new Audio(tom),
      76: new Audio(tink),
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
