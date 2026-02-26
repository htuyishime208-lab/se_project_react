import "./ItemModal.css"
function ItemModal({card, isOpen,onClose,handleDeleteItem,id}) {
  function handleDeleteClick() {
    handleDeleteItem(id);
  }
return (
<div className={`modal ${isOpen ? "modal_is-opened" : ""}`}>
<div className="modal__container">
<button
          type="button"
          className="modal__close-btn"
          onClick={onClose}
          aria-label="Close modal"
        >
          ✖
        </button>
    <img src={card.imageUrl} alt={card.name} className="modal__image"/>
    <div className="modal__footer">
        <h2 className="modal__text">{card.name}</h2>
        <p className="modal__text">{card.weather}</p>
        <button onClick={handleDeleteClick} className="modal__delete-btn"></button>
    </div>
</div>
</div>
);
}
export default ItemModal;