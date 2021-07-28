const obj = {a:1, b:2, c:3,
    soma(){
        return a+b+c
    }
}
console.log(JSON.stringify(obj))

//Como deve-se ser escrito um JSON
console.log(JSON.parse('{"a":1,"b":2,"c":3}'))
//suportados
console.log(JSON.parse('{"a":1.3,"b":"String","c":true,"d":{},"e":[]}'))
