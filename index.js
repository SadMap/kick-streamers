const {Events,Kient} = require('kient');
async function main() {
    const client = await Kient.create();
    const categories = await client._apiClient.callKickApi({
        method: 'GET',
        endpoint:"categories"
    });
    console.log(categories);
}
main();