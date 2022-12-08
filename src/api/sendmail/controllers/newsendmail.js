module.exports = {
  customAction: async (ctx) => {
    //console.log(ctx.request);

    // console.log(ctx.request.body);
    //const postParams = JSON.parse(ctx.request.body);

    const postParams = ctx.request.body;
    // const postParams = JSON.parse(ctx.request.body);

    const vto = postParams.to;

    const vfrom = postParams.from;
    const vsubject = postParams.subject;

    const vhtml = postParams.html;

    try {
      const mensaje = {
        to: vto,
        from: vfrom,
        subject: vsubject,
        html: vhtml,
      };

      // console.log(mensaje);

      //  const mensaje =   {
      //        to:"renedp1975@gmail.com",
      //        from: "renedsoft@gmail.com",
      //        subject:"aaaa",
      //        body:"Eses es el bofu",
      //        html: "<h1>Esto es un mensaje 3 html</h1>",

      //    };

      await strapi.plugins["email"].services.email.send(mensaje);
      strapi.log.debug(`Email sent to ${vto}`);
      ctx.send({ message: "Email sent" });
    } catch (err) {
      strapi.log.error(`Error sending email to ${to}`, err);
      ctx.send({ error: "Error sending email " + err });
    }
  },
};
