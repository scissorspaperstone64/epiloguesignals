import React from 'react';
import { Signal } from '../types';
import SignalCard from './SignalCard';

interface SignalGridProps {
  signals: Signal[];
}

const SignalGrid: React.FC<SignalGridProps> = ({ signals }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {signals.map(signal => (
        <SignalCard key={signal.id} signal={signal} />
      ))}
    </div>
  );
};

export default SignalGrid;
