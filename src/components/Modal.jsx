import '../style/Modal.css'

export function Modal(props){
    // ecrire la fonction modal
    return(
        <div className="modal">
            <p>Employee Created ! </p>
            <button onClick={props.close} className="close-button">Close</button>
        </div>
    )
}