// Importing required libraries from React and ReactDOM
const { useState, useEffect, useRef } = React;
const { render } = ReactDOM;

//Main appplication component that displays a random quote and image
function App() {
  //An array of objects containing quotes and their authors
  const quotesData = [
    {
      text: "Saints need sinners.",
      author: "Alan Watts",
    },
    {
      text: "I'm taking all the negatives in my life, and turning them into a positive.",
      author: "Pitbull",
    },
    {
      text: "Obey the principles without being bound by them.",
      author: "Bruce Lee",
    },
    {
      text: "If you only do what you can do, you will never be more than you are now.",
      author: "Master Oogway",
    },
    {
      text: "You've got to always go back in time if you want to move forward.",
      author: "Snoop Dogg",
    },
    {
      text: "Honestly, I always believed in myself. For real, for real.",
      author: "Bad Bunny",
    },
    {
      text: "None but ourselves can free our minds.",
      author: "Bob Marley",
    },
    {
      text: "Control is not real, and I'm really understanding that every day. It's about the acceptance of relinquishing control that makes it powerful for you.",
      author: "SZA",
    },
    {
      text: "All that we see or seem is but a dream within a dream.",
      author: "Edgar Allan Poe",
    },
    {
      text: "Our virtues and our failings are inseparable, like force and matter. When they separate, man is no more.",
      author: "Nikola Tesla",
    },
    {
      text: "Power over others is weakness disguised as strength.",
      author: "Eckhart Tolle",
    },
    {
      text: "The greatest wealth is to live content with little.",
      author: "Plato",
    },
    {
      text: "If you don't live your life, then who will?",
      author: "Rihanna",
    },
    {
      text: "The beginning is the most important part of the work.",
      author: "Plato",
    },
    {
      text: "The only way to make sense out of change is to plunge into it, move with it, and join the dance.",
      author: "Alan Watts",
    },
    {
      text: "You want to create your own path, no matter what situation you're in.",
      author: "Future",
    },
    {
      text: "We cannot be more sensitive to pleasure without being more sensitive to pain.",
      author: "Alan Watts",
    },
    {
      text: "Don't grieve. Anything you lose comes round in another form.",
      author: "Rumi",
    },
    {
      text: "When I let go of what I am, I become what I might be.",
      author: "Lao Tzu",
    },
    {
      text: "Let the beauty of what you love be what you do.",
      author: "Rumi",
    },
  ];

  //An array of image URLs
  const images = [
    "https://images.freeimages.com/images/large-previews/b3a/desert-road-1445413.jpg",
    "https://images.freeimages.com/images/large-previews/f58/inspiracion-1430763.jpg",
    "https://images.freeimages.com/images/large-previews/38b/farmers-are-walking-at-sunset-1639677.jpg",
    "https://images.freeimages.com/images/large-previews/44d/magnolia-1248243.jpg",
    "https://images.freeimages.com/images/large-previews/27d/water-splash-1637149.jpg",
    "https://images.freeimages.com/images/large-previews/a00/pencil-lying-on-a-notebook-1635426.jpg",
    "https://images.freeimages.com/images/large-previews/8af/reflection-1641829.jpg",
    "https://images.freeimages.com/images/large-previews/a31/rock-fishing-on-the-cliff-with-big-waves-1638954.jpg",
    "https://images.freeimages.com/images/large-previews/d89/daisies-growing-in-the-wild-1626642.jpg",
    "https://images.freeimages.com/images/large-previews/389/gull-1356921.jpg",
    "https://images.freeimages.com/images/large-previews/291/janie-seddon-shipwreck-1640019.jpg",
    "https://images.freeimages.com/images/large-previews/572/summer-sky-1626644.jpg",
    "https://images.freeimages.com/images/large-previews/f3f/land-from-above-2-1636750.jpg",
    "https://images.freeimages.com/images/large-previews/011/peaceful-beach-side-reflections-1639627.jpg",
    "https://images.freeimages.com/images/large-previews/537/new-dawn-1641926.jpg",
    "https://images.freeimages.com/images/large-previews/c01/dates-palm-tree-1641612.jpg",
    "https://images.freeimages.com/images/large-previews/4c9/stallion-in-winter-wonderland-1335567.jpg",
    "https://images.freeimages.com/images/large-previews/3ea/the-dawn-1639892.jpg",
    "https://images.freeimages.com/images/large-previews/5a2/landing-at-the-sunset-1639548.jpg",
    "https://images.freeimages.com/images/large-previews/c5a/resort-1639697.jpg",
  ];

  // Declare state variables and initialize with empty array and an image URL
  const [randomQuotes, setRandomQuotes] = React.useState([]);
  const [backImage, setBackImage] = React.useState([
    "https://images.freeimages.com/images/large-previews/4bb/moon-1341931.jpg",
  ]);

  // Generate a random number between 0 and the length of quotesData array
  let randomNumber = Math.floor(Math.random() * quotesData.length);

  // Call getQuotes function to set initial state
  React.useState(() => {
    function getQuotes() {
      setRandomQuotes(quotesData[randomNumber]);
    }
    getQuotes();
  });

  // Function to handle state changes on button click
  function handleChange() {
    // Generate a new random number until it's different from the current one
    while (setRandomQuotes(quotesData[randomNumber]) === randomQuotes) {
      setRandomQuotes(quotesData[randomNumber]);
    }

    // Generate a new random image until it's different from the current one
    let randomImg = Math.floor(Math.random() * images.length);
    while (setBackImage(images[randomImg]) === backImage) {
      setBackImage(images[randomImg]);
    }
  }
  /**
   * React component that returns a JSX code for a Quote Generator app.
   * The app displays a random quote made of a quote and author fetched from an object called 'randomQuotes'.
   * It also allows the user to tweet or pin the quote, by share buttons which both open a new tab
   * directing either to Twitter's tweet intent page or to Pinterest's pin creation page.
   * The URL is constructed using the href attribute and a string concatenation that includes the (backImage when sharing a pin)
   * randomQuotes.text and randomQuotes.author values encoded as a URI component.
   * New Quote buttons triggers a function 'handleChange' to generate a random quote.
   * The background image of the component is set dynamically using the `backImage` variable.
   * The component also includes a footer with a link to the developer's profile page on freeCodeCamp website.
   * @return {JSX.Element} The JSX code for the Quote Generator app.
   */
  return (
    <div
      className="app"
      style={{
        backgroundImage: `url(${backImage})`,
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="d-flex flex-column min-vh-100 min-vw-100">
        <div
          className="d-flex flex-grow-1 justify-content-center align-items-center"
          id="box"
        >
          <div className="card p-3" style={{ width: "30rem" }} id="quote-box">
            <div className="card-body">
              <i className="fa fa-quote-left"></i>
              <h5 className="quote-text fw-bold text-wrap" id="text">
                {randomQuotes.text}
              </h5>
              <i className="fa fa-quote-right"></i>
              <br />
              <h6 className="author-text fw-semibold opacity-75" id="author">
                ~ {randomQuotes.author}
              </h6>
              <div className="rows">
                <a
                  id="tweet-quote"
                  href={
                    "https://twitter.com/intent/tweet?hashtags=quote&related=freecodecamp&text=" +
                    encodeURIComponent(
                      '"' + randomQuotes.text + '" ' + randomQuotes.author
                    )
                  }
                  target="_blank"
                  className="btn btn-outline-primary"
                >
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a
                  data-pin-do="embedPin"
                  href={
                    "http://pinterest.com/pin/create/button?media=" +
                    encodeURIComponent(backImage) +
                    "&description=" +
                    encodeURIComponent(
                      '"' + randomQuotes.text + '" ' + randomQuotes.author
                    )
                  }
                  className="btn btn-outline-danger m-2"
                  count-layout="horizontal"
                  target="_blank"
                >
                  <i className="fa-brands fa-pinterest"></i>
                </a>
                <a
                  className="btn btn-outline-info m-2 float-end me-0"
                  id="new-quote"
                  onClick={handleChange}
                >
                  <a>New Quote</a>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          Made with <i className="fa-regular fa-heart fa-xs"></i> by
          <a
            href="https://www.freecodecamp.org/NanaNiki"
            target="_blank"
            id="nana"
          >
            {" "}
            Nicol
          </a>
        </div>
      </div>
    </div>
  );
}
/**
 * Renders the App component to the DOM.
 * @function
 * @name render
 * @param {ReactElement} App - The root component of the application.
 * @param {HTMLElement} root - The DOM element to which the App component should be rendered.
 */
ReactDOM.render(<App />, document.getElementById("app"));
