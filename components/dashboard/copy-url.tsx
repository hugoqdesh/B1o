import React, { useId, useRef, useState } from "react";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { CheckIcon, CopyIcon } from "lucide-react";
import { Button } from "../ui/button";

const Copy = () => {
	const id = useId();
	const [copied, setCopied] = useState<boolean>(false);
	const inputRef = useRef<HTMLInputElement>(null);

	const handleCopy = () => {
		if (inputRef.current) {
			navigator.clipboard.writeText(inputRef.current.value);
			setCopied(true);
			setTimeout(() => setCopied(false), 1500);
		}
	};
	return (
		<div className="relative w-full">
			<Input
				ref={inputRef}
				id={id}
				className="pe-9"
				type="text"
				defaultValue="b1o.me/hugoqdesh"
				readOnly
			/>
			<Button
				size="icon"
				variant="link"
				onClick={handleCopy}
				className="absolute inset-y-0 end-0"
				disabled={copied}
			>
				<div
					className={cn(
						"transition-all",
						copied ? "scale-100 opacity-100" : "scale-0 opacity-0"
					)}
				>
					<CheckIcon
						className="stroke-emerald-500"
						size={16}
						aria-hidden="true"
					/>
				</div>
				<div
					className={cn(
						"absolute transition-all",
						copied ? "scale-0 opacity-0" : "scale-100 opacity-100"
					)}
				>
					<CopyIcon size={16} aria-hidden="true" />
				</div>
			</Button>
		</div>
	);
};

export default Copy;
