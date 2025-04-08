import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../features/store';

const SavingsProgress = () => {
  const goals = useSelector((state: RootState) => state.savings.goals);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Savings Goals</h2>
      <div className="space-y-4">
        {goals.map((goal: any) => (
          <div key={goal.id} className="relative">
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-700">
                {goal.name}
              </span>
              <span className="text-sm font-medium text-gray-700">
                ${goal.current_amount} / ${goal.target_amount}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="h-2.5 rounded-full bg-green-600"
                style={{ width: `${(goal.current_amount / goal.target_amount) * 100}%` }}
              ></div>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Target date: {new Date(goal.target_date).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavingsProgress; 