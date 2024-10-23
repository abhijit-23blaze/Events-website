import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { motion } from "framer-motion";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Navigation from "./Navigation";
import ScrollToTop from "react-scroll-to-top";
import { twMerge } from "tailwind-merge";
import { useState } from "react";

const pageVariants = {
	initial: {
		opacity: 0,
	},
	in: {
		opacity: 1,
	},
	out: {
		opacity: 0,
	},
};

const pageTransition = {
	type: "tween",
	ease: "linear",
	duration: 0.2,
};

export default function AppLayout({ children }) {
	const { pathname } = useLocation();
	const [isModalOpen, setIsModalOpen] = useState(false);

	// Function to toggle the modal
	const toggleModal = () => {
		setIsModalOpen(!isModalOpen);
	};

	return (
		<>
			<div className="flex min-h-full flex-col">
				{/* About Us Button */}
				{/* <button
	className="group relative w-40 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 p-0.5 text-sm font-medium transition-shadow hover:text-white focus:outline-none focus:ring-4 focus:ring-purple-200 group-hover:from-purple-500 group-hover:to-pink-500 dark:focus:ring-purple-800"
	onClick={toggleModal}
>
	<div className="relative flex items-center justify-center gap-2 rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
		<span>About Us</span>
	</div>
</button> */}


				<main className="container mx-auto flex flex-1 p-4 py-8 2xl:px-24">
					<motion.div
						className="flex-1"
						key={pathname}
						initial="initial"
						animate="in"
						variants={pageVariants}
						transition={pageTransition}
					>
						{children}
						<Outlet />
					</motion.div>
				</main>

				{/* Modal Popup */}
				{isModalOpen && (
					<div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
						<div className="bg-white p-6 rounded-lg shadow-lg">
							<h2 className="text-2xl font-bold mb-4">About Us</h2>
							<p className="mb-4">Team Members:</p>
							<ul className="list-disc list-inside">
								<li>Abhijit Patil</li>
								<li>Member 2</li>
								<li>Member 3</li>
								{/* Add more names as needed */}
							</ul>
							<button
								className="mt-4 bg-red-500 text-white py-2 px-4 rounded"
								onClick={toggleModal}
							>
								Close
							</button>
						</div>
					</div>
				)}
			</div>

			<ScrollToTop
				className={twMerge(
					"flex items-center justify-center !rounded-full p-3 transition"
				)}
			/>

			<ScrollRestoration />
		</>
	);
}
