import { useState, useEffect } from 'react';
import data from '../../database/database.json';
import TripsFilter from '../../components/tripsFilter/tripsFilter';
import Trips from '../../components/trips/trips';

const Main = () => {
  const [trips, setTrips] = useState([]);
  const [tripTitle, setTripTitle] = useState('');
  const [tripDuration, setTripDuration] = useState('');
  const [tripLevel, setTripLevel] = useState('');
  const [filteredTrips, setFilteredTrips] = useState([]);

  useEffect(() => {
    setTrips(data.tripsList);
  }, []);

  const inRange = (x, min, max) => ((x - min) * (x - max) <= 0);

  useEffect(() => {
    if (tripDuration.length === 1 && tripLevel.length === 0 && trips) {
      setFilteredTrips(trips
        .filter((trip) => (trip.title.toLowerCase().includes(tripTitle.toLowerCase()))));
    } else {
      setFilteredTrips(trips
        .filter((trip) => (
          trip.title.toLowerCase().includes(tripTitle.toLowerCase())))
        .filter((trip) => (
          inRange(trip.duration, tripDuration[0], tripDuration[1])))
        .filter((trip) => trip.level === tripLevel));
    }
  }, [tripDuration, tripTitle, tripLevel, trips]);

  return (
    <main>
      <TripsFilter
        tripTitle={tripTitle}
        setTripTitle={setTripTitle}
        tripDuration={tripDuration}
        setTripDuration={setTripDuration}
        tripLevel={tripLevel}
        setTripLevel={setTripLevel}
      />
      <Trips trips={filteredTrips} />
    </main>
  );
};

export default Main;
