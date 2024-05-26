"use client";
import "./globals.css";
import { fonts } from "@/lib/fonts";
import { Providers } from "@/app/providers";
import { Button, Heading, HStack, VStack } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={fonts.inter.variable}>
			<body>
				<Providers>
					<HStack
						as="header"
						px={8}
						height={12}
						justify="space-between"
						bgColor="gray.100"
						pos="absolute"
						w="100%"
					>
						<Link href="/">
							<Heading fontSize="xl">Tiny Links</Heading>
						</Link>
						<Button variant="link">Sign Out</Button>
					</HStack>
					<VStack
						as="main"
						px={8}
						pt={12 + 4}
						h="100vh"
						display="flex"
						flexDir="column"
						alignItems="center"
						textAlign='center'
					>
						{children}
					</VStack>
				</Providers>
			</body>
		</html>
	);
}
