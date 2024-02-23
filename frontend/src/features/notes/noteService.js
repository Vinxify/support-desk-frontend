import axios from "axios";

const API_URL = "https://support-desk-backend-5fqn.onrender.com/api/tickets/";

// Get ticket notes
const getNotes = async (ticketId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL + ticketId + "/notes", config);
  return response.data;
};

// Create ticket notes
const createNotes = async (ticketId, noteText, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(
    API_URL + ticketId + "/notes",
    {
      text: noteText,
    },
    config
  );
  return response.data;
};

const notesService = {
  getNotes,
  createNotes,
};

export default notesService;
