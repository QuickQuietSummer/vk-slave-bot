import axios from "axios";
import config from "./config";
import { Bar, Presets, SingleBar } from "cli-progress";
const ListenerUrl = "https://pixel.w84.vkforms.ru/HappySanta/slaves/1.0.0/";
const StartUrl = ListenerUrl + "start";
const BuySlaveUrl = ListenerUrl + "buySlave";
const BuyFetterUrl = ListenerUrl + "buyFetter";
const JobSlaveUrl = ListenerUrl + "jobSlave";
const UserUrl = ListenerUrl + "user";
const diapasons = config.User_ID;
const auth =
  "Bearer vk_access_token_settings=friends,status&vk_app_id=7794757&vk_are_notifications_enabled=1&vk_is_app_user=1&vk_is_favorite=0&vk_language=ru&vk_platform=desktop_web&vk_ref=other&vk_ts=1616928990&vk_user_id=598176365&sign=6gQtj44bMFsEit-sNsAvlUNC6FLtpJVNq3G8fWrypTE";
const headers = {
  Authorization: auth,
  "User-Agent": config.User_Agent,
  origin: "https://prod-app7794757-c1ffb3285f12.pages-ac.vk-apps.com",
  referer:
    "https://prod-app7794757-c1ffb3285f12.pages-ac.vk-apps.com/index.html?" +
    auth,
};
const delay = async (ms: number) =>
  await new Promise((resolve) => setTimeout(resolve, ms));

function getRandomId() {
  return Math.floor(Math.random() * Math.floor(diapasons));
}
function getRandomNumberFromDiapasons(
  minimum: number,
  maximum: number
): number {
  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}
async function doOneCycle() {
  try {
    let progressBar: SingleBar = new SingleBar({}, Presets.shades_classic);
    progressBar.start(100, 0);
    // let me = await fetchMe();
    // progressBar.update(20);
    // if (me.balance < 40) {
    //   console.log("\nДенег пока нет. Не хватает даже на раба!");
    //   process.exit();
    // }
    // let randomUser = await fetchRandomUser(me.balance);
    progressBar.update(40);
    // await buySlave(randomUser.id);
    const randomId = getRandomId();
    await buySlave(randomId);
    progressBar.update(60);
    // let currentBalance = me.balance - randomUser.price;
    // await jobSlave(randomUser.id);
    await jobSlave(randomId);
    progressBar.update(80);
    // if (currentBalance < randomUser.fetter_price) {
    //   console.log("\nДенег пока нет. Не хватает на цепь!");
    //   process.exit();
    // }
    try {
      // await buyFetter(randomUser.id);
      // await buyFetter(randomId);
    } catch (error) {
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
    console.log(
      `\nКуплен раб ${randomId}. Идет копать шахты бех цепей. Да здравствует ЕБЕНГРАД!!!`
    );

    doOneCycle();
  } catch (error) {
    console.error(error);
    // process.exit();
    await delay(700);
    doOneCycle();
  }
}
async function fetchMe() {
  try {
    const resp = await getCustom(StartUrl);
    let me = resp.data.me;

    return me;
  } catch (error) {
    console.error(error);
  }
}
async function fetchRandomUser(balance: number): Promise<any> {
  let result: any;
  const randomId = getRandomId();
  try {
    const resp = await getCustom(
      "https://pixel.w84.vkforms.ru/HappySanta/slaves/1.0.0/user/?id=" +
        randomId
    );
    let randomUser = resp.data;
    if (balance > randomUser.price /*&& randomUser.profit_per_min != 0*/) {
      return randomUser;
    } else {
      return fetchRandomUser(balance);
    }
  } catch (error) {
    console.error(error);
  }
}
async function buySlave(userId: number) {
  return postCustom(BuySlaveUrl, { slave_id: userId });
}
async function buyFetter(userId: number) {
  return postCustom(BuyFetterUrl, { slave_id: userId });
}
async function jobSlave(userId: number) {
  return postCustom(JobSlaveUrl, { slave_id: userId, name: "Шахты" });
}
async function postCustom(url: string, data: object) {
  await delay(getRandomNumberFromDiapasons(600, 1500));

  const resp = await axios.post(url, data, { headers });
  return resp;
}
async function getCustom(url: string) {
  await delay(getRandomNumberFromDiapasons(600, 1500));
  return axios.get(url, { headers });
}
doOneCycle();
