import React from 'react'
import { useState } from "react";
// import { Route, Routes, Link } from "react-router-dom"
// import "src/App.css";


function App() {
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [varietal, setVarietal] = useState("");
  const [vineyard, setVineyard] = useState("");
  const [vintage, setVintage] = useState("");
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [notes, setNotes] = useState("");
  const [likes, setLikes] = useState("");
  const [location, setLocation] = useState("");
  const [who_with, setWho_with] = useState("");
  const [when, setWhen] = useState("");
  const [reminder, setReminder] = useState("");
  const [message,setMessage] = useState("");


  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("TBD", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          rating: rating,
          varietal: varietal,
          vineyard: vineyard,
          vintage:vintage,
          country: country,
          region: region,
          notes: notes,
          likes:likes,
          location:location,
          who_with: who_with,
          when:when,
          reminder:reminder
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setName("");
        setRating("");
        setVarietal("");
        setVineyard("");
        setVintage("");
        setCountry("");
        setRegion("");
        setNotes("");
        setLikes("");
        setLocation("");
        setWho_with("");
        setWhen("");
        setReminder("");

        setMessage("Wine profile created successfully");
      } else {
        setMessage("Some error occured");
      }
      console.log(resJson)
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App" id="formflow">
        
        <h2>Congratulations!</h2>;

        <p> You've discovered another wine label! </p>
        <p> Please follow the prompts below to tell us all about it. </p>
        <p> We'll be certain to record this new entry for you. </p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={rating}
          placeholder="Rating"
          onChange={(e) => setRating(e.target.value)}
        />
        <input
          type="text"
          value={varietal}
          placeholder="Varietal"
          onChange={(e) => setVarietal(e.target.value)}
        />
        <input
            type="text"
            value={vineyard}
            placeholder="Vineyard"
            onChange={(e) => setVineyard(e.target.value)}
         />
        <input
            type="text"
            value={vintage}
            placeholder="Vintage"
            onChange={(e) => setVineyard(e.target.value)}
         />
        <input
            type="text"
            value={country}
            placeholder="Country"
            onChange={(e) => setCountry(e.target.value)}
         />
        <input
            type="text"
            value={region}
            placeholder="Region"
            onChange={(e) => setRegion(e.target.value)}
            />
        <input
            type="text"
            value={notes}
            placeholder="Notes"
            onChange={(e) => setNotes(e.target.value)}
        />
        <input
            type="text"
            value={likes}
            placeholder="Likes"
            onChange={(e) => setLikes(e.target.value)}
        />
        <input
            type="text"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
        />
        <input
            type="text"
            value={who_with}
            placeholder="WHo were you with?"
            onChange={(e) => setWho_with(e.target.value)}
        />
         <input
            type="text"
            value={when}
            placeholder="When?"
            onChange={(e) => setWhen(e.target.value)}
        />
        <input
            type="text"
            value={reminder}
            placeholder="Would you like a reminder? (Yes/No)"
            onChange={(e) => setReminder(e.target.value)}
        />

        </form>
        
        <button type="submit">Add Wine</button>
        
        
        <div className="message">{message ? <p>{message}</p> : null}</div>
      </div>



    
  );
}

export default App;
