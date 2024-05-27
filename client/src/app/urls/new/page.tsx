"use client";
import { urlService } from "@/services/url.service";
import { Box, Button, Heading, Input, VStack } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

const TINY_BASE_URL = process.env.NEXT_PUBLIC_TINY_BASE_URL;

if (!TINY_BASE_URL) {
	throw new Error("TINY_BASE_URL is not defined");
}

export default function Page() {
	const router = useRouter();
	const [newUrl, setNewUrl] = useState("");

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setNewUrl(e.target.value);
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			await urlService.createUrl(newUrl);
			router.push("/urls");
		} catch (error) {
			alert(`Failed to create URL. Please try again.`);
		}
	};

	return (
		<Box w={96}>
			<VStack fontSize="sm" alignItems="flex-start">
				<Box
					as="form"
					mt={4}
					w="100%"
					display='flex'
					flexDir="column"
					gap={2}
					alignItems="stretch"
					textAlign="left"
					onSubmit={handleSubmit}
				>
					<Heading fontSize="2xl">Create URL</Heading>
					<Input
						placeholder="Enter URL"
						value={newUrl}
						onChange={handleChange}
					/>
					<Button type="submit" variant="solid">
						Create
					</Button>
				</Box>
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
