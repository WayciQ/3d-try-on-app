
const header = 'Bearer blabla' ;
const content = 'Content-Type';
const Type = 'application/json';
const API_URL = 'http://localhost:5000';
export const ModelService = {
    FindByModelId,
    FindByModelCategory,
    Create,
    Update,
    Delete,
    uploadFile,
};

function FindByModelId(_id) {
    const auth = header;
    const headers = new Headers();
    headers.append(content, Type);
    headers.append('Authorization', auth);
    const requestOptions = {
        headers,
        method: 'GET'
    };
    return fetch(`${API_URL}/Model/FindById/${_id}`, requestOptions).then(handleResponse);
}
function FindByModelCategory(id) {
    const auth = header;
    const headers = new Headers();
    headers.append(content, Type);
    headers.append('Authorization', auth);
    const requestOptions = {
        headers,
        method: 'GET'
    };
    return fetch(`${API_URL}/Model/FindByModelCategory/${id}`, requestOptions).then(handleResponse);
}
function Create(model) {
    const auth = header;
    const headers = new Headers();
    headers.append(content, Type);
    headers.append('Authorization', auth);
    const requestOptions = {
        headers,
        method: 'POST',
        body: JSON.stringify(model)
    };
    return fetch(`${API_URL}/Model/create`, requestOptions).then(handleResponse);
}

function Update(model) {
    const auth = header;
    const headers = new Headers();
    headers.append(content, Type);
    headers.append('Authorization', auth);
    const requestOptions = {
        headers,
        method: 'POST',

        body: JSON.stringify(model)
    };

    return fetch(`${API_URL}/Model/update`, requestOptions).then(handleResponse);
}

function Delete(_id) {
    const auth = header;
    const headers = new Headers();
    headers.append(content, Type);
    headers.append('Authorization', auth);
    const requestOptions = {
        headers,
        method: 'POST'
    };
    return fetch(`${API_URL}/Model/delete/${_id}`, requestOptions).then(handleResponse);
}

function uploadFile(file) {
    const auth = header;
    const headers = new Headers();
    headers.append(content, Type);
    headers.append('Authorization', auth);
    const requestOptions = {
        headers,
        method: 'POST',
        body: JSON.stringify(file)
    };
    console.log(file)
    return fetch(`${API_URL}/Model/uploadFile`, requestOptions).then(handleResponse);
}
function handleResponse(response) {
    return response.text().then(text => {
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
