// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

export default class YouTubeDebugger extends Component{

  constructor(props){
    super(props)

    this.state =   {
        errors: [],
        user: null,
        settings: {
          bitrate: 8,
          video: {
            resolution: '1080p'
          }
        }
      }
  }

  changeBitrate = () => {

    this.setState({settings: {...this.state.settings, bitrate: 12 }})

  }

  changeResolution = () => {

    this.setState({settings: {...this.state.settings,
       video: {...this.state.settings.video, resolution:
          '720p'}
        }
      })

  }



  render(){
      console.log(this.state.settings)
    return(<div> <button  onClick={this.changeBitrate} className='bitrate'> bitrate  </button>
    <button  onClick={this.changeResolution} className='resolution'> resolution  </button>
    </div>)
  }


}
