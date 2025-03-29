import { CounterProvider } from "./Components/CounterContext";
import Counter from "./Components/Counter";
// this code about useContext hooks

function App() {
  return (
    <CounterProvider>
      <Counter />

    </CounterProvider>
  );
}

export default App;










// import './App.css';
// import Counter from "./Components/Counter";
// // import API_Call from "./Components/API_Call";
// // import S_Hook from "./Components/S_Hook";
// // import Control from "./Components/Control";

// function App() {
//   return (
//     <div className="App">
//       {/* <Control/> */}
//       <Counter/>
//       {/* <API_Call/> */}
//       {/* <S_Hook/> */}
      
//     </div>
//   );
// }

// export default App;


// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import FormPage from "./Components/DataSave";
// import ResultPage from "./Components/Control";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<FormPage />} />
//         <Route path="/result" element={<ResultPage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
