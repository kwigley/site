import type { AnchorHTMLAttributes } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import MailIcon from "@heroicons/react/outline/MailIcon";
import { ExternalLink } from "./ExternalLink";

const navigation = [
  {
    name: "LinkedIn",
    link: (props: AnchorHTMLAttributes<HTMLAnchorElement>) => (
      <ExternalLink href="https://www.linkedin.com/in/kylewigley" {...props} />
    ),
    icon: <FontAwesomeIcon icon={faLinkedin} />,
  },
  {
    name: "GitHub",
    link: (props: AnchorHTMLAttributes<HTMLAnchorElement>) => (
      <ExternalLink href="https://github.com/kwigley" {...props} />
    ),
    icon: <FontAwesomeIcon icon={faGithub} />,
  },
  {
    name: "Twitter",
    link: (props: AnchorHTMLAttributes<HTMLAnchorElement>) => (
      <ExternalLink href="https://twitter.com/kylewigs" {...props} />
    ),
    icon: <FontAwesomeIcon icon={faTwitter} />,
  },
  {
    name: "Email",
    link: (props: AnchorHTMLAttributes<HTMLAnchorElement>) => (
      <ExternalLink
        href="mailto:&#104;&#101;&#121;&#64;&#107;&#121;&#108;&#101;&#119;&#105;&#103;&#115;&#46;&#99;&#111;&#109;"
        {...props}
      />
    ),
    icon: <MailIcon />,
  },
];

export const Footer = () => {
  return (
    <footer>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 md:flex md:items-center md:justify-between">
        <div className="flex justify-center space-x-6">
          {navigation.map((item) => (
            <item.link
              key={item.name}
              className="text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400"
            >
              <span className="sr-only">{item.name}</span>
              <svg className="h-6 w-6" aria-hidden="true">
                {item.icon}
              </svg>
            </item.link>
          ))}
        </div>
      </div>
    </footer>
  );
};
