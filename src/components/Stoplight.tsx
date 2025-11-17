import { useEffect, useState } from "react";

type LightColor = "red" | "yellow" | "green";

interface LightSequence {
	color: LightColor;
	duration: number;
}

const DEFAULT_SEQUENCE: LightSequence[] = [
	{ color: "green", duration: 5000 }, // 5 seconds
	{ color: "yellow", duration: 1000 }, // 1 second
	{ color: "red", duration: 2000 }, // 2 seconds
];

function Stoplight() {
	const [activeLight, setActiveLight] = useState<LightColor>("green");
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const currentConfig = DEFAULT_SEQUENCE[currentIndex];
		setActiveLight(currentConfig.color);

		const timer = setTimeout(() => {
			// Move to next light in sequence, wrapping around
			setCurrentIndex((prevIndex) => (prevIndex + 1) % DEFAULT_SEQUENCE.length);
		}, currentConfig.duration);

		return () => clearTimeout(timer);
	}, [currentIndex]);

	const Light = ({ color, label }: { color: LightColor; label: string }) => {
		const isActive = activeLight === color;
		const colorClasses = {
			red: isActive
				? "bg-red-500 shadow-lg shadow-red-500/50"
				: "bg-red-900/30",
			yellow: isActive
				? "bg-yellow-500 shadow-lg shadow-yellow-500/50"
				: "bg-yellow-900/30",
			green: isActive
				? "bg-green-500 shadow-lg shadow-green-500/50"
				: "bg-green-900/30",
		};

		return (
			<div className="flex items-center gap-4">
				<div
					className={`w-20 h-20 rounded-full border-4 border-gray-700 ${colorClasses[color]} transition-all duration-300`}
				/>
				<span className="text-white f ont-semibold">{label}</span>
				<span className="text-gray-400 text-sm">
					({isActive ? "On" : "Off"})
				</span>
			</div>
		);
	};

	return (
		<div className="flex flex-col items-center">
			<div className="bg-gray-800 rounded-lg p-6 shadow-2xl">
				<div className="flex flex-col gap-4">
					<Light color="red" label="Red" />
					<Light color="yellow" label="Yellow" />
					<Light color="green" label="Green" />
				</div>
			</div>
		</div>
	);
}

export default Stoplight;
