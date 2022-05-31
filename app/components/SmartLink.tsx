import { Link } from "@remix-run/react";
import type { LinkProps } from "@remix-run/react";
import type { AnchorHTMLAttributes } from "react";
import { forwardRef } from "react";
import { ExternalLink } from "./ExternalLink";

export const SmartLink = forwardRef<
  HTMLAnchorElement,
  AnchorHTMLAttributes<HTMLAnchorElement> | LinkProps
>(function SmartLink(props, forwardedRef) {
  if ("to" in props && props.to) {
    return (
      <Link ref={forwardedRef} {...props}>
        {props.children}
      </Link>
    );
  } else if ("href" in props && props.href) {
    const url = new URL(props.href, "relative://");
    if (url.protocol === "relative:" && url.hostname === "") {
      return (
        <Link ref={forwardedRef} to={url.pathname} {...props}>
          {props.children}
        </Link>
      );
    }
  }

  return <ExternalLink ref={forwardedRef} {...props} />;
});
