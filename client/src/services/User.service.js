import axios from "axios";
const PORT = 3001;

export async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Network response was not ok.");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`fetch operation failed: ${error.message}`);
  }
}

export const getUsers = async setUsers => {
  try {
    const url =
      "http://" + window.location.hostname + ":" + PORT + "/api/getUsers";
    const res = await axios.get(url);
    let users = await [...res.data];
    setUsers(users);
  } catch (error) {
    console.log(error);
  }
};

export const addUser = async user => {
  try {
    const url =
      "http://" + window.location.hostname + ":" + PORT + "/api/addUser";
    const res = await axios.post(url, user);
    if (res.data === "ok") {
      alert("User added successfully");
    }
  } catch (error) {
    console.log(error);
  }
};
