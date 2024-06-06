const axios = require("axios")
const Binance = require('binance-api-node').default

interface UserOrdersOpen {
    data: Data;
    message: null;
}

interface OrdersData {
    code: string;
    type: string;
    subtype: string;
    requested_amount: number;
    remaining_amount: number;
    unit_price: number;
    status: string;
    create_date: string;
    update_date: string;
    pair: string;
    total_price: number;
    executed_amount: number;
    remaining_price: number;
}

interface Data {
    orders: OrdersData[];
    pagination: Pagination;
}

interface Pagination {
    current_page: number;
    page_size: number;
    registers_count: number;
    total_pages: number;
}

interface BalanceWallets {
    address: string;
    available_amount: number;
    currency_code: string;
    last_update: string;
    locked_amount: number;
    memo: null;
    supported_networks_for_deposit: string[];
    tag: null;
}

var Usuario: string = 'YURI'

var Cripto: string = 'DOGE'
var Real: string = 'BRL'
var Moeda: string = String(Real + Cripto)

var tempo = 5
var Tempo_cancelar = 30

// # PARAMETROS DE PROTEÇÃO EM % (QUANTO MAIOR OS NUMEROS, MAIOR SERA DISTANCIA AO PREÇO GLOBAL)
var Protecao_ignorar = 1.05
var Protecao_robo = 1
var Decimal_dif = 5;
var controle: number

const api_key = "euZWqWZTgxr9bAqWUoH1A0ll6bvlvSFmy38g9Q7N7LzezZdbo1sCNMn0x5DdjI7e"
const api_secret = "By6WkQ4Ziuoyly1ZhlFmvA6dAprHbWF4SApMDdgoJsZhvQZMnZzowLT66RYYHIId"

const secret_key = "U2FsdGVkX183wve5RcSegHi7pzkxTQHmpgDxuhOTRxVo8FUMoOO2xckpNcIR8r3t"

var id_compra = ''

let headers = {
    'x-api-key': secret_key,
    'Content-Type': 'application/json'
}

var preco_0: number, preco_1: number, preco_2: number, preco_3: number, preco_4: number, preco_5: number, preco_6: number, preco_compra: number
var quantidade_0: number, quantidade_1: number, quantidade_2: number, quantidade_3: number, quantidade_4: number, quantidade_5: number, quantidade_6: number
var valor_0: number, valor_1: number, valor_2: number, valor_3: number, valor_4: number, valor_5: number, valor_6: number
var venda_preco_0: number, venda_quantidade_0: number, valor_quantidade_0: number

const client = Binance({
    apiKey: api_key,
    apiSecret: api_secret,
})

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

function casaDecimal() {
    try {
        if (Cripto == 'LUNC') return 6

        if (Cripto == 'DOGE') return 5

        if (Cripto == 'USDC') return 3

        if (Cripto == 'MC') return 3


        if (Cripto == 'CREAL') return 3

        if (Cripto == 'SPELL') return 6

        if (Cripto == 'AVAX') return 0.1

        if (Cripto == 'EOS') return 1

        if (Cripto == 'USDT') return 3

        if (Cripto == 'BTC') return 0.1

        if (Cripto == 'ETH') return 0.1

        if (Cripto == 'BCH') return 0.1

        if (Cripto == 'XRP') return 4

        if (Cripto == 'SOL') return 2

        if (Cripto == 'LUNC') return 6

        if (Cripto == 'DOGE') return 3

        if (Cripto == 'LTC') return 2

        if (Cripto == 'ADA') return 2

        if (Cripto == 'SHIB') return 7

        if (Cripto == 'LINK') return 2

        if (Cripto == 'MATIC') return 3

        if (Cripto == 'FTM') return 3

        if (Cripto == 'APE') return 1

        if (Cripto == 'SAND') return 2

        if (Cripto == 'GALA') return 3

        if (Cripto == 'AXS') return 2

        if (Cripto == 'MANA') return 2

        if (Cripto == 'CHZ') return 3

        if (Cripto == 'UNI') return 2

        if (Cripto == 'ENJ') return 3

        if (Cripto == 'SXP') return 3

        if (Cripto == 'ANKR') return 3

        if (Cripto == 'PAXG') return 0.1

        if (Cripto == 'AAVE') return 2

        if (Cripto == 'ZRX') return 3

        return 0

    } catch (error) {
        throw error
    }
}

