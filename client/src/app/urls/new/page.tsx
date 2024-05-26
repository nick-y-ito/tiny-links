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

export default function Page() {
	return (
		<Box w={96}>
			<VStack fontSize="sm" alignItems="flex-start">
				<VStack as="form" mt={4} w="100%" alignItems="stretch" textAlign="left">
					<Heading fontSize="2xl">Create URL</Heading>
					<Input />
					<Button variant="solid">Create</Button>
				</VStack>
			</VStack>
		</Box>
	);
}

// if user is logged in:

// - returns HTML with:
//   - the site header (see Display Requirements above)
//   - a form which contains:
//     - a text input field for the original (long) URL
//     - a submit button which makes a POST request to /urls

// if user is not logged in:

// - redirects to the /login page
