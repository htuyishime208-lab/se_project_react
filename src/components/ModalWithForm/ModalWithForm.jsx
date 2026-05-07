import "./ModalWithForm.css"
function ModalWithForm({isOpen, onClose, children,handleSubmit, title, buttontext}) {
return (
<div className={`modal ${isOpen ? "modal_is-opened" : ""}`}>
<div className="modal__container modal__container_type_form">
    <button
          type="button"
          className="modal__close-btn"
          onClick={onClose}
          aria-label="Close modal"
          
        >
            ✖
        </button>
<h2 className="modal__title"> {title}</h2>

 <form onSubmit={handleSubmit} className="modal__form">
{children}
<div className="button__Container">
<button type="submit" className="modal__submit-btn ">{buttontext}</button>
  <button type="button" className="modal__register-btn ">Register</button>
</div>
 </form>


</div>

</div>
);
}

export default ModalWithForm;