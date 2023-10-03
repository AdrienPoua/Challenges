import { useEffect } from 'react';
import styles from './styles.module.scss';

export default function Index() {
  useEffect(() => {
    const secondHand = document.querySelector<HTMLElement>(
      '[data-hand="seconds"]'
    );
    const minsHand = document.querySelector<HTMLElement>('[data-hand="mins"]');
    const hourHand = document.querySelector<HTMLElement>('[data-hand="hours"]');

    function setDate() {
      const date = new Date();
      const seconds = date.getSeconds();
      const mins = date.getMinutes();
      const hour = date.getHours();
      const secondsDegrees = (seconds / 60) * 360 + 90;
      secondHand?.style.setProperty('--rotation', `${secondsDegrees}deg`);
      const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90;
      minsHand?.style.setProperty('--rotation', `${minsDegrees}deg`);
      const hourDegrees = (hour / 12) * 360 + (mins / 60) * 30 + 90;
      hourHand?.style.setProperty('--rotation', `${hourDegrees}deg`);
    }

    setInterval(setDate, 1000);

    setDate();
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.clock}>
        <div className={styles['clock-face']}>
          <div className={styles.hand} data-hand="seconds" />
          <div className={styles.hand} data-hand="mins" />
          <div className={styles.hand} data-hand="hours" />
        </div>
      </div>
    </div>
  );
}
