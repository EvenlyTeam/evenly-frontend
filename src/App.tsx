import { useState } from 'react';

import {
  ExpenseAddPage,
  ExpenseEditPage,
  GroupCreatePage,
  GroupDetailPage,
  GroupListPage,
  SettlementPage,
  SharedSettlementPage,
  SignInPage,
  SignUpPage,
} from '@/pages';

function App() {
  /* @TODO: 임시 페이지 전환 Flag */
  const [page, setPage] = useState('default');

  return (
    <div>
      {page === 'default' && (
        <div className="flex min-h-screen flex-col items-center justify-center">
          <p className="text-lg font-medium">evenly</p>
          <GoToPageButton
            page={'Login'}
            onPageChange={() => setPage('login')}
          />
          <GoToPageButton
            page={'Register'}
            onPageChange={() => setPage('register')}
          />
          <GoToPageButton
            page={'GroupList'}
            onPageChange={() => setPage('group-list')}
          />
          <GoToPageButton
            page={'GroupCreate'}
            onPageChange={() => setPage('group-create')}
          />
          <GoToPageButton
            page={'GroupDetail'}
            onPageChange={() => setPage('group-detail')}
          />
          <GoToPageButton
            page={'Settlement'}
            onPageChange={() => setPage('settlement')}
          />
          <GoToPageButton
            page={'SharedSettlement'}
            onPageChange={() => setPage('shared-settlement')}
          />
          <GoToPageButton
            page={'SharedSettlementError'}
            onPageChange={() => setPage('shared-settlement-error')}
          />
          <GoToPageButton
            page={'ExpenseAdd'}
            onPageChange={() => setPage('expense-add')}
          />
          <GoToPageButton
            page={'ExpenseEdit'}
            onPageChange={() => setPage('expense-edit')}
          />
        </div>
      )}
      {page === 'login' && <SignInPage />}
      {page === 'register' && <SignUpPage />}
      {page === 'group-list' && <GroupListPage />}
      {page === 'group-create' && <GroupCreatePage />}
      {page === 'group-detail' && <GroupDetailPage />}
      {page === 'settlement' && <SettlementPage />}
      {page === 'shared-settlement' && <SharedSettlementPage />}
      {page === 'shared-settlement-error' && <SharedSettlementPage error />}
      {page === 'expense-add' && <ExpenseAddPage />}
      {page === 'expense-edit' && <ExpenseEditPage />}
    </div>
  );
}

const GoToPageButton = ({
  page,
  onPageChange,
}: {
  page: string;
  onPageChange: () => void;
}) => {
  return (
    <button
      className="mt-4 rounded bg-primary px-4 py-2 text-white"
      onClick={onPageChange}
    >
      {`${page} Page`}
    </button>
  );
};

export default App;
