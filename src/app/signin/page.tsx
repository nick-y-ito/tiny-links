// if user is logged in:

// - redirects to /urls
//   if user is not logged in:

// - returns HTML with:
//   - a form which contains:
//   - input fields for email and password
//   - submit button that makes a POST request to /login
"use client";
import { Box, Button, Card, CardBody, CardFooter, CardHeader, FormControl, FormLabel, Heading, HStack, Input } from "@chakra-ui/react";

export default function SignIn() {
	return (
		<Box as="form">
			<Card w={80}>
				<CardHeader>
					<Heading fontSize="2xl">Sign In</Heading>
				</CardHeader>
				<CardBody gap={4} display="flex" flexDir="column">
					<FormControl>
						<FormLabel>Email address</FormLabel>
						<Input type="email" />
					</FormControl>
					<FormControl>
						<FormLabel>Password</FormLabel>
						<Input type="password" isDisabled />
					</FormControl>
				</CardBody>
				<CardFooter>
					<Button type="submit" w="100%">
						Sign In
					</Button>
				</CardFooter>
			</Card>
		</Box>
	);
}
