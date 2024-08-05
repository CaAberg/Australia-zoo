import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { animals, Animal } from '../data/animals';
import Sidebar from '../components/Sidebar';

interface GroupPageProps {
  groupName: string;
}

const GroupPage: React.FC<GroupPageProps> = ({ groupName }) => {
  const groupAnimals = animals.filter(animal => animal.group === groupName);
  const [activeAnimal, setActiveAnimal] = useState<Animal | null>(null);
  const navigate = useNavigate();

  const handleAnimalClick = (animal: Animal) => {
    setActiveAnimal(activeAnimal?.id === animal.id ? null : animal);
  };

  useEffect(() => {
    setActiveAnimal(null);
  }, [groupName]);

  return (
    <div className="flex">
      <Sidebar animals={groupAnimals} onAnimalClick={handleAnimalClick} activeAnimal={activeAnimal} />
      <main className="w-3/4 p-4">
        <button className="bg-blue-500 text-white p-2 mb-4" onClick={() => navigate('/')}>
          Back to Home
        </button>
        {!activeAnimal ? (
          <div>
            <h2 className="text-2xl font-bold">{groupName.charAt(0).toUpperCase() + groupName.slice(1)}</h2>
            <p>Here you can learn more about our {groupName}.</p>
          </div>
        ) : (
          <div>
            <img src={activeAnimal.image} alt={activeAnimal.name} className="w-full h-full object-cover mt-4 mb-4" />
            <h2 className="text-2xl font-bold">{activeAnimal.name}</h2>
            <p>{activeAnimal.description}</p>
            <button
              className="bg-green-500 text-white p-2 mt-4"
              onClick={() => navigate(`/${groupName}/${activeAnimal.name.toLowerCase().replace(/ /g, '-')}`, { state: { from: `/${groupName}` } })}
            >
              Read More
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default GroupPage;
