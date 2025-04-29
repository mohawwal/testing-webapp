import React from "react";

const DropBottom = ({ isOpen, onClose, children }) => {
	if (!isOpen) return null;
	return (
		<div className="fixed inset-0 z-50 bg-black/30 flex items-end justify-center">
			<div className="bg-white w-full max-w-[500px] rounded-t-2xl p-4 animate-slideUp">
				<button
					onClick={onClose}
					className="text-red-500 font-semibold mb-4 float-right"
				>
					Cancel
				</button>
				<div className="clear-both max-w-[500px]">{children}</div>
			</div>
		</div>
	);
};

export default DropBottom;
