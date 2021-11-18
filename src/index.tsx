import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer, Model } from 'miragejs'

createServer({
  // bando de dados interno do miragejs
  models: {
    // nome da tabela
    transaction: Model
  },

  // deixar alguns dados já cadastrados
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Desenvolvimento de website',
          amount: 12000,
          type: 'deposit',
          category: 'Dev',
          createdAt: new Date('2021-11-17 15:27:01')
        },
        {
          id: 2,
          title: 'Pizza',
          amount: 59,
          type: 'withdraw',
          category: 'Alimentação',
          createdAt: new Date('2021-11-20 21:03:11')
        },
        {
          id: 3,
          title: 'Aluguel',
          amount: 1200,
          type: 'withdraw',
          category: 'Casa',
          createdAt: new Date('2021-11-21 10:47:50')
        }
      ]
    })
  },
  
  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      // inserir transação no banco de dados do miragejs
      return schema.create('transaction', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);