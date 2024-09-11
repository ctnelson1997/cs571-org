import { Button, Card } from "react-bootstrap";

export default function F24LectureFocus(props) {

  return <div id="lecture-focus-primary">
    <h2 style={{paddingTop: "4rem"}}>{props.title}</h2>
    <p>{props.desc}</p>
    {props.cs571org && <p><strong>Remember to replace <code>cs571api.cs.wisc.edu</code> with <code>cs571.org</code> within your code!</strong></p>}
    {props.notes && <Button style={{marginRight: "0.5rem"}} variant="outline-primary" onClick={() => window.open(props.notes.url, "_blank")}>Download Slides</Button>}
    {props.hw && <Button style={{marginRight: "0.5rem"}} variant="outline-secondary" onClick={() => window.open(props.hw.url, "_blank")}>{props.hw.name}</Button>}
    {props.ice && <Button style={{marginRight: "0.5rem"}} variant="outline-secondary" onClick={() => window.open(props.ice.url, "_blank")}>{props.ice.name}</Button>}
    {props.ica && <Button style={{marginRight: "0.5rem"}} variant="outline-secondary" onClick={() => window.open(props.ica.url, "_blank")}>{props.ica.name}</Button>}
    <div style={{ margin: "1rem", display: 'flex', justifyContent: 'center', alignItems: "center" }}>
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
        /> : <div style={{ width: "100%", textAlign: "center" }}>
          <p style={{ fontSize: "1.5rem" }}>This content is not yet available!</p>
        </div>
      }
    </div>
    <hr />
  </div>
}