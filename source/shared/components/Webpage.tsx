import React from 'react';

type Props = React.PropsWithChildren<{
  title: string;
  stylesheets?: string[];
}>;

export default function Webpage({ title, children, stylesheets }: Props) {
  return (
    <html lang="es">
      <head>
        <base href="/" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="base.css" />
        {stylesheets?.map((href) => (
          <link key={href} rel="stylesheet" href={href} />
        ))}
        <title>{title}</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
