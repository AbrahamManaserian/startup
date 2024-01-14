import { Button } from '@mui/material';
import { useContext } from 'react';
import { AppContext } from '../components/Root';

export default function BasketPage() {
  const context = useContext(AppContext);
  return (
    <div>
      <Button onClick={() => context.setBasket(++context.basket)}>asd</Button>
      This is Basket page
    </div>
  );
}
