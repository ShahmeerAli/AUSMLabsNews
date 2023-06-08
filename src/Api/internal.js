import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_INTERNAL_API_PATH,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export const login = async (data) => {
  let response;

  try {
    response = await api.post("/login", data);
  } catch (error) {
    return error;
  }

  return response;
};

export const register = async (data) => {
  let response;

  try {
    response = await api.post("/register", data);
  } catch (error) {
    return error;
  }

  return response;
};

export const logout = async (data) => {
  let response;

  try {
    response = await api.post("/logout", data);
  } catch (error) {
    return error;
  }

  return response;
};

export const addBlog = async (data) => {
  let response;

  try {
    response = await api.post("/blog", data);
  } catch (error) {
    return error;
  }

  return response;
};

export const getAllBlogs = async (id) => {
  let response;
  try {
    response = await api.get(`/blog/all/${id}`);
  } catch (error) {
    return error;
  }

  return response.data.blog;
};

export const getBlogId = async (id) => {
  let response;
  try {
    response = await api.get(`/blog/${id}`);
  } catch (error) {
    return error;
  }

  return response.data.blog;
};

export const deleteBlog = async (id) => {
  let response;
  try {
    response = await api.delete(`/blog/${id}`);
  } catch (error) {
    return error;
  }

  return response.data.blog;
};
