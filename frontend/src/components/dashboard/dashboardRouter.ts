import { useEffect, useState } from "react"

export function getJobs() {
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    fetch("http://localhost:5500/api/jobs", {
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
    fetch("http://localhost:5500/api/jobs", {
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
    fetch("http://localhost:5500/api/users/me", {
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
