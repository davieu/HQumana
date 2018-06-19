const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
  app.post('/api/stripe', requireLogin, async (req, res) => {
    const charge = await stripe.charges.create({
      amount: 1000,
      currency: 'usd',
      description: '$5 for 5 credits',
      source: req.body.id
    });

    req.user.credits += 5;
    const user = await req.user.save();

    res.send(user);
    // console.log('REQQQQQQQQQQQQQQQQQ');
    // console.log(req);
    // console.log('RESSSSSSSSSSSSS');
    // console.log(res);
    // console.log('USERRRRRRR')
    // console.log(user)
    // console.log('REQIDDDDDDDDDDD');
    // console.log(req.body.id);
    // console.log('THE CHARGEEE');
    // console.log(charge);
  });
};
