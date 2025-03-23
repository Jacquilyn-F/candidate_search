import { useState, useEffect } from 'react';
import { searchGithub } from '../api/API';
import CandidateCard from '../components/CandidateCard';
import type { Candidate } from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const fetchCandidates = async () => {
      const data = await searchGithub();
      setCandidates(data);
    };
    fetchCandidates();
  }, []);

  const handleUserChoice = (isSelected: boolean) => {
    if (isSelected) {
      setSavedCandidates((prev) => [...prev, candidates[currentIndex]]);
      localStorage.setItem(
        'savedCandidates',
        JSON.stringify([...savedCandidates, candidates[currentIndex]])
      );
    }
    setCurrentIndex((prev) => prev + 1);
  };

  if (currentIndex >= candidates.length) {
    return <h2>No more candidates available</h2>;
  }

  return (
    <div>
      <CandidateCard
        currentUser={candidates[currentIndex]}
        userChoice={handleUserChoice}
      />
    </div>
  );
};

export default CandidateSearch;
