import { differenceInMinutes, format, formatDistance } from "date-fns";
import React from "react";
import { twMerge } from "tailwind-merge";
import CustomImage from "./CustomImage";
import { Link } from "react-router-dom";

export default function SessionScheduleBox({ data, classNames }) {
	return (
		<div
			className={twMerge(
				"border-gray-3000 rounded-xl border-2 py-3 px-4 dark:border-gray-800",
				classNames
			)}
		>
			<div className="flex flex-col gap-2">
				<div>
					<span
						className={twMerge(
							"self-start rounded-md px-2.5 py-0.5 text-xs font-medium",
							data.type === "GDG" &&
								"bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
							data.type === "IOTA" &&
								"bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
							data.type === "Epoch" &&
								"bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300",
							data.type === "Gradient" &&
								"bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
							data.type === "Matrix" &&
								"bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
							data.type === "Connexion" &&
								"bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
							data.type === "Nexsynch" &&
								"bg-Cyan-100 text-Cyan-800 dark:bg-Cyan-900 dark:text-Cyan-300",
                            data.type === "Reverb" &&
								"bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
                            data.type === "Keynote" &&
								"bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-300" ,   
                            data.type === "Meraki" &&
								"bg-lime-100 text-lime-800 dark:bg-lime-900 dark:text-lime-300"  ,
                            data.type === "Beatripperz" &&
								"bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300"  ,
                            data.type === "Nirvana" &&
								"bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300" ,   
                            data.type === "FStops" &&
								"bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300",
                            data.type === "Mise-en-Scene" &&
								"bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300"  ,
                            data.type === "Fitness" &&
								"bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-300"                  
						)}
					>
						{data.type}
					</span>{" "}
					<span className="flex-1 text-xs font-bold">{data.location}</span>
				</div>

				<div className="flex justify-between gap-3">
					<h1 className="flex-1 font-bold">{data.title}</h1>
					{/* <div className="flex-shrink-0 font-['space_mono']">
						{differenceInMinutes(new Date(data.end), new Date(data.start))}m
					</div> */}
				</div>

				{/* <div className="font-['space_mono'] text-gray-600 dark:text-gray-400">
					{format(new Date(data.start), "HH:mm")}
					{" - "}
					{format(new Date(data.end), "HH:mm")}
				</div> */}

				<div className="flex flex-wrap items-center gap-2">
					{/* <div className="flex -space-x-4">
							{data.speaker.map((e) => (
								<Link to={`/speakers/${"Khaled%20Letaief"}`}>
									<CustomImage
										key={e.name}
										className="h-10 w-10 rounded-full border border-white object-cover dark:border-gray-800"
										src={
											e.image.url + "?h=192&w=192" ||
											"https://flowbite.com/docs/images/people/profile-picture-4.jpg"
										}
										alt=""
									/>
								</Link>
							))}
						</div> */}

					{data.type !== "Challenges" &&
					data.speakers &&
					data.speakers?.length === 1
						? data.speakers?.[0].name
						: data.type !== "Challenges" &&
						  data.speakers && (
								<div className="font-['space_mono'] text-gray-600 dark:text-gray-400">
									{data.speakers?.length} speakers
								</div>
						  )}

					{data.description && <p>{data.description}</p>}

					{data.type !== "Challenges" && (
						<div className="font-['space_mono']">
							{data.speakers?.map((e, idx) => (
								// <Link to={`/speakers/${"Khaled%20Letaief"}`}>
								<span>
									{e}
									{idx !== data.speakers?.length - 1 && ", "}
								</span>
								// </Link>
							))}
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
