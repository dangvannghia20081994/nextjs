const Test = ({ item, condition, ...rest }) => {
  return (
    item && <div>
      {item.name}
      <button onClick={() => condition(item)}>Click</button>
    </div>
  )
}

export default Test