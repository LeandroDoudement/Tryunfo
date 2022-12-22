/* eslint-disable react/prop-types */
import '../styles/CardAttributes.css';

function CardAttributes({ i, count }) {
  return (
    <div>
      <span className="label">
        {`Attr${i}`}
        ..........................
      </span>
      <span className="count">{count}</span>
    </div>
  );
}

export default CardAttributes;
