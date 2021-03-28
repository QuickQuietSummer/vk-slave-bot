"use strict";
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
        while (_) try {
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
exports.__esModule = true;
var axios_1 = require("axios");
var config_1 = require("./config");
var cli_progress_1 = require("cli-progress");
var ListenerUrl = "https://pixel.w84.vkforms.ru/HappySanta/slaves/1.0.0/";
var StartUrl = ListenerUrl + "start";
var BuySlaveUrl = ListenerUrl + "buySlave";
var BuyFetterUrl = ListenerUrl + "buyFetter";
var JobSlaveUrl = ListenerUrl + "jobSlave";
var UserUrl = ListenerUrl + "user";
var diapasons = config_1["default"].User_ID;
var auth = "Bearer vk_access_token_settings=friends,status&vk_app_id=7794757&vk_are_notifications_enabled=1&vk_is_app_user=1&vk_is_favorite=0&vk_language=ru&vk_platform=desktop_web&vk_ref=other&vk_ts=1616928990&vk_user_id=598176365&sign=6gQtj44bMFsEit-sNsAvlUNC6FLtpJVNq3G8fWrypTE";
var headers = {
    Authorization: auth,
    "User-Agent": config_1["default"].User_Agent,
    origin: "https://prod-app7794757-c1ffb3285f12.pages-ac.vk-apps.com",
    referer: "https://prod-app7794757-c1ffb3285f12.pages-ac.vk-apps.com/index.html?" +
        auth
};
var delay = function (ms) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    switch (_a.label) {
        case 0: return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, ms); })];
        case 1: return [2 /*return*/, _a.sent()];
    }
}); }); };
function getRandomId() {
    return Math.floor(Math.random() * Math.floor(diapasons));
}
function getRandomNumberFromDiapasons(minimum, maximum) {
    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}
function doOneCycle() {
    return __awaiter(this, void 0, void 0, function () {
        var progressBar, randomId, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 5]);
                    progressBar = new cli_progress_1.SingleBar({}, cli_progress_1.Presets.shades_classic);
                    progressBar.start(100, 0);
                    // let me = await fetchMe();
                    // progressBar.update(20);
                    // if (me.balance < 40) {
                    //   console.log("\nДенег пока нет. Не хватает даже на раба!");
                    //   process.exit();
                    // }
                    // let randomUser = await fetchRandomUser(me.balance);
                    progressBar.update(40);
                    randomId = getRandomId();
                    return [4 /*yield*/, buySlave(randomId)];
                case 1:
                    _a.sent();
                    progressBar.update(60);
                    // let currentBalance = me.balance - randomUser.price;
                    // await jobSlave(randomUser.id);
                    return [4 /*yield*/, jobSlave(randomId)];
                case 2:
                    // let currentBalance = me.balance - randomUser.price;
                    // await jobSlave(randomUser.id);
                    _a.sent();
                    progressBar.update(80);
                    // if (currentBalance < randomUser.fetter_price) {
                    //   console.log("\nДенег пока нет. Не хватает на цепь!");
                    //   process.exit();
                    // }
                    try {
                        // await buyFetter(randomUser.id);
                        // await buyFetter(randomId);
                    }
                    catch (error) {
                        console.log("\nОшибка при покупке цепи. Возможно не хватает денег!");
                        // process.exit();
                    }
                    progressBar.update(100);
                    progressBar.stop();
                    // console.log(
                    //   `\nКуплен раб ${randomUser.id} за ${
                    //     randomUser.price
                    //   }р. Идет копать шахты в цепях.\nСейчас рабов ${
                    //     me.slaves_count + 1
                    //   }\nДа здравствует ЕБЕНГРАД!!!`
                    // );
                    console.log("\n\u041A\u0443\u043F\u043B\u0435\u043D \u0440\u0430\u0431 " + randomId + ". \u0418\u0434\u0435\u0442 \u043A\u043E\u043F\u0430\u0442\u044C \u0448\u0430\u0445\u0442\u044B \u0431\u0435\u0445 \u0446\u0435\u043F\u0435\u0439. \u0414\u0430 \u0437\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0435\u0442 \u0415\u0411\u0415\u041D\u0413\u0420\u0410\u0414!!!");
                    doOneCycle();
                    return [3 /*break*/, 5];
                case 3:
                    error_1 = _a.sent();
                    console.error(error_1);
                    // process.exit();
                    return [4 /*yield*/, delay(700)];
                case 4:
                    // process.exit();
                    _a.sent();
                    doOneCycle();
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function fetchMe() {
    return __awaiter(this, void 0, void 0, function () {
        var resp, me, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, getCustom(StartUrl)];
                case 1:
                    resp = _a.sent();
                    me = resp.data.me;
                    return [2 /*return*/, me];
                case 2:
                    error_2 = _a.sent();
                    console.error(error_2);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function fetchRandomUser(balance) {
    return __awaiter(this, void 0, void 0, function () {
        var result, randomId, resp, randomUser, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    randomId = getRandomId();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, getCustom("https://pixel.w84.vkforms.ru/HappySanta/slaves/1.0.0/user/?id=" +
                            randomId)];
                case 2:
                    resp = _a.sent();
                    randomUser = resp.data;
                    if (balance > randomUser.price /*&& randomUser.profit_per_min != 0*/) {
                        return [2 /*return*/, randomUser];
                    }
                    else {
                        return [2 /*return*/, fetchRandomUser(balance)];
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_3 = _a.sent();
                    console.error(error_3);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function buySlave(userId) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, postCustom(BuySlaveUrl, { slave_id: userId })];
        });
    });
}
function buyFetter(userId) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, postCustom(BuyFetterUrl, { slave_id: userId })];
        });
    });
}
function jobSlave(userId) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, postCustom(JobSlaveUrl, { slave_id: userId, name: "Шахты" })];
        });
    });
}
function postCustom(url, data) {
    return __awaiter(this, void 0, void 0, function () {
        var resp;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, delay(getRandomNumberFromDiapasons(600, 1500))];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, axios_1["default"].post(url, data, { headers: headers })];
                case 2:
                    resp = _a.sent();
                    return [2 /*return*/, resp];
            }
        });
    });
}
function getCustom(url) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, delay(getRandomNumberFromDiapasons(600, 1500))];
                case 1:
                    _a.sent();
                    return [2 /*return*/, axios_1["default"].get(url, { headers: headers })];
            }
        });
    });
}
doOneCycle();
