function Arraysmap() {
  const names = ["Abhi", "Ak", "Abishek"];
  const product = [
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 100 },
    { id: 3, name: "Product 3", price: 100 },
    { id: 4, name: "Product 4", price: 100 },
    { id: 5, name: "Product 5", price: 100 },
    { id: 6, name: "Product 6", price: 100 },
  ];

  const locations = ["Pune", "Banglore", "Noida"];
  const locationNames = locations.map((city, index) => (
    <li key={index}>{city}</li>
  ));

  return (
    <>
      <h1>Arrays with Map</h1>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>

      <p>The Product List</p>
      <ul>
        {product.map((product) => (
          <li key={product.id}>
            {product.id} {product.name} - ${product.price}
          </li>
        ))}
      </ul>

      <p>All the Cities Names</p>

      <ul>
        {locationNames}
      </ul>
    </>
  );
}
export default Arraysmap;
