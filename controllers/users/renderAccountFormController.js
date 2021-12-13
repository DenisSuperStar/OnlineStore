import { v4 } from "public-ip";

// использовать эту функцию для того, чтобы скрыть страницу удаление товара
(async () => {
	let myIp = await v4();
  console.log(myIp);
})();

export const renderAccount = (req, res) => {
  res.render("account", {
    title: "Быстрая регистрация.",
  });
};