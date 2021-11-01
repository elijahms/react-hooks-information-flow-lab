import Item from "./Item"

const Filter = ({onCategoryChange}) => {
    return (
        <div>
            <ul className="Items">
                {onCategoryChange.map((item) => (
                <Item key={item.id} name={item.name} category={item.category} />
                ))}
            </ul>
        </div>
    )
}

export default Filter

