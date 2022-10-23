"use strict";
(() => {
var exports = {};
exports.id = 797;
exports.ids = [797];
exports.modules = {

/***/ 5142:
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ 491:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "fastest-validator"
const external_fastest_validator_namespaceObject = require("fastest-validator");
var external_fastest_validator_default = /*#__PURE__*/__webpack_require__.n(external_fastest_validator_namespaceObject);
;// CONCATENATED MODULE: external "nodemailer"
const external_nodemailer_namespaceObject = require("nodemailer");
var external_nodemailer_default = /*#__PURE__*/__webpack_require__.n(external_nodemailer_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/emailNode.js
(__webpack_require__(5142).config)();


const { EMAIL , PASSWORD , EMAIL_TO  } = process.env;
const v = new (external_fastest_validator_default())();
function handler(req, res) {
    if (req.method === "POST") {
        const data = req.body;
        const emailContent = `from : ${data.email}\nname : ${data.name}\nmessage : ${data.message}`;
        const schema = {
            email: {
                type: "email"
            },
            name: {
                type: "string"
            },
            message: {
                type: "string",
                min: 3
            }
        };
        const check = v.compile(schema);
        const validationResult = check(data);
        if (validationResult != true) {
            return res.status(400).json({
                data: validationResult
            });
        }
        let mailTransporter = external_nodemailer_default().createTransport({
            service: "gmail",
            auth: {
                user: EMAIL,
                pass: PASSWORD
            }
        });
        let mailDetails = {
            from: EMAIL,
            to: EMAIL_TO,
            subject: "BUSINESS",
            text: emailContent
        };
        mailTransporter.sendMail(mailDetails, (err, data)=>{
            if (err) {
                res.status(500).json({
                    data: err
                });
            }
        });
        return res.status(200).json({
            data: "email sent"
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(491));
module.exports = __webpack_exports__;

})();