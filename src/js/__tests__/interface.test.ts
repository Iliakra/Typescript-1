import Cart from '../cart';
import Movie from '../demo';
import Buyable from '../interface';

test ('testing cart-adding', () => {
    const cart = new Cart();
    const movie = new Movie(25, 'Мстители', 2012, 'США', 'Slogan', 'фантастика, боевик, фентези', 137, 45);
    cart.add(movie);
    expect(cart.items.length).toBe(1);
})