var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var axios = require("axios");
var Binance = require('binance-api-node').default;
var Usuario = 'YURI';
var Cripto = 'DOGE';
var Real = 'BRL';
var Moeda = String(Real + Cripto);
var tempo = 5;
var Tempo_cancelar = 10;
// # PARAMETROS DE PROTEÇÃO EM % (QUANTO MAIOR OS NUMEROS, MAIOR SERA DISTANCIA AO PREÇO GLOBAL)
var Protecao_ignorar = 0.25;
var Protecao_robo = 0.2;
var Decimal_dif = 5;
var controle;
var api_key = "euZWqWZTgxr9bAqWUoH1A0ll6bvlvSFmy38g9Q7N7LzezZdbo1sCNMn0x5DdjI7e";
var api_secret = "By6WkQ4Ziuoyly1ZhlFmvA6dAprHbWF4SApMDdgoJsZhvQZMnZzowLT66RYYHIId";
var secret_key = "U2FsdGVkX183wve5RcSegHi7pzkxTQHmpgDxuhOTRxVo8FUMoOO2xckpNcIR8r3t";
var id_venda = '';
var headers = {
    'x-api-key': secret_key,
    'Content-Type': 'application/json'
};
var preco_0, preco_1, preco_2, preco_3, preco_4, preco_5, preco_6, preco_venda;
var quantidade_0, quantidade_1, quantidade_2, quantidade_3, quantidade_4, quantidade_5, quantidade_6;
var valor_0, valor_1, valor_2, valor_3, valor_4, valor_5, valor_6;
var compra_preco_0, compra_quantidade_0, valor_quantidade_0;
var client = Binance({
    apiKey: api_key,
    apiSecret: api_secret,
});
function sleep(ms) {
    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
}
function casaDecimal() {
    try {
        if (Cripto == 'LUNC')
            return 6;
        if (Cripto == 'DOGE')
            return 5;
        if (Cripto == 'USDC')
            return 3;
        if (Cripto == 'MC')
            return 3;
        if (Cripto == 'LUNC')
            return 6;
        if (Cripto == 'CREAL')
            return 3;
        if (Cripto == 'SPELL')
            return 6;
        if (Cripto == 'AVAX')
            return 0.1;
        if (Cripto == 'EOS')
            return 1;
        if (Cripto == 'USDT')
            return 3;
        if (Cripto == 'BTC')
            return 0.1;
        if (Cripto == 'ETH')
            return 0.1;
        if (Cripto == 'BCH')
            return 0.1;
        if (Cripto == 'XRP')
            return 4;
        if (Cripto == 'SOL')
            return 2;
        if (Cripto == 'LUNC')
            return 6;
        if (Cripto == 'DOGE')
            return 3;
        if (Cripto == 'LTC')
            return 2;
        if (Cripto == 'ADA')
            return 2;
        if (Cripto == 'SHIB')
            return 7;
        if (Cripto == 'LINK')
            return 2;
        if (Cripto == 'MATIC')
            return 3;
        if (Cripto == 'FTM')
            return 3;
        if (Cripto == 'APE')
            return 1;
        if (Cripto == 'SAND')
            return 2;
        if (Cripto == 'GALA')
            return 3;
        if (Cripto == 'AXS')
            return 2;
        if (Cripto == 'MANA')
            return 2;
        if (Cripto == 'CHZ')
            return 3;
        if (Cripto == 'UNI')
            return 2;
        if (Cripto == 'ENJ')
            return 3;
        if (Cripto == 'SXP')
            return 3;
        if (Cripto == 'ANKR')
            return 3;
        if (Cripto == 'PAXG')
            return 0.1;
        if (Cripto == 'AAVE')
            return 2;
        if (Cripto == 'ZRX')
            return 3;
        return 0;
    }
    catch (error) {
        throw error;
    }
}
function livro() {
    return __awaiter(this, void 0, void 0, function () {
        var url, data, livroDataBuying, livroDataSelling, posicao_0, posicao_1, posicao_2, posicao_3, posicao_4, posicao_5, posicao_6, compra_posicao_0, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 7, , 8]);
                    url = "https://api.bitcointrade.com.br/v3/market/?pair=".concat(Moeda, "&limit=25");
                    return [4 /*yield*/, axios.get(url, {
                            headers: headers
                        })];
                case 1:
                    data = (_a.sent()).data;
                    if (!(data.message == 'Too Many Requests')) return [3 /*break*/, 6];
                    if (!(controle == 1)) return [3 /*break*/, 4];
                    return [4 /*yield*/, cancelarOrder()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, estrategia()];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4: return [4 /*yield*/, estrategia()];
                case 5:
                    _a.sent();
                    _a.label = 6;
                case 6:
                    livroDataBuying = data.data.buying;
                    livroDataSelling = data.data.selling;
                    posicao_0 = (livroDataSelling[0]);
                    posicao_1 = (livroDataSelling[1]);
                    posicao_2 = (livroDataSelling[2]);
                    posicao_3 = (livroDataSelling[3]);
                    posicao_4 = (livroDataSelling[4]);
                    posicao_5 = (livroDataSelling[5]);
                    posicao_6 = (livroDataSelling[6]);
                    preco_0 = (posicao_0["unit_price"]);
                    preco_1 = (posicao_1["unit_price"]);
                    preco_2 = (posicao_2["unit_price"]);
                    preco_3 = (posicao_3["unit_price"]);
                    preco_4 = (posicao_4["unit_price"]);
                    preco_5 = (posicao_5["unit_price"]);
                    preco_6 = (posicao_6["unit_price"]);
                    quantidade_0 = (posicao_0["amount"]);
                    quantidade_1 = (posicao_1["amount"]);
                    quantidade_2 = (posicao_2["amount"]);
                    quantidade_3 = (posicao_3["amount"]);
                    quantidade_4 = (posicao_4["amount"]);
                    quantidade_5 = (posicao_5["amount"]);
                    quantidade_6 = (posicao_6["amount"]);
                    valor_0 = (preco_0 * quantidade_0);
                    valor_1 = (preco_1 * quantidade_1);
                    valor_2 = (preco_2 * quantidade_2);
                    valor_3 = (preco_3 * quantidade_3);
                    valor_4 = (preco_4 * quantidade_4);
                    valor_5 = (preco_5 * quantidade_5);
                    valor_6 = (preco_6 * quantidade_6);
                    compra_posicao_0 = (livroDataBuying[0]);
                    compra_preco_0 = (compra_posicao_0["unit_price"]);
                    compra_quantidade_0 = (compra_posicao_0["amount"]);
                    valor_quantidade_0 = (compra_preco_0 * compra_quantidade_0);
                    return [3 /*break*/, 8];
                case 7:
                    error_1 = _a.sent();
                    throw error_1;
                case 8: return [2 /*return*/];
            }
        });
    });
}
function Preco_global() {
    return __awaiter(this, void 0, void 0, function () {
        var recentsTradesCripto, criptoPrice, data, cd, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, client.futuresTrades({ symbol: "".concat(Cripto, "USDT") })];
                case 1:
                    recentsTradesCripto = _a.sent();
                    criptoPrice = recentsTradesCripto[recentsTradesCripto.length - 1].price;
                    return [4 /*yield*/, axios.get('https://economia.awesomeapi.com.br/last/USD-BRL')];
                case 2:
                    data = (_a.sent()).data;
                    cd = casaDecimal();
                    if (cd < 1) {
                        cd = 1;
                    }
                    return [2 /*return*/, parseFloat((parseFloat(criptoPrice) * parseFloat(data.USDBRL.bid)).toFixed(cd))];
                case 3:
                    error_2 = _a.sent();
                    throw error_2;
                case 4: return [2 /*return*/];
            }
        });
    });
}
function Ignorar() {
    return __awaiter(this, void 0, void 0, function () {
        var cd, preco_global, protecao, global_price, price, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, Preco_global()];
                case 1:
                    preco_global = _a.sent();
                    console.log('preco_global', preco_global);
                    protecao = (preco_global * (Protecao_ignorar / 100));
                    global_price = (preco_global - protecao);
                    cd = casaDecimal();
                    if (cd < 1) {
                        cd = 1;
                    }
                    price = parseFloat((global_price).toFixed(cd));
                    if (preco_4 > price) {
                        if (valor_5 < 300) {
                            console.log("IGNORAR 0.1: ", preco_6);
                            return [2 /*return*/, preco_6];
                        }
                        console.log("IGNORAR 0: ", preco_5);
                        return [2 /*return*/, preco_5];
                    }
                    if (preco_3 > preco_global) {
                        if (valor_4 < 300) {
                            console.log("IGNORAR 1.1: ", preco_5);
                            return [2 /*return*/, preco_5];
                        }
                        console.log("IGNORAR 1: ", preco_4);
                        return [2 /*return*/, preco_4];
                    }
                    if (preco_2 > preco_global) {
                        if (valor_3 < 300) {
                            console.log("IGNORAR 2.1: ", preco_4);
                            return [2 /*return*/, preco_4];
                        }
                        console.log("IGNORAR 2: ", preco_3);
                        return [2 /*return*/, preco_3];
                    }
                    if (preco_1 > preco_global) {
                        if (valor_2 < 300) {
                            console.log("IGNORAR 3.1: ", preco_3);
                            return [2 /*return*/, preco_3];
                        }
                        console.log("IGNORAR 3: ", preco_2);
                        return [2 /*return*/, preco_2];
                    }
                    if (preco_0 > preco_global) {
                        if (valor_1 < 300) {
                            console.log("IGNORAR 4.1: ", preco_2);
                            return [2 /*return*/, preco_2];
                        }
                        console.log("IGNORAR 4: ", preco_1);
                        return [2 /*return*/, preco_1];
                    }
                    if (valor_0 < 200 && valor_1 < 120 && valor_2 < 120 && valor_3 < 120 && valor_4 < 120 && valor_5 < 120) {
                        console.log("2 PRECO6: ", preco_6);
                        return [2 /*return*/, preco_6];
                    }
                    if (valor_0 < 200 && valor_1 < 120 && valor_2 < 120 && valor_3 < 120 && valor_4 < 120) {
                        console.log("3 PRECO5: ", preco_5);
                        return [2 /*return*/, preco_5];
                    }
                    if (valor_0 < 200 && valor_1 < 100 && valor_2 < 100 && valor_3 < 100) {
                        console.log("3 PRECO4: ", preco_4);
                        return [2 /*return*/, preco_4];
                    }
                    if (valor_0 < 200 && valor_1 < 50 && valor_2 < 150 && valor_3 < 350 && valor_4 < 50) {
                        console.log("4 PRECO5: ", preco_5);
                        return [2 /*return*/, preco_5];
                    }
                    if (valor_0 < 200 && valor_1 < 250 && valor_2 < 250 && valor_3 < 100) {
                        console.log("5 PRECO4: ", preco_4);
                        return [2 /*return*/, preco_4];
                    }
                    if (valor_0 < 200 && valor_1 < 120 && valor_2 < 120 && valor_3 < 300) {
                        console.log("1 PRECO3: ", preco_3);
                        return [2 /*return*/, preco_3];
                    }
                    if (valor_0 < 200 && valor_1 < 250 && valor_2 < 299 && valor_3 > 100) {
                        console.log("6 PRECO3: ", preco_3);
                        return [2 /*return*/, preco_3];
                    }
                    if (valor_0 < 200 && valor_1 < 150 && valor_2 < 150 && valor_3 < 300 && valor_4 > 500) {
                        console.log("7 PRECO4: ", preco_4);
                        return [2 /*return*/, preco_4];
                    }
                    if (valor_0 < 200 && valor_1 < 150 && valor_2 < 350 && valor_3 < 150 && valor_3 > 550) {
                        console.log("8 PRECO4: ", preco_4);
                        return [2 /*return*/, preco_4];
                    }
                    if (valor_0 < 200 && valor_1 < 150 && valor_2 < 150) {
                        console.log("9 PRECO3: ", preco_3);
                        return [2 /*return*/, preco_3];
                    }
                    if (valor_0 < 200 && valor_1 > 1000) {
                        console.log("10 PRECO1: ", preco_1);
                        return [2 /*return*/, preco_1];
                    }
                    if (valor_0 < 200 && valor_1 < 150 && valor_2 < 150 && valor_3 < 150) {
                        console.log("11 PRECO4: ", preco_4);
                        return [2 /*return*/, preco_4];
                    }
                    if (valor_0 < 200 && valor_1 < 350 && valor_2 > 650) {
                        console.log("12 PRECO2: ", preco_2);
                        return [2 /*return*/, preco_2];
                    }
                    if (valor_0 > 1000) {
                        console.log("13 PRECO0: ", preco_0);
                        return [2 /*return*/, preco_0];
                    }
                    if (valor_0 < 200 && valor_1 < 150 && valor_2 < 150) {
                        console.log("14 PRECO3: ", preco_3);
                        return [2 /*return*/, preco_3];
                    }
                    if (valor_0 < 200 && valor_1 < 150 && valor_2 > 200) {
                        console.log("15 PRECO2: ", preco_2);
                        return [2 /*return*/, preco_2];
                    }
                    if (valor_0 < 200 && valor_1 > 300) {
                        console.log("16 PRECO1: ", preco_1);
                        return [2 /*return*/, preco_1];
                    }
                    if (valor_0 > 300) {
                        console.log("17 PRECO0: ", preco_0);
                        return [2 /*return*/, preco_0];
                    }
                    console.log("NENHUM CASO, VERIFICAR IGNORAR PRECO0: ", preco_0);
                    return [2 /*return*/, preco_0];
                case 2:
                    error_3 = _a.sent();
                    throw error_3;
                case 3: return [2 /*return*/];
            }
        });
    });
}
function venda() {
    return __awaiter(this, void 0, void 0, function () {
        var cd, preco, saldo, deci, valor, cd, url, payload, data, responseOrderCreated, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 7, , 8]);
                    cd = casaDecimal();
                    if (cd >= 1) {
                        deci = (1 / (Math.pow(10, cd)));
                    }
                    else {
                        cd = 1;
                        deci = 1;
                    }
                    return [4 /*yield*/, livro()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, Ignorar()];
                case 2:
                    preco = _a.sent();
                    preco = (preco - deci);
                    preco = parseFloat((preco.toFixed(cd)));
                    return [4 /*yield*/, saldoCripto()];
                case 3:
                    saldo = _a.sent();
                    url = "https://api.bitcointrade.com.br/v3/market/create_order";
                    payload = {
                        "unit_price": preco,
                        "amount": saldo,
                        "subtype": "limited",
                        "type": "sell",
                        "pair": Moeda
                    };
                    return [4 /*yield*/, axios.post(url, payload, {
                            headers: headers
                        })];
                case 4:
                    data = (_a.sent()).data;
                    responseOrderCreated = data.data;
                    if (!(responseOrderCreated.message == 'Too Many Requests')) return [3 /*break*/, 6];
                    return [4 /*yield*/, sleep(3000)];
                case 5:
                    _a.sent();
                    estrategia();
                    _a.label = 6;
                case 6:
                    id_venda = responseOrderCreated.code;
                    preco_venda = parseFloat((preco.toFixed(cd)));
                    controle = 1;
                    return [3 /*break*/, 8];
                case 7:
                    error_4 = _a.sent();
                    throw error_4;
                case 8: return [2 /*return*/];
            }
        });
    });
}
function saldoCripto() {
    return __awaiter(this, void 0, void 0, function () {
        var url, data, saldoData, error_5;
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 3]);
                    url = 'https://api.bitcointrade.com.br/v3/wallets/balance';
                    return [4 /*yield*/, axios.get(url, {
                            headers: headers
                        })];
                case 1:
                    data = (_c.sent()).data;
                    saldoData = data.data;
                    return [2 /*return*/, (_b = (_a = saldoData.find(function (item) { return item.currency_code == Cripto; })) === null || _a === void 0 ? void 0 : _a.available_amount) !== null && _b !== void 0 ? _b : 0];
                case 2:
                    error_5 = _c.sent();
                    throw error_5;
                case 3: return [2 /*return*/];
            }
        });
    });
}
function saldoReal() {
    return __awaiter(this, void 0, void 0, function () {
        var url, data, saldoData, error_6;
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 3]);
                    url = 'https://api.bitcointrade.com.br/v3/wallets/balance';
                    return [4 /*yield*/, axios.get(url, {
                            headers: headers
                        })];
                case 1:
                    data = (_c.sent()).data;
                    saldoData = data.data;
                    return [2 /*return*/, (_b = (_a = saldoData.find(function (item) { return item.currency_code == 'BRL'; })) === null || _a === void 0 ? void 0 : _a.available_amount) !== null && _b !== void 0 ? _b : 0];
                case 2:
                    error_6 = _c.sent();
                    throw error_6;
                case 3: return [2 /*return*/];
            }
        });
    });
}
function Status() {
    return __awaiter(this, void 0, void 0, function () {
        var url, data, responseStatusData, error_7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 7, , 8]);
                    url = "https://api.bitcointrade.com.br/v3/market/user_orders/".concat(id_venda);
                    return [4 /*yield*/, axios.get(url, {
                            headers: headers
                        })];
                case 1:
                    data = (_a.sent()).data;
                    responseStatusData = data.data;
                    if (!(responseStatusData['message'] == 'Too Many Requests')) return [3 /*break*/, 6];
                    if (!(controle == 1)) return [3 /*break*/, 4];
                    return [4 /*yield*/, cancelarOrder()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, estrategia()];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4: return [4 /*yield*/, estrategia()];
                case 5:
                    _a.sent();
                    _a.label = 6;
                case 6: return [2 /*return*/, responseStatusData.status];
                case 7:
                    error_7 = _a.sent();
                    throw error_7;
                case 8: return [2 /*return*/];
            }
        });
    });
}
function estrategia() {
    return __awaiter(this, void 0, void 0, function () {
        var contador, protecao, preco_global, saldo, minimo, ultima_compra, preco_global1, status, error_8;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 26, , 27]);
                    contador = 0;
                    return [4 /*yield*/, Preco_global()];
                case 1:
                    preco_global = _a.sent();
                    controle = 0;
                    return [4 /*yield*/, saldoCripto()];
                case 2:
                    saldo = _a.sent();
                    minimo = (20 / preco_global);
                    if (!(saldo < minimo)) return [3 /*break*/, 6];
                    console.log("SALDO", Cripto, "INSUFICIENTE PARA GERAR ORDEM, FAVOR AGUARDAR");
                    return [4 /*yield*/, sleep(30000)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, ordens()];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, estrategia()];
                case 5:
                    _a.sent();
                    _a.label = 6;
                case 6: return [4 /*yield*/, venda()];
                case 7:
                    _a.sent();
                    contador = 0;
                    _a.label = 8;
                case 8:
                    if (!1) return [3 /*break*/, 25];
                    return [4 /*yield*/, sleep(tempo * 1000)];
                case 9:
                    _a.sent();
                    return [4 /*yield*/, livro()];
                case 10:
                    _a.sent();
                    contador += 1;
                    if (!(contador == Tempo_cancelar)) return [3 /*break*/, 14];
                    return [4 /*yield*/, cancelarOrder()];
                case 11:
                    _a.sent();
                    return [4 /*yield*/, sleep(15000)];
                case 12:
                    _a.sent();
                    return [4 /*yield*/, venda()];
                case 13:
                    _a.sent();
                    contador = 0;
                    _a.label = 14;
                case 14: return [4 /*yield*/, Ignorar()];
                case 15:
                    ultima_compra = _a.sent();
                    if (!(ultima_compra > preco_venda)) return [3 /*break*/, 18];
                    return [4 /*yield*/, cancelarOrder()];
                case 16:
                    _a.sent();
                    return [4 /*yield*/, venda()];
                case 17:
                    _a.sent();
                    return [3 /*break*/, 8];
                case 18:
                    protecao = (preco_global * (Protecao_robo / 100));
                    preco_global1 = (preco_global - protecao);
                    if (!(preco_venda > preco_global1)) return [3 /*break*/, 21];
                    return [4 /*yield*/, cancelarOrder()];
                case 19:
                    _a.sent();
                    return [4 /*yield*/, venda()];
                case 20:
                    _a.sent();
                    return [3 /*break*/, 8];
                case 21: return [4 /*yield*/, Status()];
                case 22:
                    status = _a.sent();
                    if (!(status != "waiting")) return [3 /*break*/, 24];
                    return [4 /*yield*/, venda()];
                case 23:
                    _a.sent();
                    _a.label = 24;
                case 24: return [3 /*break*/, 8];
                case 25: return [3 /*break*/, 27];
                case 26:
                    error_8 = _a.sent();
                    throw error_8;
                case 27: return [2 /*return*/];
            }
        });
    });
}
function cancelarOrder() {
    return __awaiter(this, void 0, void 0, function () {
        var url, error_9;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    url = 'https://api.bitcointrade.com.br/v3/market/user_orders';
                    return [4 /*yield*/, axios.delete(url, { headers: headers, data: { code: id_venda } })];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    error_9 = _a.sent();
                    throw error_9;
                case 3: return [2 /*return*/];
            }
        });
    });
}
function ordens() {
    return __awaiter(this, void 0, void 0, function () {
        var url_executed_partially, dataExecutedPartially, userOrdersOpenExecutedPartially, error_10;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    url_executed_partially = "https://api.bitcointrade.com.br/v3/market/user_orders/open?pair=".concat(Moeda, "&status=executed_partially&type=sell");
                    return [4 /*yield*/, axios.get(url_executed_partially, {
                            headers: headers
                        })];
                case 1:
                    dataExecutedPartially = _a.sent();
                    userOrdersOpenExecutedPartially = dataExecutedPartially.data;
                    if (!userOrdersOpenExecutedPartially.data.orders.length) return [3 /*break*/, 3];
                    id_venda = userOrdersOpenExecutedPartially.data.orders[0].code;
                    return [4 /*yield*/, cancelarOrder()];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3: return [3 /*break*/, 5];
                case 4:
                    error_10 = _a.sent();
                    throw error_10;
                case 5: return [2 /*return*/];
            }
        });
    });
}
function start() {
    return __awaiter(this, void 0, void 0, function () {
        var error_11;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!true) return [3 /*break*/, 7];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    console.log(controle);
                    console.log("\nBEM VINDO", Usuario, "INICIANDO ROBO", Cripto);
                    // var moeda = await saldoCripto()
                    // var brl = await saldoReal()
                    // console.log(Cripto, "SALDO =", moeda)
                    // console.log(Real, "SALDO =", brl)
                    return [4 /*yield*/, ordens()];
                case 2:
                    // var moeda = await saldoCripto()
                    // var brl = await saldoReal()
                    // console.log(Cripto, "SALDO =", moeda)
                    // console.log(Real, "SALDO =", brl)
                    _a.sent();
                    return [4 /*yield*/, estrategia()];
                case 3:
                    _a.sent();
                    return [3 /*break*/, 5];
                case 4:
                    error_11 = _a.sent();
                    console.log("\n*** ERRO EXCEPTION ***");
                    console.error('Erro no backend:', error_11);
                    return [3 /*break*/, 5];
                case 5: return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 5000); })];
                case 6:
                    _a.sent();
                    return [3 /*break*/, 0];
                case 7: return [2 /*return*/];
            }
        });
    });
}
;
start();
