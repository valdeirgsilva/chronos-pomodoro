import { Container } from '../../components/Container';
import { MainTemplate } from '../../templates/MainTemplate';

export function NotFound() {
  return (
    <MainTemplate>
      <Container>
        <h1>Página não encontrada</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam culpa
          consectetur enim, quidem aut quod omnis minima nemo. Doloribus vitae
          porro nesciunt nulla sint, eum voluptates commodi culpa expedita
          possimus?
        </p>
      </Container>
    </MainTemplate>
  );
}
