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

export default App;

//can add style compoents into each of the dfferent components.
//the weights items template allows you manage what each side looks like
//This allows you put induvisual properties to each of the component respectively. The layout between these two JS file is genrally considered much more developer friendly. 