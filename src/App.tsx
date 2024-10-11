import "./App.css";
import Card, {
  CardActions,
  CardContent,
  CardHeader,
  CardImage,
  CardLikeButton,
  CardShareButton,
  CartSubTitle,
  CartTitle,
} from "./components/Card";

function App() {
  return (
    <>
      <h2>Scenario 1 </h2>
      <Card>
        <CardHeader>
          <CartTitle />
          <CartSubTitle />
        </CardHeader>

        <CardImage />

        <CardContent />

        <CardActions>
          <CardLikeButton />
          <CardShareButton />
        </CardActions>
      </Card>

      <h2>Scenario 2 </h2>
      <Card>
        <CardHeader>
          <CartTitle />
          <CartSubTitle />
        </CardHeader>

        <CardImage />

        <CardActions>
          <CardLikeButton />
          <CardShareButton />
        </CardActions>
      </Card>

      <h2>Scenario 3 </h2>
      <Card>
        <CardHeader>
          <CartTitle />
          <CartSubTitle />
        </CardHeader>

        <CardImage />

        <CardContent />
      </Card>
    </>
  );
}

export default App;
