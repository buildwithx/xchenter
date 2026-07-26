import { AppHeader } from '@/components/app-header';
import { Outlet } from 'react-router';

export default function App() {
  return (
    <div>
      <AppHeader />
      <main className="mt-14">
        <Outlet />
      </main>
    </div>
  );
}
