import { Component } from "react";
class About extends Component {
  constructor() {
    super();
    this.state = {
      userData: null,
    }
  }

  componentDidMount() {
    const fetchData = async () => {
      let data = await fetch("https://api.github.com/users/Shashanksharma218");
      data = await data.json()
      this.setState({ userData: data });
    }
    fetchData();
  }

  render() {
    const user = this.state.userData;
    return (
      <div style={{ 
        padding: "40px 30px",
        maxWidth: "800px",
        margin: "0 auto",
        fontFamily: "system-ui, -apple-system, sans-serif"
      }}>
        {/* Page Header */}
        <div style={{
          textAlign: "center",
          marginBottom: "50px"
        }}>
          <h1 style={{ 
            fontSize: "2.5rem",
            margin: "0 0 10px 0",
            background: "linear-gradient(135deg, #ff6a00, #ff8533)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text"
          }}>
            About This Project
          </h1>
          <p style={{ 
            color: "#888",
            fontSize: "1.1rem",
            margin: 0
          }}>
            Learn more about the developer and the team behind this application
          </p>
        </div>

        {/* Developer Team Section */}
        <div style={{
          marginBottom: "40px"
        }}>
          <h2 style={{
            fontSize: "1.8rem",
            marginBottom: "20px",
            color: "#333",
            borderBottom: "2px solid #ff6a00",
            paddingBottom: "10px"
          }}>
            Developer Team
          </h2>
          <p style={{
            fontSize: "1rem",
            lineHeight: "1.6",
            color: "#666",
            marginBottom: "30px"
          }}>
            This application was developed with passion and dedication to create an exceptional user experience. 
            Meet the developer behind this project:
          </p>
        </div>

        {/* Developer Card */}
        <div style={{
          borderRadius: "16px",
          padding: "30px",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
          border: "1px solid #e0e0e0",
          transition: "transform 0.3s ease, box-shadow 0.3s ease"
        }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "25px",
            flexWrap: "wrap"
          }}>
            {/* Profile Image */}
            <div style={{ height: "120px",
                  width: "120px", position: "relative" }}>
              <img
                src={user?.avatar_url}
                alt="Developer Profile"
                style={{
                  height: "120px",
                  width: "120px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "4px solid #ff6a00",
                  boxShadow: "0 4px 15px rgba(255, 106, 0, 0.3)"
                }}
              />
              <div style={{
                position: "absolute",
                bottom: "5px",
                right: "5px",
                background: "#4CAF50",
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                border: "3px solid white"
              }}></div>
            </div>

            {/* Developer Info */}
            <div style={{
              flex: 1,
              minWidth: "300px"
            }}>
              <h3 style={{ 
                margin: "0 0 8px 0",
                fontSize: "1.5rem",
                color: "#333"
              }}>
                {user?.name || "Loading..."}
              </h3>
              
              <p style={{ 
                margin: "0 0 12px 0", 
                color: "#666",
                fontSize: "1rem",
                fontStyle: "italic"
              }}>
                {user?.bio || "Loading bio..."}
              </p>

              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
                marginBottom: "15px"
              }}>
                <a 
                  href={user?.html_url} 
                  target="_blank" 
                  rel="noreferrer" 
                  style={{ 
                    color: "#ff6a00",
                    textDecoration: "none",
                    fontSize: "0.95rem",
                    fontWeight: "500",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px"
                  }}
                >
                  <span>🔗</span>
                  @{user?.login}
                </a>
                
                <span style={{
                  background: "#e3f2fd",
                  color: "#1976d2",
                  padding: "4px 8px",
                  borderRadius: "12px",
                  fontSize: "0.8rem",
                  fontWeight: "500"
                }}>
                  Developer
                </span>
              </div>

              {/* Stats */}
              <div style={{
                display: "flex",
                gap: "20px",
                fontSize: "0.9rem",
                color: "#555"
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                  <span>📅</span>
                  <span>Joined {user?.created_at ? new Date(user.created_at).getFullYear() : "..."}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                  <span>📊</span>
                  <span>{user?.public_repos || 0} Public Repos</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                  <span>👥</span>
                  <span>{user?.followers || 0} Followers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;