import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
export default function Home() {
  return (
    <div className="container flex flex-col gap-4 mt-12">
      <div>
        <h1 className="text-4xl font-semibold mb-4 max-w-[36ch] tracking-tighter">
          A collection of pricing page examples, ready for your next project.
        </h1>

        <Button asChild>
          <Link href="/pricingCards">View examples</Link>
        </Button>
      </div>
      <Separator className="my-6" />
      <div className="">
        <h2 className="text-2xl font-semibold mb-4 tracking-tight">
          Why this?
        </h2>

        <p className="mb-2">
          I wanted to share a few examples of pricing page layouts that I have
          created in recent months with the community.
        </p>
        <p>
          This project is <span className="uppercase font-bold">not</span>{" "}
          affiliated with shadcn or shadcn/ui.
        </p>
      </div>
      <Separator className="my-6" />
      <div className="">
        <h2 className="text-2xl font-semibold mb-4 tracking-tight">
          Get started
        </h2>

        <p className="mb-2">
          All of the examples are built using{" "}
          <span className="font-semibold">shadcn/ui</span> and{" "}
          <span className="font-semibold">Tailwind CSS</span>.
        </p>

        <div>
          <p>
            To get started with shadcn/ui and tailwindcss just follow the
            installation guide at:
            <span>
              {" "}
              <Link
                href="https://ui.shadcn.com/docs/installation"
                className="underline"
              >
                shadcn/ui installation
              </Link>
            </span>{" "}
          </p>

          <p>
            Some examples also require the installation of extra libraries, such
            as: <span className="font-semibold">@number-flow/react</span>. In
            most cases, these are optional and can be easily replaced with your
            own implementation / alternative.
          </p>
        </div>
      </div>

      <Separator className="my-6" />
      <div>
        <h2 className="text-2xl font-semibold mb-4 tracking-tight">
          How to use
        </h2>

        <div>
          <p>You just copy and paste the components, the code is yours!</p>
        </div>
      </div>

      <Separator className="my-6" />
      <h2 className="text-2xl font-semibold mb-4 tracking-tight">
        Feedback / Contributing
      </h2>
      <p>
        Have feedback? Just reach out to me on github:{" "}
        <Link
          className="underline"
          target="_blank"
          href="https://github.com/mnove"
        >
          mnove
        </Link>
      </p>
      <p>
        If you want to contribute, just open a PR on the{" "}
        <Link href="/>" className="underline">
          GitHub repository
        </Link>
      </p>
    </div>
  );
}
