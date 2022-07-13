export const SmallPersonListItem = ({ person }) => {
    const { name, age} = person ;

    return (
        <p>Names: {name}, Age: {age} years</p>
    );
}

//There is no styling indicating how the item is gonna be displayed 