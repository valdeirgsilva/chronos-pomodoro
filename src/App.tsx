import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';

export function App() {
  return (
    <>
      <Heading attr={123} attr2='String'>
        Olá mundo 1
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
