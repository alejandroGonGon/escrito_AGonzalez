import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Meetings = () => {
    const [meeting, setMeeting] = useState('');
    const [listMeetings, setListMeetings] = useState([]);
    const [error, setError] = useState('');
  
    useEffect(() => {
        const getMeetings = async () => {
          try {
            const response = await axios.get('');
            setListMeetings(response.data);
        } catch (err) {
            setError('There was an error bringing the Meetings');
            console.log(err)
          }
        };
        getMeetings()
      },[]);

    const handleSubmit = () => {
        // setMeeting({});
    };
    const renderMeetings = () => {
        // 
    }
    return (
    <div>
        <h1>Create Meetting</h1>
        <input type="text" id='topic' placeholder='topic'/>
        <input type="datetime-local" id='date' placeholder='date'/>
        <input type="text" id='duration' placeholder='duration'/>
        <input type="button" nSubmit={handleSubmit} value="create" />
    <p>Waiting to send</p>

    <h1>See Meettings</h1>
        <div>
        {renderMeetings}
        </div>
  </div>
    );
};

export default Meetings;
