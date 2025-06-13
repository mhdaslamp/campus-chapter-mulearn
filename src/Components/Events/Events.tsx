import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Events.module.css';
import data from '../../../data.json';

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
  collegeCode: string;
  college: string;
  about: string;
  gallery: {
    row1: { image: string }[];
    row2: { image: string }[];
  };
  statistics: {
    studentsCount: number;
    activeMembers: number;
    InterestGroups: number;
    karmaEarned: number;
    rank: number;
  };
  team: {
    [key: string]: { name: string; image: string; };
  };
  discordLink: string;
  whatsAppLink: string;
  email: string;
  linkedIn: string;
  instagram: string;
  X: string;
  youtube: string;
}

const Events: React.FC = () => {
  const eventsData = data as EventsData;
  const [selectedYear, setSelectedYear] = useState<number>(2025);
  const navigate = useNavigate();

  // Get events for the selected year directly from the array
  const currentYearEvent = eventsData.events.find(event => event.year === selectedYear);
  const eventDetails = currentYearEvent?.eventDetails || [];
  
  // Use the first event as recent event (since it's already in the correct order in data.json)
  const recentEvent = eventDetails[0];
  const otherEvents = eventDetails.slice(1, 4);

  // Debug logs
  console.log('Full data:', data);
  console.log('Current year events:', eventDetails);
  console.log('Recent Event:', recentEvent);
  console.log('Other Events:', otherEvents);

  const years = eventsData.events.map(event => event.year).sort((a, b) => b - a);

  const handleYearChange = (year: number) => {
    setSelectedYear(year);
  };

  const handleViewAll = () => {
    navigate('/all-events');
  };

  return (
    <div className={styles.events} id="events">
      <h2>Our Event Journey</h2>
      <div className={styles.yearSelector}>
        {years.map((year) => (
          <button
            key={year}
            className={`${styles.yearButton} ${selectedYear === year ? styles.active : ""}`}
            onClick={() => handleYearChange(year)}
          >
            {year}
          </button>
        ))}
      </div>
      <div className={styles.eventsContainer}>
        <div className={styles.eventsContent}>
          {/* Recent Event - Left Side */}
          {recentEvent && (
            <div className={styles.recentEventContainer}>
              <div className={`${styles.eventCard} ${styles.recent}`}>
                <div className={styles.eventDate}>{`${recentEvent.month} ${recentEvent.date}`}</div>
                <img src={recentEvent.img} alt={recentEvent.head} className={styles.eventImage} />
                <div className={styles.eventContent}>
                  <h3 className={styles.eventTitle}>{recentEvent.head}</h3>
                  <p className={styles.eventDescription}>{recentEvent.para}</p>
                </div>
              </div>
            </div>
          )}
          {/* Other Events - Right Side */}
          <div className={styles.otherEventsContainer}>
            {otherEvents.map((event: EventDetail, index: number) => (
              <div key={index} className={styles.eventCard}>
                <div className={styles.eventDate}>{`${event.month} ${event.date}`}</div>
                <img src={event.img} alt={event.head} className={styles.eventImage} />
                <div className={styles.eventContent}>
                  <h3 className={styles.eventTitle}>{event.head}</h3>
                  <p className={styles.eventDescription}>{event.para}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className={styles.viewAllButton} onClick={handleViewAll}>View All Events</button>
      </div>
    </div>
  );
};

export default Events;