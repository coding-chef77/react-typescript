interface ListProps<T extends { toString(): string }> {
    items: T[];
    render: (item: T) => React.ReactNode;
  }
  
  function List<T extends { toString(): string }>(props: ListProps<T>) {
    const { items, render } = props;
  
    return (
      <ul>
        {items.map((item) => (
          <li key={item.toString()}>{render(item)}</li>
        ))}
      </ul>
    );
  }
export default List;
