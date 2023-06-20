import { Component, useEffect, useState } from 'react'

function ResultData(){
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        const dataFetch = {
          name: 'masyhar',
          country: 'indonesia'
        }
        setData(dataFetch);
        setIsLoading(false)
      }, 3000)
    }
    fetchData();
  }, []);

  return(
    <main>
      {isLoading ? 
        (
          <div>loading...</div>
        ) : (
          <div>
            <h2>here's your data</h2>
            <p>{data.name}</p>
            <p>{data.country}</p>
          </div>
        )
      }
    </main>
  )
}

function App() {

  return (
    <>
      <h1>Hallo!</h1>
      <ResultData />
    </>
  )
}

export default App
