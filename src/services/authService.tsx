import axios from 'axios';

export const API_URL = 'https://fathomless-scrubland-29080.herokuapp.com';
export const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-type': 'application/json',
    },
});

export function Login(data = {}) {
    return api.post(`${API_URL}/api/login/`, JSON.stringify(data)).then((response) => {
        if (response.data.access) {
            localStorage.setItem('access', response.data.access);
            localStorage.setItem('refresh', response.data.refresh);
            // localStorage.setItem('isAuthenticated', 'true');
        }
        return response.data;
    });
}
export function Register(data = {}) {
    return api.post(`${API_URL}/api/register/`, JSON.stringify(data));
}
export function Logout() {
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    // localStorage.removeItem('isAuthenticated');
}
export function GetCurrentUser(): string | null {
    return localStorage.getItem('access');
}
export function GetTweets() {
    const access: string | null = GetCurrentUser();
    if (access) {
        const config = {
            headers: { Authorization: `Bearer ${access}` },
        };
        return api.get(`${API_URL}/tweet/`, config);
    }
}

export function GetUsers() {
    const access: string | null = GetCurrentUser();
    if (access) {
        const config = {
            headers: { Authorization: `Bearer ${access}` },
        };
        return api.get(`${API_URL}/api/un-followers/`, config);
    }
}
export function GetFollowers() {
    const access: string | null = GetCurrentUser();
    if (access) {
        const config = {
            headers: { Authorization: `Bearer ${access}` },
        };
        return api.get(`${API_URL}/api/followers/`, config);
    }
}
export function CreateFollower(id: number) {
    const data = { target: id };
    const access: string | null = GetCurrentUser();
    if (access) {
        const config = {
            headers: { Authorization: `Bearer ${access}` },
        };
        return api.post(`${API_URL}/follow/`, JSON.stringify(data), config);
    }
}

export function DeleteFollower(id: number) {
    const access: string | null = GetCurrentUser();
    if (access) {
        const config = {
            headers: { Authorization: `Bearer ${access}` },
        };
        return api.delete(`${API_URL}/follow/${id}/`, config);
    }
}
