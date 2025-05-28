import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { LandingLayout } from './layouts';
import { landingLink } from './data/link';

function App() {
  return (
    <RouterProvider
      router={createBrowserRouter([
        {
          element: (
            <>
              <LandingLayout />
            </>
          ),
          children: [
            ...landingLink.map(({ path, element: Element }) => ({
              path,
              element: <Element />
            })),
          ]
        },
      ])}
    />
  );
}

export default App;
