import "./index.css";

function Song({ key, title, singer, no }) {
  return (
    <div className="Song">
      <div>
        <div className="Song__title">{title}</div>
        <div className="Song__singer">{singer}</div>
      </div>
      <span className="Song__no">{no}</span>
    </div>
  );
}

export default Song;
