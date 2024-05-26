"use client";
import { IUrl } from "@/types/url";
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
import { useEffect, useState } from "react";

const TINY_BASE_URL = process.env.NEXT_PUBLIC_TINY_BASE_URL;

if (!TINY_BASE_URL) {
	throw new Error("TINY_BASE_URL is not defined");
}

interface IPageProps {
	params: {
		urlId: string;
	};
}

export default function Page({ params }: IPageProps) {
	const { urlId } = params;
	const tinyUrl = `${TINY_BASE_URL}/u/${urlId}`;

	const [url, setUrl] = useState<IUrl>();

	useEffect(() => {
		setUrl({
			urlId: "aaaaa",
			origUrl: "https://example.com",
		});
	}, []);

	if (!url) return null;

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
					<Input value={url.origUrl} />
					<Button variant="solid">Save</Button>
				</VStack>
			</VStack>
		</Box>
	);
}