async function livro() {
    try {
        let url = `https://api.bitcointrade.com.br/v3/market/?pair=${Moeda}&limit=25`;

        let { data } = await axios.get(url, {
            headers: headers
        })

        if (data.message == 'Too Many Requests') {
            if (controle == 1) {
                await cancelarOrder();
                await estrategia()
            }
            await estrategia()
        }

        let livroDataBuying = data.data.buying;
        let livroDataSelling = data.data.selling;

        var posicao_0 = (livroDataBuying[0])
        var posicao_1 = (livroDataBuying[1])
        var posicao_2 = (livroDataBuying[2])
        var posicao_3 = (livroDataBuying[3])
        var posicao_4 = (livroDataBuying[4])
        var posicao_5 = (livroDataBuying[5])
        var posicao_6 = (livroDataBuying[6])

        preco_0 = (posicao_0["unit_price"])
        preco_1 = (posicao_1["unit_price"])
        preco_2 = (posicao_2["unit_price"])
        preco_3 = (posicao_3["unit_price"])
        preco_4 = (posicao_4["unit_price"])
        preco_5 = (posicao_5["unit_price"])
        preco_6 = (posicao_6["unit_price"])

        quantidade_0 = (posicao_0["amount"])
        quantidade_1 = (posicao_1["amount"])
        quantidade_2 = (posicao_2["amount"])
        quantidade_3 = (posicao_3["amount"])
        quantidade_4 = (posicao_4["amount"])
        quantidade_5 = (posicao_5["amount"])
        quantidade_6 = (posicao_6["amount"])

        valor_0 = (preco_0 * quantidade_0)
        valor_1 = (preco_1 * quantidade_1)
        valor_2 = (preco_2 * quantidade_2)
        valor_3 = (preco_3 * quantidade_3)
        valor_4 = (preco_4 * quantidade_4)
        valor_5 = (preco_5 * quantidade_5)
        valor_6 = (preco_6 * quantidade_6)

        var venda_posicao_0 = (livroDataSelling[0])

        venda_preco_0 = (venda_posicao_0["unit_price"])
        venda_quantidade_0 = (venda_posicao_0["amount"])
        valor_quantidade_0 = (venda_preco_0 * venda_quantidade_0)

    } catch (error) {
        throw error
    }
}

async function Preco_global() {
    try {
        var recentsTradesCripto = await client.futuresTrades({ symbol: `${Cripto}USDT` });

        var criptoPrice = recentsTradesCripto[recentsTradesCripto.length - 1].price

        var { data } = await axios.get('https://economia.awesomeapi.com.br/last/USD-BRL')

        var cd = casaDecimal()
        if (cd < 1) {
            cd = 1
        }

        return parseFloat((parseFloat(criptoPrice) * parseFloat(data.USDBRL.bid)).toFixed(cd))

    } catch (error) {
        throw error
    }
}

