import { useState } from 'react';

import {
  GroupCreatePage,
  GroupDetailPage,
  GroupListPage,
  SettlementPage,
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
        </div>
      )}
      {page === 'login' && <SignInPage />}
      {page === 'register' && <SignUpPage />}
      {page === 'group-list' && <GroupListPage />}
      {page === 'group-create' && <GroupCreatePage />}
      {page === 'group-detail' && <GroupDetailPage />}
      {page === 'settlement' && <SettlementPage />}
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
