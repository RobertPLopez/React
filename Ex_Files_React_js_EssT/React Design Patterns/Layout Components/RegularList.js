export const RegularList =({ 
    items, 
    resourceName, 
    itemComponent: itemComponent,
}) => {
    return (
        <>
        {items.map((item, i) => (
            <ItemComponent key={i} {...{ [resourceName]: item }}/>
        ))}
        </>
    )
}