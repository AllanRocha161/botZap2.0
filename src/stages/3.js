import { VenomBot } from '../venom.js'
import { storage } from '../storage.js'
import { STAGES } from './index.js'

export const stageThree = {
  async exec({ from, message }) {
    storage[from].address = message
    storage[from].stage = STAGES.PEDIDO

    let msg = 'Pedido *CANCELADO* com sucesso. \n Você é bem vindo(a) para tentar novamente!'
    if (message === '*') {
      storage[from].stage = STAGES.INICIAL
    } else {
      const itens = storage[from].itens
      const desserts = itens.map((item) => item.description).join(', ')
      const price =  itens.map((item) => item.price).join(', ')
      const total = storage[from].itens.length

      msg =
        `🗒️ *RESUMO DO PEDIDO*: \n\n🥳 Temas: *${desserts}* \n📍 Data: *${message}* \n🚚 Taxa de entrega: *a confirmar*. \n💰 Valor dos Temas: *${
          total * price
        },00 reais*.` + 
        '\n🔊 ```Agora, informe a forma de pagamento: Dinheiro, Cartão ou Pix.```'

        await VenomBot.getInstance().sendText({ to: from, message: msg })
        return '✅ *Prontinho, pedido feito!*'

    }
    
    
  },
}
