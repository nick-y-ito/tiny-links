import { urlService } from "@/services/url.service";
import { IUrl } from "@/types/url";
import { Link } from "@chakra-ui/next-js";
import { Button, Card, CardBody, HStack, VStack } from "@chakra-ui/react";

const TINY_BASE_URL = process.env.NEXT_PUBLIC_TINY_BASE_URL;

if (!TINY_BASE_URL) {
	throw new Error("TINY_BASE_URL is not defined");
}

interface IUrlCardProps {
	url: IUrl;
	deleteUrl: (url: IUrl) => void;
}

export const UrlCard = ({ url, deleteUrl }: IUrlCardProps) => {
	const handleDelete = async () => {
		try {
			await urlService.deleteUrl(url.hash);
			deleteUrl(url);
		} catch (error) {
			alert(`Failed to delete URL. Please try again.`);
		}
	};

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
						<Button variant="ghost" onClick={handleDelete}>
							Delete
						</Button>
					</HStack>
				</HStack>
			</CardBody>
		</Card>
	);
};
