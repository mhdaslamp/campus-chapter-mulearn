import React, { useState } from 'react';
import styles from './EventsPage.module.css';
import data from '/data.json';
import { Link } from 'react-router-dom';

const EventsPage = () => {
  const [selectedYear, setSelectedYear] = useState<number>(
    Math.max(...data.events.map(event => event.year))
  );

  const years = [...new Set(data.events.map(event => event.year))].sort((a, b) => b - a);
  const selectedYearEvents = data.events.find(
    event => event.year === selectedYear
  )?.eventDetails || [];

  return (
    <div className={styles.eventsPage}>
      <div className={styles.header}>
        <Link to="/" className={styles.backButton}>← Back to Home</Link>
        <h1>Our Event Journey</h1>
      </div>

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

      <div className={styles.eventsGrid}>
        {selectedYearEvents.map((event, index) => (
          <div key={index} className={styles.eventCard}>
            <div className={styles.eventImage}>
              <img src={event.img} alt={event.head} />
            </div>
            <div className={styles.eventContent}>
              <div className={styles.eventDate}>
                <span className={styles.month}>{event.month}</span>
                <span className={styles.date}>{event.date}</span>
              </div>
              <h2 className={styles.eventTitle}>{event.head}</h2>
              <p className={styles.eventDescription}>{event.para}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsPage; 