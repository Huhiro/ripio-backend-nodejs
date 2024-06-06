import requests
import json
import time
import datetime
from binance.client import Client

api_key = "euZWqWZTgxr9bAqWUoH1A0ll6bvlvSFmy38g9Q7N7LzezZdbo1sCNMn0x5DdjI7e"
api_secret = "By6WkQ4Ziuoyly1ZhlFmvA6dAprHbWF4SApMDdgoJsZhvQZMnZzowLT66RYYHIId"

secret_key = "U2FsdGVkX183wve5RcSegHi7pzkxTQHmpgDxuhOTRxVo8FUMoOO2xckpNcIR8r3t"

Cripto = "DOGE"
Real = "BRL"
Moeda = str(Real + Cripto)

Usuario = str("Yuri")
tempo = 5
Tempo_cancelar = 10

# PARAMETROS DE PROTECAO EM % (QUANTO MAIOR OS NUMEROS, MAIOR SERA DISTANCIA AO PRECO GLOBAL)
Protecao_ignorar = 0.25
Protecao_robo = 0.2
Decimal_dif = 5


def Casa_decimal():
    if Cripto == 'PEPE':
        return 8
    
    if Cripto == 'FTM':
        return 3

    if Cripto == 'RPC':
        return 4

    if Cripto == 'USDC':
        return 3

    if Cripto == 'LUNC':
        return 6

    if Cripto == 'CREAL':
        return 3

    if Cripto == 'DOT':
        return 1

    if Cripto == 'USDT':
        return 3

    if Cripto == 'BTC':
        return 0.1 

    if Cripto == 'ETH':
        return 2

    if Cripto == 'BCH':
        return 0.1

    if Cripto == 'XRP':
        return 3

    if Cripto == 'SOL':
        return 2
 
    if Cripto == 'LUNA':
        return 0.1

    if Cripto == 'DOGE':
        return 5

    if Cripto == 'LTC':
        return 2

    if Cripto == 'ADA':
        return 2

    if Cripto == 'SHIB':
        return 7

    if Cripto == 'LINK':
        return 2

    if Cripto == 'MATIC':
        return 3

    if Cripto == 'FTM':
        return 3

    if Cripto == 'APE':
        return 1

    if Cripto == 'SAND':
        return 2

    if Cripto == 'GALA':
        return 3

    if Cripto == 'AXS':
        return 2

    if Cripto == 'MANA':
        return 2

    if Cripto == 'CHZ':
        return 3

    if Cripto == 'UNI':
        return 2

    if Cripto == 'ENJ':
        return 3

    if Cripto == 'SXP':
        return 3

    if Cripto == 'ANKR':
        return 3

    if Cripto == 'PAXG':
        return 0.1

    if Cripto == 'AAVE':
        return 2

    if Cripto == 'ZRX':
        return 3


def Preco_global():
    if Cripto == 'USDT':
        client = Client(api_key, api_secret)
        dolar = client.get_recent_trades(symbol='BUSDBRL')
        dolar = dolar[-1]
        dolar = float(dolar["price"])

        return dolar

    client = Client(api_key, api_secret)
    cripto = client.get_recent_trades(symbol=Cripto + 'BUSD')
    cripto = cripto[-1]
    cripto = float(cripto["price"])

    dolar = client.get_recent_trades(symbol='BUSDBRL')
    dolar = dolar[-1]
    dolar = float(dolar["price"])

    preco_global = (cripto * dolar)
    cd = Casa_decimal()
    if cd < 1:
        cd = 1
    preco_global = round(preco_global, cd)

    return preco_global


