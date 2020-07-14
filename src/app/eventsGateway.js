const baseUrl = "https://5eca703a38df960016511722.mockapi.io/api/v1/events";

export const fetchEventsList = async () => {
  const response = await fetch(baseUrl);
  return response.ok
    ? response.json()
    : alert("Internal server error. Can't display events.");
};

export const createEvent = async (eventObj) => {
  await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(eventObj),
  });
};

export const deleteEvent = async (eventId) => {
  await fetch(`${baseUrl}/${eventId}`, {
    method: "DELETE",
  });
};
