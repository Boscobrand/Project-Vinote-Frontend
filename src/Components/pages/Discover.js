// import { Router } from 'express';
import React, { useState } from 'react';
import axios from 'axios'

function Discover() {
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
  
  
  // await fetch("mongodb://localhost/User"
//   const data = await axios.post('http://localhost:5002/api/User')


  
  let handleSubmit = async (e) => {
    e.preventDefault();
    console.log(`
      name: ${name},
      rating: ${rating},
      varietal: ${varietal},
      vineyard: ${vineyard},
      vintage: ${vintage},
      country:${country},
      region: ${region},
      notes: ${notes},
      likes:${likes},
      location:${location},
      who_with: ${who_with},
      when: ${when},
      reminder: ${reminder}`)
      
    // try {
      // let res = await axios.post("http://localhost:5001/api/User",{
    axios.post("http://localhost:5002/entry/", {  
      // axios.post("https://vinote74.herokuapp.com/",{    
          name: name,
          rating: rating,
          varietal: varietal,
          vineyard: vineyard,
          vintage: vintage,
          country: country,
          region: region,
          notes: notes,
          likes:likes,
          location:location,
          who_with: who_with,
          when:when,
          reminder:reminder
        }
      ) 
      
      // let resJson = await res.json();
      // if (res.status === 200) {
      .then( res => {
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
    })
      // } else {
      //   setMessage("Some error occured");
      // }
    //   console.log(resJson)
    // } 
    .catch(err => {
      console.log(err)
    });
    //   console.log(err);
    // }
  
};

  return (
    <div className="App" id="formflow">
        <form onSubmit={handleSubmit} method="post">
          <input
            type="text"
            value={name}
            placeholder="Name of Wine"
            onChange={(e) => setName(e.target.value)} />
          <input
            type="text"
            value={rating}
            placeholder="Your Rating (1 to  5 where 5 = highest)"
            onChange={(e) => setRating(e.target.value)} />
          <input
            type="text"
            value={varietal}
            placeholder="Varietal"
            onChange={(e) => setVarietal(e.target.value)} />
          <input
            type="text"
            value={vineyard}
            placeholder="Vineyard"
            onChange={(e) => setVineyard(e.target.value)} />
          <input
            type="text"
            value={vintage}
            placeholder="Vintage"
            onChange={(e) => setVintage(e.target.value)} />
          <input
            type="text"
            value={country}
            placeholder="Country"
            onChange={(e) => setCountry(e.target.value)} />
          <input
            type="text"
            value={region}
            placeholder="Region"
            onChange={(e) => setRegion(e.target.value)} />
          <input
            type="text"
            value={notes}
            placeholder="Notes"
            onChange={(e) => setNotes(e.target.value)} />
          <input
            type="text"
            value={likes}
            placeholder="Likes"
            onChange={(e) => setLikes(e.target.value)} />
          <input
            type="text"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)} />
          <input
            type="text"
            value={who_with}
            placeholder="Who were you with?"
            onChange={(e) => setWho_with(e.target.value)} />
          <input
            type="text"
            value={when}
            placeholder="When?"
            onChange={(e) => setWhen(e.target.value)} />
          <input
            type="text"
            value={reminder}
            placeholder="Would you like a reminder? (Yes/No)"
            onChange={(e) => setReminder(e.target.value)} />

        </form>

        <button onClick={(e) => handleSubmit(e)}>Add Wine</button>
        <div className="message">{message ? <p>{message}</p> : null}</div>

      </div>

  );
}

export default Discover;


