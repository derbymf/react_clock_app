import React, { Component } from 'react';
import './App.css';
import Clock from 'react-live-clock';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>
           Time Zones
          </p>

        </header>
        <div class="california">
        <p>
          Time in California
        </p>
          <Clock 
                  format={'H:mm:ss'}
                  ticking={true}
                  timezone={'US/Pacific'}/>

      </div>
      <div class="colorado">
      <p>
            Time in Colorado
        </p>
          <Clock 
                  format={'H:mm:ss'}
                  ticking={true}
                  timezone={'US/Mountain'}/>
      </div>
      <div class="newyork">
      <p>
      Time in New York
          </p>
          <Clock 
                  format={'H:mm:ss'}
                  ticking={true}
                  timezone={'US/Eastern'}/>
      </div>
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
