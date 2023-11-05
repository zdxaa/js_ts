import * as fs from 'fs';
for (let i = 0; i < 10; i++) {
    let fileContent = fs.readFileSync('./data.txt', 'utf8');
    console.log(fileContent);
    fileContent = fileContent
    let newContent = { data: 'new content' };
    const currentTime = new Date();
    const formattedTime = currentTime.toLocaleString();
    let newContent1 = fileContent + formattedTime + ' ' + JSON.stringify(newContent) + '\r\n';
    fs.writeFileSync('./data.txt', newContent1, 'utf8');
}
