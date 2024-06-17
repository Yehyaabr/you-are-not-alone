const Modal = ({ show, onClose, children }) => {
	if (!show) {
		return null;
	}

	return (
		<div
			className="modal-overlay opacity-[1] fixed top-0 right-0 bg-opacity-25 backdrop-blur-sm  bottom-0 left-0 z-[1050] before:hidden overflow-hidden outline-[0] w-full h-full  after:block overflow-x-auto overflow-y-hidden text-right bg-blue-50"
			onClick={onClose}>
			<div className="rounded-none fixed left-0 top-0 w-[608px] float-right flex flex-col h-full" onClick={e => e.stopPropagation()}>
				{children}
			</div>
		</div>
	);
};

export default Modal;
