import "./styles.css";
import Search from "../src/components/search/search";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
export default function App() {
  return (
    <MuiThemeProvider>
      <div className="App">
        <Search />
      </div>
    </MuiThemeProvider>
  );
}
