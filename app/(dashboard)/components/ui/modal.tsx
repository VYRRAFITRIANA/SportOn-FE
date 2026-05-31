import { FiX } from "react-icons/fi";

type TModalPage = {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
};

const Modal = ({ isOpen, onClose, title, children }: TModalPage) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* BACKDROP */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* MODAL BOX */}
            <div className="relative bg-white rounded-xl max-w-6xl">
                
                {/* HEADER */}
                <div className="flex justify-between items-center p-6 border-b border-gray-100">
                    <h3 className="text-lg font-semibold">
                        {title}
                    </h3>

                    <button
                        onClick={onClose}
                        className="p-2 rounded-full hover:bg-gray-100"
                    >
                        <FiX size={20} />
                    </button>
                </div>

                {/* CONTENT */}
                <div className="p-6">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;