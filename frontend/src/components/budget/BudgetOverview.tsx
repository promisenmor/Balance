import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../features/store';

const BudgetOverview = () => {
  const budgets = useSelector((state: RootState) => state.budgets.budgets);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Budget Overview</h2>
      <div className="space-y-4">
        {budgets.map((budget: any) => (
          <div key={budget.id} className="relative">
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-700">
                {budget.category.name}
              </span>
              <span className="text-sm font-medium text-gray-700">
                ${budget.spent} / ${budget.amount}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className={`h-2.5 rounded-full ${
                  (budget.spent / budget.amount) > 0.9 ? 'bg-red-600' : 'bg-blue-600'
                }`}
                style={{ width: `${(budget.spent / budget.amount) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BudgetOverview; 