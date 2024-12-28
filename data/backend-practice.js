const xhr=new XMLHttpRequest();
xhr.open('GET','https://supersimplebackend.dev/images/apple.jpg');
xhr.send();

xhr.addEventListener('load',()=>{
    console.log(xhr.response);
})