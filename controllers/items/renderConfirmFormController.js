module.exports.renderConfirm = (req, res) => {
  const { id } = req.params;

  if (id) {
    res.render("confirm", {
      title: "Подтверждение учетной записи.",
      id,
    });
  } else {
    res.render("confirm", {
      title: "Подтверждение учетной записи.",
    });
  }
};
