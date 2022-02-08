import logo from './assets/logo.svg';
import basket from './assets/basket.svg';
import lightbulb from './assets/images/lightbulb.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class = "App-wrapper">
        <header className="App-header">
          <div class="App-top">
            <img src={logo} alt="octopus logo"></img>
            <img src={basket} class="push" alt="basket"></img>
          </div>
        </header>

        <section class="product-header">
          <img src={lightbulb} alt="lightbulb"></img>
          <h2>Energy saving light bulb</h2>
          <p>25W // Packet of 4</p>
        </section>

        <section class="add-to-cart">
          <h3>12.99</h3>
          <button>Add to Cart</button>
        </section>

        <section class="description">
          <h3>Description</h3>
          <p>Available in 7 watts, 9 watts, 11 watts Spiral Light bulb in B22, bulb switches
          on instantly, no wait around warm start and flicker free features make for a great
          all purpose bulb
          </p>
        </section>

        <section class="specifications">
          <table>
            <tr>
              <th>Brand</th>
              <td>Phillips</td>
            </tr>
            <tr>
              <th>Item weight</th>
              <td>77</td>
            </tr>
            <tr>
              <th>Dimensions</th>
              <td>12.6x6.2x6.2</td>
            </tr>
            <tr>
              <th>Item model number</th>
              <td>E27 ES</td>
            </tr>
            <tr>
              <th>Color</th>
              <td>Cool daylight</td>
            </tr>
          </table>
        </section>

        <footer>
          <p>Octopus Energy Ltd is a company registered in England and Wales.</p>
          <p>Registered number: 09263424. Registered office: 33 Holborn, London, EC1N 2HT.</p>
          <p>Trading office: 20-24 Broadwick Street, London, W1F 8HT</p>
        </footer>

      </div>
    </div>
  );
}

export default App;
