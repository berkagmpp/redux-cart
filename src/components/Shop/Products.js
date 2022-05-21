import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
    {
        id: 'p1',
        title: 'Atonement',
        writer: 'Ian McEwan',
        price: 6,
        description: 'It tells the story of protagonist Briony Tallis crime and how it changes her life, as well as those of her sister Cecilia and her lover Rob.'
    },
    {
        id: 'p2',
        title: 'The Corrections',
        writer: 'Jonathan Franzen',
        price: 5,
        description: 'The Corrections is a 2001 novel by American author Jonathan Franzen.'
    },
    {
        id: 'p3',
        title: 'The Road',
        writer: 'Cormac McCarthy',
        price: 6.5,
        description: 'The book details the grueling journey of a father and his young son over a period of several months across a landscape blasted by an unspecified cataclysm that has destroyed industrial civilization and almost all life.'
    }
];

const Products = (props) => {
    return (
        <section className={classes.products}>
            <h2>Buy your favorite books</h2>
            <ul>
                {DUMMY_PRODUCTS.map(book => (
                    <ProductItem
                        key={book.id}
                        id={book.id}
                        title={book.title}
                        writer={book.writer}
                        price={book.price}
                        description={book.description}
                    />
                ))}
            </ul>
        </section>
    );
};

export default Products;
