import { IUrl } from "@/types/url";
import { Link } from "@chakra-ui/next-js";
import { Button, Card, CardBody, HStack, VStack } from "@chakra-ui/react";

const TINY_BASE_URL = process.env.NEXT_PUBLIC_TINY_BASE_URL;

if (!TINY_BASE_URL) {
	throw new Error("TINY_BASE_URL is not defined");
}

interface IUrlCardProps {
	url: IUrl;
}

export const UrlCard = ({ url }: IUrlCardProps) => {
	return (
		<Card>
			<CardBody>
				<HStack justifyContent="space-between">
					<VStack align="start" gap={0}>
						<Link href={`/urls/${url.hash}`} fontSize="lg" fontWeight="bold">
							{TINY_BASE_URL}/u/{url.hash}
						</Link>
						<Link href={url.origUrl} color="gray.400" fontSize="sm" isExternal>
							{url.origUrl}
						</Link>
					</VStack>
					<HStack>
						<Link href={`/urls/${url.hash}/edit`}>
							<Button variant="ghost">Edit</Button>
						</Link>
						<Button variant="ghost">Delete</Button>
					</HStack>
				</HStack>
			</CardBody>
		</Card>
	);
};
