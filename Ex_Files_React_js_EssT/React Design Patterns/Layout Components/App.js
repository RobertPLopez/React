import { SplitScreen } from '../SplitScreen';

const LeftHandComponent = () => {
    return <h1> Left!</h1>;
} 

const RightHandComponent = () => {
    return <p>Right!</p>;
} 

function App () {
    return (
        <SplitScreen leftWeight={1} rightWeight={3}>
            <LeftHandComponent />
            <RightHandComponent />
        </SplitScreen>
    )
}

const people = [{
    name: 'Jessica Jones',
    age: 33,
    hairColor: 'black',
    hobbes: ['PI', 'Drinking', 'strong'],
}, {
    name: 'John Dow',
    age: 54,
    hairColor: 'Brown',
    hobbes: ['swimming', 'chess', 'video games'],
}, {
    name: 'Matt Murdock',
    age: 27,
    hairColor: 'red',
    hobbes: ['fighting', 'swords', 'ninja'],
}];

const products = [{
    name: 'tv',
    price: '$33.33',
    description: 'flat inch doesnt work',
    rating: 3.8,
}, {
    name: 'laptop',
    price: '$43.33',
    description: 'runs fast',
    rating: 4.0,
}, {
    name: 'phone',
    price: '$1000.00',
    description: 'to expensive',
    rating: 1.2,
}];

export default App;

//can add style compoents into each of the dfferent components.
//the weights items template allows you manage what each side looks like
//This allows you put induvisual properties to each of the component respectively. The layout between these two JS file is genrally considered much more developer friendly. 