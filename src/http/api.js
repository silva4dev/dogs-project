export const API_URL = "https://dogsapi.origamid.dev/json";

export function TOKEN_POST(body) {
  return {
    url: API_URL + "/jwt-auth/v1/token",
    options: {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}

export function TOKEN_VALIDATE_POST(token) {
  return {
    url: API_URL + "/jwt-auth/v1/token/validate",
    options: {
      method: "post",
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  };
}

export function USER_GET(token) {
  return {
    url: API_URL + "/api/user",
    options: {
      method: "get",
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  };
}

export function USER_POST(body) {
  return {
    url: API_URL + "/api/user",
    options: {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}

export function PHOTO_POST(formData, token) {
  return {
    url: API_URL + "/api/photo",
    options: {
      method: "post",
      headers: {
        Authorization: "Bearer " + token,
      },
      body: formData,
    },
  };
}

export function PHOTOS_GET({ page, total, user }) {
  return {
    url: `${API_URL}/api/photo/?_page=${page}&_total=${total}&_user=${user}`,
    options: {
      method: "get",
      cache: "no-store",
    },
  };
}

export function PHOTO_GET(id) {
  return {
    url: `${API_URL}/api/photo/${id}`,
    options: {
      method: "get",
      cache: "no-store",
    },
  };
}

export function COMMENT_POST(id, body) {
  return {
    url: `${API_URL}/api/comment/${id}`,
    options: {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + window.localStorage.getItem("token"),
      },
      body: JSON.stringify(body),
    },
  };
}

export function PHOTO_DELETE(id) {
  return {
    url: `${API_URL}/api/photo/${id}`,
    options: {
      method: "delete",
      headers: {
        Authorization: "Bearer " + window.localStorage.getItem("token"),
      },
    },
  };
}

export function PASSWORD_LOST(body) {
  return {
    url: API_URL + "/api/password/lost",
    options: {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}

export function PASSWORD_RESET(body) {
  return {
    url: API_URL + "/api/password/reset",
    options: {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}

export function STATS_GET(body) {
  return {
    url: API_URL + "/api/stats",
    options: {
      method: "get",
      headers: {
        Authorization: "Bearer " + window.localStorage.getItem("token"),
      },
    },
  };
}
