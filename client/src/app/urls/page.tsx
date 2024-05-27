"use client";
import { UrlCard } from "@/components/UrlCard";
import { Link } from "@chakra-ui/next-js";
import { Box, Button, Heading } from "@chakra-ui/react";
import { useUrls } from "@/app/urls/useUrls";

interface IPageProps {}

export default function Page({}: IPageProps) {
	const { urls, deleteUrl } = useUrls();

	return (
		<Box w="90%" maxW="512px">
			<Box display="flex" alignItems="center" justifyContent="space-between">
				<Heading fontSize="2xl">My URLs</Heading>
				<Link href="/urls/new">
					<Button variant="solid">Create</Button>
				</Link>
			</Box>
			<Box display="flex" flexDir="column" mt={4} gap={2}>
				{urls.map((url) => (
					<UrlCard key={url.hash} url={url} deleteUrl={deleteUrl} />
				))}
			</Box>
		</Box>
	);
}

// if user is logged in:

// - returns HTML with:
//   - the site header (see Display Requirements above)
//   - a list (or table) of URLs the user has created, each list item containing:
//     - a short URL
//     - the short URL's matching long URL
//     - an edit button which makes a GET request to /urls/:id
//     - a delete button which makes a POST request to /urls/:id/delete
//     - (Stretch) the date the short URL was created
//     - (Stretch) the number of times the short URL was visited
//     - (Stretch) the number number of unique visits for the short URL
//     - a link to "Create a New Short Link" which makes a GET request to /urls/new

// if user is not logged in:

// - returns HTML with a relevant error message
