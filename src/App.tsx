import React from "react";
import RepositoriesContextProvider from "./RepositoriesContextProvider";
import Header from "./view/Header";
import Results from "./view/Results";
import Search from "./view/Search";

const App = () => {
  return (
    <>
      <Header />
      <RepositoriesContextProvider>
        <Search />
        <Results />
      </RepositoriesContextProvider>
    </>
  );
};

export default App;
