import React, { useState, useEffect } from 'react';
import styles from './Events.module.css';
import data from "../../../data.json";

export interface EventDetail {
  month: string;
  date: string;
  head: string;
  para: string;
  img: string;
}

export interface YearEvent {
  year: number;
  eventDetails: EventDetail[];
}

export interface EventsData {
  events: YearEvent[];
}

interface EventsProps {
  defaultYear?: number;
}

const Events: React.FC<EventsProps> = ({ defaultYear }) => {
  const [selectedYear, setSelectedYear] = useState<number>(
    defaultYear || Math.max(...data.events.map(event => event.year))
  );
  const [years, setYears] = useState<number[]>([]);

  useEffect(() => {
    const uniqueYears = [...new Set(data.events.map(event => event.year))];
    setYears(uniqueYears.sort((a, b) => b - a));
  }, [data]);

  const selectedYearEvents = data.events.find(
    event => event.year === selectedYear
  )?.eventDetails || [];

  return (
    <div className={styles.events}>
      <h2>Our Event Journey</h2>

      <div className={styles.yearScroll}>
        <div className={styles.yearButtons}>
          {years.map(year => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`${styles.yearButton} ${
                selectedYear === year ? styles.active : ''
              }`}
            >
              {year}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.innerDiv}>
        {selectedYearEvents.length > 0 && (
          <>
            <div className={`${styles.card} ${styles.large}`}>
              <div className={styles.content}>
                <div className={styles.date}>
                  <span>{selectedYearEvents[0].month}</span>
                  <span>{selectedYearEvents[0].date}</span>
                </div>
                <div className={styles.text}>
                  <strong>{selectedYearEvents[0].head}</strong>
                  <span>{selectedYearEvents[0].para}</span>
                </div>
              </div>
              <img src={selectedYearEvents[0].img} alt="" />
            </div>

            <div className={styles.subContent}>
              {selectedYearEvents.slice(1).map((event, index) => (
                <div
                  key={index}
                  className={`${styles.card} ${styles.small}`}
                >
                  <div className={styles.content}>
                    <div className={styles.date}>
                      <span>{event.month}</span>
                      <span>{event.date}</span>
                    </div>
                    <div className={styles.text}>
                      <strong>{event.head}</strong>
                      <span>{event.para}</span>
                    </div>
                  </div>
                  <img src={event.img} alt="" />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Events;