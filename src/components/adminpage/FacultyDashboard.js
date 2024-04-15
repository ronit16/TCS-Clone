import React, { useState } from "react";

function FacultyDashboard() {
  const [selectedOption, setSelectedOption] = useState("");
  const [eventDetails, setEventDetails] = useState({
    id: "",
    startDate: "",
    endDate: "",
    name: "",
    description: "",
    registrationLink: "",
  });
  const [achievementDetails, setAchievementDetails] = useState({
    id: "",
    studentName: "",
    achievementTitle: "",
    achievementDate: "",
    description: "",
    location: "",
    link: "",
  });
  const [noticeDetails, setNoticeDetails] = useState({
    id: "",
    publishDate: "",
    name: "",
    message: "",
  });

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    // Clear event, achievement, and notice details when option changes
    setEventDetails({
      id: "",
      startDate: "",
      endDate: "",
      name: "",
      description: "",
      registrationLink: "",
    });
    setAchievementDetails({
      id: "",
      studentName: "",
      achievementTitle: "",
      achievementDate: "",
      description: "",
      location: "",
      link: "",
    });
    setNoticeDetails({
      id: "",
      publishDate: "",
      name: "",
      message: "",
    });
  };

  const handleNavigate = () => {
    // Perform navigation based on the selected option
    if (selectedOption === "Events") {
      // No need to fetch event details here
    }
    // Add other options handling here
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send event details to the server
    fetch("http://localhost:5000/api/adminevents", {
      // Assuming server is running locally
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventDetails),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to submit event details");
        }
        alert("Event details submitted successfully");
      })
      .catch((error) => {
        console.error("Error submitting event details:", error.message);
        alert("Failed to submit event details");
      });
  };

  const handleAchievementsSubmit = (event) => {
    event.preventDefault();
    // Send achievement details to the server
    fetch("http://localhost:3001/api/adminachievements", {
      // Assuming server is running locally
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(achievementDetails),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to submit achievement details");
        }
        alert("Achievement details submitted successfully");
      })
      .catch((error) => {
        console.error("Error submitting achievement details:", error.message);
        alert("Failed to submit achievement details");
      });
  };

  const handleNoticeSubmit = (event) => {
    event.preventDefault();
    // Send notice details to the server
    fetch("http://localhost:3001/api/adminnotices", {
      // Assuming server is running locally
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(noticeDetails),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to submit notice details");
        }
        alert("Notice details submitted successfully");
      })
      .catch((error) => {
        console.error("Error submitting notice details:", error.message);
        alert("Failed to submit notice details");
      });
  };

  return (
    <div>
      <h1>Faculty Dashboard</h1>
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="">Select an option</option>
        <option value="Events">Events</option>
        <option value="Achievements">Achievements</option>
        <option value="Notices">Notices</option>
        {/* Add other options here */}
      </select>
      <button onClick={handleNavigate} disabled={!selectedOption}>
        Navigate
      </button>
      {selectedOption === "Events" && (
        <form onSubmit={handleSubmit}>
          <label>
            ID:
            <input
              type="text"
              value={eventDetails.id}
              onChange={(e) =>
                setEventDetails({ ...eventDetails, id: e.target.value })
              }
            />
          </label>
          <label>
            Start Date:
            <input
              type="date"
              value={eventDetails.startDate}
              onChange={(e) =>
                setEventDetails({ ...eventDetails, startDate: e.target.value })
              }
            />
          </label>
          <label>
            End Date:
            <input
              type="date"
              value={eventDetails.endDate}
              onChange={(e) =>
                setEventDetails({ ...eventDetails, endDate: e.target.value })
              }
            />
          </label>
          <label>
            Name:
            <input
              type="text"
              value={eventDetails.name}
              onChange={(e) =>
                setEventDetails({ ...eventDetails, name: e.target.value })
              }
            />
          </label>
          <label>
            Description:
            <input
              type="text"
              value={eventDetails.description}
              onChange={(e) =>
                setEventDetails({
                  ...eventDetails,
                  description: e.target.value,
                })
              }
            />
          </label>
          <label>
            Registration Link:
            <input
              type="text"
              value={eventDetails.registrationLink}
              onChange={(e) =>
                setEventDetails({
                  ...eventDetails,
                  registrationLink: e.target.value,
                })
              }
            />
          </label>

          {/* Add other event detail fields here */}
          <button type="submit">Save</button>
        </form>
      )}
      {selectedOption === "Achievements" && (
        <form onSubmit={handleAchievementsSubmit}>
          <label>
            ID:
            <input
              type="text"
              value={achievementDetails.id}
              onChange={(e) =>
                setAchievementDetails({
                  ...achievementDetails,
                  id: e.target.value,
                })
              }
            />
          </label>
          <label>
            Student Name:
            <input
              type="text"
              value={achievementDetails.studentName}
              onChange={(e) =>
                setAchievementDetails({
                  ...achievementDetails,
                  studentName: e.target.value,
                })
              }
            />
          </label>
          <label>
            Achievement Title:
            <input
              type="text"
              value={achievementDetails.achievementTitle}
              onChange={(e) =>
                setAchievementDetails({
                  ...achievementDetails,
                  achievementTitle: e.target.value,
                })
              }
            />
          </label>
          <label>
            Achievement Date:
            <input
              type="date"
              value={achievementDetails.achievementDate}
              onChange={(e) =>
                setAchievementDetails({
                  ...achievementDetails,
                  achievementDate: e.target.value,
                })
              }
            />
          </label>
          <label>
            Description:
            <input
              type="text"
              value={achievementDetails.description}
              onChange={(e) =>
                setAchievementDetails({
                  ...achievementDetails,
                  description: e.target.value,
                })
              }
            />
          </label>
          <label>
            Location:
            <input
              type="text"
              value={achievementDetails.location}
              onChange={(e) =>
                setAchievementDetails({
                  ...achievementDetails,
                  location: e.target.value,
                })
              }
            />
          </label>
          <label>
            Link:
            <input
              type="text"
              value={achievementDetails.link}
              onChange={(e) =>
                setAchievementDetails({
                  ...achievementDetails,
                  link: e.target.value,
                })
              }
            />
          </label>

          {/* Add other achievement detail fields here */}
          <button type="submit">Save</button>
        </form>
      )}
      {selectedOption === "Notices" && (
        <form onSubmit={handleNoticeSubmit}>
          <label>
            ID:
            <input
              type="text"
              value={noticeDetails.id}
              onChange={(e) =>
                setNoticeDetails({ ...noticeDetails, id: e.target.value })
              }
            />
          </label>
          <label>
            Publish Date:
            <input
              type="date"
              value={noticeDetails.publishDate}
              onChange={(e) =>
                setNoticeDetails({
                  ...noticeDetails,
                  publishDate: e.target.value,
                })
              }
            />
          </label>
          <label>
            Name:
            <input
              type="text"
              value={noticeDetails.name}
              onChange={(e) =>
                setNoticeDetails({ ...noticeDetails, name: e.target.value })
              }
            />
          </label>
          <label>
            Message:
            <textarea
              value={noticeDetails.message}
              onChange={(e) =>
                setNoticeDetails({ ...noticeDetails, message: e.target.value })
              }
            />
          </label>
          <button type="submit">Save</button>
        </form>
      )}
    </div>
  );
}

export default FacultyDashboard;