async function Ignorar() {
    try {
        var cd: number

        var preco_global = await Preco_global();
        console.log('preco_global', preco_global);

        var protecao = (preco_global * (Protecao_ignorar / 100))

        var global_price = (preco_global - protecao);

        cd = casaDecimal()

        if (cd < 1) {
            cd = 1
        }

        var price = parseFloat((global_price).toFixed(cd))

        if (preco_4 > price) {
            if (valor_5 < 300) {
                console.log("IGNORAR 0.1: ", preco_6)
                return preco_6
            }

            console.log("IGNORAR 0: ", preco_5)
            return preco_5
        }

        if (preco_3 > preco_global) {
            if (valor_4 < 300) {
                console.log("IGNORAR 1.1: ", preco_5)
                return preco_5
            }

            console.log("IGNORAR 1: ", preco_4)
            return preco_4
        }

        if (preco_2 > preco_global) {
            if (valor_3 < 300) {
                console.log("IGNORAR 2.1: ", preco_4)
                return preco_4
            }

            console.log("IGNORAR 2: ", preco_3)
            return preco_3
        }

        if (preco_1 > preco_global) {
            if (valor_2 < 300) {
                console.log("IGNORAR 3.1: ", preco_3)
                return preco_3
            }

            console.log("IGNORAR 3: ", preco_2)
            return preco_2
        }

        if (preco_0 > preco_global) {
            if (valor_1 < 300) {
                console.log("IGNORAR 4.1: ", preco_2)
                return preco_2
            }
            console.log("IGNORAR 4: ", preco_1)
            return preco_1
        }

        if (valor_0 < 200 && valor_1 < 120 && valor_2 < 120 && valor_3 < 120 && valor_4 < 120 && valor_5 < 120) {
            console.log("2 PRECO6: ", preco_6)
            return preco_6
        }

        if (valor_0 < 200 && valor_1 < 120 && valor_2 < 120 && valor_3 < 120 && valor_4 < 120) {
            console.log("3 PRECO5: ", preco_5)
            return preco_5
        }

        if (valor_0 < 200 && valor_1 < 100 && valor_2 < 100 && valor_3 < 100) {
            console.log("3 PRECO4: ", preco_4)
            return preco_4
        }

        if (valor_0 < 200 && valor_1 < 50 && valor_2 < 150 && valor_3 < 350 && valor_4 < 50) {
            console.log("4 PRECO5: ", preco_5)
            return preco_5
        }

        if (valor_0 < 200 && valor_1 < 250 && valor_2 < 250 && valor_3 < 100) {
            console.log("5 PRECO4: ", preco_4)
            return preco_4
        }

        if (valor_0 < 200 && valor_1 < 120 && valor_2 < 120 && valor_3 < 300) {
            console.log("1 PRECO3: ", preco_3)
            return preco_3
        }

        if (valor_0 < 200 && valor_1 < 250 && valor_2 < 299 && valor_3 > 100) {
            console.log("6 PRECO3: ", preco_3)
            return preco_3
        }

        if (valor_0 < 200 && valor_1 < 150 && valor_2 < 150 && valor_3 < 300 && valor_4 > 500) {
            console.log("7 PRECO4: ", preco_4)
            return preco_4
        }

        if (valor_0 < 200 && valor_1 < 150 && valor_2 < 350 && valor_3 < 150 && valor_3 > 550) {
            console.log("8 PRECO4: ", preco_4)
            return preco_4
        }

        if (valor_0 < 200 && valor_1 < 150 && valor_2 < 150) {
            console.log("9 PRECO3: ", preco_3)
            return preco_3
        }

        if (valor_0 < 200 && valor_1 > 1000) {
            console.log("10 PRECO1: ", preco_1)
            return preco_1
        }

        if (valor_0 < 200 && valor_1 < 150 && valor_2 < 150 && valor_3 < 150) {
            console.log("11 PRECO4: ", preco_4)
            return preco_4
        }

        if (valor_0 < 200 && valor_1 < 350 && valor_2 > 650) {
            console.log("12 PRECO2: ", preco_2)
            return preco_2
        }

        if (valor_0 > 1000) {
            console.log("13 PRECO0: ", preco_0)
            return preco_0
        }

        if (valor_0 < 200 && valor_1 < 150 && valor_2 < 150) {
            console.log("14 PRECO3: ", preco_3)
            return preco_3
        }

        if (valor_0 < 200 && valor_1 < 150 && valor_2 > 200) {
            console.log("15 PRECO2: ", preco_2)
            return preco_2
        }

        if (valor_0 < 200 && valor_1 > 300) {
            console.log("16 PRECO1: ", preco_1)
            return preco_1
        }

        if (valor_0 > 300) {
            console.log("17 PRECO0: ", preco_0)
            return preco_0
        }

        console.log("NENHUM CASO, VERIFICAR IGNORAR PRECO0: ", preco_0)
        return preco_0

    } catch (error) {
        throw error
    }
}

async function compra() {
    try {
        var cd: number, preco: number, saldo: number, deci: number, valor: number;

        var cd = casaDecimal();

        if (cd >= 1) {
            deci = (1 / (10 ** cd))
        } else {
            cd = 1
            deci = 1
        }

        await livro();

        preco = await Ignorar()
        preco = (preco + deci)
        preco = parseFloat((preco.toFixed(cd)))

        saldo = await saldoReal()
        saldo = (saldo / preco)

        if (preco == venda_preco_0) {
            preco = preco - deci
            preco = parseFloat((preco.toFixed(cd)))
        }

        var url = "https://api.bitcointrade.com.br/v3/market/create_order"

        var payload = {
            "unit_price": preco,
            "amount": saldo,
            "subtype": "limited",
            "type": "buy",
            "pair": Moeda
        }

        let { data } = await axios.post(url, payload, {
            headers: headers
        })

        let responseOrderCreated = data.data

        if (responseOrderCreated.message == 'Too Many Requests') {
            await sleep(3000);
            estrategia()
        }

        id_compra = responseOrderCreated.code

        preco_compra = parseFloat((preco.toFixed(cd)))

        controle = 1
        valor = preco * saldo
        valor = parseFloat((preco.toFixed(2)))
        console.log("VALOR:", valor)

    } catch (error) {
        throw error
    }
}

