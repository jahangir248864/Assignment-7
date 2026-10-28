
import "./Card.css";

function Card({ user }) {
  return (
    <div className="card">
      <img
        src={user.avatar_url}
        alt={user.login}
        className="avatar"
      />

      <h2>{user.login}</h2>

      <p><strong>ID:</strong> {user.id}</p>

      <p><strong>Node ID:</strong> {user.node_id}</p>

      <p><strong>Type:</strong> {user.type}</p>

      <p>
        <strong>Site Admin:</strong>{" "}
        {user.site_admin ? "Yes" : "No"}
      </p>

      <a
        href={user.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="profile-btn"
      >
        View Profile
      </a>
    </div>
  );
}

export default Card;
