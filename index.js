const { Command }= require('commander');
const program = new Command();

const fs= require('fs');

program
    .name('file text counter')
    .description('count the no of words in a file')
    .version('1.0.0')

program.command('count_words <filename>')
    .description('count the no of words in the file')
    .action((filename)=>{
        fs.readFile(filename, 'utf-8', (err,data)=>{
            if(err)
            {
                console.log(err);
            }
            else{
                let words = data.split(' ').length;
                console.log("no of words in file "+ filename + " is "+ words);

            }
        })
    
    }
        )
program.parse(process.argv);