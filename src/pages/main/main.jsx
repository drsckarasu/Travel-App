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

  const inRange = (x, num) => {
    if (+num === 0) {
      return x < 5;
    }
    if (+num === 5) {
      return x < 10;
    }
    if (+num === 10) {
      return x >= 10;
    }
    return false;
  };

  useEffect(() => {
    if (!tripDuration && tripLevel) {
      setFilteredTrips(trips
        .filter((trip) => (
          trip.title.toLowerCase().includes(tripTitle.toLowerCase())))
        .filter((trip) => trip.level === tripLevel));
    } else if (!tripLevel && tripDuration) {
      setFilteredTrips(trips
        .filter((trip) => (
          trip.title.toLowerCase().includes(tripTitle.toLowerCase())))
        .filter((trip) => (
          inRange(trip.duration, tripDuration))));
    } else if (!tripLevel && !tripDuration) {
      setFilteredTrips(trips
        .filter((trip) => (
          trip.title.toLowerCase().includes(tripTitle.toLowerCase()))));
    } else if (tripLevel && tripDuration) {
      setFilteredTrips(trips
        .filter((trip) => (
          trip.title.toLowerCase().includes(tripTitle.toLowerCase())))
        .filter((trip) => (
          inRange(trip.duration, tripDuration)))
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
