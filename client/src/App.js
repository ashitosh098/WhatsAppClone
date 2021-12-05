import { lazy, Suspense } from 'react';

//components
import UserProvider from './context/UserProvider';
import AccountProvider from './context/AccountProvider';

import TemplateProvider from './Theme/TemplateProvider';
import Loader from './components/Loader/Loader';

const Messenger = lazy(() => import('./components/Messenger'));

function App() {
  return (
    <TemplateProvider>
      <UserProvider>
        <AccountProvider>
          <Suspense fallback={<Loader />}>
            <Messenger/>
          </Suspense>
        </AccountProvider>
      </UserProvider>
    </TemplateProvider>
  );
}

export default App;
