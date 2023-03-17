import '../style/Modal.css'

export function Modal(props){
    // ecrire la fonction modal
    return(
        <div className="modal">
            <p>{props.message} </p>
            <button onClick={props.close} className="close-button">Close</button>
        </div>
    )
}