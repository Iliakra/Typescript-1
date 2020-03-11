import Cart from '../cart';
import Movie from '../demo';
import Buyable from '../interface';

test ('testing cart-adding', () => {
    const cart = new Cart();
    const movie = new Movie(25, 'Мстители','The Avengers', 2012, 'USA', 'Avengers Assemble!', ['fantasy', 'action', 'adventure'], 97, 1000);
    cart.add(movie);
    expect(cart.items.length).toBe(1);
})