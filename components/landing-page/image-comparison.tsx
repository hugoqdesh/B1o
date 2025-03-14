import React from "react";
import {
	ImageComparison,
	ImageComparisonImage,
	ImageComparisonSlider,
} from "../ui/image-comparison";
import { GlowEffect } from "../ui/glow-effect";

const ImageSlide = () => {
	return (
		<div className="relative">
			<GlowEffect colors={["#FFF"]} mode="breathe" blur="medium" />
			<ImageComparison
				className="aspect-16/10 w-full rounded-lg border border-zinc-800"
				enableHover
				springOptions={{
					bounce: 0.1,
				}}
			>
				<ImageComparisonImage
					src="/demo.png"
					alt="Motion Primitives Dark"
					position="left"
				/>
				<ImageComparisonImage
					src="/linktree.png"
					alt="Motion Primitives Light"
					position="right"
				/>
				<ImageComparisonSlider className="w-0.5 bg-white/30 backdrop-blur-xs" />
			</ImageComparison>
		</div>
	);
};

export default ImageSlide;
