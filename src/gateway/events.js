const baseUrl = 'https://635674979243cf412f8501b0.mockapi.io/api/v1/events';

export const createEvent = (eventData) => {
  console.log(eventData);
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(eventData),
  }).then((response) => {
    if (!response.ok) {
      throw new Error('Failed to create event');
    }
  });
};

export const fetchEventsList = () => {
  return fetch(baseUrl).then((res) => {
    if (res.ok) {
      return res.json();
    }
  });
};

export const deleteEvent = (eventId) => {
  return fetch(`${baseUrl}/${eventId}`, {
    method: 'DELETE',
  }).then((response) => {
    if (!response.ok) {
      throw new Error('Failed to delete event');
    }
  });
};
