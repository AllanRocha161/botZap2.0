import { storage } from '../storage.js'
import { VenomBot } from '../venom.js'
import { STAGES } from './index.js'

export const initialStage = {
  async exec({ from }) {
    storage[from].stage = STAGES.MENU

    const venombot = await VenomBot.getInstance()

    const message = `
      👋 Olá, como vai?
      Eu sou a Luna, a *assistente virtual* da ${venombot.getSessionName}.
      \n*Estou aqui para te ajudar a ter uma fesa inesquecível!* 🙋🏼‍♀️ 
      \nEscolha uma opção abaixo, por favor:
      -----------------------------------
      1️⃣ - Já sei qual tema eu quero para a minha festa\n
      2️⃣ - Ainda estou em dúvida. Me leve até o Instagram para eu ver as fotos dos temas disponíveis\n
      0️⃣ - Quero alterar meu pedido ou gostaria de falar com um atendente\n
    `
    await venombot.sendText({ to: from, message })
  },
}
