const ConfirmationModal = ({ isOpen, onConfirm, onCancel }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded-md">
                <h2 className="text-lg font-semibold">Confirm</h2>
                <p>Are you sure you want to delete this reservation?</p>
                <div className="flex justify-end mt-4">
                    <button
                        className="px-4 py-2 bg-red-500 text-white rounded-md"
                        onClick={onConfirm}
                    >
                        Yes
                    </button>
                    <button
                        className="px-4 py-2 bg-gray-300 text-black rounded-md ml-2"
                        onClick={onCancel}
                    >
                        No
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;
