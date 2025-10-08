function CustomModal( { isOpen, onclose, children }) {
    if(!isOpen) return null
    return ( 
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
                className="absolute inset-0 backdrop-blur-xl transition-opacity"
                onClick={onclose}              
            />
            <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg max-w-md w-full mx-4 transform transition-all">
                <button
                    onClick={onclose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                    aria-label="Close modal"
                >
                    <i className="bx bx-x text-2xl"></i>
                </button>
                {children}
            </div>
        </div>
     );
}

export default CustomModal;