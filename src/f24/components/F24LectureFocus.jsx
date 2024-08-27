import { Card } from "react-bootstrap";

export default function F24LectureFocus(props) {
    
    return <div>
        <div style={{ margin: "1rem", display: 'flex', justifyContent: 'center', alignItems: "center"}}>
          {
            props.vid ? <iframe
              src={props.vid}
              style={{ width: '80vw', height: '80vh' }}
              allowFullScreen
              webkitallowfullscreen="true"
              mozAllowFullScreen="true"
              allow="autoplay *; fullscreen *; encrypted-media *"
              sandbox="allow-downloads allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation"
              frameBorder="0"
              title="Kaltura Playlist"
            /> : <div style={{width: "100%", textAlign: "left"}}>
              <p style={{fontSize: "1.5rem"}}>This content is not yet available!</p>
            </div>
          }
          
          
        </div>
      </div>
}