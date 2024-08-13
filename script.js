document.addEventListener('DOMContentLoaded', ()=>{
    const root = document.getElementById('root');

    const formwrap = document.querySelector('.form-wrapper');

    let size;
    const fchild = root.children[0];
    document.getElementById('sizeForm').addEventListener('submit', (e)=>{
        e.preventDefault();
        formwrap.style.display = 'none';
        root.style.display = 'block';
        size = document.querySelector('input[name="diskcount"]').value;

        for(let j = 0; j<size;j++){
            let p = document.createElement('p');
            p.setAttribute('data-value', j);
            // p.innerHTML = j;
            p.style.background = 'red';
            p.style.width = (j*4+20)+'px';
            p.style.minHeight = '20px';
            fchild.appendChild(p);
        }

        let diskval;
        const disks = document.querySelectorAll('.tower p');
        for(let i = 0; i<disks.length; i++){
            disks[i].addEventListener('click', (event)=>{
                //prevent parent click trigger on child click trigger
                event.stopPropagation();

                // remove all the data-state attribute on click
                disks.forEach((disk) => {
                    disk.removeAttribute('data-state');
                });

                diskval = disks[i].getAttribute('data-value');

                //check if current item is at the top
                if(disks[i].parentNode.children[0] === disks[i]){
                    disks[i].setAttribute('data-state', 'clicked');
                }
                // console.log(disks[i].innerHTML);
            });
        }


        const firsttower = root.children[0].innerHTML;
        const lchild = root.children[2];
        const tower = document.querySelectorAll('#root .tower');

        for(let i = 0; i<tower.length; i++){
            tower[i].addEventListener('click', () => {
                let p = document.querySelector('[data-state="clicked"]');
                let firstchild = tower[i].querySelector('p');
                if(p){
                    if(firstchild == null || p.getAttribute('data-value') < firstchild.getAttribute('data-value')){
                        tower[i].prepend(p);
                        p.removeAttribute('data-state');
                    }
                }
                
                if(firsttower ==  lchild.innerHTML){
                    document.getElementById('status-message').innerHTML = 'You Win';
                    document.getElementById('result').style.display = 'block';
                }

            });
        }
    })

    document.querySelector('.cross').addEventListener('click', () => {
        window.location.reload();
    })
    // const initialstate = fchild;

    // function wincheck(initialstate = fchild){
    //     console.log(initialstate)
    // }

    // const lchild = root.children[2];
    // lchild.addEventListener('change', ()=>{
    //     console.log('check');
    // });
    // console.log(lchild);


    // disks.addEventListener('click', ()=>{
    //     console.log(this.innerHTML);
    // })

    // console.log(root.children[0]);
    // Array.from(root.children).forEach((element)=>{
    //     console.log(element);
    // })


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