def Livro():
    url = 'https://api.bitcointrade.com.br/v3/market/?pair={{Moeda}}&limit=25'
    url = url.replace("{{Moeda}}", Moeda)

    headers = {
        'x-api-key': secret_key,
        'Content-Type': 'application/json'
    }

    response = requests.request("GET", url, headers=headers)
    livro = response.json()
    datas = (livro['data'])

    ordens_compra = (datas["buying"])
    ordens_venda = (datas["selling"])

    posicao_0 = (ordens_venda[0])
    posicao_1 = (ordens_venda[1])
    posicao_2 = (ordens_venda[2])
    posicao_3 = (ordens_venda[3])
    posicao_4 = (ordens_venda[4])   
    posicao_5 = (ordens_venda[5])
    posicao_6 = (ordens_venda[6])
    posicao_7 = (ordens_venda[7])

    global preco_0, preco_1, preco_2, preco_3, preco_4, preco_5, preco_6

    preco_0 = float(posicao_0["unit_price"])
    preco_1 = float(posicao_1["unit_price"])
    preco_2 = float(posicao_2["unit_price"])
    preco_3 = float(posicao_3["unit_price"])
    preco_4 = float(posicao_4["unit_price"])
    preco_5 = float(posicao_5["unit_price"])
    preco_6 = float(posicao_6["unit_price"])

    global quantidade_0, quantidade_1, quantidade_2, quantidade_3, quantidade_4, quantidade_5, quantidade_6

    quantidade_0 = float(posicao_0["amount"])
    quantidade_1 = float(posicao_1["amount"])
    quantidade_2 = float(posicao_2["amount"])
    quantidade_3 = float(posicao_3["amount"])
    quantidade_4 = float(posicao_4["amount"])
    quantidade_5 = float(posicao_5["amount"])
    quantidade_6 = float(posicao_6["amount"])

    global valor_0, valor_1, valor_2, valor_3, valor_4, valor_5, valor_6

    valor_0 = (preco_0 * quantidade_0)
    valor_1 = (preco_1 * quantidade_1)
    valor_2 = (preco_2 * quantidade_2)
    valor_3 = (preco_3 * quantidade_3)
    valor_4 = (preco_4 * quantidade_4)
    valor_5 = (preco_5 * quantidade_5)
    valor_6 = (preco_6 * quantidade_6)

    compra_posicao_0 = (ordens_compra[0])

    global compra_preco_0, compra_quantidade_0, compra_valor_0

    compra_preco_0 = float(compra_posicao_0["unit_price"])
    compra_quantidade_0 = float(compra_posicao_0["amount"])
    compra_valor_0 = (compra_preco_0 * compra_quantidade_0)


def Venda():
    Livro()
    preco = Ignorar()

    cd = Casa_decimal()
    if cd >= 1:
        deci = (1 / (10 ** cd))
    else:
        cd = 1
        deci = 1

    preco = (preco - deci)
    preco = round(preco, cd)
    saldo = Saldos_cripto()

    url = "https://api.bitcointrade.com.br/v3/market/create_order"

    payload = json.dumps({
        "unit_price": preco,
        "amount": saldo,
        "subtype": "limited",
        "type": "sell",
        "pair": Moeda
    })
    headers = {
        'x-api-key': secret_key,
        'Content-Type': 'application/json'
    }

    response = requests.request("POST", url, headers=headers, data=payload)
    result = dict(json.loads(response.text))
    datas = (result['data'])

    global id_venda, preco_venda, controle
    id_venda = (datas["code"])

    preco_venda = round(preco, cd)
    controle = 1


def Cancelar_venda():
    url = "https://api.bitcointrade.com.br/v3/market/user_orders"
    payload = json.dumps({
        "code": id_venda
    })
    headers = {
        'x-api-key': secret_key,
        'Content-Type': 'application/json'
    }
    response = requests.request("DELETE", url, headers=headers, data=payload)


def Status():
    url = "https://api.bitcointrade.com.br/v3/market/user_orders/{{id_venda}}"
    url = url.replace("{{id_venda}}", id_venda)

    headers = {
        'x-api-key': secret_key,
        'Content-Type': 'application/json'
    }

    response = requests.request("GET", url, headers=headers)
    status = response.json()
    status = status["data"]
    status = str(status["status"])

    return status


