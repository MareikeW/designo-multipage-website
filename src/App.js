
import { Fragment } from 'react';
import GlobalStyle from "./globalStyles";
import Home from "./pages/home";


function App() {
  return (
    <Fragment>
      {/*Globale Styles müssen als Geschwisterkomponente zu den Haupt Komponenten hinzugefügt werden.*/}
      <GlobalStyle />
      <Home />
    </Fragment>
  );
}

export default App;
