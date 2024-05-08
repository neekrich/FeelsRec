import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import { Typography, IconButton, Box, Tooltip } from '@material-ui/core';
import './App.css'

function PlaylistElement(props) {

  const option = props.track

  return (
    <div className="PlaylistElement" style={{backgroundColor:props.color, borderRadius:5, paddingLeft:10}}>
      <Box key={option.title} display="flex" style={{alignItems:"center"}}>

        <img src={option.img} width={100} height={100} alt="album artwork" style={{paddingRight:10}}></img>
        <Typography variant="subtitle1">
          &nbsp;
          {option.artist} - {option.title}
          &nbsp;
          {option.explicit && <span style={{fontSize:'.75em',fontWeight:'bold',color:'red'}}>E</span>}
        </Typography>
        <div className="Right" style={{paddingRight:10}}>
        <Tooltip 
        arrow 
        title="Play on Spotify" 
        placement="left">
          <IconButton href={`spotify:track:${option.id}`}>
            <PlayCircleOutlineIcon/>
          </IconButton>
          </Tooltip>
        </div>
        
      </Box>
    </div>
  )
}

export default PlaylistElement