async function saldoReal() {
    try {
        const url = 'https://api.bitcointrade.com.br/v3/wallets/balance'

        let { data } = await axios.get(url, {
            headers: headers
        })

        let saldoData: BalanceWallets[] = data.data

        return saldoData.find((item) => item.currency_code == 'BRL')?.available_amount ?? 0

    } catch (error) {
        throw error
    }
}

async function Status(): Promise<string> {
    try {
        var url = `https://api.bitcointrade.com.br/v3/market/user_orders/${id_compra}`

        let { data } = await axios.get(url, {
            headers: headers
        })

        var responseStatusData = data.data

        if (responseStatusData['message'] == 'Too Many Requests') {
            if (controle == 1) {
                await cancelarOrder();
                await estrategia()
            }
            await estrategia()
        }

        return responseStatusData.status;

    } catch (error) {
        throw error
    }
}

async function estrategia() {
    try {
        var contador: number = 0;
        var protecao: number;
        var preco_global = await Preco_global();

        controle = 0
        var saldo = await saldoReal();

        if (saldo && saldo < 20) {
            console.log("SALDO", Real, "INSUFICIENTE PARA GERAR ORDEM, FAVOR AGUARDAR");
            await sleep(30000)
            await ordens()
            await estrategia();
        }

        await compra()
        contador = 0

        while (1) {
            await sleep(tempo * 1000);
            await livro();

            contador += 1;

            if (contador == Tempo_cancelar) {
                await cancelarOrder();
                await sleep(15000);
                await compra();
                contador = 0
            }

            var ultima_compra = await Ignorar();

            if (ultima_compra > preco_compra) {
                await cancelarOrder();
                await compra();
                continue
            }

            protecao = (preco_global * (Protecao_robo / 100))
            var preco_global1 = (preco_global - protecao)

            if (preco_compra > preco_global1) {
                await cancelarOrder();
                await compra();
                continue
            }

            var status = await Status()
            if (status != "waiting") {
                await compra();
            }
        }

    } catch (error) {
        throw error
    }
}

async function cancelarOrder() {
    try {
        const url = 'https://api.bitcointrade.com.br/v3/market/user_orders'

        await axios.delete(url,
            { headers: headers, data: { code: id_compra } },
        )

    } catch (error) {
        throw error
    }
}

async function ordens() {
    try {
        const url_executed_partially = `https://api.bitcointrade.com.br/v3/market/user_orders/open?pair=${Moeda}&status=executed_partially&type=buy`

        let dataExecutedPartially = await axios.get(url_executed_partially, {
            headers: headers
        })

        let userOrdersOpenExecutedPartially: UserOrdersOpen = dataExecutedPartially.data;

        if (userOrdersOpenExecutedPartially.data.orders.length) {
            id_compra = userOrdersOpenExecutedPartially.data.orders[0].code

            await cancelarOrder()
        }

        // const url_waiting = `https://api.bitcointrade.com.br/v3/market/user_orders/open?pair=${Moeda}&status=waiting&type=buy`

        // let { data } = await axios.get(url_waiting, {
        //     headers: headers
        // })

        // let userOrdersOpenAwaiting: UserOrdersOpen = data;

        // if (userOrdersOpenAwaiting.data.orders.length) {
        //     id_compra = userOrdersOpenAwaiting.data.orders[0].code

        //     await cancelarOrder()
        // }

    } catch (error) {
        throw error
    }
}


async function start() {
    while (true) {
        try {
            console.log(controle);


            console.log("\nBEM VINDO", Usuario, "INICIANDO ROBO", Cripto)
            // var moeda = await saldoCripto()
            // var brl = await saldoReal()
            // console.log(Cripto, "SALDO =", moeda)
            // console.log(Real, "SALDO =", brl)

            await ordens()
            await estrategia()
        }
        catch (error) {
            console.log("\n*** ERRO EXCEPTION ***")
            console.error('Erro no backend:', error);

        }
        await new Promise(resolve => setTimeout(resolve, 5000));
    }

};

start();