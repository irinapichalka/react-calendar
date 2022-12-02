const baseUrl = "https://635674979243cf412f8501b0.mockapi.io/api/v1/events";

export const createEvent = (eventData) =>
  fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(eventData),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to create event");
    }
  });

export const fetchEventsList = () =>
  fetch(baseUrl).then((res) => {
    if (res.ok) {
      return res.json();
    }
    throw new Error("Failed to fetch events");
  });

export const deleteEvent = (eventId) =>
  fetch(`${baseUrl}/${eventId}`, {
    method: "DELETE",
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to delete event");
    }
  });
