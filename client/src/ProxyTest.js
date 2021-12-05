// import React, { useState } from "react";
// import axios from "axios";

// export default function ProxyTest() {
//   const [getData, setGetData] = useState("");
//   const [getJson, setGetJson] = useState({});
//   const [postJson, setPostJson] = useState({});
//   const [data, setData] = useState("");

//   const getApiUsers = () => {
//     axios
//       .get("/users")
//       .then((response) => {
//         console.log(response);
//         setGetData(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   const getApiUsersJson = () => {
//     axios
//       .get("/users/json")
//       .then((response) => {
//         console.log(response);
//         setGetJson(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
//   const getApiUsersJsonPost = () => {
//     axios
//       .post("/users/post")
//       .then((response) => {
//         console.log(response);
//         setPostJson(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   const getApiUsersJsonPostSend = () => {
//     axios
//       .post("/users/sendJson?type=login", {
//         userId: "Root",
//         password: "admin1234",
//       })
//       .then((response) => {
//         console.log(response);
//         setPostJson(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
//   return (
//     <div>
//       <div>
//         <h2>로컬서버에서 get 방식으로 호출하기</h2>
//         <div>{getData}</div>
//         <button onClick={getApiUsers}>나는 users 버튼</button>
//       </div>
//       <div>
//         <h2>로컬서버에서 get 방식으로 JSON data 받기</h2>
//         <div>{JSON.stringify(getJson)}</div>
//         <div>{getJson.message}</div>
//         <button onClick={getApiUsersJson}>나는 users 버튼</button>
//       </div>
//       <div>
//         <h2>로컬서버에서 post 방식으로 JSON data 받기</h2>
//         <div>{JSON.stringify(postJson)}</div>
//         <div>{postJson.message}</div>
//         <button onClick={getApiUsersJsonPost}>나는 postJson 버튼</button>
//       </div>
//       <div>
//         <h2>로컬서버에서 post 방식으로 JSON data 보내기</h2>
//         <div>{data}</div>
//         <button onClick={getApiUsersJsonPostSend}>send</button>
//       </div>
//     </div>
//   );
// }
