import crypto from 'crypto'

//createHash()
const hash = crypto.createHash('sha256')
hash.update('password1234')
//console.log(hash.digest('hex'))

//randomBytes()
crypto.randomBytes(16, (err, buff) => {
    if (err) throw err
    //console.log(buff.toString('hex'))
})

//createCipheriv & createDecipheriv
const algorithm = 'aes-256-cbc'
const key = crypto.randomBytes(32)
const iv =crypto.randomBytes(16)

const  cipher = crypto.createCipheriv(algorithm, key, iv)
let encryptedText = cipher.update('This is a secret message.', 'utf-8', 'hex')
encryptedText += cipher.final('hex')
console.log(encryptedText)

const decipher = crypto.createDecipheriv(algorithm, key, iv)
let decryptedText = decipher.update(encryptedText, 'hex', 'utf-8')
decryptedText += decipher.final('utf-8')
console.log(decryptedText)