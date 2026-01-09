import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';
import { TimerIcon } from 'lucide-react';

export function App() {
  return (
    <>
      <Heading>
        Olá mundo 1{' '}
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam
        eaque mollitia explicabo eos ipsa labore iusto necessitatibus!
        Perferendis facilis provident maxime accusamus excepturi ut voluptate
        sapiente, libero culpa unde sint?
      </p>
    </>
  );
}