def Saldo_BRL():
    url = "https://api.bitcointrade.com.br/v3/wallets/balance"
    headers = {
        'x-api-key': secret_key,
        'Content-Type': 'application/json'
    }
    response = requests.request("GET", url, headers=headers)
    result = response.json()

    for saldos in result['data']:
        if (saldos["currency_code"]) == Real:
            Saldo_real = float(saldos["available_amount"])
            return Saldo_real


def Saldos_cripto():
    url = "https://api.bitcointrade.com.br/v3/wallets/balance"
    headers = {
        'x-api-key': secret_key,
        'Content-Type': 'application/json'
    }
    response = requests.request("GET", url, headers=headers)
    result = response.json()

    for saldos in result['data']:
        if (saldos["currency_code"]) == Cripto:
            Saldo_cripto = float(saldos["available_amount"])
            return Saldo_cripto


def Ignorar():
    preco_global = Preco_global()
    protecao = (preco_global * (Protecao_ignorar / 100))
    preco_global = (preco_global + protecao)
    cd = Casa_decimal()
    if cd < 1:
        cd = 1
    preco_global = round(preco_global, cd)

    if preco_4 < preco_global:
        if valor_5 < 300:
            print("IGNORAR 0.1: ", preco_6)
            return preco_6

        print("IGNORAR 0: ", preco_5)
        return preco_5

    if preco_3 < preco_global:
        if valor_4 < 300:
            print("IGNORAR 1.1: ", preco_5)
            return preco_5

        print("IGNORAR 1: ", preco_4)
        return preco_4

    if preco_2 < preco_global:
        if valor_3 < 300:
            print("IGNORAR 2.1: ", preco_4)
            return preco_4

        print("IGNORAR 2: ", preco_3)
        return preco_3

    if preco_1 < preco_global:
        if valor_2 < 300:
            print("IGNORAR 3.1: ", preco_3)
            return preco_3

        print("IGNORAR 3: ", preco_2)
        return preco_2

    if preco_0 < preco_global:
        print("IGNORAR 4: ", preco_1)
        return preco_1

    if valor_0 < 150 and valor_1 < 120 and valor_2 < 120 and valor_3 < 600:
        print("1 PRECO4: ", preco_4)
        return preco_4

    if valor_0 < 150 and valor_1 < 120 and valor_2 < 120 and valor_3 < 120 and valor_4 < 120 and valor_5 < 120:
        print("2 PRECO6: ", preco_6)
        return preco_6

    if valor_0 < 150 and valor_1 < 120 and valor_2 < 120 and valor_3 < 120 and valor_4 < 120:
        print("3 PRECO5: ", preco_5)
        return preco_5

    if valor_0 < 150 and valor_1 < 100 and valor_2 < 100 and valor_3 < 100:
        print("3 PRECO4: ", preco_4)
        return preco_4

    if valor_0 < 150 and valor_1 < 50 and valor_2 < 150 and valor_3 < 350 and valor_4 < 50:
        print("4 PRECO5: ", preco_5)
        return preco_5

    if valor_0 < 100 and valor_1 < 250 and valor_2 < 250 and valor_3 < 100:
        print("5 PRECO4: ", preco_4)
        return preco_4

    if valor_0 < 100 and valor_1 < 250 and valor_2 < 350 and valor_3 > 100:
        print("6 PRECO3: ", preco_3)
        return preco_3

    if valor_0 < 150 and valor_1 < 150 and valor_2 < 150 and valor_3 < 300 and valor_4 > 500:
        print("7 PRECO4: ", preco_4)
        return preco_4

    if valor_0 < 150 and valor_1 < 150 and valor_2 < 350 and valor_3 < 150 and valor_3 > 550:
        print("8 PRECO4: ", preco_4)
        return preco_4

    if valor_0 < 150 and valor_1 < 150 and valor_2 < 150:
        print("9 PRECO3: ", preco_3)
        return preco_3

    if valor_0 < 150 and valor_1 > 1000:
        print("10 PRECO1: ", preco_1)
        return preco_1

    if valor_0 < 150 and valor_1 < 150 and valor_2 < 150 and valor_3 < 150:
        print("11 PRECO4: ", preco_4)
        return preco_4

    if valor_0 < 150 and valor_1 < 150 and valor_2 > 650:
        print("12 PRECO2: ", preco_2)
        return preco_2

    if valor_0 > 1000:
        print("13 PRECO0: ", preco_0)
        return preco_0

    if valor_0 < 150 and valor_1 < 150 and valor_2 < 150:
        print("14 PRECO3: ", preco_3)
        return preco_3

    if valor_0 < 150 and valor_1 < 150 and valor_2 > 200:
        print("15 PRECO2: ", preco_2)
        return preco_2

    if valor_0 < 250 and valor_1 > 300:
        print("16 PRECO1: ", preco_1)
        return preco_1

    if valor_0 < 250 and valor_1 > 100:
        print("16.1 PRECO1: ", preco_1)
        return preco_1

    if valor_0 > 300:
        print("17 PRECO0: ", preco_0)
        return preco_0

    print("NENHUM CASO, VERIFICAR IGNORAR PRECO0: ", preco_0)
    return preco_0


