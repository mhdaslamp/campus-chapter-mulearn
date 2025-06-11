import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AllEventsPage.module.css';
import data from "/data.json";

interface EventDetail {
  month: string;
  date: string;
  head: string;
  para: string;
  img: string;
}

interface YearEvent {
  year: number;
  eventDetails: EventDetail[];
}

interface EventsData {
  events: YearEvent[];
}

const AllEventsPage = () => {
  const navigate = useNavigate();
  const [selectedYear, setSelectedYear] = useState<number>(2025);
  const eventsData = data as EventsData;
  const years = eventsData.events.map(event => event.year).sort((a, b) => b - a);
  
  const selectedYearEvents = eventsData.events.find(
    event => event.year === selectedYear
  )?.eventDetails || [];

  return (
    <div className={styles.allEventsPage}>
      <div className={styles.header}>
        <button onClick={() => navigate('/')} className={styles.backButton}>
          ← Back to Home
        </button>
        <h1>All Events {selectedYear}</h1>
      </div>

      <div className={styles.yearSelector}>
        {years.map((year) => (
          <button
            key={year}
            className={`${styles.yearButton} ${selectedYear === year ? styles.active : ""}`}
            onClick={() => setSelectedYear(year)}
          >
            {year}
          </button>
        ))}
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

export default AllEventsPage; 