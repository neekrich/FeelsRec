import ParamSlider from './ParamSlider'
import './App.css'


function Controls() {

  // acousticness:null,
  // danceability:null,
  // energy:null,
  // instumentalness:null,
  // liveness:null,
  // loudness:null,
  // popularity:null,
  // tempo:null,
  // valence:null

  return (
    <div className="Controls">
      <ParamSlider
        param="acousticness"
        description="How acoustic sounding a track is. Higher values mean 
        fewer electric instruments, like synthesizers and electric guitars."/>
      <ParamSlider 
        param="danceability"
        description="Does that song make you want to dance? If yes, it's danceable.
        Higher values mean more danceable tracks."/>
      <ParamSlider 
        param="energy"
        description="Are we turning up or is it a chill day in the office? Higher values mean more energetic songs, while lower
        values means calmer ones."/>
      <ParamSlider 
        param="instrumentalness"
        description="High values for instrumentalness find songs with few vocals, while
        lower values mean songs with more vocals."/>
      {/* <ParamSlider param="liveness"/> */}
      {/* <ParamSlider param="loudness"/> */}
      <ParamSlider 
        param="popularity"
        description="Spotify measures this, not me (lol)."/>
      {/* <ParamSlider param="tempo"/> */}
      <ParamSlider 
        param="valence"
        description="What's the mood for today? Higher valence is more positive, lower valence is more sad, depressed or angry."/>
    </div>
  )
}

export default Controls