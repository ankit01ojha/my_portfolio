import logo from './logo.svg';
import './App.css';
import Particles from 'react-particles-js';
import Avatar from './Components/Avatar';


function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Avatar/>
      <Particles
        params={{
          "particles": {
              "number": {
                  "value": 200,
                  "density": {
                      "enable": false
                  }
              },
              "size": {
                  "value": 5,
                  "random": true,
                  "anim": {
                      "speed": 4,
                      "size_min": 0.3
                  }
              },
              "color":{
                  "value":"#61DBFB",
              },  
              "line_linked": {
                  "enable": false
              },
              "move": {
                  "random": true,
                  "speed": 1,
                  "direction": "top",
                  "out_mode": "out"
              }
          },
          "interactivity": {
              "events": {
                  "onhover": {
                      "enable": true,
                      "mode": "repulse"
                  },
                  "onclick": {
                      "enable": true,
                      "mode": "repulse"
                  }
              },
              "modes": {
                  "bubble": {
                      "distance": 250,
                      "duration": 2,
                      "size": 0,
                      "opacity": 0
                  },
                  "repulse": {
                      "distance": 80,
                      "duration": 2
                  }
              }
          }
      }}

    //   params={{
    //     "particles": {
    //         "number": {
    //             "value": 100
    //         },
    //         "size": {
    //             "value": 2
    //         },
    //         "color":{
    //             "value":"#61DBFB",
    //         },
    //         "line_linked": {
    //           "color": {
    //             "value": "#61DBFB",
    //           }
    //         },
    //     },
    //     "interactivity": {
    //         "events": {
    //             "onhover": {
    //                 "enable": true,
    //                 "mode": "repulse"
    //             }
    //         }
    //     }
    // }}
      />
      </div>
      
   
    </div>
  );
}

export default App;
