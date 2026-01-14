function ModalWithForm({isOpen, children,handleSubmit, title, buttontext}) {
return (
<div className={`modal ${isOpen ? "modal_is-opened" : ""}`}>
<div className="modal__container modal__container_type_form">
<h2 className="modal__title"> {title}</h2>
 <button type="button" className="modal__close-btn modal__close-btn_type_form">X</button>
 <form onSubmit={handleSubmit} className="modal__form">
{children}
 </form>
<button type="submit" className="modal__submit-btn ">{buttontext}</button>

</div>

</div>
);
}

export default ModalWithForm;