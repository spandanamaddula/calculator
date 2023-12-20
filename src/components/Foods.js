import React, { useState } from 'react';

 

const Foods = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState('')

 

  const submitHandler = (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading state

 

    fetch('https://64f1a6bb0e1e60602d24124c.mockapi.io/api/v1/foodie'
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((responseData) => {
        setData(responseData); // Set fetched data
        setIsLoading(false); // Clear loading state
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false); // Clear loading state in case of error
      });
  };

 

  return (
<center>
<h4>Food recipe app</h4> <br />
<form onSubmit={submitHandler}>
<input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />{' '}
<br />
<br />
<input type="submit" value="search" />
</form>
      {isLoading ? (
<p>Loading...</p>
      ) : (
        data && (
<div>
<h2>Fetched Data:</h2>
<pre>{JSON.stringify(data, null, 2)}</pre>
</div>
        )
      )}
</center>
  );
};

 

export default Foods