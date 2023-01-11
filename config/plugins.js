module.exports = ({ env }) => ({
    // ...
    email: {
      config: {
        provider: 'sendgrid',
        providerOptions: {
          apiKey: env('SENDGRID_API_KEY'),
        },
        settings: {
          defaultFrom: 'noreplay@jesamconsulting.com',
          defaultReplyTo: 'noreplay@jesamconsulting.com',
          testAddress:'renedp1975@gmail.com' 
        },
      },
    },
    // ...
  });
