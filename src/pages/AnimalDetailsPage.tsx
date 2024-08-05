import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { animals } from '../data/animals';
import AnimalDetail from '../components/AnimalDetails';

const AnimalDetailPage: React.FC = () => {
  const { group, animal } = useParams<{ group: string; animal: string }>();
  const navigate = useNavigate();
  const animalData = animals.find(a => a.name.toLowerCase().replace(/ /g, '-') === animal && a.group === group);

  const getButtonColor = (group: string) => {
    switch (group) {
      case 'mammals':
        return 'bg-[#dda15e]';
      case 'reptiles':
        return 'bg-green-500';
      case 'birds':
        return 'bg-gray-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="p-4">
      <button className="bg-blue-500 text-white p-2 mb-4" onClick={() => navigate('/')}>
        Back to Home
      </button>
      {animalData ? (
        <>
          <AnimalDetail animal={animalData} />
          <button
            className={`${getButtonColor(animalData.group)} text-white p-2 mt-4`}
            onClick={() => navigate(`/${animalData.group}`)}
          >
            Back to {animalData.group}
          </button>
        </>
      ) : (
        <p>Animal not found</p>
      )}
    </div>
  );
};

export default AnimalDetailPage;