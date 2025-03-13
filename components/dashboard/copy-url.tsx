import React, { useId, useRef, useState } from "react";
import { Input } from "../ui/input";
import { CheckIcon, CopyIcon } from "lucide-react";
import { Button } from "../ui/button";

const Copy: React.FC = () => {
	const id = useId();
	const inputRef = useRef<HTMLInputElement>(null);
	const [isCopied, setIsCopied] = useState(false);

	const handleCopyToClipboard = () => {
		if (inputRef.current && navigator.clipboard) {
			navigator.clipboard
				.writeText(inputRef.current.value)
				.then(() => {
					setIsCopied(true);
					setTimeout(() => setIsCopied(false), 1500);
				})
				.catch((error) => console.error("Failed to copy text:", error));
		}
	};

	return (
		<div className="relative w-full">
			<Input
				ref={inputRef}
				id={id}
				className="pe-9"
				type="text"
				defaultValue="b1o.me/demo"
				readOnly
				aria-live="polite"
			/>

			<Button
				size="icon"
				variant="link"
				onClick={handleCopyToClipboard}
				className="absolute inset-y-0 end-0"
				disabled={isCopied}
				aria-label="Copy to clipboard"
			>
				{isCopied ? (
					<CheckIcon
						className="stroke-emerald-500 transition-transform scale-100"
						size={16}
						aria-hidden="true"
					/>
				) : (
					<CopyIcon
						className="transition-transform scale-100"
						size={16}
						aria-hidden="true"
					/>
				)}
			</Button>
		</div>
	);
};

export default Copy;
