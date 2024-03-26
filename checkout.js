// import * as CryptoJS from "https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js";
const PaylodeCheckout = {
  records: undefined,
  onCloseCallback: undefined,
  onSuccessCallback: undefined,
  setup: function (data) {
    // Create the payment modal iframe
    records = data;
    var origin = window.origin;
    console.log("user:", origin);

    this.onSuccessCallback = data.onSuccess;
    this.onCloseCallback = data.onClose;
    console.log(records);
    return this;
  },

  openIframe: function () {
    const closewidgetString = this.closewidget
      ? this.closewidget.toString()
      : "";
    const onCloseCallbackStr = this.onCloseCallback
      ? this.onCloseCallback.toString()
      : "";
    var onSuccessCallbackStr = this.onSuccessCallback
      ? this.onSuccessCallback.toString()
      : "";

    // Create a loader element
    var loader = document.createElement("div");
    loader.setAttribute("id", "loader");
    loader.style.display = "flex";
    loader.style.justifyContent = "center";
    loader.style.alignItems = "center";
    loader.style.width = "100%";
    loader.style.height = "100vh";
    loader.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    loader.style.position = "fixed";
    loader.style.top = "0";
    loader.style.left = "0";
    loader.style.zIndex = "9999";

    spinner = document.createElement("div");
    spinner.appendChild(document.createElement("div"));
    spinner.appendChild(document.createElement("div"));
    spinner.appendChild(document.createElement("div"));
    spinner.appendChild(document.createElement("div"));
    spinner.appendChild(document.createElement("div"));
    spinner.appendChild(document.createElement("div"));
    spinner.appendChild(document.createElement("div"));
    spinner.appendChild(document.createElement("div"));
    spinner.appendChild(document.createElement("div"));
    spinner.appendChild(document.createElement("div"));
    spinner.appendChild(document.createElement("div"));
    spinner.appendChild(document.createElement("div"));
    spinner.appendChild(document.createElement("div"));

    spinner.setAttribute("id", "seerbit-loader");
    spinner.setAttribute("class", "ldio-mz0wzgtwuz");
    spinner.style.display = "block";
    style = document.createElement("style");
    style.innerHTML = `.ldio-mz0wzgtwuz {
              width: 150px;
              height: 150px;
    position: relative;
    display: inline-block;
    overflow: hidden;
    transform: translateZ(0) scale(1);
    backface-visibility: hidden;
    transform-origin: 0 0; 
    background: transparent !important;
          }
          @keyframes ldio-mz0wzgtwuz {
              0% { opacity: 1 }
              100% { opacity: 0 }
            }
            .ldio-mz0wzgtwuz div {
              left: 94px;
              top: 48px;
              position: absolute;
              animation: ldio-mz0wzgtwuz linear 1s infinite;
              background: #4f3c40;
              width: 12px;
              height: 24px;
              border-radius: 6px / 12px;
              transform-origin: 6px 52px;
            }.ldio-mz0wzgtwuz div:nth-child(1) {
              transform: rotate(0deg);
              animation-delay: -0.9166666666666666s;
              background: #4f3c40;
            }.ldio-mz0wzgtwuz div:nth-child(2) {
              transform: rotate(30deg);
              animation-delay: -0.8333333333333334s;
              background: #4f3c40;
            }.ldio-mz0wzgtwuz div:nth-child(3) {
              transform: rotate(60deg);
              animation-delay: -0.75s;
              background: #4f3c40;
            }.ldio-mz0wzgtwuz div:nth-child(4) {
              transform: rotate(90deg);
              animation-delay: -0.6666666666666666s;
              background: #4f3c40;
            }.ldio-mz0wzgtwuz div:nth-child(5) {
              transform: rotate(120deg);
              animation-delay: -0.5833333333333334s;
              background: #4f3c40;
            }.ldio-mz0wzgtwuz div:nth-child(6) {
              transform: rotate(150deg);
              animation-delay: -0.5s;
              background: #4f3c40;
            }.ldio-mz0wzgtwuz div:nth-child(7) {
              transform: rotate(180deg);
              animation-delay: -0.4166666666666667s;
              background: #4f3c40;
            }.ldio-mz0wzgtwuz div:nth-child(8) {
              transform: rotate(210deg);
              animation-delay: -0.3333333333333333s;
              background: #4f3c40;
            }.ldio-mz0wzgtwuz div:nth-child(9) {
              transform: rotate(240deg);
              animation-delay: -0.25s;
              background: #4f3c40;
            }.ldio-mz0wzgtwuz div:nth-child(10) {
              transform: rotate(270deg);
              animation-delay: -0.16666666666666666s;
              background: #4f3c40;
            }.ldio-mz0wzgtwuz div:nth-child(11) {
              transform: rotate(300deg);
              animation-delay: -0.08333333333333333s;
              background: #4f3c40;
            }.ldio-mz0wzgtwuz div:nth-child(12) {
              transform: rotate(330deg);
              animation-delay: 0s;
              background: #4f3c40;
            }
            .closebtn {
              top:30%;
              right: 25%;
            }
  
            @media screen and (max-width: 480px) {
             .closebtn {
               top:25%;
               right: 2px;
              }
          }`;

    // Append the spinner to the loader
    loader.appendChild(spinner);

    //get user url origin
    var origin = window.origin;
    console.log("user:", origin);

    // if (!records.publicKey) {
    //   alert("Public key is empty");
    // }

    // Append the loader to the body
    document.body.appendChild(loader);
    document.head.appendChild(style);

    var iframe = document.createElement("iframe");
    iframe.allow="clipboard-read; clipboard-write"
    iframe.setAttribute("id", "iframeId");
    // iframe.src = `https://paymentgateway.paylodeservices.com/?publicKey=${encodeURIComponent(

    // iframe.src = `https://test.paymentgateway.paylodeservices.com/?publicKey=${encodeURIComponent(

    iframe.src = `http://localhost:3000/?publicKey=${encodeURIComponent(
      records.publicKey
    )}&amount=${encodeURIComponent(
      records.amount
    )}&clientReference=${encodeURIComponent(
      records.txReference
    )}&redirectUrl=${encodeURIComponent(
      records.redirectUrl
    )}&phonenumber=${encodeURIComponent(
      records.phonenumber
    )}&lastname=${encodeURIComponent(
      records.lastname
    )}&firstname=${encodeURIComponent(records.firstname)}
          &currency=${encodeURIComponent(
            records.currency
          )}&email=${encodeURIComponent(
      records.email
    )}&onCloseCallback=${encodeURIComponent(
      onCloseCallbackStr
    )}&onSuccessCallback=${encodeURIComponent(
      onSuccessCallbackStr
    )}&closewidget=${encodeURIComponent(closewidgetString)}`;
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.top = "0";
    iframe.style.zIndex = "hidden";
    iframe.style.left = "0";
    iframe.style.position = "fixed";
    // iframe.style.zIndex = "300000";
    iframe.style.border = "none";

    // Wait for the iframe to load
    iframe.addEventListener("load", function () {
      // Remove the loader once the iframe has loaded
      document.body.removeChild(loader);
    });
    // Close button
    const closeButton = document.createElement("img");
    closeButton.setAttribute("class", "closebtn");
    closeButton.innerText = "Close";
    closeButton.src =
      "https://i.ibb.co/0qZBtDk/24-DCA1-B0-A2-B8-4830-959-C-3-ED89132-E064-removebg-preview.png";
    closeButton.style.zIndex = "300000";
    closeButton.style.position = "absolute";
    closeButton.style.right = "8%";
    closeButton.style.top = "8%";
    closeButton.style.height = "30px";
    closeButton.style.width = "30px";
    closeButton.style.cursor = "pointer";

    closeButton.onclick = () => {
      this.close();
    };

    // Append the iframe to the body
    if (
      records.publicKey &&
      records.amount &&
      records.currency &&
      records.email &&
      records.publicKey.includes("PLPK")
    ) {
      document.body.appendChild(iframe);
    } else if (!records.publicKey) {
      alert("Public Key is missing");
    } else if (!records.amount) {
      alert("Amount is missing");
    } else if (!records.currency) {
      alert("Currency is missing");
    } else if (!records.publicKey.includes("PLPK")) {
      alert("Please check that you are sending the right public key");
    }
    // document.body.appendChild(iframe);
    if (iframe) {
      document.body.appendChild(closeButton);
    }

    const receiveMessage = (event) => {
      // Check the origin of the message for security purposes
      const data = event.data;
      if (data === "success") {
        this.success();
      }

      if (data === "close") {
        this.close();
      }
    };
    window.addEventListener("message", receiveMessage);

    // window.addEventListener("message", function (e) {
  },
  success() {
    if (this.onSuccessCallback !== undefined) {
      this.onSuccessCallback();
    }
  },

  close() {
    const iframe = document.querySelector("#iframeId");
    const loader = document.querySelector("#loader");
    const closebtn = document.querySelector(".closebtn");
    if (iframe && closebtn) {
      iframe.remove();
      closebtn.remove();
    } else if (loader && closebtn) {
      loader.remove();
      closebtn.remove();
    }
    if (this.onCloseCallback !== undefined) {
      this.onCloseCallback();
    }
  },
};
