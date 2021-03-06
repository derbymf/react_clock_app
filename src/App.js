import React, { Component } from 'react';
import './App.css';
import Clock from 'react-live-clock';

/*
@author Michael Field Derby
Created on April 1, 2019
*/
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
           Time Zones
          </p>

        </header>
        {/* pacific time */}
        <div class="california">
        <p>
          Time in California
        </p>
          <Clock 
                  format={'H:mm:ss'}
                  ticking={true}
                  timezone={'US/Pacific'}/>

      </div>
      {/* Mountain time */}
      <div class="colorado">
      <p>
            Time in Colorado
        </p>
          <Clock 
                  format={'H:mm:ss'}
                  ticking={true}
                  timezone={'US/Mountain'}/>
      </div>
      {/* Eastern time */}
      <div class="newyork">
      <p>
      Time in New York
          </p>
          <Clock 
                  format={'H:mm:ss'}
                  ticking={true}
                  timezone={'US/Eastern'}/>
      </div>
      {/* Footer provides link to a cite that has more time zone information */}
      <footer className="App-footer">
      <a
            className="App-link"
            href="https://www.timeanddate.com/time/map/
            "
            target="_blank"
            rel="noopener noreferrer"
          >
            For More Information About Time Zones
          </a>
      </footer>
      </div>

    );
  }
}

export default App;
