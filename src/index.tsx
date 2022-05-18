import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer, Model } from 'miragejs'
import { App } from './App';
import { request } from 'https';


createServer({

  models: {
    fakedb: Model
  },

  seeds(server){
    server.db.loadData({
      fakedbs: [
        {
          id: 1,
          title: 'Freelance de website',
          type: 'deposit',
          category: 'dev',
          amount: 6000,
          createdAt: new Date('2022-02-12 09:00:00')
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'despesas',
          amount: 1000,
          createdAt: new Date('2022-02-14 12:00:00')
        }
      ],
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('fakedb')
    })

    this.post('/transactions', (schema, request)=> {
      const data = JSON.parse(request.requestBody)

      return schema.create('fakedb', data);
    })
  }
})




const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

