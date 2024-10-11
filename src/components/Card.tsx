import "./Card.css";

export default function Card({ children }) {
  return <div className="card">{children}</div>;
}

export function CardHeader({ children }) {
  return <div className="card-header">{children}</div>;
}

export function CartTitle() {
  return <h3>Labrador</h3>;
}

export function CartSubTitle() {
  return <div>Dog Breed</div>;
}

export function CardImage() {
  return (
    <img
      src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTqRNGjpgj_trfUKqFwEvpcq1ttRPzgmQXLNQJgKUIMS0lqDKuY"
      alt="Photo of a Shiba Inu"
    />
  );
}

export function CardContent() {
  return (
    <div className="card-contenr">
      <p>
        The Labrador Retriever or simply Labrador is a British breed of
        retriever gun dog. It was developed in the United Kingdom from St.
        John's water dogs imported from the colony of Newfoundland, and was
        named after the Labrador region of that colony.
      </p>
    </div>
  );
}

export function CardActions({ children }) {
  return <div className="card-actions">{children}</div>;
}

export function CardLikeButton() {
  return <button>LIKE</button>;
}

export function CardShareButton() {
  return <button>SHARE</button>;
}
