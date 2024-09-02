"use client"
import { useEffect, useState } from 'react';
import Script from 'next/script';

type P = {
  isInit:boolean
  initDone:()=>void
}

const JotFormFeedback = () => {

  useEffect(() => {
    // Function to initialize the JotForm feedback component
    const initJotFormFeedback = () => {
      const script = document.createElement('script');
      script.src = 'https://form.jotform.com/static/feedback2.js';
      script.async = true;
      document.body.appendChild(script);
      script.onload = () => {
        new JotformFeedback({
          type: false,
          width: 700,
          height: 500,
          fontColor: '#FFFFFF',
          background: '#F59202',
          isCardForm: false,
          formId: '242454835074358',
          buttonText: 'Application',
          buttonSide: 'left',
          buttonAlign: 'center',
          base: 'https://form.jotform.com/',
        });
      };
    };
      initJotFormFeedback();
  }, []);

  return (
    <>
      <Script src="https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js" strategy="lazyOnload" />
      <Script id="jotform-embed-handler" strategy="lazyOnload">
        {`
          window.addEventListener('load', function() {
            var componentID = new JotformFeedback({
              type: false,
              width: 700,
              height: 500,
              fontColor: "#FFFFFF",
              background: "#F59202",
              isCardForm: false,
              formId: "242454835074358",
              buttonText: "Geri Bildirim",
              buttonSide: "left",
              buttonAlign: "center",
              base: "https://form.jotform.com/"
            }).componentID;
            
            window.jotformEmbedHandler("iframe[id='" + componentID + "_iframe']", "https://form.jotform.com/");
          });
        `}
      </Script>
    </>
  );
};

export default JotFormFeedback;
