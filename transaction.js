var reverse = require("buffer-reverse")
var Uint64LE = require("int64-buffer").Uint64LE
const crypto = require("cripto")
var EC = require('elliptic').ec
var ec = new EC('secp256k1')


function Transaction({version, inputs, outputs}){

  let myTx = {
    version,
    inputs,
    outputs,
    locktime: 0
  }

  function buildUnsignedTx(tx){
    let array = []
    let Version = Buffer.allocUnsafe(4)
    Version.writeUInt32LE(tx.version)
    array.push(Version)
    let nInputs = Buffer.allocUnsafe(1)
    nInputs.writeInt8(tx.inputs.length)
    array.push(nInputs)

    for(var input in tx.inputs){
      let txOutHash = Buffer.from(tx.inputs[input].previousOutputTxHash, 'hex')
      let txOutIndex = Buffer.allocUnsafe(4)
      txOutIndex.writeUInt32LE(tx.inputs[input].previousOutputTxIndex)
      let utxoScriptLength = Buffer.allocUnsafe(1)
      let utxoScript = Buffer.from(tx.inputs[input].utxoScript, 'hex')
      utxoScriptLength.writeInt8(utxoScript.length)
      let sequence = Buffer.from('FFFFFFFF', 'hex')
      array.push(reverse(txOutHash))
      array.push(txOutIndex)
      array.push(utxoScriptLength)
      array.push(utxoScript)
      array.push(sequence)
    }
    let nOutputs = Buffer.allocUnsafe(1)
    nOutputs.writeInt8(tx.outputs.length)
    array.push(nOutputs)

    for(var output in tx.outputs){
      let scriptLength = Buffer.allocUnsafe(1)
      let script = Buffer.from(tx.outputs[output].script, 'hex')
      scriptLength.writeUInt8(script.length)
      let value = new Uint64LE(tx.outputs[output].value)

      array.push(value.toBuffer())
      array.push(scriptLength)
      array.push(script)
    }
    let Locktime = Buffer.allocUnsafe(4)
    Locktime.writeUInt32LE(tx.locktime)
    array.push(Locktime)

    return array

  }

  let unsignedTx = buildUnsignedTx(myTx)
  let transaction = ''
  for(var item in unsignedTx){
    transaction += unsignedTx[item].toString('hex')
  }
  console.log(unsignedTx)

}

module.exports = Transaction