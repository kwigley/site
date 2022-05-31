import type {
  ErrorBoundaryComponent,
  LinksFunction,
  MetaFunction,
} from "@remix-run/cloudflare";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from "@remix-run/react";
import styles from "~/styles/dist.css";
import { useSafeLayoutEffect } from "~/utils/useSafeLayoutEffect";
import { Footer } from "./components/Footer";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: "/fonts/inter/variable.css" },
  ];
};

export const meta: MetaFunction = () => {
  return {
    title: "Kyle Wigley",
    description: "Personal website of Kyle Wigley, Software Engineer",
  };
};

const Document = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) => {
  useSafeLayoutEffect(() => {
    document.body.parentElement?.classList.remove("no-js");
  });

  return (
    <html lang="en" className="no-js">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
      </head>
      <body className="bg-white dark:bg-gray-900">
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
};

export default function App() {
  return (
    <Document>
      {/* <Header /> */}
      <Outlet />
      <Footer />
    </Document>
  );
}

export const CatchBoundary = () => {
  const caught = useCatch();

  switch (caught.status) {
    case 404:
      return (
        <Document title="Not Found | Kyle Wigley">
          {/* <Header /> */}
          {/* <NotFound /> */}
          <Footer />
        </Document>
      );

    default:
      throw new Error(
        `Unexpected caught response with status: ${caught.status}`
      );
  }
};

export const ErrorBoundary: ErrorBoundaryComponent = () => {
  return (
    <Document title="Unexpected Error | Kyle Wigley">
      {/* <Header /> */}

      {/* <UnexpectedError error={error} /> */}

      <Footer />
    </Document>
  );
};
