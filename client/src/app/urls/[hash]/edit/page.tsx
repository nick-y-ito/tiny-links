"use client";
import { useNewUrlPage } from "@/app/urls/[hash]/edit/useNewUrlPage";
import { Link } from "@chakra-ui/next-js";
import {
	Box,
	Button,
	Heading,
	HStack,
	Input,
	Text,
	VStack,
} from "@chakra-ui/react";

const TINY_BASE_URL = process.env.NEXT_PUBLIC_TINY_BASE_URL;

if (!TINY_BASE_URL) {
	throw new Error("TINY_BASE_URL is not defined");
}

interface IPageProps {
	params: {
		hash: string;
	};
}

export default function Page({ params }: IPageProps) {
	const { hash } = params;
	const tinyUrl = `${TINY_BASE_URL}/u/${hash}`;

	const { url, newOrigUrl, handleInputChange, handleUpdate } = useNewUrlPage({
		hash,
	});

	if (!url) {
		return null;
	}

	return (
		<Box w={96}>
			<VStack fontSize="sm" alignItems="flex-start">
				<HStack>
					<Text color="gray.400">Tiny URL:</Text>
					<Link href={tinyUrl}>{tinyUrl}</Link>
				</HStack>
				<HStack>
					<Text color="gray.400">Original URL:</Text>
					<Link href={url.origUrl}>{url.origUrl}</Link>
				</HStack>
				<VStack as="form" mt={4} w="100%" alignItems="stretch" textAlign="left">
					<Heading fontSize="2xl">Edit URL</Heading>
					<Input value={newOrigUrl} onChange={handleInputChange} />
					<Button variant="solid" onClick={handleUpdate}>
						Save
					</Button>
				</VStack>
			</VStack>
		</Box>
	);
}
