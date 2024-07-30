import { ViewLayout } from "@/ui/layouts/view";
import { Button } from "@/ui/primitives/button";
import { Highlight } from "@/ui/primitives/highlight";
import { Label } from "@/ui/primitives/label";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Products() {
  return (
    <ViewLayout>
      <div className={"px-16 py-12 border-b border-ring border-zinc-400"}>
        <Label className={"text-3xl"}>Init</Label>
        <div>
          <p className={"my-4 text-sm text-zinc-800"}>
            Radium Init is a powerful CLI tool designed to help developers
            quickly initialize new projects using a variety of templates.
            Whether you're starting from scratch or looking to build on an
            existing setup, Radium Init simplifies the setup process, allowing
            you to jump straight into development and skip the process of
            project initialization.
          </p>
          <Link
            href={"https://github.com/silver-radium/init"}
            target={"_blank"}
          >
            <Button variant={"default"} className={"mt-4"}>
              Know More <ArrowRightIcon className={"ml-2"} />
            </Button>
          </Link>
        </div>
      </div>
      <div className={"px-16 py-12 border-b border-ring border-zinc-400"}>
        <Label className={"text-3xl"}>Templates</Label>
        <div>
          <p className={"my-4 text-sm text-zinc-800"}>
            Radium Init is a powerful CLI tool designed to help developers
            quickly initialize new projects using a variety of starter
            templates. Whether you're starting from scratch or looking to build
            on an existing setup, Radium Init simplifies the setup process,
            allowing you to jump straight into development and skip the process
            of project initialization.
          </p>
          <Link
            href={"https://github.com/silver-radium/templates"}
            target={"_blank"}
          >
            <Button variant={"default"} className={"mt-4"}>
              Know More <ArrowRightIcon className={"ml-2"} />
            </Button>
          </Link>
        </div>
      </div>
      <div className={"px-16 py-12 border-b border-ring border-zinc-400"}>
        <Label className={"text-3xl"}>Lab</Label>
        <div>
          <p className={"my-4 text-sm text-zinc-800"}>
            Radium Lab, Inside the Radium Lab we test and try new upcoming
            features before there is a stable release. We try different tools
            with different tools and see what works best for us.
          </p>
          <Link href={"https://github.com/silver-radium/lab"} target={"_blank"}>
            <Button variant={"default"} className={"mt-4"}>
              Know More <ArrowRightIcon className={"ml-2"} />
            </Button>
          </Link>
        </div>
      </div>
      <div className={"px-16 py-12 border-b border-ring border-zinc-400"}>
        <Label className={"text-3xl"}>Upcomings Radium Products</Label>
        <div>
          <p className={"my-4 text-sm text-zinc-800"}>
            We're working on some exciting new products that will make your
            development experience even better. These products are currently in{" "}
            <Highlight>Development Stage</Highlight> and will be released soon.
            Stay tuned for updates.
          </p>
          <ul
            className={
              "my-4 flex list-inside list-disc flex-col gap-2 text-sm text-zinc-800"
            }
          >
            <li>
              <Highlight>PWA</Highlight>: Progressive Web Apps are web
              applications that provide a native app-like experience on mobile
              devices.
            </li>
            <li>
              <Highlight>Parser</Highlight>: Starting with Markdown Parser -
              Radium Parser will offer an LLM output parsering at scale..
            </li>
            <li>
              <Highlight>UX</Highlight>: User Experience Library not User
              Interface Library..
            </li>
          </ul>
        </div>
      </div>
    </ViewLayout>
  );
}
