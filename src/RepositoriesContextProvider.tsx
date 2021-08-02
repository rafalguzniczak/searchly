import React, { useState } from 'react';

export const RepositoriesContext = React.createContext({ results: [], setResults: (results: RepositoryResult[]) => {} });

const RepositoriesContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);

    return <RepositoriesContext.Provider value={{
        results,
        setResults: (results: RepositoryResult[]) => setResults(results),
      }}>
        {children}
    </RepositoriesContext.Provider>
};

export default RepositoriesContextProvider;