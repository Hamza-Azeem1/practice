const { readFile, writeFile } = require('fs').promises

const start = async () => {
    try {
        const first = await readFile('./Paractice/files/first.txt', 'utf8')
        console.log(first)
        await writeFile(
            './Paractice/files/second.txt',
            `Data is written in second file: ${first}`,
            { flag: 'a' }
        )
        console.log("---Check out files folder for MAGIC!---")

    }
    catch (err) {
        console.log(err)
    }
}

start()