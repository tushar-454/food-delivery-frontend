import assets from '../../assets/assets';
import { ExploreMenuType } from '../../types/ExploreMenu';
import Container from '../shared/Container';
import ExploreMenuItem from './ExploreMenuItem';

const exploremenus: ExploreMenuType[] = [
  {
    image: assets.salad,
    name: 'Salad',
  },
  {
    image: assets.rolls,
    name: 'Rolls',
  },
  {
    image: assets.deserts,
    name: 'Deserts',
  },
  {
    image: assets.sandwich,
    name: 'Sandwich',
  },
  {
    image: assets.coke,
    name: 'Coke',
  },
  {
    image: assets.pureVeg,
    name: 'Pure Veg',
  },
  {
    image: assets.pasta,
    name: 'Pasta',
  },
  {
    image: assets.noodles,
    name: 'Noodles',
  },
];

const ExploreMenu = () => {
  return (
    <section>
      <Container>
        {/* explore menu wrapper  */}
        <div className='w-full space-y-2 lg:w-3/5'>
          <h2 className='text-2xl font-bold'>Explore our menu</h2>
          <p className='text-neutral-500'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum quia tenetur
            voluptas, error dolor corporis harum amet maiores obcaecati praesentium dignissimos
            voluptatibus animi sed aliquam consequatur itaque unde non eveniet?
          </p>
        </div>
        {/* all food menus  */}
        <div className='my-10 flex flex-wrap items-center justify-evenly gap-4 border-b-2 pb-8'>
          {exploremenus.map((menu: ExploreMenuType) => (
            <ExploreMenuItem key={Math.random()} menu={menu} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ExploreMenu;
