import React, { useState } from "react";
import { MapPin, SlidersHorizontal, ChevronDown } from "lucide-react";
import DropBottom from "../Modals/DropBottom";

const Header = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	return (
		<>
			<div className="bg-white/90 h-[56px] fixed w-full max-w-[500px]">
				<div className="h-full p-2 flex items-center justify-between">
					<div className="w-[70%] flex items-center gap-2">
						<MapPin size={16} />
						<div>4, Benson Street Maryland Lagos</div>
						<ChevronDown
							size={18}
							className="text-primary-dark hover:text-cyan-500 cursor-pointer"
						/>
					</div>
					<div className="w-[25%] flex items-center justify-end">
						<button
							onClick={() => setIsModalOpen(true)}
							className="bg-primary-dark flex flex-row items-center py-2 px-3 gap-3 rounded-full text-white"
						>
							<p>Filter</p>
							<SlidersHorizontal
								size={15}
								className="text-white"
							/>
						</button>
					</div>
				</div>
			</div>
			<DropBottom
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
			>
				<div className="flex flex-col gap-4">
					<h2 className="text-[16px] font-bold">Filter</h2>
					<div className="flex flex-col gap-2">
						<label
							htmlFor="category"
							className="text-[14px] font-semibold"
						>
							Category
						</label>
						<select
							id="category"
							className="border rounded-lg p-2 max-w-[500px]"
						>
							<option value="">Select Category</option>
							<option value="electronics">Electronics</option>
							<option value="fashion">Fashion</option>
							<option value="home">Home</option>
						</select>
					</div>
					<div className="flex flex-col gap-2">
						<label
							htmlFor="price"
							className="text-[14px] font-semibold"
						>
							Price Range
						</label>
						<input
							type="range"
							id="price"
							min="0"
							max="1000"
							className="w-full"
						/>
					</div>
				</div>
			</DropBottom>
		</>
	);
};

export default Header;
