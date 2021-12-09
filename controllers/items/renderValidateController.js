export const renderValidate = (req, res) => {
  const { id } = req.params;

  res.render("validate", {
    title: "Безвозвратные действия.",
    keyCode: id,
  });
};
