const baseUrl = "https://5eca703a38df960016511722.mockapi.io/api/v1/events";

export const fetchEventsList = async () => {
  const eventsList = await fetch(baseUrl).then((response) => {
    if (response.ok) {
      return response.json();
    }
  });

  if (!eventsList) alert("Internal server error. Can't display events");

  return eventsList;
};

export const createEvent = async (eventObj) => {
  const response = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(eventObj),
  });
};

export const deleteEvent = async (eventId) => {
  const response = await fetch(`${baseUrl}/${eventId}`, {
    method: "DELETE",
  });
};
