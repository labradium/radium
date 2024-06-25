import { ThemeToggle } from "@/ui/components/theme-toggle";
import { Button } from "@/ui/primitives/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export default function Home() {
	return (
		<main className={"relative flex h-screen flex-col items-center justify-center"}>
			<h1 className={"text-4xl font-semibold"}>Radium Next.js Essential Starter</h1>
			<a href={"https://github.com/silver-radium/"} className={"mb-6"} target={"_blank"} rel="noreferrer">
				<Button>
					<GitHubLogoIcon className={"mx-2"} height={20} width={20} /> Star on GitHub
				</Button>
			</a>
			<ThemeToggle />
		</main>
	);
}
