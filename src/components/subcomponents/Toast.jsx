export default function Toast({toaster, removeToast}){

    return (
        <div className="toast" ref={toaster}>
            <p>Your input field is empty, Try again.</p><i className="fa-regular fa-x hover btn-toast" onClick={removeToast}></i>
        </div>
    )
}
