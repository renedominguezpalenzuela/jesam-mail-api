module.exports = {
  customAction: async (ctx) => {


    //request-header: --header 'Content-Type: application/json'
    const postParams = ctx.request.body;

    //request-header: --header 'Content-Type: text/plain' 
    // const postParams = JSON.parse(ctx.request.body);

    strapi.log.debug(postParams);

    const vto = postParams.to;

    const vfrom = postParams.from;
    const vsubject = postParams.subject;

    //TODO: limitar el tamano de los ficheor a enviar
    const vhtml = postParams.html;
    if (postParams.attachments) {
      var attachments = postParams.attachments;
    }

    // const fichero ="e1xydGYxXGFuc2lcYW5zaWNwZzEyNTJcY29jb2FydGYyNjM2Clxjb2NvYXRleHRzY2FsaW5nMFxjb2NvYXBsYXRmb3JtMHtcZm9udHRibFxmMFxmc3dpc3NcZmNoYXJzZXQwIEhlbHZldGljYTt9CntcY29sb3J0Ymw7XHJlZDI1NVxncmVlbjI1NVxibHVlMjU1O30Ke1wqXGV4cGFuZGVkY29sb3J0Ymw7O30KXHBhcGVydzExOTAwXHBhcGVyaDE2ODQwXG1hcmdsMTQ0MFxtYXJncjE0NDBcdmlld3cxMTUyMFx2aWV3aDg0MDBcdmlld2tpbmQwClxwYXJkXHR4NTY2XHR4MTEzM1x0eDE3MDBcdHgyMjY3XHR4MjgzNFx0eDM0MDFcdHgzOTY4XHR4NDUzNVx0eDUxMDJcdHg1NjY5XHR4NjIzNlx0eDY4MDNccGFyZGlybmF0dXJhbFxwYXJ0aWdodGVuZmFjdG9yMAoKXGYwXGZzMjQgXGNmMCAwMTIzNDU2Nzg5YWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXpcClxwYXJkXHR4NTY2XHR4MTEzM1x0eDE3MDBcdHgyMjY3XHR4MjgzNFx0eDM0MDFcdHgzOTY4XHR4NDUzNVx0eDUxMDJcdHg1NjY5XHR4NjIzNlx0eDY4MDNccGFyZGlybmF0dXJhbFxwYXJ0aWdodGVuZmFjdG9yMApcY2YwIDAxMjM0NTY3ODlhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5elwKMDEyMzQ1Njc4OWFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6XAowMTIzNDU2Nzg5YWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXp9";

    try {
      let mensaje = {
        to: vto,
        from: vfrom,
        subject: vsubject,
        html: vhtml

      };

      if (postParams.attachments) {
        mensaje.attachments = attachments;
      }



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
