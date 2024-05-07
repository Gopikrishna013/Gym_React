import React, { useState } from 'react';
import './Gym.css';
import Card from 'react-bootstrap/Card';

import Nav from './Header'


const ExerciseSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://exercisedb.p.rapidapi.com/exercises/name/${searchTerm}?limit=10`, {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '61b838d20amsh56993ceb11a1d94p1b5137jsn35ddc624d2ba',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
      });
      const data = await response.json();
      setExercises(data);
    } catch (error) {
      console.error('Error fetching exercises:', error);
    }
    setLoading(false);
  };

  return (
    <>
    <Nav className='Nav-gymm'/>
    <div className='main-gym'>
      <h3>Search Body Part for Exercise</h3>
      <input className="search-input" type="text" placeholder="Enter exercise name" value={searchTerm} onChange={(e) => 
        setSearchTerm(e.target.value)} />
      <button className="search-button" onClick={handleSearch}>Search</button>
      {loading && <p className="loading-text"><i class="fa fa-spinner fa-spin" style={{fontSize:"144px"}}></i></p>}
      <div className="exercise-cards">
        {Array.isArray(exercises) && exercises.map((exercise, index) => (
          <div key={index} className="exercise-card">

<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={exercise.gifUrl} alt={exercise.name}/>
      <Card.Body>
        <Card.Title>{exercise.name}</Card.Title>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>


            {/* <img className="exercise-image" src={exercise.gifUrl} alt={exercise.name} />
            <h2 className="exercise-name">{exercise.name}</h2> */}
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default ExerciseSearch;














// import React, { useState } from 'react';
// import './Gym.css';

// const ExerciseSearch = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [exercises, setExercises] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const handleSearch = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch(`https://exercisedb.p.rapidapi.com/exercises/name/${searchTerm}?limit=10`, {
//         method: 'GET',
//         headers: {
//           'X-RapidAPI-Key': '61b838d20amsh56993ceb11a1d94p1b5137jsn35ddc624d2ba',
//           'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
//         }
//       });
//       const data = await response.json();
//       setExercises(data);
//     } catch (error) {
//       console.error('Error fetching exercises:', error);
//     }
//     setLoading(false);
//   };

//   return (
//     <div className='main-gym'>
//       <input type="text" placeholder="Enter exercise name" value={searchTerm} onChange={(e) => 
//         setSearchTerm(e.target.value)} />
//       <button onClick={handleSearch}>Search</button>
//       {loading && <p>Loading...</p>}
//       <div className="exercise-cards">
//         {Array.isArray(exercises) && exercises.map((exercise, index) => (
//           <div key={index} className="exercise-card">
//             <img src={exercise.gifUrl} alt={exercise.name} />
//             <h2>{exercise.name}</h2>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ExerciseSearch;














// import React, { useState } from 'react';
// import './Gym.css'

// const ExerciseSearch = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [exercises, setExercises] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const handleSearch = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch(`https://exercisedb.p.rapidapi.com/exercises/name/${searchTerm}?limit=10`, {
//         method: 'GET',
//         headers: {
//           'X-RapidAPI-Key': '61b838d20amsh56993ceb11a1d94p1b5137jsn35ddc624d2ba',
//           'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
//         }
//       });
//       const data = await response.json();
//       setExercises(data);
//     } catch (error) {
//       console.error('Error fetching exercises:', error);
//     }
//     setLoading(false);
//   };

//   return (
//     <div className='main-gym'>
//       <input type="text" placeholder="Enter exercise name" value={searchTerm} onChange={(e) => 
//         setSearchTerm(e.target.value)} />
//       <button onClick={handleSearch}>Search</button>
//       {loading && <p>Loading...</p>}
//       <ul>
//         <h1>Results</h1>
//         {Array.isArray(exercises) && exercises.map((exercise, index) => (
//           <li key={index}>{exercise.name}</li>
          

//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ExerciseSearch;











// // Gym.js

// import React, { useState } from 'react';
// import axios from 'axios';

// const Gym = () => {
//   const [query, setQuery] = useState('');
//   const [gifs, setGifs] = useState([]);
//   const [exercises, setExercises] = useState([]);

//   const handleChange = (event) => {
//     setQuery(event.target.value);
//   };

//   const handleGifSearch = async (query) => {
//     try {
//       const response = await axios.get(`https://api.giphy.com/v1/gifs/search`, {
//         params: {
//           q: query,
//           api_key: 'YOUR_API_KEY',
//           limit: 5
//         }
//       });
//       setGifs(response.data.data);
//     } catch (error) {
//       console.error('Error fetching GIFs:', error);
//     }
//   };

//   const handleExerciseSearch = async (name) => {
//     const options = {
//       method: 'GET',
//       url: `https://exercisedb.p.rapidapi.com/exercises/name/${name}`,
//       params: { limit: '10' },
//       headers: {
//         'X-RapidAPI-Key': '61b838d20amsh56993ceb11a1d94p1b5137jsn35ddc624d2ba',
//         'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
//       }
//     };

//     try {
//       const response = await axios.request(options);
//       setExercises(response.data);
//     } catch (error) {
//       console.error('Error fetching exercises:', error);
//     }
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     // Perform both GIF and exercise searches
//     await handleGifSearch(query);
//     await handleExerciseSearch(query);
//   };

//   return (
//     <div>
//       <h1>Gym App</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={query}
//           onChange={handleChange}
//           placeholder="Search body part or exercise..."
//         />
//         <button type="submit">Search</button>
//       </form>
//       <div>
//         {gifs.map((gif) => (
//           <img key={gif.id} src={gif.images.fixed_height.url} alt={gif.title} />
//         ))}
//       </div>
//       <div>
//         <h2>Exercise Results</h2>
//         <ul>
//           {exercises.map((exercise, index) => (
//             <li key={index}>{exercise.name}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Gym;





















// // Gym.js

// import React, { useState } from 'react';
// import axios from 'axios';

// const Gym = () => {
//   const [query, setQuery] = useState('');
//   const [gifs, setGifs] = useState([]);

//   const handleChange = (event) => {
//     setQuery(event.target.value);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await axios.get(`https://gym-fit.p.rapidapi.com/exercises/exercise/41aeff91-79d7-4d73-883d-f61d117dc0d8`, {
//         params: {
//           q: query,
//           api_key: '61b838d20amsh56993ceb11a1d94p1b5137jsn35ddc624d2ba',
//           limit: 5
//         }
//       });
//       setGifs(response.data.data);
//     } catch (error) {
//       console.error('Error fetching GIFs:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Gym App</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={query}
//           onChange={handleChange}
//           placeholder="Search body part..."
//         />
//         <button type="submit">Search</button>
//       </form>
//       <div>
//         {gifs.map((gif) => (
//           <img key={gif.id} src={gif.images.fixed_height.url} alt={gif.title} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Gym;













