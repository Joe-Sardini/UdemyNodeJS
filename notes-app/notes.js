const fs = require('fs');
const chalk = require('chalk');

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.inverse.yellow("Your notes"));
    notes.forEach(note => console.log(chalk.inverse.green(note.title)));
}

const addNote = (title,body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title);

    if (!duplicateNote){
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log("Note Added");
    } else {
        console.log("Duplicate Found");
    }
};

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find((note) => note.title === title);
    if (note) {
        console.log(chalk.inverse.green(note.title));
        console.log(note.body);
    }else{
        console.log(chalk.inverse.red("No note found"));
    }
}

const removeNote = (title) => {
    const notes = loadNotes();
    const newNotes = notes.filter((note) => {
        return (note.title !== title) ? note : console.log(chalk.green.inverse("Note Removed"))
    });
    (notes.length === newNotes.length) ? console.log(chalk.red.inverse('No note found!')) : '';
    saveNotes(newNotes);
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }catch(e){
        return [];
    }
}

module.exports = {
    addNote,
    removeNote,
    listNotes,
    readNote
}