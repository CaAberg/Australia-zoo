import React from 'react';
import { Animal } from '../data/animals';

interface SidebarProps {
  animals: Animal[];
  onAnimalClick: (animal: Animal) => void;
  activeAnimal?: Animal | null;
}

const Sidebar: React.FC<SidebarProps> = ({ animals, onAnimalClick, activeAnimal }) => (
  <aside className="max-w-1/4 h-full p-4 my-8 flex flex-row bg-gray-100 rounded">
    <ul>
      {animals.map(animal => (
        <li
          key={animal.id}
          className={`p-2 cursor-pointer ${activeAnimal?.id === animal.id ? 'bg-gray-300 rounded' : ''}`}
          onClick={() => onAnimalClick(animal)}
        >
          {animal.name}
        </li>
      ))}
    </ul>
  </aside>
);

export default Sidebar;
