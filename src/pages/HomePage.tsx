import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { animals, Animal } from '../data/animals';
import Sidebar from '../components/Sidebar';

const HomePage: React.FC = () => {
  const [activeAnimal, setActiveAnimal] = useState<Animal | null>(null);
  const navigate = useNavigate();

  const handleAnimalClick = (animal: Animal) => {
    setActiveAnimal(activeAnimal?.id === animal.id ? null : animal);
  };
  useEffect(() => {
    setActiveAnimal(null);
  }, []);

  return (
    <div className="flex">
      <Sidebar animals={animals} onAnimalClick={handleAnimalClick} activeAnimal={activeAnimal} />
      <main className="w-3/4 p-4">
        {!activeAnimal ? (
          <div>
            <h2 className="text-2xl font-bold">Welcome to Australia Zoo</h2>
            <p>Select an animal to learn more.</p>
          </div>
        ) : (
          <div>
            <img src={activeAnimal.image} alt={activeAnimal.name} className="w-full h-full object-cover mt-4 mb-4" />
            <h2 className="text-2xl font-bold">{activeAnimal.name}</h2>
            <p>{activeAnimal.description.substring(0, 200)}...</p>
            <p><strong>Diet:</strong> {activeAnimal.food}</p>
            <p><strong>Group:</strong> <a href={`/${activeAnimal.group}`}>{activeAnimal.group}</a></p>
            <button
              className="bg-green-500 text-white p-[0.75rem] mt-4 rounded"
              onClick={() => navigate(`/${activeAnimal.group}/${activeAnimal.name.toLowerCase().replace(/ /g, '-')}`, { state: { from: '/' } })}
            >
              Read More
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default HomePage;
