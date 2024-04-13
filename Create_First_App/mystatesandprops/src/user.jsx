export default function user(props) {
  // console.log(props);
  const { name, age, email } = props;
  return (
    <div>
      {/* Example 1 */}
      {/* <h1>Hello {props.name}</h1> */}

      {/* Example 2 */}
      <h2>Name: {name}</h2>
      <h2>Age: {age}</h2>
      <h2>Email: {email}</h2>
    </div>
  );
}
