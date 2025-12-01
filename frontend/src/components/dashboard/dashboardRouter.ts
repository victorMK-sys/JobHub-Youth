import { useEffect, useState } from "react"

export function getJobs() {
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    fetch(`${import.meta.env.VITE_APP_URL}/api/jobs`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((res) => res.json())
      .then(data => setJobs(data))
      .catch(err => console.error(err.message))
  }, [])

  return jobs
}

export function getApplications() {
  const [applications, setApplications] = useState([])

  useEffect(() => {
    fetch(`${import.meta.env.VITE_APP_URL}/api/jobs`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then((res) => res.json())
      .then(data => setApplications(data))
      .catch(err => console.error(err.message))
  }, [])

  return applications
}

export function useUserInfo() {
  const [user, setUser] = useState({})
  
  useEffect(() => {
    fetch(`${import.meta.env.VITE_APP_URL}/api/users/me`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then(res => res.json())
      .then(data => setUser(data))
      .catch(err => console.log(err.message))
  }, [])

  return user
}

export async function deleteUser() {
  try{
    const res = await fetch(`${import.meta.env.VITE_APP_URL}/api/users`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })

    if(res.ok) {
      document.getElementById("overlay")?.classList.toggle("hidden")
      document.getElementById("deleteAcc")?.classList.toggle("hidden")
      document.getElementById('doneEl')?.classList.toggle("translate-x-0")

      setTimeout(() => {
        window.location.pathname = "/"
      }, 1000)
    }
  } catch(err: any) {
    console.error(err.message)
  }
}