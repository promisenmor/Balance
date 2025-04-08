import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTransactions } from '../../features/transactions/transactionSlice';
import { RootState } from '../../features/store';

const TransactionList = () => {
  const dispatch = useDispatch();
  const { transactions, loading } = useSelector((state: RootState) => state.transactions);

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Recent Transactions</h2>
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {transactions.map((transaction: any) => (
            <li key={transaction.id} className="px-6 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900">{transaction.description}</p>
                  <p className="text-sm text-gray-500">{transaction.category_name}</p>
                </div>
                <div className={`text-sm font-medium ${
                  transaction.type === 'EXPENSE' ? 'text-red-600' : 'text-green-600'
                }`}>
                  {transaction.type === 'EXPENSE' ? '-' : '+'}${transaction.amount}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TransactionList; 