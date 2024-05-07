import "./App.css";
import { Table, Container, Row, Col } from "react-bootstrap";
import ReusableButton from "./ReusableButton";
function AppNested() {
  const countriesWithCities = [
    { country: "USA", cities: ["A", "B", "C"] },
    { country: "UK", cities: ["E", "F", "G"] },
    { country: "UAE", cities: ["H", "I", "J"] },
  ];

  const nestedData = [
    { Category: "Fruites", items: ["Apple", "Banana", "Chiku"] },
    { Category: "Drinks", items: ["Energy", "Friute Juice", "G"] },
    { Category: "Cloths", items: ["Hoody", "I", "Jacket"] },
  ];
  const handleClick = () => {
    console.log("Button Clicked From the App1");
  };
  return (
    <>
      <div className="App">
        <h1>Nested map Example</h1>
        <ul>
          {countriesWithCities.map((countryObj, index) => (
            <li key={index}>
              <b>{countryObj.country}</b>
              <ul>
                {countryObj.cities.map((city, cityIndex) => (
                  <li key={cityIndex}>{city}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        {/* Using Bootstrap */}
        <Container>
          <Row>
            <Col>
              <Table className="table">
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Items</th>
                  </tr>
                </thead>
                <tbody>
                  {nestedData.map((data, index) => (
                    <tr key={index}>
                      <td>{data.Category}</td>
                      <td>
                        <ul className="list-unstyled">
                          {data.items.map((item, itemIndex) => (
                            <li key={itemIndex}>{item}</li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
        <ReusableButton text="Button From App1" onClick={handleClick} />
      </div>
    </>
  );
}

export default AppNested;
