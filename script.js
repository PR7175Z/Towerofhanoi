document.addEventListener('DOMContentLoaded', ()=>{
    let a = 0;
    let root = document.getElementById('root');
    console.log(root.children)

    Array.from(root.children).forEach((element)=>{
        console.log(element);
    })


    // for(let i = 0; i<3; i++){
    //     for(let j = 0; j<3;j++){
    //         let p = document.createElement('p');
    //         p.innerHTML = 'Hello World';
    //         document.getElementById('root').appendChild(p);
    //         console.log(a)
    //     }
    //     a++;
    // }
});