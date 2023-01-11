module.exports = ({ env }) => ({
    // ...
    email: {
      config: {
        provider: 'sendgrid',
        providerOptions: {
          apiKey: env('SENDGRID_API_KEY'),
        },
        settings: {
          defaultFrom: 'noreply@jesamconsulting.com',
          defaultReplyTo: 'noreply@jesamconsulting.com',                           
          testAddress:'renedp1975@gmail.com' 
        },
      },
    },
    // ...
  });
