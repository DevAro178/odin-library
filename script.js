const Library=[];

const protoObject={
    changeReadStatus:function(){
        this.read = !this.read;
    }
}


function Book(author,title,numberOfPages,read) {
    this.title=title;
    this.author=author;
    this.numberOfPages=numberOfPages;
    this.read=read;
    Object.setPrototypeOf(this,protoObject);
}

function addBookToLibrary(...values) {
    const newBook=new Book(...values);
    // Object.setPrototypeOf(newBook,protoObject);
    Library.push(newBook);

    console.log(Library);
}

const form=document.querySelector('form');
const main=document.querySelector('.main');
let showBooks=()=>{
    Library.forEach(e=>{
        console.log(e);
        let div=document.createElement('div');
        let h3=document.createElement('h3').textContent=e.title;
        div.append(h3);
        let ul=document.createElement('ul');
        let li1=document.createElement('li');
        let li2=document.createElement('li');
        let li3=document.createElement('li');
        li1.textContent=e.author;
        li2.textContent=e.numberOfPages;
        li3.textContent=e.read;
        ul.append(li1,li2,li3);
        div.append(ul);
        main.append(div);
    })
}

form.addEventListener('submit',e=>{
    e.preventDefault();
    addBookToLibrary(e.target.author.value,e.target.title.value,e.target.numberOfPages.value,e.target.read.checked);
    showBooks();
})