def Ordens():
    url = "https://api.bitcointrade.com.br/v3/market/user_orders/open/?pair={{Moeda}}&status=executed_partially&type=sell"
    url = url.replace("{{Moeda}}", Moeda)
    headers = {
        'x-api-key': secret_key,
        'Content-Type': 'application/json'
    }
    response = requests.request("GET", url, headers=headers)
    result = response.json()

    global id_venda

    ordem = result['data']
    ordem = ordem['orders']

    if ordem != []:
        ordem = (ordem[0])

        id_venda = str(ordem['code'])

        Cancelar_venda()

    url1 = "https://api.bitcointrade.com.br/v3/market/user_orders/open/?pair={{Moeda}}&status=waiting&type=sell"
    url1 = url1.replace("{{Moeda}}", Moeda)
    headers = {
        'x-api-key': secret_key,
        'Content-Type': 'application/json'
    }
    response1 = requests.request("GET", url, headers=headers)
    result1 = response.json()
    ordem1 = result1['data']
    ordem1 = ordem1['orders']

    if ordem1 != []:
        ordem1 = (ordem1[0])

        id_venda = str(ordem1['code'])

        Cancelar_venda()


def Estrategia():
    global controle
    controle = 0
    preco_global = Preco_global()
    saldo = Saldos_cripto()
    minimo = (20 / preco_global)

    if saldo < minimo:
        print("SALDO", Cripto, "INSUFICIENTE PARA GERAR ORDEM, FAVOR AGUARDAR")
        time.sleep(30)
        Ordens()
        Estrategia()

    Venda()
    contador = 0

    while 1:
        time.sleep(tempo)
        Livro()
        contador += 1

        if contador == Tempo_cancelar:
            Cancelar_venda()
            time.sleep(15)
            Venda()
            contador = 0

        ultima_venda = Ignorar()
        if ultima_venda < preco_venda:
            Cancelar_venda()
            Venda()
            continue

        preco_global = Preco_global()
        protecao = (preco_global * (Protecao_robo / 100))
        preco_global1 = (preco_global + protecao)
        if preco_venda < preco_global1:
            Cancelar_venda()
            Venda()
            continue

        status = Status()
        if status != "waiting":
            Venda()


def Iniciar():
    try:
        print("\nBEM VINDO", Usuario, "INICIANDO ROBO", Cripto)
        moeda = Saldos_cripto()
        brl = Saldo_BRL()
        print(Cripto, "SALDO =", moeda)
        print(Real, "SALDO =", brl)

        Ordens()
        Estrategia()

    except requests.exceptions.RequestException:
        print("\n*** ERRO CONEXAO ***")
        time.sleep(10)
        if controle == 1:
            Cancelar_venda()
        Iniciar()

    except Exception:
        print("\n*** ERRO EXCEPTION ***")
        time.sleep(10)
        if controle == 1:
            Cancelar_venda()
        Iniciar()

    finally:
        print("\n*** ERRO FINALLY ***")
        if controle == 1:
            Cancelar_venda()
        time.sleep(10)
        Iniciar()


Iniciar()