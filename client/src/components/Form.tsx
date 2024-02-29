import React, { useState } from 'react'
import axios from "axios"

interface FormProps {
  onSubmit: (data: EventData) => void;
}

interface EventData {
  title: string;
  description: string;
  players: String[];
}

function Form({ onSubmit }: FormProps) {

    async function getEvents() {
        const res = await axios.get("/api/eventList");
        return res.data;
    }
    
    const [eventData, setEventData] = React.useState<EventData>({title: 'Dummy', description: 'example', players: ['Bob', 'Sue']});

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { title, value } = event.target;
        setEventData({ ...eventData, [title]: value });
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        onSubmit(eventData);
    }

  /*async function addEvent(data:EventData) {
    const res = await axios.post("api/eventList/", {
        title: data.title,
        description: data.description,
        players: data.players,
    });
    console.log(`Posted event: ${res}`);
}*/

  function EventList(data:EventData[]) {
    if (data) {
        data.forEach(e => {
            return (
                <li>
                    {e.title}: {e.description}<br />
                    Players: {e.players}
                </li>
            )
        });
    } else {
        return (
            <li>No events found.</li>
        )
    }
  }

  return (
    <>
        <h2>Create new Event:</h2>
        <form onSubmit={handleSubmit}>
        <label>
            Title:
            <input type="text" name="title" value={eventData.title} onChange={handleInputChange} />
        </label>
        <br />
        <label>
            Description:
            <input type="text" name="description" value={eventData.description} onChange={handleInputChange} />
        </label>
        <br />
        <button type="submit">Create!</button>
        </form>
    </>
  );
}

export default Form;