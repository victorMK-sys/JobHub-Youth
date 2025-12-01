import { useEffect, useState } from "react";

export const getJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_APP_URL}/api/jobs`)
      .then((res) => res.json())
      .then((data) => setJobs(data))
      .catch((err) => console.error(err.message));
  }, []);

  return jobs;
};

export async function addUser(
  uname: string,
  email: string,
  pass: string,
  phone: string,
  emp: boolean,
  git: string,
  quote: string
) {
  try {
    const res = await fetch(`${import.meta.env.VITE_APP_URL}/api/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ uname, email, pass, phone, emp, git, quote }),
    });

    const data = await res.json();

    if (res.status === 403) {
      alert(data.message);
      window.location.pathname = "/login";
    } else if (res.status === 201) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", data.user.uname);
      window.location.pathname = "/dashboard";
    } else {
      alert("An unexpected error occurred. Please try again later.");
    }
  } catch (err: any) {
    console.error(err.message);
    throw err;
  }
}

export async function authUser(uname: string, pass: string) {
  try {
    const res = await fetch(`${import.meta.env.VITE_APP_URL}/api/auth`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ uname, pass }),
    });

    const data = await res.json();

    if (data.message === import.meta.env.VITE_ADMIN) {
      return (window.location.pathname = "/admin/dashboard");
    }

    if (res.ok) {
      localStorage.setItem("token", data.token);
      window.location.pathname = "/dashboard";
    } else {
      alert(data.message);
    }
  } catch (err: any) {
    console.error(err.message);
  }
}
