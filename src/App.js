import { render } from "react-dom";
import "./styles.css";

export default function App() {
  return render(
    <div>
      <p>"I am learning React. My life is getting better., "</p>
    </div>,
    document.getElementById("root")
  );
}
