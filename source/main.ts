import express from 'express';
import { createElement } from 'react';
import { renderToPipeableStream } from 'react-dom/server';

import Table from './contacts/components/Table';
import { listContacts } from './contacts/providers/contacts.service';

import Webpage from './shared/components/Webpage';

const app = express();

app.use(express.static('public'));

app.use((_, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS, HEAD',
  );
  next();
});

app.get('/', async (_, res) => {
  const contacts = await listContacts();

  const webpage = createElement(
    Webpage,
    { title: 'Contact List', stylesheets: ['contacts.css'] },
    createElement(Table, { contacts }),
  );

  const pipeConfig = {
    onAllReady() {
      res.writeHead(200, {
        'Content-Type': 'text/html',
        'Cache-Control': 'no-cache',
      });
    },
    onShellError(err: unknown) {
      console.error(err);
      res.status(500).end();
    },
  };

  const { pipe } = renderToPipeableStream(webpage, pipeConfig);

  pipe(res);
});

app.listen(80, () => console.log('http://localhost:80'));
