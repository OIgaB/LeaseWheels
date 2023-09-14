import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../Sidebar';
import { Loader } from '../Loader';
// import scss from '../../styles/index.module.scss';


const SharedLayout = () => {

  return (
    <div>
        <Sidebar />
        <main>
            <Suspense fallback={<Loader />}>
              <Outlet />    {/* область перегляду */}
            </Suspense>
        </main>
    </div>
  );
};

export default SharedLayout;