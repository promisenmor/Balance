import React from 'react';
import TransactionList from '../transactions/TransactionList';
import BudgetOverview from '../budget/BudgetOverview';
import SavingsProgress from '../savings/SavingsProgress';

const Dashboard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          <h1 className="text-3xl font-bold text-gray-900">Welcome to Balance</h1>
        </div>
        
        {/* Quick Stats */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Monthly Overview</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Income</p>
              <p className="text-2xl font-bold text-green-600">$0</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Expenses</p>
              <p className="text-2xl font-bold text-red-600">$0</p>
            </div>
          </div>
        </div>

        {/* Budget Progress */}
        <div className="bg-white rounded-lg shadow p-6">
          <BudgetOverview />
        </div>

        {/* Savings Goals */}
        <div className="bg-white rounded-lg shadow p-6">
          <SavingsProgress />
        </div>

        {/* Recent Transactions */}
        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          <TransactionList />
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 