import axios from "axios";

// get
export const getListData = (setter) => {
  axios
    .post("/board?type=list")
    .then((response) => {
      setter(response.data.json);
    })
    .catch((error) => {
      console.log(error);
    });
};

// search title
export const searchListTitle = (setter, text) => {
  axios
    .post("/board?type=list", {
      searchTitle: text,
    })
    .then((response) => {
      setter(response.data.json);
    })
    .catch((error) => {
      console.log(error);
    });
};

// search content
export const searchListContent = (setter, text) => {
  axios
    .post("/board?type=list", {
      searchData: text,
    })
    .then((response) => {
      setter(response.data.json);
    })
    .catch((error) => {
      console.log(error);
    });
};

// create
export const addBoard = (title, content, insert_user) => {
  axios
    .post("/board?type=insert", {
      title,
      content,
      insert_user,
    })
    .catch((error) => {
      console.log(error);
    });
};

// edit
export const editBoard = (id, title, content) => {
  axios
    .post("/board?type=update", {
      id,
      title,
      content,
    })
    .catch((error) => {
      console.log(error);
    });
};

// delete
export const deleteBoard = (id) => {
  axios
    .post("/board?type=delete", {
      id,
    })
    .catch((error) => {
      console.log(error);
    });
};
