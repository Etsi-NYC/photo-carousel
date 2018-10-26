import React, { Component } from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import PhotoCarousel from "./components/PhotoCarousel.js";
import Description from "./components/Description.js";

library.add(faAngleLeft)
library.add(faAngleRight)

class App extends Component {

	render() {
    return (
      <div>
        <PhotoCarousel />
				<Description />
      </div>
    );
  }
}

export default App;
