import React, { useState } from "react";
import Image from "next/image";

const Navbar = () => {
	return (
		<div className="flex w-full h-57 px-[5%] bg-[#252F3D] fixed nav">
			<Image
				src="/logo.svg"
				alt="Idea Theorem Logo"
				width={294}
				height={32}
				priority
			/>
		</div>
	);
};

export default Navbar;