import MenuItem from './MenuItem';

function MenuList({ foodItems }) {
  return (
    <>
      {foodItems.map((item) => (
        <MenuItem key={item.id} {...item} />
      ))}
    </>
  );
}

export default MenuList;
