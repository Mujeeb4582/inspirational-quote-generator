import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

export const GradientBackgroundCon = styled.div`
	background: linear-gradient(to right, #000046, #1cb5e0);
	background-size: 400% 400%;
	animation: gradient 6s ease infinite;
	height: 100vh;
	width: 100vw;
	@keyframes gradient {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
`;

export const BackgroundImage1 = styled(Image)`
	position: relative;
	z-index: 1;
	margin-left: 40px;
	margin-top: 40px;
`;

export const BackgroundImage2 = styled(Image)`
	position: fixed;
	z-index: 1;
	right: 40px;
	bottom: 40px;
`;

export const FooterCon = styled.div`
	width: 100vw;
	height: 50px;
	text-align: center;
	font-family: "Source Code Pro", monospace;
	font-size: 15px;
	position: absolute;
	bottom: 0;
	color: #fff;
	z-index: 999999;
`;

export const FooterLink = styled(Link)`
	color: #fff;
`;
