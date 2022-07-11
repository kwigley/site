import type { MetaFunction } from "@remix-run/cloudflare";
import Biography from "~/content/Biography.mdx";
import { Markdown } from "~/components/Markdown";
import { SmartLink } from "~/components/SmartLink";
import { generateMeta } from "~/utils/generateMeta";

export const meta: MetaFunction = ({ location: { pathname: path } }) => {
  return generateMeta({
    path,
    keywords: ["Kyle Wigley", "software engineer"],
  });
};

export default function Index() {
  return (
    <>
      <main className="overflow-hidden">
        <div className="relative z-10 max-w-sm mx-auto pt-48">
          <h1 className="text-4xl tracking-tight text-gray-900 dark:text-white">
            Hey, I'm <span className="font-bold">Kyle</span> 👋
          </h1>
          <section aria-labelledby="about-me">
            <div className="py-6 mt-6 prose dark:prose-invert prose-md">
              <Markdown contents={Biography} />
            </div>
          </section>
          <div className="grid grid-cols-2">
            <section aria-labelledby="social-links">
              <div className="py-6 prose dark:prose-invert uppercase text-xs">
                Social
              </div>
              <ul className="prose dark:prose-invert text-sm">
                <li>
                  <SmartLink href="mailto:&#104;&#101;&#121;&#64;&#107;&#121;&#108;&#101;&#119;&#105;&#103;&#115;&#46;&#99;&#111;&#109;">
                    email
                  </SmartLink>
                </li>
                <li>
                  <SmartLink href="https://linkedin.com/in/kylewigley">
                    linkedin
                  </SmartLink>
                </li>
                <li>
                  <SmartLink href="https://twitter.com/kylewigs">
                    twitter
                  </SmartLink>
                </li>
                <li>
                  <SmartLink href="https://github.com/kwigley">
                    github
                  </SmartLink>
                </li>
              </ul>
            </section>

            <section aria-labelledby="projects">
              <div className="py-6 prose dark:prose-invert uppercase text-xs">
                Projects
              </div>
              <ul className="prose dark:prose-invert text-sm">
                <li>
                  <SmartLink href="https://github.com/kwigley/dots">
                    dots
                  </SmartLink>
                </li>
                <li>
                  <SmartLink href="https://github.com/kwigley/nvim-dots">
                    nvim-dots
                  </SmartLink>
                </li>
                <li>
                  <SmartLink href="https://github.com/kwigley/changes">
                    changes
                  </SmartLink>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
