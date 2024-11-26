import { createRoot } from 'react-dom/client';

const el = document.getElementById('root')!;

const root = createRoot(el);

// eslint-disable-next-line react-refresh/only-export-components
const App = () => {
  return (
    <div>
      <h1>Hi there!</h1>
    </div>
  );
};

root.render(<App />);
