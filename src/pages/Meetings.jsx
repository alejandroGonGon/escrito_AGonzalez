import React, { useEffect, useState } from 'react';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
  },
  params: {},
});

const Meetings = () => {
    const [topic, setTopic] = useState('');
    const [duration, setDuration] = useState('');
    const [date, setDate] = useState(new Date());
    
    const [listMeetings, setListMeetings] = useState([]);
    const [error, setError] = useState('');
  
    useEffect(() => {
        const getMeetings = async () => {
          try {
            const response = await axiosInstance.get('/users/me/meetings')
            setListMeetings(response.data);
        } catch (err) {
            setError('There was an error bringing the Meetings');
            console.log(error)
          }
        };
        getMeetings()
      },[]);

    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        const response = await axiosInstance.post('/users/me/meetings',{
          topic: topic,
          duration: duration,
          date: date
        });
        console.log(response + 'si');
    } catch (err) {
        setError('There was an error bringing the Meetings');
        console.log(err)
        console.log('no');
      }
    };
    const renderMeetings = () => {
        // 
    }
    return (
    <div>
        <h1>Create Meetting</h1>
        <form onSubmit={handleSubmit} >
        <input type="text" id='topic' placeholder='topic' onChange={e => setTopic(e.target.value)}/>
        <input type="datetime-local" id='date' placeholder='date'  onChange={e => setDate(e.target.value)}/>
        <input type="text" id='duration' placeholder='duration'  onChange={e => setDuration(e.target.value)}/>
        <input type="submit" value="create" />
        </form>
        
    <h1>See Meettings</h1>
        <div>
        {renderMeetings()}
        </div>
  </div>
    );
};

export default Meetings;
