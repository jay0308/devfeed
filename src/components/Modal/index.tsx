export const Modal = ({ children, closeModal, title }: { children: React.ReactNode, closeModal: () => void, title: string }) => {
    return (
        <div className="modal-container fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
            <div className="overlay" onClick={closeModal}></div>
            <div className="modal-content-container bg-white rounded-md p-4 w-full max-w-2xl">
                <div className="modal-header">
                    <h2 className="text-2xl font-bold">{title}</h2>
                    </div>
                    <div className="modal-content bg-white rounded-md p-4">
                        {children}
                    </div>
                    <button className="modal-close-button absolute top-4 right-4 text-gray-500 hover:text-gray-700" onClick={closeModal}>×</button>
                </div>
        </div>
    );
}