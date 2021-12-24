const header = "Bearer blabla";
const content = "Content-Type";
const Type = "application/json";
const API_URL = "http://localhost:5000";
export const ModelCategoryService = {
  FindbyModelCategoryId,
  FindAll,
  Create,
  Update,
  Delete,
};

function FindbyModelCategoryId(_id) {
  const auth = header;
  const headers = new Headers();
  headers.append(content, Type);
  headers.append("Authorization", auth);
  const requestOptions = {
    headers,
    method: "GET",
  };
  return fetch(`${API_URL}/ModelCategory/FindbyId/${_id}`, requestOptions).then(
    handleResponse
  );
}
function FindAll() {
  const auth = header;
  const headers = new Headers();
  headers.append(content, Type);
  headers.append("Authorization", auth);
  const requestOptions = {
    headers,
    method: "GET",
  };
  return fetch(`${API_URL}/ModelCategory/FindAll`, requestOptions).then(
    handleResponse
  );
}
function Create(model) {
  const auth = header;
  const headers = new Headers();
  headers.append(content, Type);
  headers.append("Authorization", auth);
  const requestOptions = {
    headers,
    method: "POST",
    body: JSON.stringify(model),
  };
  return fetch(`${API_URL}/ModelCategory/create`, requestOptions).then(
    handleResponse
  );
}

function Update(model) {
  const auth = header;
  const headers = new Headers();
  headers.append(content, Type);
  headers.append("Authorization", auth);
  const requestOptions = {
    headers,
    method: "POST",

    body: JSON.stringify(model),
  };

  return fetch(`${API_URL}/ModelCategory/update`, requestOptions).then(
    handleResponse
  );
}

function Delete(_id) {
  const auth = header;
  const headers = new Headers();
  headers.append(content, Type);
  headers.append("Authorization", auth);
  const requestOptions = {
    headers,
    method: "POST",
  };
  return fetch(`${API_URL}/ModelCategory/delete/${_id}`, requestOptions).then(
    handleResponse
  );
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        window.location.reload(true);
      }
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
}
