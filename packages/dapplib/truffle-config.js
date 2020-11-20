require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give clog tackle food ship return stick exchange hen light army genuine'; 
let testAccounts = [
"0x636ba98ad9c5e262b0b3725502d76d4c1a9390955e800c4af1e38adb8eb07dd2",
"0x594d2dfe7f2e719f89bbc20b810c21bda952db1456e1fefb4490ca4f5411c033",
"0xd363e00bd6ae037f004f89d17db0dfa9c26bbdb932cc0bb46c52ebd51b5fa33d",
"0xc1ff0f8b8a4e35d81a6f99db6b8826b105282a3f249c4e742014b29dca1dd4f1",
"0x2e1b4bf28780f03b203ffd7719f2be9cddadb0c60c8134908d46ce718ffe3534",
"0x870a2e1aaaac3a4c0e0e84a00914a36909703fa959e55040a2a8d6d63885daac",
"0x0eab6eb712117ba1c91357fa9e212a89de711496f60e681432084c9fe52709a5",
"0x75a2379d99f69a871764f150f6bad7fe2e0d9ce2cf7f6465de3f5a142e20c57f",
"0xeef47f27497842db09fe572c3be949f3843869f01d53cdc9a83a077520bccbec",
"0x83aac9c8992aaa1659a94006723f73c19562a7dee558f72d3eb7f49346a0ec19"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
