import ButtonComponent from "./Button.js";
import Component from "./Component.js";
import PokemonListGenerator from "./PokemonListGenerator.js";

let start = 1;
let end = 20;

class PageComponent extends Component {
  constructor(parentElement) {
    super(parentElement, "page");

    this.drawPage();
    this.renderPokemonList();
    this.renderBackButton();
    this.renderNextButton();
  }

  drawPage() {
    this.element.innerHTML = `
        <header>
      <h1>Title</h1>
      <nav class="nav-menu">
        <ul>
          <li>pokemonList</li>
          <li>my pokemon</li>
        </ul>
      </nav>
    </header>
    <main>
      <nav><label for="">pokemonID</label><input type="number"><button>search</button></nav>
      <div class="pokemonList"></div>
    </main>
    <footer>
      <h2>davidpokeprah</h2>
    </footer>`;
  }

  renderPokemonList() {
    this.renderPokemonList = new PokemonListGenerator(
      document.querySelector(".pokemonList"),
      start,
      end
    );
  }

  renderNextButton() {
    this.renderPokemonList = new ButtonComponent(
      document.querySelector("nav"),
      "Button",
      "Next",
      () => {
        if (end < 898) {
          start += 20;
          end += 20;
          document.querySelector(".pokemonList>*")?.remove();
          new PokemonListGenerator(
            document.querySelector(".pokemonList"),
            start,
            end
          );
        }
      }
    );
  }

  renderBackButton() {
    this.renderPokemonList = new ButtonComponent(
      document.querySelector("nav"),
      "Button",
      "Back",
      () => {
        if (start > 1) {
          start -= 20;
          end -= 20;
          document.querySelector(".pokemonList>*")?.remove();
          new PokemonListGenerator(
            document.querySelector(".pokemonList"),
            start,
            end
          );
        }
      }
    );
  }
}

export default PageComponent;
