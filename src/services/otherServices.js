const getAllOrders = async (credentials, pageNum) => {
  return await fetch(`https://dev-api.mstars.mn/api/orders?page=${pageNum}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
};
const getAllUsers = async (credentials) => {
  return await fetch("https://dev-api.mstars.mn/admin/users", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
};
const getAllFood = async () => {
  return await fetch("https://dev-api.mstars.mn/api/foods", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });
};

const saveFood = async (credentials) => {
  return await fetch("https://dev-api.mstars.mn/api/new/food", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
};
const deleteFood = async (token, id) => {
  return await fetch(`https://dev-api.mstars.mn/api/delete/food/${id}`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(token),
  });
};
const updateFood = async (data, id) => {
  return await fetch(`${id}`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data.token),
  });
};
// const registerUser = async (credentials) => {
//   return await fetch("http://52.221.191.153/admin/register", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(credentials),
//   });
// };

// const userInfoStorage = (userInfo) => {
//   localStorage.setItem("token", userInfo.token);
//   localStorage.setItem("userInfo", JSON.stringify(userInfo.data));
// };

export const otherServices = {
  getAllOrders,
  getAllUsers,
  getAllFood,
  saveFood,
  deleteFood,
  updateFood,
};
