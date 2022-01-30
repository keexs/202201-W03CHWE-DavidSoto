import Component from "./Component.js";

// eslint-disable-next-line no-unused-vars
class PageComponent extends Component {
  constructor(parentElement) {
    super(parentElement, "page");

    this.drawPage();
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
      <nav><label for="">pokemonID</label><input type="number"><button>search</button><button>previous</button><button>next</button></nav>
      <div class="pokemonList"></div>
    </main>
    <footer>
      <h2>davidpokeprah</h2>
    </footer>`;
  }
}

export default PageComponent;
