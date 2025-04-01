import axios from "axios";
// import dotenv from "dotenv";

// dotenv.config();

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhODlmZTAzYzJlMGI4Zjk0YWYxZGExNDUxNDRkODlmNSIsIm5iZiI6MTc0MzQzOTAyOC40NzUwMDAxLCJzdWIiOiI2N2VhYzRiNGNmMzJlZjE2MzRmNmRkMDIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.uAGNaEAwT3S4Nk-GwvYsZpIhMMZWqvnPov_c_B85u3M`
  }
});

export default api; 

