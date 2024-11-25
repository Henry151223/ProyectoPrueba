import React from 'react';
import { Power, Users, User } from 'lucide-react';

interface Character {
  id: string;
  name: string;
  ki: string;
  maxKi: string;
  race: string;
  gender: string;
  description: string;
  image: string;
}

interface CharacterCardProps {
  character: Character;
}

const CharacterCard = ({ character }: CharacterCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <div className="h-48 overflow-hidden">
        <img
          src={character.image || 'https://images.unsplash.com/photo-1535704882196-765e5fc62a53?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}
          alt={character.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{character.name}</h2>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{character.description}</p>
        
        <div className="space-y-2">
          <div className="flex items-center text-sm">
            <Power className="w-4 h-4 text-orange-500 mr-2" />
            <span className="text-gray-700">Power Level: {character.maxKi}</span>
          </div>
          <div className="flex items-center text-sm">
            <Users className="w-4 h-4 text-orange-500 mr-2" />
            <span className="text-gray-700">Race: {character.race}</span>
          </div>
          <div className="flex items-center text-sm">
            <User className="w-4 h-4 text-orange-500 mr-2" />
            <span className="text-gray-700">Gender: {character.gender}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;