module.exports.renderConfirm = (req, res) => {
  res.render("confirm", {
    title: "Подтверждение учетной записи.",
  });
};
