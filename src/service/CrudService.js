import axios from "axios";

const API_URL = "https://67727ac0ee76b92dd4926d13.mockapi.io/crud-yt";

/**
 * Function to create a new record.
 * @param {Object} data - The data to be posted, containing name and email.
 * @returns {Promise} - Axios promise.
 */
export const createRecord = (data) => {
  return axios.post(API_URL, data);
};
/**
 * Fetch all records from the API.
 * @returns {Promise} - Axios promise with the response data.
 */
export const fetchRecords = () => {
  return axios.get(API_URL);
};

/**
 * Delete a specific record by ID.
 * @param {string} id - The ID of the record to delete.
 * @returns {Promise} - Axios promise.
 */
export const deleteRecord = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};



/**
 * Update a specific record by ID.
 * @param {string} id - The ID of the record to update.
 * @param {Object} data - The updated data for the record.
 * @returns {Promise} - Axios promise.
 */
export const updateRecord = (id, data) => {
  return axios.put(`${API_URL}/${id}`, data);
};