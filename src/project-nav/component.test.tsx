import { setupShallowTest } from '../tests/enzyme-util/shallow';
import { ProjectNav } from './component';

describe('<ProjectNav />', () => {
  const defaultGenerator = () => ({});
  const setupRenderer = setupShallowTest(ProjectNav, defaultGenerator);

  it('renders correctly', () => {
    const { wrapper } = setupRenderer();
    expect(wrapper).toMatchSnapshot();
  });
});
