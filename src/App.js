import "./App.css";
import User from "./User"
// import Form from "./Form";


// const data = [
//   { id: 1,
//     fruitName: "Mango", 
//     price: 20.0 
//   },
//   {
//     id: 2,
//     fruitName: "Orange",
//     price: 30.0,
//   },
//   {
//     id: 3,
//     fruitName: "Banana",
//     price: 45.0,
//   },
//   {
//     id: 4,
//     fruitName: "Mango",
//     price: 20.0,
//   },
//   {
//     id: 5,
//     fruitName: "Raspberries",
//     price: 80.0,
//   },
//   {
//     id: 6,
//     fruitName: "Melon",
//     price: 60.0,
//   },
// ];

function App() {
  return (
    // <div>
    //   {data.map((item) => (
    //     <div key = { item.id }
    //     style = { {border: "1px solid black", width: "20%", margin: "2%"} }
    //     >
    //       <p>{item.fruitName}</p>
    //       <small>{item.price}</small>
    //     </div>
    //   ))}
    //   {/* //  <Form/> */}
    // </div>
    <div>
      <User/>
    </div>
  );
}

export default App;
