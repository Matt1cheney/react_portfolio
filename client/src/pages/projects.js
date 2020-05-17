import React from 'react';
import Footer from  "../components/Footer/Footer"

function Projects() {

  return (
    <>
<div id="parent" class="text-center container-fluid bg-light mb-0">
      {/* Thumbnail Images */}
      {/* image 1 */}

      <div class="text-center thumbnail">
        <a
          href="https://matt1cheney.github.io/jQuery_Calculator/"
          target="_blank"
        >
          <img src="images\jQueryCalc.png" class="img-fluid" alt="Hangman" />
          <span class="caption">
            <p>jQuery Calculator</p>
          </span>
        </a>
        <a
          href="https://github.com/Matt1cheney/jQuery_Calculator"
          target="_blank"
        >
          GitHub Repo
        </a>
      </div>

      {/* image 2 */}
      <div class="text-center thumbnail">
        <a href="https://danielledaley2196.github.io/DOGS/" target="_blank">
          <img src="images\dogsScreenShot.png" class="img-fluid" alt="Nature" />
          <span class="caption">
            <p>Where can I take my Dog?</p>
          </span>
        </a>
        <a href="https://github.com/danielledaley2196/DOGS" target="_blank">
          GitHub Repo
        </a>
      </div>

      {/* image 3 */}

      <div class="text-center thumbnail">
        <a
          href="https://matt1cheney.github.io/password-generator/"
          target="_blank"
        >
          <img
            src="images\passwordScreenShot.png"
            class="img-fluid"
            alt="RPG Game"
          />
          <span class="caption">
            <p>Password Generator</p>
          </span>
        </a>
        <a
          href="https://github.com/Matt1cheney/password-generator"
          target="_blank"
        >
          GitHub Repo
        </a>
      </div>

       {/* image 4  */}

      <div class="text-center thumbnail">
        <a href="https://krusty-krab-pattymaker.herokuapp.com/" target="_blank">
          <img
            src="images\krabby-patty maker.png"
            class="img-fluid"
            alt="krabby_patty"
          />
          <span class="caption">
            <p>Krabby Patty eat-da-burger</p>
          </span>
        </a>
        <a href="https://github.com/Matt1cheney/krabby_patties" target="_blank">
          GitHub Repo
        </a>
      </div>

       {/* image 5  */}

      <div class="text-center thumbnail">
        <a
          href="https://immense-fjord-00641.herokuapp.com/signin"
          target="_blank">
          <img
            src="images\speedy shopper.png"
            class="img-fluid"
            alt="Speedy Shopper"
          />
          <span class="caption">
            <p>Speedy Shopper</p>
          </span>
        </a>
        <a href="https://github.com/Matt1cheney/speedy-shopper" target="_blank">
          <span>
            <p>GitHub Repo</p>
          </span>
        </a>
        <a href="https://github.com/yttel/speedy-shopper" target="_blank">
          <span class="caption">
            <p>Group GitHub Repo</p>
          </span>
        </a>
      </div>
       {/* project 6  */}
      <div class="text-center thumbnail">
        <a href="http://lets-take-notes.herokuapp.com/" target="_blank">
          <img src="images\note taker.png" class="img-fluid" alt="Note taker" />
          <span class="caption">
            <p>Note Taker</p>
          </span>
        </a>
        <a href="https://github.com/Matt1cheney/takeNotes" target="_blank">
          <span>
            <p>GitHub Repo</p>
          </span>
        </a>
      </div>

      {/* Jumbotron */}
    <Footer/>
    </div>
    </>
  );
}

export default Projects;