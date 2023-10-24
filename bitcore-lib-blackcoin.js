var bitcore = require('bitcore-lib');

// add blackcoin network vars
bitcore.Networks.add({
  name: 'blackcoin',
  alias: 'blk',
  pubkeyhash: 0x19,
  privatekey: 0x99,
  scripthash: 0x55,
  bech32prefix: 'blk',
  xpubkey: 0x0488b21e,
  xprivkey: 0x0488ade4,
  networkMagic: 0x70352205,
  port: 15714,
  dnsSeeds: [
    'dnsseed.blackcoin.nl'
  ]
});

bitcore.Networks.add({
  name: 'blackcoin-testnet',
  alias: 'blk-testnet',
  pubkeyhash: 0x6f,
  privatekey: 0xef,
  scripthash: 0xc4,
  bech32prefix: 'tblk',
  xpubkey: 0x043587cf,
  xprivkey: 0x04358394,
  networkMagic: 0xcdf2c0ef,
  port: 25714,
  dnsSeeds: [
    'testseed.blackcoin.nl'
  ]
});

// set blackcoin as default network
bitcore.Networks.defaultNetwork = bitcore.Networks.get('blackcoin');

// when creating a transaction mind the two things: the fee and the transaction version
var transaction = new bitcore.Transaction()
.from(utxo)
.to('BKDvboD1CzZ5KycP1FRSXRoi7XXhHoQhS1', 15000)

console.log(transaction.toString());
