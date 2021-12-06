module.exports.renderConfirm = (req, res) => {
  res.render('confirm', {
    title: 'Подтверждение учетной записи.'
  });
};

module.exports.renderValidate = (req, res) => {
  const { id } = req.params;

  res.render('validate', {
    title: 'Безвозвратные действия.',
    keyCode: id
  });
}
