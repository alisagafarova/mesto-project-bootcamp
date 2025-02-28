// Начальные настройки API
const config = {
  baseUrl: 'https://nomoreparties.co/v1/cohort-55',
  headers: {
    authorization: '45aebeb9-2a42-44c0-8530-6775d47cd020',
    'Content-Type': 'application/json',
  },
};

// Basic server response handling
function handleBasicResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
}

// Function to request card information
const getInitialCards = () => {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers,
  }).then((res) => {
    return handleBasicResponse(res);
  });
};

// PATCH request to edit profile data
const editProfileData = (nameProfile, aboutProfile) => {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      name: nameProfile,
      about: aboutProfile,
    }),
  }).then((res) => {
    return handleBasicResponse(res);
  });
};

// Function to request user information
const getProfileData = () => {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers,
  }).then((res) => {
    return handleBasicResponse(res);
  });
};

// POST request to add a new card
const addNewCardApi = (nameCard, urlCard) => {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({
      name: nameCard,
      link: urlCard,
    }),
  }).then((res) => {
    return handleBasicResponse(res);
  });
};

// DELETE request to delete a card
const deleteCardApi = (cardId) => {
  return fetch(`${config.baseUrl}/cards/${cardId}`, {
    method: 'DELETE',
    headers: config.headers,
  }).then((res) => {
    return handleBasicResponse(res);
  });
};

// Like placement
const putLikeApi = (cardId) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: 'PUT',
    headers: config.headers,
  }).then((res) => {
    return handleBasicResponse(res);
  });
};

// Like removal
const deleteLikeApi = (cardId) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: 'DELETE',
    headers: config.headers,
  }).then((res) => {
    return handleBasicResponse(res);
  });
};

// PATCH request to change user avatar
const editAvatarApi = (linkAvatar) => {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      avatar: linkAvatar,
    }),
  }).then((res) => {
    return handleBasicResponse(res);
  });
};

export {
  config,
  getInitialCards,
  editProfileData,
  getProfileData,
  addNewCardApi,
  deleteCardApi,
  putLikeApi,
  deleteLikeApi,
  editAvatarApi,
};
