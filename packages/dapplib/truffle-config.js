require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife off suggest name rival outside evil install hidden flame village'; 
let testAccounts = [
"0xe543e22e943e525675a22918686074fec81929f46862315417be6df317c797ea",
"0x7afe9181d2dc52dd445bbed252599b25f7396375083d5a47948a6542c5c32237",
"0x0834f2e5545c47c7198af9efc3ccc73ef6e5b4d2a69a69c1426ef80104d9a900",
"0x0ae2fbdd24c1f587d3cb5ce52750524b631e20f80f84bb68064be70f44052928",
"0xc75172c6ef64ff40381f384f051a21a9358ab7adbcbb0481963b58a70064c801",
"0x54dc92d2b9c4d0d566f78da7f81e9fcf11426405e81787ad551a4bdddef7a8db",
"0xc16e99be36ec79009cfce2be4c19573df22aabc9ee80c2df0739be564c4af395",
"0x3c63b2d25708b8e7ad3f2f013409d2573c4ec37efde3aaaa8c88612b63ca6272",
"0x693d079dce74037e2536d7f827a2bf00b4788275b1796106d5e731339ca63320",
"0xeb3f787afad9d4286f6812cfd7887502e4ecf51ce536a63f25eb1cebb80b38bc"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


