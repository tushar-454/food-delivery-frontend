import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategorise } from '../../api/categorise';
import { AppDispatch, RootState } from '../../store/store';
import { CategoryItemType } from '../../types/categoriseSlicesTypes';
import Container from '../shared/Container';
import ExploreMenuItem from './ExploreMenuItem';

const ExploreMenu = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, isError, categorise } = useSelector((state: RootState) => state.categorise);
  useEffect(() => {
    dispatch(getCategorise());
  }, [dispatch]);
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
        {isLoading && <p>Loading...</p>}
        {isError && (
          <p className='my-10 animate-pulse text-red-500'>Something went wrong getting menu</p>
        )}
        {!isError && !isLoading && (categorise ?? []).length > 0 && (
          <div className='my-10 flex flex-wrap items-center justify-evenly gap-4 border-b-2 pb-8'>
            {categorise?.map((menu: CategoryItemType) => (
              <ExploreMenuItem key={menu._id} menu={menu} />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
};

export default ExploreMenu;
