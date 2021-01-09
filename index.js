const Transaction = require('./transaction')


const version = 1
const inputs = [
{
  previousOutputTxHash: '',
  previousOutputTxIndex: 0,
  utxoScript: '',
  privateKey: '',
  publicKey: ''
}
]
const outputs = [
{
  value: 4990000000,
  script: ''
}
]
Transaction({version, inputs, outputs})