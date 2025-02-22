import socket from "../lib/socket";

const appConfig = {
  apiUrl: import.meta.env.VITE_API_URL,
  apiKey: import.meta.env.VITE_API_KEY,
  socketUrl: import.meta.env.VITE_SOCKETIO_URL,
  elevenLabaApiKey: import.meta.env.VITE_ELEVEN_LAB_API_KEY,
};

export default appConfig;
