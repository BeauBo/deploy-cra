module.exports = function (app) {
  app.get('/api/user', (req, res) => res.json({name: 'Bo Huang', id: '123'}))
}