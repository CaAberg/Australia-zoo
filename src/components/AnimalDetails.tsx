import React from 'react';
import { Animal } from '../data/animals';

interface AnimalDetailProps {
  animal: Animal;
}

const AnimalDetail: React.FC<AnimalDetailProps> = ({ animal }) => (
  <div className="p-4">
    <h2 className="text-2xl font-bold">{animal.name}</h2>
    <img src={animal.image} alt={animal.name} className="w-full h-full object-cover mt-4 mb-4" />
    <p>{animal.description}</p>
    <p><strong>Lifespan:</strong> {animal.lifespan}</p>
    <p><strong>Diet:</strong> {animal.food}</p>
    <p><strong>Length:</strong> {animal.length}</p>
    <p><strong>Weight:</strong> {animal.weight}</p>
    <p><strong>Found:</strong> {animal.found}</p>
    <p><strong>Group:</strong> {animal.group}</p>
  </div>
);

export default AnimalDetail;



